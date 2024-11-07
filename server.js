var path = require('path')
const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const MainRouter = require('./app/routes/main.routes')
const UserRouter = require('./app/routes/user.routes')

const app = express()

app.engine('.html', require('ejs').__express)
app.set('views', path.join(__dirname, '/app/views/'))
app.set('view engine', 'html')
app.use(express.static(path.join(__dirname, '/app/assets/')))
app.use(express.json())

app.use('/', MainRouter)
app.use('/api/user', UserRouter)

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('DB connection established')
        app.listen(process.env.PORT, () => {
            console.log(`server is listening on ${process.env.PORT}...`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
