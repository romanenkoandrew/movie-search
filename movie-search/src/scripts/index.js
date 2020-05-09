import mySwiper from './App/helpers/Swiper'
import searchStartHandler from './App/helpers/button'
import createSlidesForStartPage from './App/mainData/createSlidesForStartPage'

document.addEventListener('DOMContentLoaded', () => {
  mySwiper.init()
  createSlidesForStartPage()
  searchStartHandler()
})
