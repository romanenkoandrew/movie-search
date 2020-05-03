import SwiperSlide from './SwiperSlide'
import mySwiper from './swiper'

class AppView {
  constructor(data, rating) {
    this.data = data.Search
    this.rating = rating
  }

  render() {
    // console.log('AppView data:', this.data)
    console.log('AppView rating:', this.rating)
    mySwiper.removeAllSlides()
    mySwiper.updateSlides()
    for (let i = 0; i < this.data.length; i += 1) {
      console.log('cycle:', this.data[i])
      const swiperSlide = new SwiperSlide(this.data[i], this.rating[i], i)
      swiperSlide.addSlides()
    }
  }
}

export default AppView
