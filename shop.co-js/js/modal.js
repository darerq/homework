const openButton = document.querySelector(".buy-now");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close");
const orderForm = document.querySelector(".modal__form");
const nameInput = orderForm.querySelector("[name='name']");
const phoneInput = orderForm.querySelector("[name='phone']");
const emailInput = orderForm.querySelector("[name='email']");
const agreeInput = orderForm.querySelector("[name='agree']");
const orderMessage = document.querySelector(".modal__message");

let orders = [];

try {
	orders = JSON.parse(localStorage.getItem("orders")) || [];
} catch (error) {
	orders = [];
}

const fields = [
	{
		input: nameInput,
		errorText: "Введите ваше имя полностью",
		isValid: () => /^[A-Za-zА-Яа-яЁё\s-]{2,}$/.test(nameInput.value.trim()),
	},
	{
		input: phoneInput,
		errorText: "Введите корректный номер телефона",
		isValid: () => {
			const digits = phoneInput.value.replace(/\D/g, "");
			return digits.length >= 10 && digits.length <= 15;
		},
	},
	{
		input: emailInput,
		errorText: "Введите корректный email",
		isValid: () => emailInput.checkValidity() && emailInput.value.trim() !== "",
	},
	{
		input: agreeInput,
		errorText: "Необходимо согласие на обработку данных",
		isValid: () => agreeInput.checked,
	},
];

function getErrorElement(input) {
	return input.closest(".modal__field").querySelector(".modal__error");
}

function showError(field) {
	getErrorElement(field.input).textContent = field.errorText;
	field.input.classList.add("is-invalid");
}

function clearError(field) {
	getErrorElement(field.input).textContent = "";
	field.input.classList.remove("is-invalid");
}

function validateField(field) {
	if (field.isValid()) {
		clearError(field);
		return true;
	}
	showError(field);
	return false;
}

function openModal() {
	modal.classList.add("open");
	document.body.style.overflow = "hidden";
}

function closeModal() {
	modal.classList.remove("open");
	orderMessage.textContent = "";
	fields.forEach(clearError);
	document.body.style.overflow = "";
}

function sendOrder() {
	let allValid = true;

	fields.forEach(field => {
		if (!validateField(field)) {
			allValid = false;
		}
	});

	if (!allValid) {
		return;
	}

	const order = {
		name: nameInput.value.trim(),
		phone: phoneInput.value.trim(),
		email: emailInput.value.trim().toLowerCase(),
		date: new Date().toLocaleString("ru-RU"),
	};

	orders.push(order);
	localStorage.setItem("orders", JSON.stringify(orders));

	orderForm.reset();
	orderMessage.style.color = "green";
	orderMessage.textContent = "Спасибо! Мы свяжемся с вами.";

	setTimeout(closeModal, 1500);
}

fields.forEach(field => {
	field.input.addEventListener("input", () => {
		clearError(field);
	});
});

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", event => {
	if (event.target === modal) {
		closeModal();
	}
});

document.addEventListener("keydown", event => {
	if (event.key === "Escape") {
		closeModal();
	}
});

orderForm.addEventListener("submit", event => {
	event.preventDefault();
	sendOrder();
});
