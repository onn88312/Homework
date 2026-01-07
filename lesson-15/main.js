// Задача 1

const number = 6;

if (number % 2 == 0) {
	console.log("Ваше число чётное");
} else {
	console.log("Ваше число не чётное");
}

// Задача 2

const age = 34;

const discount =
	age < 18
		? "Ваша скидка 10%"
		: age > 65
		? "Ваша скидка 30%"
		: "Ваша скидка 20%";

console.log(discount);

switch (true) {
	case age < 18:
		console.log("Ваша скидка 10%");
		break;
	case age > 65:
		console.log("Ваша скидка 30%");
		break;
	default:
		console.log("Ваша скидка 20%");
}

// Задача 3

// const username = prompt("Введите имя пользователя");
// const password = prompt("Введите пароль");

// if ((username == "user" || username == "admin") && password == "123456") {
// 	console.log("Доступ разрешён");
// } else {
// 	console.log("Доступ запрещён");
// }

// Задача 4

const deliveryWeight = +prompt("Введите вес посылки");
const deliveryType = prompt("Введите тип посылки");

let baseCost;
let coefficient;

if (deliveryWeight <= 0) {
	alert("Некорректный вес посылки");
} else if (deliveryWeight < 1) {
	baseCost = 5;
} else if (deliveryWeight > 5) {
	baseCost = 15;
} else {
	baseCost = 10;
}

switch (deliveryType) {
	case "Стандарт":
		coefficient = 1;
		break;
	case "Экспресс":
		coefficient = 1.5;
		break;
	case "Премиум":
		coefficient = 2;
		break;
	default:
		alert("Неверный тип доставки");
}

const finalCost = baseCost * coefficient;

if (finalCost != 0 && !isNaN(+finalCost)) {
	alert("Итоговая стоимость покупки: " + finalCost + "$");
} else {
	alert("Что-то пошло не так");
}
