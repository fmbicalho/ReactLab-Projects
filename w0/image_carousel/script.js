const track = document.querySelector('.carousel-track');
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');
const dotsContainer = document.querySelector('.carousel-dots');

const foods = [
  { name: 'Pizza', country: 'Italy', image: '../assets/image1.jpg' },
  { name: 'BBQ', country: 'Brazil', image: '../assets/image2.jpg' },
  { name: 'Sushi', country: 'Japan', image: '../assets/image3.jpg' },
  { name: 'Burger', country: 'USA', image: '../assets/image4.jpg' },
  { name: 'Pastel de Nata', country: 'Portugal', image: '../assets/image5.jpg' },
];

foods.forEach((food, index) => {
  const slide = document.createElement('li');
  slide.classList.add('carousel-slide');

  const img = document.createElement('img');
  img.src = food.image;
  img.alt = `Image of ${food.name}`;
  img.classList.add('carousel-image');

  const caption = document.createElement('div');
  caption.classList.add('carousel-caption');
  caption.innerHTML = `<h3>${food.name}</h3><p>${food.country}</p>`;

  slide.appendChild(img);
  slide.appendChild(caption);
  track.appendChild(slide);

  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});

const dots = Array.from(dotsContainer.children);
let currentIndex = 0;

const updateDots = () => {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
};

const moveToSlide = (targetIndex) => {
  track.style.transform = `translateX(-${100 * targetIndex}%)`;
  currentIndex = targetIndex;
  updateDots();
};

nextButton.addEventListener('click', () => {
  const nextIndex = (currentIndex + 1) % foods.length;
  moveToSlide(nextIndex);
});

prevButton.addEventListener('click', () => {
  const prevIndex = (currentIndex - 1 + foods.length) % foods.length;
  moveToSlide(prevIndex);
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    moveToSlide(index);
  });
});
