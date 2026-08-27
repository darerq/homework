// Задача 1.

const number = 10;
const text = "Чётное число";
const text2 = "Нечётное число";

console.log(number);

if (number % 2 === 0) {
	console.log(text);
} else {
	console.log(text2);
}

// Задача 2.

const age = 10;
let discount = 0;

if (age < 18) {
	discount = 10;
} else if (age >= 18 && age <= 65) {
	discount = 20;
} else if (age > 65) {
	discount = 30;
}
console.log(`Скидка ${discount}%`);

// switch (age > 0) {
// 	case age < 18:
// 		discount = 10;
// 		break;
// 	case age >= 18 && age <= 65:
// 		discount = 20;
// 		break;
// 	case age > 65:
// 		discount = 30;
// 		break;
// }
// console.log(`Скидка ${discount}%`);

// Задача 3.

// const role = prompt("Введите имя");
// let password = prompt("Введите пароль");

// if ((role === "admin" || role === "user") && password == "123456") {
// 	alert("Доступ разрешен");
// } else {
// 	alert("Доступ запрещен");
// }

//Задача 4.

let weight = prompt("Каков вес посылки?");
const delivery = prompt("Выберите тип доставки: Стандарт, Экспресс, Премиум");

if (weight <= 0) {
	alert("Некорректный вес посылки");
}

if (delivery == "Стандарт" || delivery == "Экспресс" || delivery == "Премиум") {
} else {
	alert("Неверный тип доставки");
}

let base_price = 0;

if (weight < 1) {
	base_price = "5";
} else if (weight >= 1 && weight <= 5) {
	base_price = "10";
} else if (weight > 5) {
	base_price = "15";
}

switch (delivery) {
	case "Стандарт":
		Number = 1;
		break;
	case "Экспресс":
		Number = 1.5;
		break;
	case "Премиум":
		Number = 2;
		break;
}

let final_price = base_price * Number;
alert(`Итоговая стоимость доставки: ${final_price}$.`);
