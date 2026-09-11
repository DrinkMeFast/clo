(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.textContent = isOpen ? 'Close' : 'Menu';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
    }));
  }
  document.querySelectorAll('.signup-form').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    const note = form.querySelector('.form-note');
    const email = form.querySelector('input[type="email"]');
    if (note && email && email.value) {
      note.textContent = form.dataset.message || 'Thanks for signing up.';
      email.value = '';
    }
  }));
})();
