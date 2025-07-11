// 多語言功能已移除

// Mobile navigation toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create mobile menu toggle button
  const header = document.querySelector('.header');
  const nav = document.querySelector('nav');
  
  if (header && nav) {
    // Create toggle button
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    
    // Insert toggle button after logo
    const logo = header.querySelector('.logo');
    if (logo) {
      logo.parentNode.insertBefore(menuToggle, logo.nextSibling);
    }
    
    // Add click event to toggle menu
    menuToggle.addEventListener('click', function() {
      const navUl = nav.querySelector('ul');
      if (navUl) {
        navUl.classList.toggle('show');
        // Change icon based on menu state
        menuToggle.innerHTML = navUl.classList.contains('show') ? '✕' : '☰';
      }
    });
    
    // Close menu when clicking on a nav link (mobile)
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          const navUl = nav.querySelector('ul');
          if (navUl) {
            navUl.classList.remove('show');
            menuToggle.innerHTML = '☰';
          }
        }
      });
    });
    
    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        const navUl = nav.querySelector('ul');
        if (navUl) {
          navUl.classList.remove('show');
          menuToggle.innerHTML = '☰';
        }
      }
    });
  }
});