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

module.exports = { getHomePage, getLoginPage, getSignupPage, getCartPage }
