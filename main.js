const express = require('express')
const path = require('path')

const app = express()

// Middlewares
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'view/index.html'))
})

let count = 0
// Rota para retornar o contador de visualizações
app.get('/count', (req, res) => {
  count += 1
  res.json({ count })
})

const PORT = 3333

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})