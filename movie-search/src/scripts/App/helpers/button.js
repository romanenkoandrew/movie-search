import App from '..'

const searchButton = document.getElementById('button-addon2')
const searchInput = document.getElementById('search-input')

const appStart = () => {
  const searchInputValue = searchInput.value
  if (searchInputValue) {
    const app = new App(searchInputValue)
    app.start()
  }
}

const searchStart = () => {
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

export default searchStart
