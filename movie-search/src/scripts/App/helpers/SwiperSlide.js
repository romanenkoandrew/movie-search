import mySwiper from './swiper'

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
    // console.log('swiperslide:', this.title, this.rating)
    // const swiperSlide = document.createElement('div')
    // swiperSlide.classList.add('swiper-slide')

    // const link = document.createElement('a')
    // link.href = `https://www.imdb.com/title/${this.id}`
    // const title = document.createElement('h2')
    // title.innerText = this.title
    // link.appendChild(title)

    // const poster = document.createElement('div')
    // poster.classList.add('card-image')
    // poster.style.backgroundImage = `url(${this.poster})`

    // const year = document.createElement('h3')
    // year.classList.add('data', 'mb-0')
    // year.innerText = this.year

    // const rating = document.createElement('h3')
    // rating.classList.add('mb-5')
    // rating.innerText = this.rating

    // swiperSlide.append(link, poster, year, rating)
    // this.swiperWrapper.append(swiperSlide)

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
    link[this.index].href = `https://www.imdb.com/title/${this.id}`

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
