var mongoose = require('mongoose')

const url = "mongodb://localhost:27017/nineleaps"

mongoose.connect(url,{ useNewUrlParser: true })

mongoose.connection.on('connected',function () { 
    console.log("connected db success")
 })

mongoose.connection.on('error', function(){
    console.log("error connecting db")
})
var emptree= mongoose.Schema({
    name :  String,
    desig :  String,
    manager : String,
    workers : Array
})

var profileSchema =  mongoose.Schema({
    all : [{
        name : String,
        desig : String,
        manager : String,
        path : String,}]
})


var emptree = mongoose.model('emptree',emptree)
var profile = mongoose.model('profile',profileSchema)
module.exports = {emptree : emptree,profile : profile}