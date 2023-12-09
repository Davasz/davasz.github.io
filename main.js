const express = require('express')
const path = require('path');
const app = express()

app.use(express.json())
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view/index.html'))
})

let count = 0
app.get('/count', (req, res) => {
    count += 1
    res.json({
        count: count
    })
})

app.listen(3333, () => {
    console.log('Server is running!')
})