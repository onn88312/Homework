const firstName = "Ivan";
const lastName = "Ivanov";
const isStudent = true;
const age = 18;
const currentYear = 2026;
const birthYear = currentYear - age;

console.log(`Меня зовут ${firstName} ${lastName} мне ${age} лет. Я ученик этого курса: ${isStudent}.`);

//123456789falsetrue

let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;

console.log(result)