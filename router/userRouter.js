const router = require("express").Router();
const {userLoginController, userSignupController} = require('../routesController/userController')

router.get('/login',userLoginController)

router.get('/signup',userSignupController)

module.exports = router