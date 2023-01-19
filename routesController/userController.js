const userLoginController = (req,res) => {
    res.end('login controller')
}

const userSignupController = (req,res) => {
    res.end('signup controller')
}
module.exports  = {userLoginController, userSignupController }