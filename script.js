// Smooth scroll for navigation links
function scrollToSection(event, targetId) {
  if (event) event.preventDefault();
  const element = document.querySelector(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Scroll to contact form
function scrollToContact() {
  scrollToSection(null, '#contact');
}

// Form submission handler
function handleSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  
  // Get form values
  const name = form.querySelector('input[type="text"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  
  // Show success message
  alert(`Rahmat, ${name}! Tez orada siz bilan bog'lanamiz.\nTelefon: ${phone}`);
  
  // Reset form
  form.reset();
}

// Add smooth scroll behavior for all navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for navbar links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      scrollToSection(null, targetId);
    });
  });

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe feature cards, pricing cards, and review cards
  const cards = document.querySelectorAll('.feature-card, .pricing-card, .review-card, .faq-item');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Add button click effects
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      // Add ripple effect
      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(255, 255, 255, 0.6)';
      ripple.style.width = '20px';
      ripple.style.height = '20px';
      ripple.style.animation = 'ripple 0.6s ease-out';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
});

// Analytics tracking (optional)
function trackEvent(eventName, eventData) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventData);
  }
  console.log('Event tracked:', eventName, eventData);
}

// Track demo request
function trackDemoRequest() {
  trackEvent('demo_request', {
    'event_label': 'Demo Button Clicked'
  });
}

// Track pricing view
function trackPricingView() {
  trackEvent('pricing_view', {
    'event_label': 'User Viewed Pricing'
  });
}

// Keyboard accessibility
document.addEventListener('keydown', function(e) {
  // Press 'd' to scroll to demo
  if (e.key === 'd' || e.key === 'D') {
    scrollToContact();
  }
  
  // Press 'p' to scroll to pricing
  if (e.key === 'p' || e.key === 'P') {
    scrollToSection(null, '#pricing');
  }
  
  // Press 'f' to scroll to features
  if (e.key === 'f' || e.key === 'F') {
    scrollToSection(null, '#features');
  }
});

// Add ripple animation style
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    from {
      opacity: 1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(10);
    }
  }
`;
document.head.appendChild(style);

// Phone number validation
function validatePhone(phone) {
  const phoneRegex = /^\+?[0-9]{3}[-.\s]?[0-9]{3}[-.\s]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
}

// Email validation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Log page view
window.addEventListener('load', function() {
  console.log('Billz POS - Do\'konlarni avtomatlashtirish veb-sayti yuklandi');
  trackEvent('page_view', {
    'page_title': document.title
  });
});
