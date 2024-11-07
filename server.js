var path = require('path')
const express = require('express')
const cors = require('cors')

const MainRouter = require('./app/routes/main.routes')
const UserRouter = require('./app/routes/user.routes')

const app = express()

app.engine('.html', require('ejs').__express)
app.set('views', path.join(__dirname, '/app/views/'))
app.set('view engine', 'html')
app.use(express.static(path.join(__dirname, '/app/assets/')))
app.use(cors())
app.use(express.json())

app.use('/', MainRouter)
app.use('/api/user', UserRouter)

app.listen(5000, () => {
    console.log(`server is listening...`)
})
