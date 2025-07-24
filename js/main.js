$(document).ready(function () {
  if ($(".burger").length > 0) {
    let burger = $(".burger");
    let body = $("body");
    let overlay = $(".overlay");
    let menu = $(".menu");
    let close = $(".menu__close");

    close.on("click", function () {
      handleClick();
    });

    burger.on("click", function () {
      handleClick();
    });

    function handleClick() {
      if (burger.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.addClass("opened").stop().slideDown();
        overlay.addClass("visible");
        body.addClass("hidden");
        overlay.on("click", function () {
          closeMenu();
        });
      }
    }

    function closeMenu() {
      burger.removeClass("opened");
      menu.removeClass("opened").stop().slideUp();
      overlay.removeClass("visible");
      body.removeClass("hidden");
      overlay.off("click");
    }
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".grettings-slider").length > 0) {
    const swiper = new Swiper(".grettings-slider", {
      slidesPerView: 2,
      spaceBetween: 329,
      navigation: {
        prevEl: ".grettings-slider .swiperBtnPrev",
        nextEl: ".grettings-slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1550: {
          slidesPerView: 2,
          spaceBetween: 150,
        },
        1800: {
          slidesPerView: 2,
          spaceBetween: 160,
        },
      },
    });
  }

  if ($(".our-villages-slider").length > 0) {
    const swiper = new Swiper(".our-villages-slider", {
      slidesPerView: 2,
      spaceBetween: 22,
      navigation: {
        prevEl: ".our-villages-main .swiperBtnPrev",
        nextEl: ".our-villages-main .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 22,
        },
      },
    });
  }

  if ($(".sliderHouses").length > 0) {
    const swiper = new Swiper(".sliderHouses", {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        prevEl: ".primer-houses .swiperBtnPrev",
        nextEl: ".primer-houses .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.15,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".completed-villages__slider").length > 0) {
    const swiper = new Swiper(".completed-villages__slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        prevEl: ".completed-villages__head .swiperBtnPrev",
        nextEl: ".completed-villages__head .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($("[data-btn-disabled]").length > 0) {
    $("[data-btn-disabled]").on("click", function () {
      const formBlock = $(this).parents("form");
      const btn = formBlock.find("[data-for-disabled]");
      const isDisabled = btn.prop("disabled");

      btn.prop("disabled", !isDisabled);
    });
  }

  if ($(".technologies__circle").length > 0) {
    $(".technologies__circle").on("mouseover", function () {
      $(".technologies__info").removeClass("opened");
      $(this).next(".technologies__info").addClass("opened");
    });

    $(document).mouseup(function (e) {
      if (
        !$(".technologies__item").is(e.target) &&
        $(".technologies__item").has(e.target).length === 0
      ) {
        $(".technologies__info").removeClass("opened");
      }
    });
  }

  if ($(".technologies__slider").length > 0) {
    const swiper = new Swiper(".technologies__slider", {
      slidesPerView: 2,
      spaceBetween: 19,
      navigation: {
        prevEl: ".technologies__slider .swiperBtnPrev",
        nextEl: ".technologies__slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        640: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1.65,
          spaceBetween: 19,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 19,
        },
      },
    });
  }

  if ($(".partners-slider").length > 0) {
    const swiper = new Swiper(".partners-slider", {
      slidesPerView: 5,
      spaceBetween: 30,
      navigation: {
        prevEl: ".partners-section .swiperBtnPrev",
        nextEl: ".partners-section .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1550: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });
  }

  if ($(".reviews-slider").length > 0) {
    const sliders = document.querySelectorAll(".reviews-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).find(".swiperBtnNext")[0];
          navPrev = $(slider).find(".swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 19,
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 19,
              },
            },
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".reviews-slider-text").length > 0) {
    const sliders = document.querySelectorAll(".reviews-slider-text");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).find(".swiperBtnNext")[0];
          navPrev = $(slider).find(".swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 24,
            breakpoints: {
              0: {
                slidesPerView: 1.15,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1550: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            },
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($(".faq-list").length > 0) {
    $(".faq-section__quest").on("click", function () {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).parents(".faq-item").removeClass("opened");
        $(this).next(".faq-section__answer").stop().slideUp();
      } else {
        $(".faq-item").removeClass("opened");
        $(".faq-section__quest").removeClass("active");
        $(".faq-section__answer").stop().slideUp();

        $(this).parents(".faq-item").addClass("opened");
        $(this).addClass("active");
        $(this).next(".faq-section__answer").stop().slideDown();
      }
    });
  }

  if ($(".tabs").length > 0) {
    $(".tabs").tabslet({
      mouseevent: "click",
      attribute: "href",
      animation: true,
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".sertificate-slider").length > 0) {
    const swiper = new Swiper(".sertificate-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        prevEl: ".sertificate .swiperBtnPrev",
        nextEl: ".sertificate .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }

  if ($(".tabs-linkLink").length > 0) {
    $(".tabs-linkLink a").on("click", function (event) {
      event.preventDefault();
      let parents = $(this).parents(".tabsSection");
      let href = $(this).attr("href");

      parents.find(".tabs-linkLink a").removeClass("active");
      $(this).toggleClass("active");
      parents.find(".tabsSlider").removeClass("opened");
      $(href).addClass("opened");
    });
  }

  // if ($("[data-aos]").length > 0) {
  //   if ($(window).width() < 1280) {
  //     AOS.init({
  //       disable: true,
  //     });
  //   } else {
  //     AOS.init({
  //       once: true,
  //     });
  //   }
  // }
});
