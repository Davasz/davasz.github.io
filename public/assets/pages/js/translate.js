const translateButton = document.querySelector('.translate-button')
const allElements = document.querySelectorAll('.pt')

const fetchJson = async () => {
  const response = await fetch("../assets/pages/js/text-content.json")
  return await response.json()
}

const translate = async () => {
  const data = await fetchJson()

  allElements.forEach(element => {
    const textContent = element.textContent
    if (element.classList.contains('pt')) {
      element.textContent = data.pt[textContent] // Traduz para português
    }
    if (element.classList.contains('en')) {
      document.querySelector('.text-area').placeholder = "Type your message"
      element.textContent = data.en[textContent] // Traduz para inglês
    }
  })
}

// Mudar idioma
translateButton.addEventListener('click', () => {
  if (translateButton.classList.contains('pt-translate')) {
    translateButton.classList.remove('pt-translate')
    translateButton.classList.add('en-translate')
    allElements.forEach(element => {
      if (element.classList.contains('pt')) {
        element.classList.remove('pt')
        element.classList.add('en')
      }
    })
    translate()
  } else if (translateButton.classList.contains('en-translate')) {
    translateButton.classList.remove('en-translate')
    translateButton.classList.add('pt-translate')
    allElements.forEach(element => {
      if (element.classList.contains('en')) {
        element.classList.remove('en')
        element.classList.add('pt')
      }
    })
    translate()
  }
})
