const express = require('express')
const userRouter = require('./router/userRouter')
const app = new express()

app.use('/user', userRouter)


app.listen(3000, () => {
    console.log("server has started")
})