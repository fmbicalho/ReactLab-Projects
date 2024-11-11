const API_URL = 'https://digimon-api.vercel.app/api/digimon';

export async function fetchDigimonList() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Digimon list:', error);
    return [];
  }
}

export async function fetchDigimonWikiPage(name) {
  const wikiUrl = `http://localhost:3000/fetch-wiki/${name}`;
  try {
    const response = await fetch(wikiUrl, {
      method: 'GET',
      mode: 'cors',
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch Wiki page: ${response.statusText}`);
    }
    
    return await response.text();
  } catch (error) {
    console.error('Error fetching Wiki page:', error);
    return null;
  }
}

export async function fetchDigimonByName(name) {
  try {
    const response = await fetch(`${API_URL}?name=${name}`);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error fetching Digimon by name:', error);
    return null;
  }
}

export function extractDigimonInfo(digimon) {
  if (!digimon) return null;

  const digimonInfo = {
    name: digimon.name || 'N/A',
    level: digimon.level || 'N/A',
    type: digimon.type || 'N/A',
    size: digimon.size || 'N/A',
    nextForms: digimon.nextForms ? digimon.nextForms.join(', ') : 'N/A',
  };

  return digimonInfo;
}
