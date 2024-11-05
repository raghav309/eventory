var path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()

app.engine('.html', require('ejs').__express)
app.set('views', path.join(__dirname, '/app/views/'))
app.set('view engine', 'html')
app.use(express.static(path.join(__dirname, '/app/assets/')))
app.use(cors())
app.use(express.json())

app.use('/', (req, res) => {
    res.render('pages/index')
})

app.listen(5000, () => {
    console.log(`server is listening...`)
})
