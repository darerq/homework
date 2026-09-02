// Задача 1.
for (let i = 1; i <= 20; i++) {
	if (i % 4 === 0) {
		continue;
	}
	console.log(i);
}

// Задача 2.
let number = +prompt("Введите число для вычисления факториала:");
let factorial = 1;

for (let i = 1; i <= number; i++) {
	factorial *= i;
}

console.log(`Факториал числа ${number} равен ${factorial}`);

// Задача 3.
