import App from '../App'

const searchButton = document.getElementById('button-addon2')
const searchInput = document.getElementById('search-input')
const messageBlock = document.getElementById('message-block')

const appStart = () => {
  const searchInputValue = searchInput.value
  if (searchInputValue) {
    const app = new App(searchInputValue)
    app.start()
    messageBlock.querySelectorAll('span').forEach(el => el.remove())
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
