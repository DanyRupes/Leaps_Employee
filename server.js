var express = require('express')
var app = express()

var router = require('./router.js')

app.use('/',router)


app.listen(80,()=>{
    console.log("http://localhost:80")
})