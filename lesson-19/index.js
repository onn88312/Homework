// Задача 1

const person = {
	name: "Ivan",
	lastName: "Ivanov",
	age: 18,
	isStudent: true,
};

console.log(person);

// Задача 2

const isEmpty = (obj) => {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			return false;
		}
	}
	return true;
};

console.log(isEmpty(person));

// Задача 3

const task = {
	title: "Изучить JavaScript",
	description: "Разобраться с объектами и spread",
	isCompleted: false,
};

function cloneAndModify(object, modifications) {
	const newObject = {
		...object,
		...modifications,
	};

	for (let key in newObject) {
		console.log(key + ":", newObject[key]);
	}

	return newObject;
}

console.log(
	cloneAndModify(task, {
		isCompleted: true,
		description: "Задача выполнена",
	})
);

// Задача 4

const myObject = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};

function callAllMethods(obj) {
	for (let key in obj) {
		if (typeof obj[key] === "function") {
			obj[key]();
		}
	}
}

callAllMethods(myObject);
