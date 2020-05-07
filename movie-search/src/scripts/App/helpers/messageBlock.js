const searchInput = document.getElementById('search-input')
const messageBlock = document.getElementById('message-block')
const message = document.createElement('span')
message.classList.add('h3', 'text-danger')

const getMessage = error => {
  message.innerText = `Something went wrong: ${error}`
  messageBlock.appendChild(message)
}

const errorText = {
  'Movie not found!': `No results for: `,
  'Too many results.': 'Too many results. Please correct your request: '
}

const responseFalse = data => {
  const { Error } = data
  message.innerText = errorText[Error] + searchInput.value
  messageBlock.appendChild(message)
}

const createSpinner = () => {
  const spinner = document.createElement('div')
  spinner.classList.add('spinner-border')
  spinner.role = 'status'
  messageBlock.append(spinner)
}

const spinnerLoading = param => {
  return param
    ? messageBlock.childNodes.forEach(el => el.remove())
    : createSpinner()
}

export { getMessage, responseFalse, spinnerLoading }
