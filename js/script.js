// Création dynamique de la grille 20x20
const grid = document.querySelector('.grid');
for(let i = 0; i < 400; i++) {
  let cell = document.createElement('div');
  grid.appendChild(cell);
}

// Animation JS pour effet 3D léger de la page sur mouvement souris
const container = document.querySelector('.container');
window.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  container.style.transform = `rotateY(${x * 20}deg) rotateX(${y * 20 * -1}deg) translateZ(20px)`;
});

window.addEventListener('mouseleave', () => {
  container.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
});
