import { getMessage, responseFalse } from './messageBlock'

class AppModel {
  constructor(state) {
    this.state = state
  }

  async getData() {
    try {
      const { url } = this.state
      const responceData = await fetch(url)
      const data = await responceData.json()
      const { Response } = data
      if (Response === 'False') {
        return responseFalse(data)
      }
      return data
    } catch (err) {
      return getMessage(err)
    }
  }

  async getRating(id) {
    try {
      const { ratingUrl } = this.state
      const responceRating = await fetch(ratingUrl + id)
      const ratingObj = await responceRating.json()
      const rating = await ratingObj.imdbRating
      return rating
    } catch (err) {
      return getMessage(err)
    }
  }

  extractClipRating(data) {
    const imdbIdArr = data.Search.map(items => items.imdbID)
    const rating = imdbIdArr.map(items => this.getRating(items))
    return Promise.all(rating)
  }
}

export default AppModel
