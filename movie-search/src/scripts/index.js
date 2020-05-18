import mySwiper from './App/helpers/Swiper'
import searchStartHandler from './App/helpers/button'
import App from './App/App'

document.addEventListener('DOMContentLoaded', () => {
  mySwiper.init()
  const startPage = new App('war')
  startPage.start()
  searchStartHandler()
})
