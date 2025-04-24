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

function randomText() {
    const symbols = "!@#$%^&*()_+{}[]<>|~=;:01$<>%.AIrootETHnmapcode";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
  
  function rain() {
    const cloud = document.querySelector(".cloud");
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.textContent = randomText();
  
    const left = Math.floor(Math.random() * window.innerWidth);
    const size = Math.random() * 1.5 + 1;
    const duration = Math.random() * 2 + 1;
  
    drop.style.left = `${left}px`;
    drop.style.fontSize = `${size}em`;
    drop.style.animationDuration = `${duration}s`;
  
    cloud.appendChild(drop);
  
    setTimeout(() => {
      cloud.removeChild(drop);
    }, duration * 1000);
  }
  
  setInterval(rain, 100);
  