import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import Modal from "./modal.js";
import { sizesSlider } from "./sizes-slider.js";
import { sizes } from "./sizes.js";

try {
  const headerFixed = new HeaderFixed({
    HEADER: "header",
    HEADER_FIXED: "header--fixed",
  });

  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "header__menu",
      HEADER_MENU_OPEN: "header__menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      MENU_LINK: "menu__link",
      BREAKPOINT: 768,
    },
    headerFixed
  );

  new Modal({
    PAGE_BODY: "body",
    PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
  });

  sizesSlider();
  sizes();
} catch (error) {
  console.error(error);
}
