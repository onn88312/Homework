const buttonSize38 = document.querySelector("#button-size-38");
const buttonSize40 = document.querySelector("#button-size-40");
const buttonSize41 = document.querySelector("#button-size-41");
const buttonSize42 = document.querySelector("#button-size-42");
const buttonSize44 = document.querySelector("#button-size-44");
const buttonSize45 = document.querySelector("#button-size-45");

const buttonSizeArray = [
	buttonSize38,
	buttonSize40,
	buttonSize41,
	buttonSize42,
	buttonSize44,
	buttonSize45,
];

const selectSize = (button) => {
    button.addEventListener("click", () => {
	buttonSizeArray.forEach((button) => {
		if (button.classList.contains("product__sizes-button--active")) {
			button.classList.remove("product__sizes-button--active");
		}
	});
    button.classList.add("product__sizes-button--active");
});
};

selectSize(buttonSize38);
selectSize(buttonSize40);
selectSize(buttonSize41);
selectSize(buttonSize42);
selectSize(buttonSize44);
selectSize(buttonSize45);