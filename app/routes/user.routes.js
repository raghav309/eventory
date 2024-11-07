const { loginUser, signupUser } = require('../controller/user.contoller')
const UserRouter = require('express').Router()

UserRouter.post('/login', loginUser)
UserRouter.post('/signup', signupUser)

module.exports = UserRouter
