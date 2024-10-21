
    /* Swipers */
    const introSwiper = new Swiper(".introSwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".intro__swiper-pagination",
        },
        breakpoints: {
			800: {
				spaceBetween: 40,
			},
		},
    });

    const servicesCardTitle = document.querySelectorAll('.services__card_title')
    const services4Swiper = new Swiper(".services4Swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".services__swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + ((servicesCardTitle[index]) ? servicesCardTitle[index].textContent : "") + "</span>";
            },
        },
        navigation: {
            nextEl: ".services__swiper-button-next",
            prevEl: ".services__swiper-button-prev",
        },
        breakpoints: {
			1140: {
                slidesPerView: 1.3,
				spaceBetween: 40,
			},
            740: {
                slidesPerView: 1.3,
				spaceBetween: 20,
			},
		},
    });

    const reviews4Swiper = new Swiper(".reviews4Swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".reviews__swiper-pagination",
        },
        breakpoints: {
			960: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		},
    });

    const doctors3Swiper = new Swiper(".doctors3Swiper", {
        slidesPerView: 1.02,
        spaceBetween: 10,
        pagination: {
            el: ".doctors__swiper-pagination",
        },
        breakpoints: {
			1100: {
				slidesPerView: 1.9,
				spaceBetween: 40,
			},
            860: {
				slidesPerView: 1.4,
				spaceBetween: 20,
			},
		},
    });

    const articles3Swiper = new Swiper(".articles3Swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".articles__swiper-pagination",
            clickable: true,
        },
        breakpoints: {
			1100: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
            760: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		},
    });

    var gallery4Swiper = new Swiper(".gallery4Swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".gallery__swiper-button-next",
            prevEl: ".gallery__swiper-button-prev",
        },
        breakpoints: {
			800: {
				spaceBetween: 40,
			},
		},
    });

    const stocks5Swiper = new Swiper(".stocks5Swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".stocks__swiper-pagination",
            clickable: true,
        },
    });
    if (window.innerWidth < 800) {
        stocks5Swiper.enable()
    } else {
        stocks5Swiper.disable()
    }


    const doctorDiplomasSwiper = new Swiper(".doctorDiplomasSwiper", {
        slidesPerView: 1.1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".doctor__diplomas_swiper-button-next",
            prevEl: ".doctor__diplomas_swiper-button-prev",
        },
        pagination: {
            el: ".doctor__diplomas_swiper-pagination",
        },
        breakpoints: {
            800: {
				slidesPerView: 2,
                spaceBetween: 20,
			},
            620: {
				slidesPerView: 1.5,
                spaceBetween: 20,
			},
		},
    });

    /* End swipers */