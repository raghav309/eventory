const getHomePage = (req, res) => {
    res.render('pages/index')
}

const getCartPage = (req, res) => {
    res.render('pages/cartPage')
}

const getLoginPage = (req, res) => {
    res.render('pages/loginPage')
}

const getSignupPage = (req, res) => {
    res.render('pages/signupPage')
}

const getProductSearchPage = (req, res) => {
    res.render('pages/productSearchPage')
}

const getProductDetailsPage = (req, res) => {
    res.render('pages/productDetailsPage')
}

const getAccountPage = (req, res) => {
    res.render('pages/accountPage')
}

const getUpdateAccountPage = (req, res) => {
    res.render('pages/updateAccountPage')
}

module.exports = {
    getHomePage,
    getLoginPage,
    getSignupPage,
    getCartPage,
    getProductSearchPage,
    getProductDetailsPage,
    getAccountPage,
    getUpdateAccountPage,
}
