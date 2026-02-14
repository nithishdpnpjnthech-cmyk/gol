// Navbar scroll effect
window.addEventListener('scroll', () => {
const navbar = document.getElementById('navbar');
if (window.scrollY > 50) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled');
}
});

// Mega menu nested submenu interaction
const megaCategories = document.querySelectorAll('.mega-category');
const megaSubmenus = document.querySelectorAll('.mega-submenu');

if (megaCategories.length > 0 && megaSubmenus.length > 0) {
megaCategories[0].classList.add('active');
megaSubmenus[0].classList.add('active');
}

megaCategories.forEach(category => {
category.addEventListener('mouseenter', () => {
const categoryId = category.getAttribute('data-category');
megaCategories.forEach(c => c.classList.remove('active'));
megaSubmenus.forEach(s => s.classList.remove('active'));
category.classList.add('active');
const targetSubmenu = document.getElementById(categoryId);
if (targetSubmenu) {
targetSubmenu.classList.add('active');
}
});
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
mobileMenuBtn.classList.toggle('active');
mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
link.addEventListener('click', () => {
mobileMenuBtn.classList.remove('active');
mobileMenu.classList.remove('active');
});
});

// Hero Slider - Initialize immediately
let currentSlide = 0;
let autoplayInterval = null;
let isPaused = false;

function initSlider() {
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const sliderTrack = document.querySelector('.slider-track');

if (!slides.length || !sliderTrack) return;

function updateSlider() {
sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
indicators.forEach((indicator, i) => {
indicator.classList.toggle('active', i === currentSlide);
});
slides.forEach((slide, i) => {
if (i === currentSlide) {
slide.classList.add('active');
} else {
slide.classList.remove('active');
}
});
}

function nextSlide() {
currentSlide = (currentSlide + 1) % slides.length;
updateSlider();
}

function startAutoplay() {
if (autoplayInterval) {
clearInterval(autoplayInterval);
}
autoplayInterval = setInterval(() => {
if (!isPaused) {
nextSlide();
}
}, 6000);
}

function stopAutoplay() {
if (autoplayInterval) {
clearInterval(autoplayInterval);
autoplayInterval = null;
}
}

window.goToSlide = function(index) {
currentSlide = index;
updateSlider();
stopAutoplay();
startAutoplay();
};

const heroSlider = document.querySelector('.hero-slider');
if (heroSlider) {
heroSlider.addEventListener('mouseenter', () => {
isPaused = true;
});

heroSlider.addEventListener('mouseleave', () => {
isPaused = false;
});
}

indicators.forEach((indicator, index) => {
indicator.addEventListener('click', () => {
window.goToSlide(index);
});
});

updateSlider();
startAutoplay();
}

if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', initSlider);
} else {
initSlider();
}

// Smooth scroll
function scrollToSection(id) {
const element = document.getElementById(id);
if (element) {
element.scrollIntoView({ behavior: 'smooth' });
}
// Close mobile menu if open
mobileMenuBtn.classList.remove('active');
mobileMenu.classList.remove('active');
}

function scrollToTop(e) {
e.preventDefault();
window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({ behavior: 'smooth' });
// Close mobile menu if open
mobileMenuBtn.classList.remove('active');
mobileMenu.classList.remove('active');
}
});
});

// Animate on scroll
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
}
});
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
observer.observe(el);
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', async (e) => {
e.preventDefault();
const formData = new FormData(e.target);
const data = Object.fromEntries(formData);
console.log('Form submitted:', data);
alert('Thank you for your message! We will get back to you soon.');
e.target.reset();
});


