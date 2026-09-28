const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Helper: Parse Duration string into seconds (e.g. "1:05:30" or "45:10")
function parseDurationToSeconds(durationStr) {
  if (!durationStr || typeof durationStr !== 'string') return 0;
  const parts = durationStr.trim().split(':').map(p => parseInt(p, 10));
  if (parts.some(isNaN)) return 0;
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 1) {
    return parts[0];
  }
  return 0;
}

// YouTube Search Scraper (No API key needed, direct YouTube edge results)
async function searchYouTube(query, longOnly = false) {
  const fetchUrl = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query);
  const res = await fetch(fetchUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9,hi;q=0.8'
    }
  });

  const html = await res.text();
  const match = html.match(/var ytInitialData = ({.*?});<\/script>/s) || html.match(/ytInitialData\s*=\s*({.+?});/);
  if (!match) return [];

  let data;
  try {
    data = JSON.parse(match[1]);
  } catch (err) {
    return [];
  }

  const videos = [];
  const seenIds = new Set();

  function searchNodes(node) {
    if (!node || typeof node !== 'object') return;
    if (node.videoRenderer && node.videoRenderer.videoId) {
      const v = node.videoRenderer;
      const vidId = v.videoId;
      if (!seenIds.has(vidId)) {
        seenIds.add(vidId);
        const duration = v.lengthText?.simpleText || '';
        const durSec = parseDurationToSeconds(duration);
        const isLong = durSec >= 1200 || duration.split(':').length >= 3; // >= 20 mins or >= 1 hour

        // High resolution thumbnail
        const thumbs = v.thumbnail?.thumbnails || [];
        const thumbUrl = thumbs.length > 0 ? thumbs[thumbs.length - 1].url : `https://i.ytimg.com/vi/${vidId}/hqdefault.jpg`;

        videos.push({
          id: vidId,
          title: v.title?.runs?.map(r => r.text).join('') || v.title?.simpleText || '',
          channel: v.ownerText?.runs?.map(r => r.text).join('') || '',
          duration: duration || 'Video',
          durationSec: durSec,
          isLong: isLong,
          views: v.viewCountText?.simpleText || '',
          published: v.publishedTimeText?.simpleText || '',
          thumb: thumbUrl
        });
      }
      return;
    }

    for (const key of Object.keys(node)) {
      searchNodes(node[key]);
    }
  }

  searchNodes(data);

  if (longOnly) {
    const longVideos = videos.filter(v => v.isLong);
    return longVideos.length > 0 ? longVideos : videos;
  }

  return videos;
}

// Google Search Auto-Suggest
async function getSuggestions(query) {
  try {
    const res = await fetch('https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' + encodeURIComponent(query));
    if (res.ok) {
      const data = await res.json();
      return Array.isArray(data[1]) ? data[1].slice(0, 8) : [];
    }
  } catch (e) {}
  return [];
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API Route: Direct YouTube Search
  if (pathname === '/api/search') {
    const q = (parsedUrl.query.q || '').trim();
    const longOnly = parsedUrl.query.longOnly === '1' || parsedUrl.query.longOnly === 'true';

    if (!q) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Query parameter q is required' }));
      return;
    }

    try {
      const results = await searchYouTube(q, longOnly);
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ query: q, count: results.length, results }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to search YouTube', details: err.message }));
    }
    return;
  }

  // API Route: Auto-Complete Suggestions
  if (pathname === '/api/suggest') {
    const q = (parsedUrl.query.q || '').trim();
    if (!q) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify([]));
      return;
    }

    try {
      const suggestions = await getSuggestions(q);
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(suggestions));
    } catch (err) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify([]));
    }
    return;
  }

  // Static File Serving
  let reqPath = (pathname === '/' || !pathname) ? 'index.html' : pathname.replace(/^\/+/, '');
  
  // Safe path search across Vercel serverless Lambda and local environments
  const candidatePaths = [
    path.join(__dirname, reqPath),
    path.join(process.cwd(), reqPath),
    path.join(__dirname, 'public', reqPath),
    path.join(process.cwd(), 'public', reqPath),
    path.resolve(reqPath)
  ];

  let resolvedPath = null;
  for (const cp of candidatePaths) {
    try {
      if (fs.existsSync(cp) && fs.statSync(cp).isFile()) {
        resolvedPath = cp;
        break;
      }
    } catch (e) {}
  }

  if (!resolvedPath) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 Not Found — PureStream</h1>');
    return;
  }

  const ext = path.extname(resolvedPath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(resolvedPath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`Server Error: ${err.code}`);
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log('========================================================');
  console.log(`🎓 PureStream Student & Music Edition is LIVE!`);
  console.log(`🌐 Website URL: http://localhost:${PORT}`);
  console.log(`🔍 Direct YouTube Search API: http://localhost:${PORT}/api/search?q=...`);
  console.log(`🛡️ 100% Ad-Free • Long Videos • Study Marathons • Non-Stop Songs`);
  console.log('========================================================');
});
