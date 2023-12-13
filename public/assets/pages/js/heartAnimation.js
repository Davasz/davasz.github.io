import { database, ref, get, runTransaction } from "../../../config/firebaseConfig.js"

const bigHeart = document.querySelector('.heart')
const miniHeartArr = [...document.querySelectorAll('.mini-heart')]
const miniHeartContainer1 = document.querySelector('.mini-heart-animation-container-1')
const miniHeartContainer2 = document.querySelector('.mini-heart-animation-container-2')
const miniHeartContainer3 = document.querySelector('.mini-heart-animation-container-3')
const count = document.querySelector('.count')

const countRef = ref(database, 'count');

const getCount = () => {
  get(countRef).then((snapshot) => {
    const countValue = snapshot.val();
    count.textContent = "#" + countValue
  })
}

const updateCount = (value) => {
  runTransaction(countRef, (currentCount) => {
    if (currentCount <= 0) {
      return currentCount = 0
    }
    if (value) {
      return currentCount - 1
    }
    return currentCount + 1
  }).then(() => {
    getCount()
  })
}

const toggleHeart = () => {
  bigHeart.classList.toggle('heart-click')
  miniHeartArr.map(el => el.classList.toggle('mini-heart-click'))
  miniHeartContainer1.classList.toggle('mini-heart-container-click-1')
  miniHeartContainer2.classList.toggle('mini-heart-container-click-2')
  miniHeartContainer3.classList.toggle('mini-heart-container-click-3')
}

document.querySelector('.heart').addEventListener('click', () => {
  toggleHeart()

  if (bigHeart.classList.contains('heart-click')) {
    updateCount(false)
  }
  if (!(bigHeart.classList.contains('heart-click'))) {
    updateCount(true)
  }
})

getCount()