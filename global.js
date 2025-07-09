// Injects the global navbar and footer into the page

document.addEventListener('DOMContentLoaded', function() {
  // Get current page path
  const currentPath = window.location.pathname;
  
  // Function to determine if a link should be active
  function isActiveLink(href) {
    if (href === '/' && (currentPath === '/' || currentPath === '/index.html')) {
      return true;
    }
    return currentPath === href;
  }
  
  // Navbar HTML
  const navbarHTML = `
    <nav class="navbar navbar-expand-lg py-3">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="./img/logos/logo.svg" alt="logo" class="img-fluid">
        </a>
        <button class="navbar-toggler mobile-nav-toggle" type="button" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link ${isActiveLink('/') ? 'active' : ''}" ${isActiveLink('/') ? 'aria-current="page"' : ''} href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${isActiveLink('/pricing.html') ? 'active' : ''}" ${isActiveLink('/pricing.html') ? 'aria-current="page"' : ''} href="/pricing.html">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${isActiveLink('/contact-us.html') ? 'active' : ''}" ${isActiveLink('/contact-us.html') ? 'aria-current="page"' : ''} href="/contact-us.html">Contact us</a>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="https://www.facebook.com/profile.php?id=61574564957945" target="_blank">
                <img src="./img/Socials/facebook.svg" alt="Facebook" class="img-fluid social-icon-desktop">
                <span class="social-text-mobile">Facebook</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.instagram.com/dolze.ai/" target="_blank">
                <img src="./img/Socials/instagram.svg" alt="Instagram" class="img-fluid social-icon-desktop">
                <span class="social-text-mobile">Instagram</span>
              </a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link" href="https://www.linkedin.com/company/dolze-ai/" target="_blank">
                <img src="./img/Socials/linkedin.svg" alt="LinkedIn" class="img-fluid social-icon-desktop">
                <span class="social-text-mobile">LinkedIn</span>
              </a>
            </li>
            <a href="https://app.dolze.ai" class="btn btn-primary">Get Started</a>
          </ul>
        </div>
      </div>
    </nav>
    
    <!-- Mobile Side Navigation -->
    <div class="mobile-side-nav" id="mobileSideNav">
      <div class="mobile-side-nav-header">
        <button class="mobile-nav-close" type="button" aria-label="Close navigation">
          <span>&times;</span>
        </button>
      </div>
      <div class="mobile-side-nav-content">
        <ul class="mobile-nav-menu">
          <li class="mobile-nav-item">
            <a class="mobile-nav-link ${isActiveLink('/html') ? 'active' : ''}" href="/">Home</a>
          </li>
          <li class="mobile-nav-item">
            <a class="mobile-nav-link ${isActiveLink('./pricing.html') ? 'active' : ''}" href="/pricing.html">Pricing</a>
          </li>
          <li class="mobile-nav-item">
            <a class="mobile-nav-link ${isActiveLink('./contact-us.html') ? 'active' : ''}" href="/contact-us.html">Contact us</a>
          </li>
        </ul>
        <div class="mobile-nav-social">
          <h6>Follow Us</h6>
          <ul class="mobile-social-links">
            <li><a href="https://www.facebook.com/profile.php?id=61574564957945" target="_blank">Facebook</a></li>
            <li><a href="https://www.instagram.com/dolze.ai/" target="_blank">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/dolze-ai/" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
        <div class="mobile-nav-cta">
          <a href="https://app.dolze.ai" class="btn btn-primary w-100">Get Started</a>
        </div>
      </div>
    </div>
    <div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
  `;

  // Footer HTML
  const footerHTML = `
   <section class="footer-bg" style="padding: 56px 0;">
        <footer class="container">
            <div class="d-flex flex-wrap justify-content-between align-items-center mb-5">
               <a href="./index.html"><img src="./img/logos/logo-white.svg" alt="logo" class="img-fluid"></a>
                <ul class="nav justify-content-center">
                    <li class="nav-item"><a href="./pricing.html" class="nav-link px-2">Pricing</a></li>
                    <li class="nav-item"><a href="./faqs.html" class="nav-link px-2">FAQs</a></li>
                    <li class="nav-item"><a href="./privacy-policy.html" class="nav-link px-2">Privacy Policy</a></li>
                    <li class="nav-item"><a href="./terms-and-conditions.html" class="nav-link px-2">Terms & Conditions</a></li>
                    <li class="nav-item"><a href="./data-security.html" class="nav-link px-2">Data Security</a></li>
                </ul>
            </div>
            <hr style="border-color: var(--quinary-color) !important; opacity: 0.1;">
            <div class="d-flex flex-wrap justify-content-between align-items-center mt-4">
                <span style="color: var(--quinary-color) !important; font-size: 14px;">© 2024 Dolze. All rights
                    reserved</span>
                <ul class="nav justify-content-center"> 
                    <li class="nav-item"><a href="https://www.facebook.com/profile.php?id=61574564957945" class="nav-link px-2" target="_blank"><img src="./img/Socials/facebook-white.svg"
                                alt=""></a></li>
                    <li class="nav-item"><a href="https://www.instagram.com/dolze.ai/" class="nav-link px-2" target="_blank"><img src="./img/Socials/instagram-white.svg"
                                alt=""></a></li>
                    <li class="nav-item"><a href="https://www.linkedin.com/company/dolze-ai/" class="nav-link px-2" target="_blank"><img src="./img/Socials/linkedin-white.svg"
                                alt=""></a></li>
                    <li class="nav-item"><a href="https://x.com/dolze_ai" class="nav-link px-2" target="_blank"><img src="./img/Socials/x-white.svg"
                                alt=""></a></li>
                    <li class="nav-item"><a href="https://wa.me/918089729589" class="nav-link px-2" target="_blank"><img src="./img/Socials/whatsapp-white.svg"
                                alt=""></a></li>
                </ul>
            </div>
        </footer>
    </section>
  `;

  // Inject Navbar
  const navbarContainer = document.getElementById('global-navbar');
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
  }

  // Inject Footer
  const footerContainer = document.getElementById('global-footer');
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }

  // Mobile Side Navigation Functionality
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mobileSideNav = document.getElementById('mobileSideNav');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  const mobileNavClose = document.querySelector('.mobile-nav-close');

  function openMobileNav() {
    mobileSideNav.classList.add('active');
    mobileNavOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileSideNav.classList.remove('active');
    mobileNavOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', openMobileNav);
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileNav);
  }

  if (mobileNavOverlay) {
    mobileNavOverlay.addEventListener('click', closeMobileNav);
  }

  // Close mobile nav when clicking on a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
}); 