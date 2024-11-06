const MainRouter = require('express').Router()
const {
    getHomePage,
    getLoginPage,
    getSignupPage,
    getCartPage,
} = require('../controller/main.controller')

MainRouter.get('/', getHomePage)
MainRouter.get('/login', getLoginPage)
MainRouter.get('/signup', getSignupPage)
MainRouter.get('/cart', getCartPage)

module.exports = MainRouter
