// Задача 1.

function calculateFinalPrice(a, b, c) {
	const discount = (a * b) / 100;
	const priceAfterDiscount = a - discount;
	const tax = priceAfterDiscount * c;
	const finalPrice = priceAfterDiscount + tax;

	return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0.2));

// Задача 2.

// let username = prompt("Введите имя пользователя:");
// let password = prompt("Введите пароль:");

// function checkAccess(username, password) {
// 	if (username === "admin" && password === "123456") {
// 		return "Доступ разрешен!";
// 	} else {
// 		return "Доступ запрещен!";
// 	}
// }
// alert(checkAccess(username, password));

// Задача 3.

// const currentTime = +prompt("Введите текущее время (число от 0 до 23):");

// function getTimeOfDay(currentTime) {
// 	switch (true) {
// 		case currentTime >= 0 && currentTime <= 5:
// 			return "Ночь";
// 		case currentTime >= 6 && currentTime <= 11:
// 			return "Утро";
// 		case currentTime >= 12 && currentTime <= 17:
// 			return "День";
// 		case currentTime >= 18 && currentTime <= 23:
// 			return "Вечер";
// 		default:
// 			return "Некорректное время";
// 	}
// }
// alert("Время суток: " + getTimeOfDay(currentTime));

// Задача 4.

// let start = +prompt("Введите первое число:");
// let end = +prompt("Введите второе число:");

// function findFirstEven(start, end) {
// 	for (let i = start; i <= end; i++) {
// 		if (i % 2 === 0) {
// 			return i;
// 		}
// 	}
// }
// alert("Первое чётное число в диапазоне: " + findFirstEven(start, end));
