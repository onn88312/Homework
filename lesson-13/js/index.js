const closeBtn = document.getElementById('pop-up__cross');
const popup = document.getElementById('header');

closeBtn.addEventListener('click', () => {
  popup.classList.add('pop-up--close');
});

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('header__burger');
  const closeBtn = document.getElementById('burger__close');
  const burger = document.getElementById('burger');

  openBtn.addEventListener('click', () => {
    burger.classList.add('burger--open');
  });

  closeBtn.addEventListener('click', () => {
    burger.classList.remove('burger--open');
  });
});

const reviewsSlider = new Swiper('.reviews .swiper', {
  loop: true,
  spaceBetween: 20,

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

  slidesPerView: 3,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  speed: 500,
});



