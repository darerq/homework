// Задача 1.

const person = {
	name: "daria",
	age: 18,
	occupation: "programmer",
};
for (const key in person) {
	console.log(`${key}: ${person[key]}`);
}

// Задача 2.

const myObject = {};

function isEmpty(obj) {
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			return false;
		}
	}
	return true;
}

console.log(isEmpty(myObject));

// Задача 3.

const task = {
	title: 3,
	description: "Выполнить задание",
	isCompleted: false,
};

function cloneAndModify(object, modifications) {
	return { ...object, ...modifications };
}

const updatedTask = cloneAndModify(task, { isCompleted: true });

for (const key in updatedTask) {
	console.log(`${key}: ${updatedTask[key]}`);
}

// Задача 4.

function callAllMethods(obj) {
	for (const key in obj) {
		if (typeof obj[key] === "function") {
			obj[key]();
		}
	}
}

const Object = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};

callAllMethods(Object);
