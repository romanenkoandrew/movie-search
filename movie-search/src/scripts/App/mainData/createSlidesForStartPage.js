import AppView from '../helpers/AppView'
import { dataForStartPage, rating } from './dataForStartPage'

const createSlidesForStartPage = () => {
  const view = new AppView(dataForStartPage, rating)
  view.render()
}

export default createSlidesForStartPage
