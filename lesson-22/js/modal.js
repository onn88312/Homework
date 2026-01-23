const modalBackground = document.querySelector(".modal");
const modalWindow = document.querySelector(".modal__window");
const buyButton = document.querySelector(".product__buy-button");
const modalCloseButton = document.querySelector(".modal__close");

buyButton.addEventListener("click", () => {
    modalBackground.classList.add("modal--open");
    modalWindow.classList.add("modal__window--open");
});

modalCloseButton.addEventListener("click", () => {
    modalBackground.classList.remove("modal--open");
    modalWindow.classList.remove("modal__window--open");
});
