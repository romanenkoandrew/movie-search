import AppModel from './helpers/AppModel'
import AppView from './helpers/AppView'
import { spinnerLoading } from './helpers/messageBlock'

class App {
  constructor(value) {
    this.state = {
      url: `https://www.omdbapi.com/?apikey=1ee841cf&s=${value}`,
      ratingUrl: `https://www.omdbapi.com/?apikey=1ee841cf&i=`,
      isLoading: true
    }
  }

  async start() {
    try {
      let { isLoading } = this.state
      isLoading = false
      spinnerLoading(isLoading)
      const model = new AppModel(this.state)
      const data = await model.getData()
      if (data) {
        const rating = await model.extractClipRating(data)
        const view = new AppView(data, rating)
        view.render()
        view.renderFinishMessage()
      }
      isLoading = true
      spinnerLoading(isLoading)
    } catch (err) {
      throw Error(err)
    }
  }
}

export default App
