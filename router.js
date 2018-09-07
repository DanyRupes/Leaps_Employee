var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var mongoose = require('./Database/mongo.js')

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use(express.static(path.join(__dirname,"./client")))
app.use(express.static(path.join(__dirname,"/client/libraries/Angular")))
app.use(express.static(path.join(__dirname,"./client/styles")))
app.use(express.static(path.join(__dirname,"./client/views")))
app.use(express.static(path.join(__dirname,"/client/libraries/Jquery")))
app.use(express.static(path.join(__dirname,"/client/libraries/Bootstrap")))

app.get('/login', function (req, res) { 
    console.log(req.body)
    res.sendfile(__dirname+'/client/index.html')
 })


mongoose.profile.findOneAndUpdate({name : "Jes"},{$set:{desig:"CEO",manager:"-"}},{upsert:true})
.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});


app.get('/add', function (req, res) {
    // adding new emp to manager his workers arary first
    mongoose.profile.findOneAndUpdate({name : "Dan"},{$addToSet : {workers:{
        name : "Rup",
        desigg : "Tester"
    }}})
    .then((out)=>{
        console.log(out)
        mongoose.profile({name : "Rup",desig:"Tester",manager:"Dan"}).save()
        .then((result) => {
            console.log(result)
            res.status(200).send("addded")
        }).catch((err) => {
            console.log(err)
            res.status(400).send(err)
        });
    })
    .catch((err)=>{
        console.log(err)
        res.send("Check Correct")
    })


  })


module.exports = app;