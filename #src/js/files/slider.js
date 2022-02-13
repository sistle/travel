
	new Swiper('.intro-bg', {
		slidesPerView: 1,

		preloadImages: false,


		lazy: {
			loadPrevNext: true,
			checkInView: true,
			loadOnTransitionStart: true,
			loadPrevNextAmount: 1,
		},
		fadeEffect: {
			crossFade: true,
		},
		virtualTranslate: true,
		autoplay: {
			delay: 10000,
			disableOnInteraction: true,
			waitForTransition: false,
		},
		speed: 1000,
		effect: "fade",

	});

	new Swiper('.intro-slider__inner ', {
		navigation: {
			nextEl: '.intro-slider__next',
			prevEl: '.intro-slider__prev',
		},

		spaceBetween: 10,
		// slidesPerView: 3,
		oserver: true,
		observeParents: true,

		loop: true,
		loopAdditionalSlides: 4,
		speed: 1000,

		breakpoints: {
			200: {
				spaceBetween: 0,
				slidesPerView: 1,
			},
			300: {
				slidesPerView: 1.3,
			},
			// 479.98: {
			// 	slidesPerView: 1.5,
			// },
			500: {
				slidesPerView: 2.5,
			},
			670: {
				slidesPerView: 3,
			},
		},
	});

	new Swiper('.roadmap-first__slider', {
		navigation: {
			nextEl: '.roadmap-first__next',
			prevEl: '.roadmap-first__prev',
		},
		slidesPerView: 3,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		loop: true,
		loopAdditionalSlides: 6,
		speed: 1000,
		spaceBetween: 10,
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			479.98: {
				slidesPerView: 1.5,
			},
			600: {
				slidesPerView: 2.1,
			},
			767.98: {
				slidesPerView: 2.5,
			},
		},
	});



	new Swiper('.roadmap-second__slider', {
		navigation: {
			nextEl: '.roadmap-second__prev',
			prevEl: '.roadmap-second__next',
		},
		slidesPerView: 3,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		loop: true,
		loopAdditionalSlides: 6,
		speed: 1000,
		spaceBetween: 10,
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			479.98: {
				slidesPerView: 1.5,
			},
			600: {
				slidesPerView: 2.3,
			},
			767.98: {
				slidesPerView: 2.5,
			},
		},
	});

	new Swiper('.roadmap-third__slider', {
		navigation: {
			nextEl: '.roadmap-third__prev',
			prevEl: '.roadmap-third__next',
		},
		slidesPerView: 3,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		loop: true,
		loopAdditionalSlides: 6,
		speed: 1000,
		spaceBetween: 10,
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			479.98: {
				slidesPerView: 1.5,
			},
			600: {
				slidesPerView: 2.3,
			},
			767.98: {
				slidesPerView: 2.5,
			},
		},
	});

	new Swiper('.roadmap-fourth__slider', {
		navigation: {
			nextEl: '.roadmap-fourth__next',
			prevEl: '.roadmap-fourth__prev',
		},
		slidesPerView: 3,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		loop: true,
		loopAdditionalSlides: 6,
		speed: 1000,
		spaceBetween: 10,
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			479.98: {
				slidesPerView: 1.5,
			},
			600: {
				slidesPerView: 2.3,
			},
			767.98: {
				slidesPerView: 2.5,
			},
		},
	});

	new Swiper('.roadmap-fifth__slider', {
		navigation: {
			nextEl: '.roadmap-fifth__prev',
			prevEl: '.roadmap-fifth__next',
		},

		slidesPerView: 3,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		loop: true,
		loopAdditionalSlides: 6,
		speed: 1000,
		spaceBetween: 10,
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			479.98: {
				slidesPerView: 1.5,
			},
			600: {
				slidesPerView: 2.3,
			},
			767.98: {
				slidesPerView: 2.5,
			},
		},

	});

	new Swiper('.roadmap-sixth__slider', {
		navigation: {
			nextEl: '.roadmap-sixth__next',
			prevEl: '.roadmap-sixth__prev',
		},

		slidesPerView: 3,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		loop: true,
		loopAdditionalSlides: 6,
		speed: 1000,
		spaceBetween: 10,
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			479.98: {
				slidesPerView: 1.5,
			},
			600: {
				slidesPerView: 2.3,
			},
			767.98: {
				slidesPerView: 2.5,
			},
		},
	});

	new Swiper('.roadmap-seventh__slider', {
		navigation: {
			nextEl: '.roadmap-seventh__next',
			prevEl: '.roadmap-seventh__prev',
		},

		slidesPerView: 3,
		observer: true,
		observeParents: true,
		watchOverflow: true,
		loop: true,
		loopAdditionalSlides: 6,
		speed: 1000,
		spaceBetween: 10,
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			479.98: {
				slidesPerView: 1.5,
			},
			600: {
				slidesPerView: 2.3,
			},
			767.98: {
				slidesPerView: 2.5,
			},
		},
	});

	new Swiper('.about-cards', {
		navigation: {
			nextEl: '.about-cards__next ',
			prevEl: '.about-cards__prev',
		},

		observer: true,
		observeParents: true,
		loop: true,
		loopAdditionalSlides: 4,
		speed: 1000,
		spaceBetween: 90,

		breakpoints: {

			280: {

				spaceBetween: 10,
				slidesPerView: 2,
			},

			767.98: {

				spaceBetween: 15,
				slidesPerView: 2,
			},
			991.98: {
				spaceBetween: 30,
				slidesPerView: 3,
			},
			1252: {
				spaceBetween: 90,
				slidesPerView: 3,
			},

		},

	});
