import { fetchDigimonByName, fetchDigimonWikiPage } from '../service/digimonService.js';
import { navigate } from '../router/router.js';

export async function init(page, params) {
  const { name } = params;
  console.log('Digimon Name:', name);
  if (name) {
    const digimon = await fetchDigimonByName(name);
    const test = await fetchDigimonWikiPage(name);
    console.log('Fetched Digimon:', digimon);
    console.log('Fetched test Digimon:', test);

    renderDetails(digimon, page);
  } else {
    page.innerHTML = '<p>Digimon not found.</p>';
  }
}

function renderDetails(digimon, page) {
  if (!digimon) {
    page.innerHTML = '<p>Digimon not found.</p>';
    return;
  }

  page.innerHTML = `
    <div class="container my-4">
      <h1 class="text-center display-4">${digimon.name}</h1>
      <div class="card mx-auto" style="max-width: 400px;">
        <img src="${digimon.img}" alt="${digimon.name}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">Level: ${digimon.level}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Type: ${digimon.type}</h6>
          <p class="card-text">Size: ${digimon.size}</p>
          <p class="card-text">Next Forms: ${digimon.nextForms}</p>
          <button id="back-button" class="btn btn-secondary mt-3">Back to Home</button>
        </div>
      </div>
    </div>
  `;

  const backButton = document.getElementById('back-button');
  backButton.addEventListener('click', () => {
    navigate('/');
  });
}
