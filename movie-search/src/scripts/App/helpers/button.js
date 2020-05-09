import App from '../App'
import { getMessageLoading } from './messageBlock'
import { requestInRussian } from './requestInRussian'

const searchButton = document.getElementById('button-addon2')
const searchInput = document.getElementById('search-input')

const appStart = async () => {
  const searchInputValue = searchInput.value
  if (searchInputValue) {
    const translateValue = await requestInRussian(searchInputValue)
    const app = new App(translateValue)
    app.start()
    getMessageLoading(translateValue)
  }
}

const searchStartHandler = () => {
  searchButton.addEventListener('click', () => {
    appStart()
  })
  document.addEventListener('keydown', event => {
    const { code } = event
    if (code === 'Enter') {
      appStart()
    }
  })
}

export default searchStartHandler
