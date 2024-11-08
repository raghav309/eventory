const MainRouter = require('express').Router()
const {
    getHomePage,
    getLoginPage,
    getSignupPage,
    getCartPage,
    getProductSearchPage,
    getProductDetailsPage,
    getAccountPage,
    getUpdateAccountPage,
} = require('../controller/main.controller')

MainRouter.get('/', getHomePage)
MainRouter.get('/login', getLoginPage)
MainRouter.get('/signup', getSignupPage)
MainRouter.get('/cart', getCartPage)
MainRouter.get('/products', getProductSearchPage)
MainRouter.get('/products/details', getProductDetailsPage)
MainRouter.get('/account', getAccountPage)
MainRouter.get('/account/update', getUpdateAccountPage)

module.exports = MainRouter
