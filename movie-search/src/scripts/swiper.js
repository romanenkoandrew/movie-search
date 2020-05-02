import Swiper from 'swiper'

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 5,
  loop: true,
  keyboard: {
    enabled: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    700: {
      slidesPerView: 2
    },
    1000: {
      slidesPerView: 3
    }
  }
})

export default mySwiper
