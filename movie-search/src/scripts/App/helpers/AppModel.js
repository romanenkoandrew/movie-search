class AppModel {
  constructor(state) {
    this.state = state
  }

  async getData() {
    const { url } = this.state
    const responceData = await fetch(url)
    const data = await responceData.json()
    return data
  }

  async getRating(id) {
    const { ratingUrl } = this.state
    const responceRating = await fetch(ratingUrl + id)
    const ratingObj = await responceRating.json()
    const rating = await ratingObj.imdbRating
    return rating
  }

  extractClipRating(data) {
    const imdbIdArr = data.Search.map(items => items.imdbID)
    const rating = imdbIdArr.map(items => this.getRating(items))
    return Promise.all(rating)
  }
}

export default AppModel
