const searchInput = document.getElementById('search-input')
const messageBlock = document.getElementById('message-block')

const message = (text, color) => {
  const messageElem = document.createElement('span')
  messageElem.classList.add('h3')
  messageElem.innerText = `${text}`
  messageElem.classList.add(color)
  messageBlock.appendChild(messageElem)
}

const messageClear = () => {
  messageBlock.querySelectorAll('span').forEach(el => el.remove())
}

const getMessageError = error => {
  messageClear()
  message(`Something went wrong: ${error}`, 'text-danger')
}
const getMessageLoading = value => {
  messageClear()
  message(`Loading results for ${value}`, 'text-secondary')
}
const getMessageTranslate = value => {
  messageClear()
  message(`Showing results for ${value}`, 'text-success')
}

const errorText = {
  'Movie not found!': `No results for: `,
  'Too many results.': 'Too many results. Please correct your request: '
}

const responseFalse = data => {
  const { Error } = data
  const messageText = errorText[Error] + searchInput.value
  messageClear()
  message(messageText, 'text-danger')
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

export {
  messageClear,
  getMessageError,
  getMessageLoading,
  getMessageTranslate,
  responseFalse,
  spinnerLoading
}
