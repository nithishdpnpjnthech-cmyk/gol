// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Mobile dropdown toggle
const navDropdowns = document.querySelectorAll('.nav-dropdown');
navDropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (window.innerWidth <= 768) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    // Allow submenu clicks
    menu.querySelectorAll('a').forEach(sublink => {
        sublink.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = '';
        });
    }
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll to top on page navigation
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .product-card, .value-card, .solution-item, .feature-item').forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
});

// Counter Animation for Stats
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('+') ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.textContent.includes('+') ? '+' : '');
        }
    }, 30);
};

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target.querySelector('.stat-number');
            const text = number.textContent;
            const value = parseInt(text.replace(/\D/g, ''));
            animateCounter(number, value);
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statObserver.observe(stat);
});

// Contact form handling (placeholder - add email integration later)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            phone: contactForm.phone.value,
            subject: contactForm.subject.value,
            message: contactForm.message.value
        };
        
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you within 24 hours.');
        contactForm.reset();
        
        // TODO: Add email service integration here (EmailJS, FormSubmit, etc.)
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Product page - show only selected section
if (window.location.pathname.includes('products.html')) {
    const hash = window.location.hash;
    if (hash) {
        // Hide all product sections
        document.querySelectorAll('.product-detail-section').forEach(section => {
            section.style.display = 'none';
        });
        // Show only the selected section
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks && navLinks.classList.contains('active')) {
        if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    }
});
