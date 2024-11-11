const cities = [
    { name: "New York", country: "USA", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Los Angeles", country: "USA", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Chicago", country: "USA", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    
    { name: "Paris", country: "France", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Lyon", country: "France", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Nice", country: "France", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    
    { name: "Tokyo", country: "Japan", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Osaka", country: "Japan", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Kyoto", country: "Japan", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    
    { name: "London", country: "UK", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Manchester", country: "UK", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Birmingham", country: "UK", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    
    { name: "Berlin", country: "Germany", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Munich", country: "Germany", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Frankfurt", country: "Germany", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    
    { name: "Madrid", country: "Spain", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Barcelona", country: "Spain", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Valencia", country: "Spain", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },

    { name: "Rome", country: "Italy", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Milan", country: "Italy", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Venice", country: "Italy", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },

    { name: "Sydney", country: "Australia", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Melbourne", country: "Australia", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Brisbane", country: "Australia", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },

    { name: "Toronto", country: "Canada", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Vancouver", country: "Canada", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Montreal", country: "Canada", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },

    { name: "Cape Town", country: "South Africa", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Johannesburg", country: "South Africa", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Durban", country: "South Africa", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },

    { name: "Moscow", country: "Russia", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Saint Petersburg", country: "Russia", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Novosibirsk", country: "Russia", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },

    { name: "Dubai", country: "UAE", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Abu Dhabi", country: "UAE", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Sharjah", country: "UAE", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },

    { name: "Istanbul", country: "Turkey", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Ankara", country: "Turkey", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Izmir", country: "Turkey", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },

    { name: "Rio de Janeiro", country: "Brazil", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "São Paulo", country: "Brazil", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Salvador", country: "Brazil", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },

    { name: "Bangkok", country: "Thailand", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Chiang Mai", country: "Thailand", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Phuket", country: "Thailand", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },

    { name: "Buenos Aires", country: "Argentina", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Cordoba", country: "Argentina", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Rosario", country: "Argentina", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },

    { name: "Seoul", country: "South Korea", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Busan", country: "South Korea", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Incheon", country: "South Korea", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },

    { name: "Cairo", country: "Egypt", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Alexandria", country: "Egypt", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Giza", country: "Egypt", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },

    { name: "Hanoi", country: "Vietnam", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Ho Chi Minh City", country: "Vietnam", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Da Nang", country: "Vietnam", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },

    { name: "Lisbon", country: "Portugal", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Porto", country: "Portugal", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
    { name: "Coimbra", country: "Portugal", image: "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg" },
];
  
const citiesPerPage = 5;
let currentPage = 1;
let filteredCities = [...cities];

function renderCities() {
  const start = (currentPage - 1) * citiesPerPage;
  const end = start + citiesPerPage;
  const citiesToRender = filteredCities.slice(start, end);

  const container = document.getElementById('card-container');
  container.innerHTML = '';

  citiesToRender.forEach(city => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${city.name}</h3>
      <img src="${city.image}" alt="${city.name}">
      <p>${city.country}</p>
    `;
    container.appendChild(card);
  });

  updatePaginationInfo();
}

function updatePaginationInfo() {
  const totalPages = Math.ceil(filteredCities.length / citiesPerPage);
  document.getElementById('page-info').textContent = `Page ${currentPage} of ${totalPages}`;

  document.getElementById('prevBtn').disabled = currentPage === 1;
  document.getElementById('nextBtn').disabled = currentPage === totalPages;
}

function goToPage(page) {
  currentPage = page;
  renderCities();
}

document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPage > 1) {
    goToPage(currentPage - 1);
  }
});

document.getElementById('nextBtn').addEventListener('click', () => {
  const totalPages = Math.ceil(filteredCities.length / citiesPerPage);
  if (currentPage < totalPages) {
    goToPage(currentPage + 1);
  }
});

document.getElementById('filter').addEventListener('input', (event) => {
  const criteria = event.target.value.toLowerCase();
  filteredCities = cities.filter(city =>
    city.name.toLowerCase().startsWith(criteria) ||
    city.country.toLowerCase().startsWith(criteria)
  );
  currentPage = 1;
  renderCities();
});

renderCities();
