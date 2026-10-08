function initCardsToggle(section) {
	const articlesList = section.querySelector(".new__articles");
	const toggleButton = section.querySelector(".new__button");
	const buttonText = toggleButton.querySelector("p");

	const originalCards = articlesList.querySelectorAll(".new__article");

	let addedCards = [];

	function showMore() {
		originalCards.forEach(card => {
			const clone = card.cloneNode(true);
			articlesList.append(clone);
			addedCards.push(clone);
		});
		buttonText.textContent = "Скрыть";
	}

	function hideMore() {
		addedCards.forEach(card => card.remove());
		addedCards = [];
		buttonText.textContent = "Посмотреть всё";
	}

	toggleButton.addEventListener("click", () => {
		if (addedCards.length === 0) {
			showMore();
		} else {
			hideMore();
		}
	});
}

const sections = document.querySelectorAll(".leaders, .new");
sections.forEach(initCardsToggle);
