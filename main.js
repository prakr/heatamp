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

  // Theme toggle (light/dark) — pure color swap, no layout impact
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      if (next === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
      else document.documentElement.removeAttribute('data-theme');
      try { localStorage.setItem('heatamp-theme-v2', next); } catch (e) {}
    });
  }
})();
