var swiper = new Swiper(".mySwiper", {
  lazy: true,
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  mousewheel: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    /*dynamicBullets: true,*/
    type: "progressbar",
  },
});
