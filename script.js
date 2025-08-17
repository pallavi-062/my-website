// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Menu toggle for mobile (if needed)
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
  
  // Animate sections on scroll using Intersection Observer
  const sections = document.querySelectorAll('section');
  const options = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, options);
  
  sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
  
  // LightGallery init (for gallery lightbox effect)
  lightGallery(document.getElementById('gallery-grid'), {
    selector: '.gallery-item'
  });
  