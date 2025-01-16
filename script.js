/* JavaScript */
let galleryIndex = 0;
const galleryImages = [];
for (let i = 95; i >= 2; i--) {
  galleryImages.push(`images/${i}.jpg`);
}

function addMoreBalloons() {
    const balloonsContainer = document.querySelector('.balloons');
    const newBalloon = document.createElement('div');
    newBalloon.className = 'balloon';
    newBalloon.style.backgroundColor = getRandomColor();
    
    // Розраховуємо положення лівого краю кульки в межах видимого екрану
    const maxLeftPosition = window.innerWidth - 50; // Ширина кульки (50px)
    newBalloon.style.left = `${Math.random() * maxLeftPosition}px`;
    
    balloonsContainer.appendChild(newBalloon);
  }
  

function getRandomColor() {
  const colors = ['#ff6b6b', '#ffd93d', '#74c0fc', '#69db7c', '#ff9a9e'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function toggleGallery() {
  const gallery = document.getElementById('gallery');
  gallery.classList.remove('hidden');
  gallery.scrollIntoView({ behavior: 'smooth' });
}

function showNextMemory() {
  const memoryImage = document.getElementById('memory-image');
  galleryIndex = (galleryIndex + 1) % galleryImages.length;
  memoryImage.src = galleryImages[galleryIndex];
}

function showFireworks() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: Math.random() * 360,
      spread: 70,
      origin: { x: Math.random(), y: Math.random() },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
