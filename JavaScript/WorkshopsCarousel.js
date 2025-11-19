class WorkshopsCarousel {
  constructor() {
    this.track = document.querySelector(".workshops-track");
    this.cards = document.querySelectorAll(".workshop-card");
    this.indicators = document.querySelectorAll(".workshop-indicator");
    this.prevBtn = document.querySelector(".workshop-btn-prev");
    this.nextBtn = document.querySelector(".workshop-btn-next");
    this.currentIndex = 0;
    this.container = document.querySelector(".workshops-carousel");

    this.init();
  }

  init() {
    this.track.style.width = `${this.cards.length * 100}%`;

    this.cards.forEach((card) => {
      card.style.width = `${100 / this.cards.length}%`;
    });

    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());

    this.indicators.forEach((indicator) => {
      indicator.addEventListener("click", (e) => {
        const index = parseInt(e.target.dataset.index);
        this.goToSlide(index);
      });
    });

    this.updateCarousel();
  }

  updateCarousel() {
    const translateX = -this.currentIndex * (100 / this.cards.length);
    this.track.style.transform = `translateX(${translateX}%)`;

    this.indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === this.currentIndex);
    });

    this.prevBtn.style.opacity = this.currentIndex === 0 ? "0.5" : "1";
    this.prevBtn.style.cursor =
      this.currentIndex === 0 ? "not-allowed" : "pointer";

    this.nextBtn.style.opacity =
      this.currentIndex === this.cards.length - 1 ? "0.5" : "1";
    this.nextBtn.style.cursor =
      this.currentIndex === this.cards.length - 1 ? "not-allowed" : "pointer";
  }

  nextSlide() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
      this.updateCarousel();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }

  goToSlide(index) {
    if (index >= 0 && index < this.cards.length) {
      this.currentIndex = index;
      this.updateCarousel();
    }
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  new WorkshopsCarousel();
});
