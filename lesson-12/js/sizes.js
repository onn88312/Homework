export const sizes = () => {
  const sizesList = document.querySelector('[data-sizes="list"]');
  const sizesButtons = document.querySelectorAll('[data-sizes="button"]');

  const handleSizeClick = (event) => {
    const target = event.target;

    if (!target?.classList.contains("sizes__button")) return;

    sizesButtons.forEach((button) =>
      button.classList.remove("sizes__button--active")
    );
    target.classList.add("sizes__button--active");
  };

  sizesList.addEventListener("click", handleSizeClick);
};
