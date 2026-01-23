const burgerButton = document.querySelector(".burger");
const burgerIcon = document.querySelector(".burger__icon-menu");
const crossIcon = document.querySelector(".burger__icon-menu");
const burgerMenu = document.querySelector(".header__menu");
const body = document.querySelector(".page__body");

const airMagLink = document.querySelector("#air-mag-link");
const sizesLink = document.querySelector("#sizes-link");
const characteristicsLink = document.querySelector("#characteristics-link");
const modelsLink = document.querySelector("#models-link");

burgerButton.addEventListener("click", () => {
	burgerButton.classList.toggle("burger--open");
	burgerMenu.classList.toggle("header__menu--open");
	body.classList.toggle("page__body--no-scroll");
});

document.addEventListener("click", (event) => {
	if (
		!burgerButton.contains(event.target) &&
		!burgerMenu.contains(event.target)
	) {
		burgerMenu.classList.remove("header__menu--open");
		burgerButton.classList.remove("burger--open");
		body.classList.remove("page__body--no-scroll");
	}
});

const closeBurgerByLink = (link) => {
	link.addEventListener("click", () => {
		burgerMenu.classList.remove("header__menu--open");
		burgerButton.classList.remove("burger--open");
		body.classList.remove("page__body--no-scroll");
	});
};

closeBurgerByLink(airMagLink);
closeBurgerByLink(sizesLink);
closeBurgerByLink(characteristicsLink);
closeBurgerByLink(modelsLink);
