document.addEventListener("DOMContentLoaded", () => {
	const banner = document.querySelector(".banner");
	const header = document.querySelector(".header");
	const bannerClose = document.querySelector("[data-banner-close]"); // подставьте свой селектор крестика

	if (!banner || !header) return;

	const setHeaderOffset = () => {
		const bannerHeight = banner.offsetHeight;
		header.style.setProperty("--banner-height", `${bannerHeight}px`);
	};

	setHeaderOffset();
	window.addEventListener("resize", setHeaderOffset);

	if (bannerClose) {
		bannerClose.addEventListener("click", () => {
			banner.style.display = "none";
			header.style.setProperty("--banner-height", "0px"); // хедер сразу встаёт на 0
		});
	}
});
