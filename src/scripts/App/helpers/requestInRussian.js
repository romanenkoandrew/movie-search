import { getMessageTranslate } from './messageBlock'

const requestInRussian = async value => {
  const rus = /[а-я]/i
  const translateUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200507T184357Z.d5dc16a48cbc3f8f.34334890c9a1926b212b6e3efd69e45752ef00f4&text=${value}&lang=ru-en`
  if (rus.test(value)) {
    const responseData = await fetch(translateUrl)
    const data = await responseData.json()
    const translate = await data.text[0]
    return translate
  }
  return value
}

const dataInRussian = async value => {
  const result = await requestInRussian(value)
  getMessageTranslate(result)
}
export { requestInRussian, dataInRussian }
