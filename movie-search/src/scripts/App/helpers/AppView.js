import SwiperSlide from './SwiperSlide'
import mySwiper from './Swiper'
import { dataInRussian } from './requestInRussian'

class AppView {
  constructor(data, rating) {
    this.data = data.Search
    this.rating = rating
    this.searchInput = document.getElementById('search-input')
  }

  render() {
    mySwiper.removeAllSlides()
    mySwiper.updateSlides()
    for (let i = 0; i < this.data.length; i += 1) {
      const swiperSlide = new SwiperSlide(this.data[i], this.rating[i], i)
      swiperSlide.addSlides()
    }
  }

  renderFinishMessage() {
    dataInRussian(this.searchInput.value)
  }
}

export default AppView
