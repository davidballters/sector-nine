const swiper = new Swiper('.swiperCards', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView:'auto',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

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
      loop: false,
      spaceBetween: 30,
      slidesPerView: 'none',
    }
  }
});

const swiper2 = new Swiper('.swiperCards2', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

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
      spaceBetween: 20,
      slidesPerView: '3',
    },
  }
});

