var express = require('express')
var app = express()

var router = require('./router.js')

app.use('/',router)


app.listen(9000,()=>{
    console.log("http://localhost:9000")
})