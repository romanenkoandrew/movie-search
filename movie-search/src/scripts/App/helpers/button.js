import App from '..'

const searchStart = () => {
  const searchButton = document.getElementById('button-addon2')
  const searchInput = document.getElementById('search-input')
  searchButton.addEventListener('click', () => {
    const searchInputValue = searchInput.value
    if (searchInputValue) {
      const app = new App(searchInputValue)
      app.start()
    }
  })
}

export default searchStart
