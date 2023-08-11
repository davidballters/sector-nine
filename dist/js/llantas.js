const swiper = new Swiper(".mySwiperCards", {  //este es otro slider en la misma pagina
  effect: "cards",
  grabCursor: true,
  loop:true,
});


// const slider1 = document.querySelector(".mySwiper2 .swiper-container");
// const slider2Thumbs = document.querySelectorAll(".mySwiper2 .swiper-slide");

// // Crea una instancia del slider principal
// const Swiper1 = new Swiper(slider1, {
//   spaceBetween: 10,
//   loop:true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// // Crea una instancia del slider de miniaturas
// const swiper2 = new Swiper(".mySwiper2", {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   loop:true,
//   freeMode: true,
//   watchSlidesProgress: true,
// });

// // Agrega el evento de clic a las miniaturas
// slider2Thumbs.forEach((thumb, index) => {
//   thumb.addEventListener("click", () => {
//     Swiper1.slideTo(index); // Cambia el slide activo del slider principal
//   });
// });

var Swiper1 = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
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




