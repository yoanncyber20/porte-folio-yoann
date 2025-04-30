// Active/Désactive le mode sombre
const toggle = document.getElementById('themeToggle');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Initialisation selon le thème système
window.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
    toggle.textContent = '☀️';
  }
});

