export const sizesSlider = () => {
    new Swiper('.swiper', {
        SlidesPerView: "auto",
        centeredSlides: true,
        navigation: {
            prevEL: ".sizes__slider-button--left",
            nextEL: ".sizes__slider-button--right",
        },
    });
};