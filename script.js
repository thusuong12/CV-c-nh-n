// JavaScript for CV animations and falling leaf effect
const cards = document.querySelectorAll('.section-card');
function revealCardsOnScroll() {
  const windowHeight = window.innerHeight;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < windowHeight - 100) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}
window.addEventListener('scroll', revealCardsOnScroll);
window.addEventListener('load', revealCardsOnScroll);

function createLeafIcon() {
  const leaf = document.createElement('div');
  leaf.textContent = '🍃';
  leaf.style.position = 'fixed';
  leaf.style.top = '-30px';
  leaf.style.left = Math.random() * window.innerWidth + 'px';
  leaf.style.fontSize = (Math.random() * 10 + 16) + 'px';
  leaf.style.opacity = 0.8;
  leaf.style.pointerEvents = 'none';
  leaf.style.animation = `fall ${5 + Math.random() * 5}s linear`;
  document.body.appendChild(leaf);
  setTimeout(() => leaf.remove(), 10000);
}

setInterval(createLeafIcon, 600);
