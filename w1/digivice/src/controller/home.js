import { fetchDigimonList } from '../service/digimonService.js';
import { navigate } from '../router/router.js';

let currentPage = 1;
const itemsPerPage = 12;
let originalDigimonList = [];

export async function init(page) {
  originalDigimonList = await fetchDigimonList();
  renderDigimon(originalDigimonList, page);
}

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

function renderDigimon(digimonList, page) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedDigimon = digimonList.slice(startIndex, startIndex + itemsPerPage);

  page.innerHTML = `
    <div class="container my-4">
      <h1 class="text-center display-4 mb-4">Welcome to the Digimon Digivice!</h1>
      <input type="text" id="search-bar" placeholder="Search for a Digimon..." class="form-control mb-4" />
      <div class="row">
        ${paginatedDigimon.length > 0 ? paginatedDigimon.map(digimon => `
          <div class="col-lg-2 col-md-4 col-sm-6 mb-4">
            <div class="card shadow border-0 digimon-card">
              <img src="${digimon.img}" alt="${digimon.name}" class="card-img-top" />
              <div class="card-body text-center">
                <h5 class="card-title">${digimon.name}</h5>
                <button class="btn btn-primary view-details" data-name="${digimon.name}">View Details</button>
              </div>
            </div>
          </div>
        `).join('') : '<div class="col-12 text-center">No Digimon found.</div>'}
      </div>
      <div class="d-flex justify-content-between">
        <button id="prev-button" class="btn btn-secondary" ${currentPage === 1 ? 'disabled' : ''}>Previous</button>
        <button id="next-button" class="btn btn-secondary" ${paginatedDigimon.length < itemsPerPage ? 'disabled' : ''}>Next</button>
      </div>
    </div>
  `;

  const detailButtons = page.querySelectorAll('.view-details');
  detailButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const digimonName = event.target.getAttribute('data-name');
      if (digimonName) {
        navigate(`/details/${digimonName}`);
      }
    });
  });

  document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderDigimon(digimonList, page);
    }
  });

  document.getElementById('next-button').addEventListener('click', () => {
    currentPage++;
    renderDigimon(digimonList, page);
  });

  
  const searchBar = document.getElementById('search-bar');
  searchBar.addEventListener('input', debounce((e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredDigimon = originalDigimonList.filter(digimon => 
      digimon.name.toLowerCase().includes(searchTerm)
    );

    currentPage = 1;

    renderDigimon(filteredDigimon, page);
  }, 600));
}
