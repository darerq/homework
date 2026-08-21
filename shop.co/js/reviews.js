function initReviewsSwiper() {
	const swiper = new Swiper(".reviews .swiper", {
		direction: "horizontal",
		loop: true,
		slidesPerGroup: 1,

		// ВАЖНО: отступы между слайдами задаём здесь, через spaceBetween,
		// а НЕ через CSS gap на .swiper-wrapper. Swiper сам рассчитывает
		// ширину и позицию (translateX) каждого слайда через JS — если
		// в CSS параллельно висит свой gap, реальная раскладка расходится
		// с тем, что думает Swiper, и в loop-режиме это проявляется как
		// "подглядывающий" кусок соседней карточки по краю.
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

// window.load ждёт полной загрузки ВСЕХ ресурсов страницы (включая скрипты с defer/async),
// поэтому к этому моменту глобальная переменная Swiper уже гарантированно существует
if (typeof Swiper !== "undefined") {
	initReviewsSwiper();
} else {
	window.addEventListener("load", initReviewsSwiper);
}
