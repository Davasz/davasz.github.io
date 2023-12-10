const bigHeart = document.querySelector('.heart')
const miniHeartArr = [...document.querySelectorAll('.mini-heart')]
const miniHeartContainer1 = document.querySelector('.mini-heart-animation-container-1')
const miniHeartContainer2 = document.querySelector('.mini-heart-animation-container-2')
const miniHeartContainer3 = document.querySelector('.mini-heart-animation-container-3')

const count = document.querySelector('.count')

// Função para atualizar o contador de curtidas
const attCount = () => {
  fetch('/count')
    .then(response => response.json())
    .then(data => {
      count.textContent = "#" + data.count
    })
}

// Função executada quando o elemento 'heart' é clicado
document.querySelector('.heart').addEventListener('click', () => {
  bigHeart.classList.toggle('heart-click')
  miniHeartArr.map(el => el.classList.toggle('mini-heart-click'))
  miniHeartContainer1.classList.toggle('mini-heart-container-click-1')
  miniHeartContainer2.classList.toggle('mini-heart-container-click-2')
  miniHeartContainer3.classList.toggle('mini-heart-container-click-3')

  attCount()
})

// Att a contagem no carregamento da página
attCount()