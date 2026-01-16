// Задача 1

const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

users.push(
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true }
);

console.log(users);

// Звдача 2

const arrayLenght = users.length;

const getUserAverageAge = (users) => {
	let sumAge = 0;

	for (let i = 0; i < arrayLenght; i++) {
		sumAge += users[i].age;
	}

	let averageAge = sumAge / arrayLenght;

	return averageAge;
};

console.log(getUserAverageAge(users));

// Задача 3

const getAllAdmins = (users) => {
	const arrayAdmin = [];

	for (let i = 0; i < arrayLenght; i++) {
		if (users[i].isAdmin === true) {
			arrayAdmin.push(users[i]);
		}
	}

	return arrayAdmin;
};

console.log(getAllAdmins(users));

// Задача 4

const first = (arr, n) => {
	const newArray = [];

	if (n === undefined) {
		return arr[0];
	} else if (n > arrayLenght) {
		console.error("Введённое число больше длины массива");
	}
	else {
		for (let i = 0; i < n; i++) {
			newArray.push(arr[i]);
		}
	}

	return newArray;
};

console.log(first(users, 4));
