import * as functions from "./modules/functions.js";

// import "../scss/style.scss";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
functions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
functions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
functions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
functions.menuOpen();

/* Динамический адаптив */
import "./libs/dynamic_adapt.js";

/* Слайдер Swiper */
import "./libs/swiper.js";

import * as Scroll from "./modules/scroll.js";

// Наблюдатель за объектами c атрибутом data-watch
// Документация по работе в шаблоне: js/libs/watcher.js
// Сниппет(HTML):
// Для включения подсказок в консоли, указать  параметр true
Scroll.scrollWatcher(false);

// Плавная навигация по странице
Scroll.pageNavigation();

functions.spollers();

const menuLinks = document.querySelectorAll(".menu__item");

menuLinks.forEach((item) => {
  item.addEventListener("click", functions.menuClose);
  item.addEventListener("click", functions.bodyUnlock);
});
