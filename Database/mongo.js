var mongoose = require('mongoose')

const url = "mongodb://localhost:27017/nineleaps"

mongoose.connect(url,{ useNewUrlParser: true })

mongoose.connection.on('connected',function () { 
    console.log("connected db success")
 })

mongoose.connection.on('error', function(){
    console.log("error connecting db")
})
var profileSchema = mongoose.Schema({

    name :  String,
    desig :  String,
    manager : String,
    workers : [{
        desigg : String,
        name : String
    }]
})


var profile = mongoose.model('profile',profileSchema)
module.exports = {profile : profile}