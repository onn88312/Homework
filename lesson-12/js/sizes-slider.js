export const sizesSlider = () => {
    new Swiper('.swiper', {
        SlidesPerView: "auto",
        centeredSlides: true,
        navigation: {
            prevEl: ".sizes__slider-button--left",
            nextEl: ".sizes__slider-button--right",
        },
    });
};