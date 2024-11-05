const getHomePage = (req, res) => {
    res.render('pages/index')
}

const getCartPage = (req, res) => {
    res.render('pages/cartPage')
}

module.exports = { getHomePage, getCartPage }
