import Swiper from 'swiper'

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 50,
  observer: true,
  initialSlide: 0,
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
