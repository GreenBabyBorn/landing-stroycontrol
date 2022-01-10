import Swiper, { Pagination, Autoplay, Keyboard, Parallax } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

Swiper.use([Pagination, Autoplay, Keyboard, Parallax]);

// Инициализация слайдеров
function initSliders() {
  // Добавление классов слайдера
  // при необходимости отключить
  //   bildSliders();

  // Перечень слайдеров
  if (document.querySelector(".swiper")) {
    new Swiper(".swiper", {
      // Подключаем модули слайдера
      // для конкретного случая
      // modules: [Navigation, Pagination, Autoplay, Parallax, EffectFlip],
      // parallax: true,
      // effect: "flip",
      // fadeEffect: {
      //   crossFade: true,
      // },
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      parallax: true,
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      speed: 1000,
      touchRatio: 1,
      simulateTouch: true,
      loop: true,
      //preloadImages: false,
      // Dotts
      pagination: {
        el: ".slider-pagination",
        clickable: true,
      },
      // Arrows
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      /*
			 breakpoints: {
				 320: {
					 slidesPerView: 1,
					 spaceBetween: 0,
					 autoHeight: true,
				 },
				 768: {
					 slidesPerView: 2,
					 spaceBetween: 20,
				 },
				 992: {
					 slidesPerView: 3,
					 spaceBetween: 20,
				 },
				 1268: {
					 slidesPerView: 4,
					 spaceBetween: 30,
				 },
			 },
			 */
      // on: {},
    });
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
