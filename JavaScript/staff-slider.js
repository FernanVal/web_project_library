<script>
const track = document.querySelector('.staff-track');
const pages = document.querySelectorAll('.staff-page');
const prev = document.querySelector('.staff-btn.prev');
const next = document.querySelector('.staff-btn.next');
const dotsContainer = document.querySelector('.staff-dots');

let current = 0;

/* Crear dots */
pages.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('staff-dot');
  if (i === 0) dot.classList.add('active');

  dot.addEventListener('click', () => {
    current = i;
    updateSlider();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.staff-dot');

/* Actualizar slider */
function updateSlider() {
  track.style.transform = `translateX(${current * -100}%)`;

  dots.forEach(d => d.classList.remove('active'));
  dots[current].classList.add('active');
}

/* Botones */
next.addEventListener('click', () => {
  if (current < pages.length - 1) current++;
  updateSlider();
});

prev.addEventListener('click', () => {
  if (current > 0) current--;
  updateSlider();
});

/* Swipe */
let startX = 0;
let dragging = false;

track.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  dragging = true;
});

track.addEventListener('touchmove', e => {
  if (!dragging) return;
  let diff = startX - e.touches[0].clientX;

  if (diff > 50) { // izquierda
    if (current < pages.length - 1) current++;
    updateSlider();
    dragging = false;
  } else if (diff < -50) { // derecha
    if (current > 0) current--;
    updateSlider();
    dragging = false;
  }
});

track.addEventListener('touchend', () => dragging = false);
</script>
