const form = document.querySelector(".mailing-form-wrapper");
const input = document.querySelector(".send-input");
const button = document.querySelector(".send-button");
const wrapper = document.querySelector(".button-mailing-wrapper");
const subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

const message = document.createElement("p");
message.classList = "mailing-message";
wrapper.append(message);

function showMessage(text, isError = false) {
	message.textContent = text;
	message.style.color = isError ? "#ffffff" : "#f36fb8";

	setTimeout(() => {
		message.textContent = "";
	}, 2000);
}

function subscribe() {
	const email = input.value.trim().toLowerCase();
	if (email === "") {
		showMessage("Пожалуйста, введите адрес электронной почты.", true);
		return;
	}
	if (!input.checkValidity()) {
		showMessage(
			"Пожалуйста, введите корректный адрес электронной почты.",
			true,
		);
		return;
	}
	if (subscribers.includes(email)) {
		showMessage("Вы уже подписаны на рассылку!", true);
		return;
	}

	subscribers.push(email);
	localStorage.setItem("subscribers", JSON.stringify(subscribers));

	input.value = "";
	showMessage("Вы успешно подписались на рассылку!");
}

button.addEventListener("click", subscribe);

form.addEventListener("submit", event => {
	event.preventDefault();
	subscribe();
});
