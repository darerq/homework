function initReviewsSwiper() {
	const swiper = new Swiper(".reviews .swiper", {
		direction: "horizontal",
		loop: true,
		slidesPerGroup: 1,

		spaceBetween: 20,

		loopAdditionalSlides: 2,
		speed: 700,
		watchSlidesProgress: true,

		navigation: {
			nextEl: ".reviews__right",
			prevEl: ".reviews__left",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	});
}

if (typeof Swiper !== "undefined") {
	initReviewsSwiper();
} else {
	window.addEventListener("load", initReviewsSwiper);
}
