import SwiperSlide from './SwiperSlide'
import mySwiper from './Swiper'
import { dataInRussian } from './requestInRussian'

const searchInput = document.getElementById('search-input')
class AppView {
  constructor(data, rating) {
    this.data = data.Search
    this.rating = rating
  }

  render() {
    mySwiper.removeAllSlides()
    mySwiper.updateSlides()
    for (let i = 0; i < this.data.length; i += 1) {
      const swiperSlide = new SwiperSlide(this.data[i], this.rating[i], i)
      swiperSlide.addSlides()
    }
    dataInRussian(searchInput.value)
  }
}

export default AppView
