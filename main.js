const express = require('express')
const path = require('path')

const app = express()

app.use(express.json());
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'view/index.html'))
});

let count = 0

app.get('/count', (req, res) => {
  res.json({ count })
});

app.get('/count/att', (req, res) => {
  count += 1
  res.status(200).send({ count })
});

const PORT = process.env.APP_PORT

app.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}`)
})
