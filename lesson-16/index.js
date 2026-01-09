//Задача 1

for (i = 1; i <= 20; i++) {
	if (i % 4 == 0) {
		continue;
	}
	console.log(i);
}

console.log("Конец цикла");

//Задача 2

const number = +prompt("Введите число");
let factorial = 1;

for (i = 1; i <= number; i++) {
	factorial = factorial * i;
}

console.log(factorial);

console.log("Конец цикла");

//Задача 3

let row = "";

for (i = 1; i <= 4; i++) {
    for (j = 1; j <= 4; j++) {
        row += "Ч ";
        row += "Б ";
    }
    row += "\n";
    for (j = 1; j <= 4; j++) {
        row += "Б ";
        row += "Ч ";
    }
    row += "\n";   
}

console.log(row)