// Задание 1.

const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

users.push({ name: "Ann", age: 19, isAdmin: false });
users.push({ name: "Jack", age: 43, isAdmin: true });

console.log(users);

// Задание 2.

function getUserAverageAge(users) {
	if (users.length === 0) {
		return 0;
	}
	let totalAge = 0;
	for (let i = 0; i < users.length; i++) {
		totalAge += users[i].age;
	}
	return totalAge / users.length;
}
console.log(getUserAverageAge(users));

// Задание 3.

function getAllAdmins(users) {
	const admins = [];
	for (let i = 0; i < users.length; i++) {
		if (users[i].isAdmin) {
			admins.push(users[i]);
		}
	}
	return admins;
}
console.log(getAllAdmins(users));

// Задание 4.

const arr = [1, 2, 3, 4, 5];

function first(arr, n) {
	if (n === 0) {
		return [];
	} else if (n === undefined) {
		return [arr[0]];
	} else {
		return arr.slice(0, n);
	}
}
