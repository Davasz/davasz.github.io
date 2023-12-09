const translateButton = document.querySelector('.translate-button')
const allElements =  document.querySelectorAll('*')

const feachJson = async () => {
   const response = await fetch("../assets/pages/js/text-content.json");
   const data = await response.json();
   return data;
}

const translate = () =>{
    allElements.forEach(e => {
        if(e.classList.contains('pt')) {
            feachJson().then(data => {
                const textContent = e.textContent
                e.textContent = data.pt[textContent]
            })
        }

        if(e.classList.contains('en')) {
            feachJson().then(data => {
                const textContent = e.textContent
                document.querySelector('.text-area').placeholder = "Type your message"
                e.textContent = data.en[textContent]
            })
        }
    })
}

translateButton.addEventListener('click', () => {
    if(translateButton.classList.contains('pt-translate')) {
        translateButton.classList.remove('pt-translate')
        translateButton.classList.add('en-translate')
        allElements.forEach(e=> {
            if(e.classList.contains('pt')) {
                e.classList.remove('pt')
                e.classList.add('en')
            }
        })
        translate()
    } else if(translateButton.classList.contains('en-translate')) {
        translateButton.classList.remove('en-translate')
        translateButton.classList.add('pt-translate')
        allElements.forEach(e=> {
            if(e.classList.contains('en')) {
                e.classList.remove('en')
                e.classList.add('pt')
            }
        })
        translate()
    }
    
})
