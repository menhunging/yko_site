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
          spaceBetween: 329,
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

  // base

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

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".subcategories-slider").length > 0) {
    const sliders = document.querySelectorAll(".subcategories-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider)
            .parents(".subcategories")
            .find(".btnSwiperNext")[0];
          navPrev = $(slider)
            .parents(".subcategories")
            .find(".btnSwiperPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 24,
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".sort-block").length > 0) {
    $(".sort-block").on("click", function () {
      if ($(this).hasClass("opened")) {
        $(this)
          .removeClass("opened")
          .find(".sort-block__list")
          .stop()
          .slideUp();
      } else {
        let self = $(this);

        self.addClass("opened").find(".sort-block__list").stop().slideDown();

        $(document).mouseup(function (e) {
          if (!self.is(e.target) && self.has(e.target).length === 0) {
            self
              .removeClass("opened")
              .find(".sort-block__list")
              .stop()
              .slideUp();
          }
        });
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

  if ($("[data-aos]").length > 0) {
    if ($(window).width() < 1280) {
      AOS.init({
        disable: true,
      });
    } else {
      AOS.init({
        once: true,
      });
    }
  }
  // /base
});
