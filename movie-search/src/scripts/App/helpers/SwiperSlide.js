import mySwiper from './Swiper'

class SwiperSlide {
  constructor(params, rating, index) {
    this.title = params.Title
    this.year = params.Year
    this.id = params.imdbID
    this.poster = params.Poster
    this.rating = rating
    this.index = index
    this.swiperWrapper = document.querySelector('.swiper-wrapper')
  }

  addSlides() {
    mySwiper.appendSlide(
      `<div class="swiper-slide">
        <a href="" target = "_blank"> <h2 class="film-name"></h2> </a>
        <div class="card-image"></div> 
        <h3 class="data mb-0"></h3>
        <h3 class="star-rating mb-5"></h3>
      </div>`
    )
    const link = this.swiperWrapper.querySelectorAll('a')
    // console.log('link:', link)
    link[
      this.index
    ].href = `https://www.imdb.com/title/${this.id}/videogallery/`

    const title = this.swiperWrapper.querySelectorAll('h2')
    title[this.index].innerText = this.title

    const poster = this.swiperWrapper.querySelectorAll('.card-image')
    if (this.poster !== 'N/A') {
      poster[this.index].style.backgroundImage = `url(${this.poster})`
    } else {
      poster[this.index].style.backgroundImage = `url(assets/img/noImage.jpg)`
    }

    const year = this.swiperWrapper.querySelectorAll('.data')
    year[this.index].innerText = this.year

    const rating = this.swiperWrapper.querySelectorAll('.star-rating')
    rating[this.index].innerText = this.rating
    mySwiper.slideTo(0)
    mySwiper.updateSlides()
  }
}

export default SwiperSlide
