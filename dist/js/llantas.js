const swiper = new Swiper(".mySwiperCards", {  //este es otro slider en la misma pagina
  effect: "cards",
  grabCursor: true,
  loop:true,

  breakpoints: {
    320: {
      spaceBetween: 25
    },
    // when window width is >= 480px
    480: {
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      spaceBetween: 40
    },
    1024: {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 'none',
      effect: "none",
    },
  }
});

var Swiper1 = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  loop:true,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: Swiper1,
  },
});




