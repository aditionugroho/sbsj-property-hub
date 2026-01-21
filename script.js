// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const sliderWrapper = document.getElementById('sliderWrapper');
const dotsContainer = document.getElementById('sliderDots');

// Create dots for slider navigation
function createDots() {
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  }
}

// Update slider position and active dot
function updateSlider() {
  sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// Move slide by direction (-1 for previous, 1 for next)
function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;
  updateSlider();
}

// Go to specific slide
function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

// Auto slide every 5 seconds
function startAutoSlide() {
  setInterval(() => {
    moveSlide(1);
  }, 5000);
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  createDots();
  startAutoSlide();
});
