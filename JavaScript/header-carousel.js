class HeaderCarousel {
  constructor() {
    this.images = document.querySelectorAll(".header__image");
    this.currentIndex = 0;
    this.intervalTime = 5000; // 20 segundos
    this.intervalId = null;

    this.init();
  }

  init() {
    // Iniciar el carrusel automático
    this.startAutoSlide();

    // Pausar carrusel al hacer hover (opcional)
    const carousel = document.querySelector(".header__carousel");
    carousel.addEventListener("mouseenter", () => this.stopAutoSlide());
    carousel.addEventListener("mouseleave", () => this.startAutoSlide());
  }

  goToSlide(index) {
    // Remover clase activa de la imagen actual
    this.images[this.currentIndex].classList.remove("header__image-active");

    // Actualizar índice
    this.currentIndex = index;

    // Agregar clase activa a la nueva imagen
    this.images[this.currentIndex].classList.add("header__image-active");
  }

  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.images.length;
    this.goToSlide(nextIndex);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.intervalTime);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

// Inicializar el carrusel cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  new HeaderCarousel();
});
