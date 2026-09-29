// Vercel Serverless Function: Direct YouTube Search
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
        const isLong = durSec >= 1200 || duration.split(':').length >= 3;

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

// Fallback provider via public mirrors if YouTube edge blocks datacenter IP
async function searchFallbackMirrors(query, longOnly = false) {
  const mirrors = [
    'https://yewtu.be',
    'https://iv.ggtyler.dev',
    'https://inv.nadeko.net',
    'https://invidious.nerdvpn.de',
    'https://invidious.jing.rocks'
  ];

  for (const mirror of mirrors) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3500);
      const res = await fetch(`${mirror}/api/v1/search?q=${encodeURIComponent(query)}`, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      clearTimeout(timeout);

      if (res.ok) {
        const raw = await res.json();
        if (Array.isArray(raw) && raw.length > 0) {
          const videos = raw.filter(item => item.type === 'video').map(v => {
            const sec = v.lengthSeconds || 0;
            const hrs = Math.floor(sec / 3600);
            const mins = Math.floor((sec % 3600) / 60);
            const secs = sec % 60;
            const durStr = hrs > 0 
              ? `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
              : `${mins}:${secs.toString().padStart(2, '0')}`;

            return {
              id: v.videoId,
              title: v.title || '',
              channel: v.author || '',
              duration: durStr,
              durationSec: sec,
              isLong: sec >= 1200,
              views: `${(v.viewCount || 0).toLocaleString()} views`,
              published: v.publishedText || '',
              thumb: v.videoThumbnails?.slice(-1)[0]?.url || `https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`
            };
          });

          if (longOnly) {
            const longVids = videos.filter(v => v.isLong);
            return longVids.length > 0 ? longVids : videos;
          }
          return videos;
        }
      }
    } catch (e) {}
  }
  return [];
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const query = req.query || {};
  const q = (query.q || '').trim();
  const longOnly = query.longOnly === '1' || query.longOnly === 'true';

  if (!q) {
    res.status(400).json({ error: 'Query parameter q is required' });
    return;
  }

  try {
    let results = await searchYouTube(q, longOnly);
    if (!results || results.length === 0) {
      results = await searchFallbackMirrors(q, longOnly);
    }
    res.status(200).json({ query: q, count: results.length, results });
  } catch (err) {
    try {
      const results = await searchFallbackMirrors(q, longOnly);
      res.status(200).json({ query: q, count: results.length, results });
    } catch (fallbackErr) {
      res.status(500).json({ error: 'Failed to search YouTube', details: err.message });
    }
  }
};
