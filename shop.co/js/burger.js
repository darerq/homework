document.addEventListener("DOMContentLoaded", () => {
	const burgerBtn = document.querySelector("[data-burger-btn]");
	const burgerClose = document.querySelector("[data-burger-close]"); // добавили
	const menu = document.querySelector("[data-burger-menu]");
	const overlay = document.querySelector("[data-burger-overlay]");

	if (!burgerBtn || !menu || !overlay) return;

	const openMenu = () => {
		menu.classList.add("header__menu--open");
		overlay.classList.add("burger__overlay--visible");
		burgerBtn.setAttribute("aria-expanded", "true");
		document.body.classList.add("no-scroll");
	};

	const closeMenu = () => {
		menu.classList.remove("header__menu--open");
		overlay.classList.remove("burger__overlay--visible");
		burgerBtn.setAttribute("aria-expanded", "false");
		document.body.classList.remove("no-scroll");
	};

	const toggleMenu = () => {
		const isOpen = menu.classList.contains("header__menu--open");
		isOpen ? closeMenu() : openMenu();
	};

	burgerBtn.addEventListener("click", toggleMenu);
	overlay.addEventListener("click", closeMenu);

	if (burgerClose) {
		burgerClose.addEventListener("click", closeMenu); // добавили
	}

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") closeMenu();
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 768) closeMenu();
	});
});
