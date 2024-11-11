import express from 'express';
import fetch from 'node-fetch';

const API_URL = 'https://digimon-api.vercel.app/api/digimon';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/fetch-wiki/:name', async (req, res) => {
  const { name } = req.params;
  const wikiUrl = `https://digimon.fandom.com/wiki/${name}`;

  try {
    const response = await fetch(wikiUrl);
    if (!response.ok) {
      return res.status(response.status).send('Error fetching Wiki page');
    }
    const text = await response.text();
    res.send(text);
  } catch (error) {
    console.error('Error fetching Wiki page:', error);
    res.status(500).send('Error fetching Wiki page');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
