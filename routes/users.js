const express = require('express')

const userRouter = express.Router()
const userController = require('../controllers/users')

userRouter.post('/signin', userController.login)
userRouter.post('/signup', userController.signup)
userRouter.post('/exists', userController.exists)

module.exports = userRouter
