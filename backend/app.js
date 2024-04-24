const express = require('express')
const mongoose = require('mongoose')
const router = require('./controllers/controller')
const url = 'mongodb+srv://divyamahajan0007:u9wzHq35LvmBpxSS@cluster0.fv6lqnl.mongodb.net/mydb'

const app = express()
mongoose.connect(url)
app.use('/',router)
app.listen(9000, () =>{
    console.log("Server Started")
})