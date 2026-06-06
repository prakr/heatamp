// HeatAmp — minimal interactive layer
// Mobile nav toggle + scroll-aware header

(function () {
  const header = document.getElementById('site-header');
  const toggle = document.getElementById('nav-toggle');
  const nav    = document.getElementById('primary-nav');

  // Mobile nav toggle
  if (toggle && nav && header) {
    toggle.addEventListener('click', () => {
      const open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Close nav after clicking a link (mobile)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        header.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll-aware header border
  let lastScrolled = false;
  function updateHeader() {
    const scrolled = window.scrollY > 8;
    if (scrolled !== lastScrolled) {
      header.classList.toggle('is-scrolled', scrolled);
      lastScrolled = scrolled;
    }
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
})();
