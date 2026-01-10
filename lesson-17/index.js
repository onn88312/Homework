// Задача 1

function calculateFinalPrice(basePrice, discount, tax) {
	let finalPrice = basePrice * (1 - discount) * tax;
	return finalPrice;
}

console.log(calculateFinalPrice(150, 0.2, 1.15));

// Задача 2

const checkAccess = (userName, password) => {
	if ((userName === "admin") & (password === "123456")) {
		return "Доступ разрешён";
	} else {
		return "Доступ запрещён";
	}
};

console.log(checkAccess("admin", "123456"));

// Задача 3

const getTimeOfDay = (time) => {
	if (time <= 5) {
		return "Ночь";
	} else if (time >= 6 && time <= 11) {
		return "Утро";
	} else if (time >= 12 && time <= 17) {
		return "День";
	} else if (time >= 17 && time <= 23) {
		return "Вечер";
	} else {
		return "Время указано некорректно";
	}
};

console.log(getTimeOfDay(15));

// Задача 4

const findFirstEven = (start, end) => {
	if (start % 2 === 0) {
		return start;
	} else if (start % 2 != 0 && start > end) {
        return start - 1;
	} else if (start % 2 != 0 && start < end) {
		return start + 1;
	} else {
		return "Чётных чисел нет";
	}
};

console.log(findFirstEven(1, 4));
