// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// BMI Calculator
const bmiForm = document.getElementById('bmi-form');
const bmiResult = document.getElementById('bmi-result');

bmiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    if (height <= 0 || weight <= 0) {
        bmiResult.innerHTML = '<span style="color: #ff6b6b;">Please enter valid height and weight values.</span>';
        return;
    }
    
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    
    let category = '';
    let color = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
        color = '#3498db';
    } else if (bmi < 25) {
        category = 'Normal weight';
        color = '#2ecc71';
    } else if (bmi < 30) {
        category = 'Overweight';
        color = '#f39c12';
    } else {
        category = 'Obese';
        color = '#e74c3c';
    }
    
    bmiResult.innerHTML = `<span style="color: ${color}; font-size: 1.5rem;">Your BMI: <strong>${bmi.toFixed(2)}</strong> (${category})</span>`;
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validate inputs
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Send message (simulated)
    console.log('Form submitted:', { name, email, message });
    alert(`Thank you, ${name}! We received your message and will get back to you shortly.`);
    
    // Reset form
    contactForm.reset();
});

// Navbar Sticky Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Scroll to top button
window.addEventListener('scroll', () => {
    // You can add a scroll-to-top button here if needed
});

// Add animation to elements on scroll (optional feature)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.querySelectorAll('.class-card, .trainer-card, .pricing-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Form input focus effects
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.boxShadow = '0 0 10px rgba(102, 126, 234, 0.5)';
    });
    
    input.addEventListener('blur', function() {
        this.style.boxShadow = 'none';
    });
});
