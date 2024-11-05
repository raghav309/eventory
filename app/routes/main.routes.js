const MainRouter = require('express').Router()
const { getHomePage, getCartPage } = require('../controller/main.controller')

MainRouter.get('/', getHomePage)
MainRouter.get('/cart', getCartPage)

module.exports = MainRouter
