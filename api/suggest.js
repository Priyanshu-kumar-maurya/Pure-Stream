// Vercel Serverless Function: Auto-complete suggestions
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

  if (!q) {
    res.status(200).json([]);
    return;
  }

  try {
    const response = await fetch('https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=' + encodeURIComponent(q));
    if (response.ok) {
      const data = await response.json();
      res.status(200).json(Array.isArray(data[1]) ? data[1].slice(0, 8) : []);
      return;
    }
  } catch (e) {}

  res.status(200).json([]);
};
