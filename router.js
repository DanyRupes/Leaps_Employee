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
 var workers = [
  {
    name: 'Anika ',
    desig: 'COO',
    workers: [
      {
        name: 'Udit',
        desig: ' Accounts Manager',
      },
      {
        name: 'Yatiyasa' ,           
        desig: ' Business Analyst',        
      },
      {
        name: 'Zena' ,           
        desig: ' Scrum Master',        
      },
      {
        name: 'Aahna' ,           
        desig: ' Head (Quality)',
              workers : [{
                name : "Yashraj",
                desig : " Quality Manager",
                  workers : [
                    {
                      "name":"Veena",
                      "desig":" Tester",
                     
                  },
                    {
                      "name":"Torsha",
                      "desig":"Mobile Tester",
                     
                      workers : [
                            {
                              "name":"Birju",
                              "desig":"  VP Marketing",
                             
                              workers : [
                                {
                                  "name":"Jaganmay",
                                  "desig":"Manager Marketing",
                                  
                              },
                            ]
                          },
                        ]
                  },
                  {
                    "name":"Ruchita ",
                    "desig":"Tester",
                    
                },
                {
                  "name":"Oindrila",
                  "desig":"Mobile Tester",
                 },
                ] //yashraj
        },
      ]         
      }, //Aahana
      { // Madhulika Head (Development)
          name: 'Madhulika',
          desig: 'Head (Development)',
          workers: [
            { 
              name: 'Kimaya',
              desig: ' Developer',
            },
            {
              name: 'Indu ',
              desig: 'Developerr',
            },
            {
              name: 'Gayatri',
              desig: ' Developer',
            }
          ]
      }
    ]
  },
  {
    name: 'Ashlesha',
    desig: ' VP Sales',
    workers: [
      { 
        name: 'Hardik',
        desig: ' Manager Sales',
      },
    ]        
  },

  {
    name: 'Devak',
    desig: ' Head (HR)',
    workers: [
      { 
        name: 'Lakhan',
        desig: ' Recruitment Manager',
      },
      {
        name: 'Naamdev',
        desig: ' L&D Manager',
      },
      {
        name: 'Pradosh ',
        desig: 'Facilities',
      }
    ]
  },
  {
      name: 'Phani ',
      desig: 'Head (Finance)',
    },
  {
    name: 'Sachit',
    desig: 'CTO',
    workers: [
      { 
        name: 'Ekaa',
        desig: '  Solution Architect',
      },
      {
        name: 'Chitral',
        desig: 'Solution Architect',
      }
    ]
  }
]

var employee = [
      {
        name : "Anchal",
        desig:"CEO",
        manager:"-",
        path : null,
      },
      {
        name: 'Anika',
        desig: 'COO',
        manager:"Anchal",
        path : 'workers.',
      },
      {
        name: 'Udit',
        desig: ' Accounts Manager',
        manager:"Anika",
        path : 'workers.workers',
      },
      {
        name: 'Yatiyasa' ,           
        desig: ' Business Analyst',
        manager:"Anika",
        path : 'workers.workers',          
      },
      {
        name: 'Zena' ,           
        desig: ' Scrum Master',
        manager:"Anika",
        path : 'workers.workers',         
      },
      {
        name: 'Aahna' ,           
        desig: ' Head (Quality)',
        manager:"Anika",
        path : 'workers.workers', 
      },
      {
        name : "Yashraj",
        desig : " Quality Manager",
        manager:"Aahna",
        path : 'workers.workers.workers',
      },
      {
       "name":"Veena",
        "desig":" Tester",
         manager:"Yashraj",
         path : 'workers.workers.workers.workers',
      },
      {
        "name":"Torsha",
        "desig":"Mobile Tester",
         manager:"Yashraj",
         path : 'workers.workers.workers.workers',
      },
         {
         "name":"Birju",
         "desig":"  VP Marketing",
         manager:"Torsha",
         path : 'workers.workers.workers.workers.workers',
        },
         {
          "name":"Jaganmay",
          "desig":"Manager Marketing",
          manager:"Birju",
          path : 'workers.workers.workers.workers.workers.workers',
          },
          {
          "name":"Ruchita ",
          "desig":"Tester",
          manager:"Yashraj",
          path : 'workers.workers.workers.workers',
          },
          {
          "name":"Oindrila",
          "desig":"Mobile Tester",
          manager:"Yashraj",
          path : 'workers.workers.workers.workers',
          },        
          { // Madhulika Head (Development)
          name: 'Madhulika',
          desig: 'Head (Development)',
          manager:"Anika",
          path : 'workers.workers',
          },
          { 
            name: 'Kimaya',
            desig: ' Developer',
            manager:"Madhulika",
            path : 'workers.workers.workers',
          },
          {
            name: 'Indu ',
            desig: 'Developerr',
            manager:"Madhulika",
            path : 'workers.workers.workers',
          },
          {
            name: 'Gayatri',
            desig: ' Developer',
            manager:"Madhulika",
            path : 'workers.workers.workers',
          },
          {
            name: 'Ashlesha',
            desig: ' VP Sales',
            manager:"Anchal",
            path : 'workers.',
          },
          { 
            name: 'Hardik',
            desig: ' Manager Sales',
            manager:"Ashlesha",
            path : 'workers.workers',
          },      
           {
          name: 'Devak',
          desig: ' Head (HR)',
          manager:"Anchal",
          path : 'workers.',
           },
            { 
              name: 'Lakhan',
              desig: ' Recruitment Manager',
              manager:"Devak",
              path : 'workers.workers',
            },
            {
              name: 'Naamdev',
              desig: ' L&D Manager',
              manager:"Devak",
              path : 'workers.workers',
            },
            {
              name: 'Pradosh ',
              desig: 'Facilities',
              manager:"Devak",
              path : 'workers.workers',
              },
              {
              name: 'Phani ',
              desig: 'Head (Finance)',
              manager:"Anchal",
              path : 'workers.',
              },
              {
                name: 'Sachit',
                desig: 'CTO',
                manager:"Anchal",
                path : 'workers.',
              },
              { 
                name: 'Ekaa',
                desig: '  Solution Architect',
                manager:"Sachit",
                path : 'workers.workers',
              },
              {
                name: 'Chitral',
                desig: 'Solution Architect',
                manager:"Sachit",
                path : 'workers.workers',
              }
]


mongoose.emptree.findOneAndUpdate({name : "Anchal"},{$set:{desig:"CEO",manager:"-",path : null,
    workers : workers
    },
  },{upsert:true})
.then((result) => {
    console.log("result tree///////")
    // console.log(result)
    mongoose.profile.findOneAndUpdate({},{$set:{all : employee}},{upsert:true})
    .then((out) => {
      console.log("out------------")
      // console.log(out)
    }).catch((err) => {
      console.log("err a"+err)
    });

}).catch((err) => {
    console.log(err)
});


      app.get('/list', function (req, res) {
            mongoose.emptree.find().then((result) => {
                // console.log(result)
                res.send(result)
            }).catch((err) => {
                console.log(err)
                res.json({"error":"okay"})
            });
      })



      app.get('/edit', function (req, res) { 
        // finding path of emp_
        // console.log(req.body.emp_name)
        // console.log(rq.body.old_man)
        // console.log(rq.body.new_man)
            mongoose.profile.findOne({"all.name":"Chitral"},{"all.name.$":1})
            .then((profile) => {
              let pathA = profile.all[0].path;
              console.log(pathA)
              let pathB  = {
                path : pathA+".name"
              }

                // mongoose.
               
                console.log([pathB.path])
                mongoose.emptree.find({[pathB.path]:"Chitral"},{[pathB.path+"name"]:1})
                .then((result) => {
                  result.forEach(element => {
                    console.log(element)
                  })
                  .then(()=>{
                    res.send("Okayy")
                  })
                }).catch((err) => {
                  res.send(err)
                });
               
            }).catch((err) => {
              console.log(err)
              res.send("err")
        });
       })
    app.get('/table', function (req, res) {
      mongoose.profile.find()
      .then((result) => {
        res.send(result)
      }).catch((err) => {
        console.log(err)
        res.send("error")
      });
    })  


    app.post('/add', function (req, res) { 
      console.log(req.body)
      mongoose.profile.findOneAndUpdate({},{$addToSet:{all :{
        name : req.body.name,
        desig : req.body.desig,
        manager : req.body.manager,
      }}})
      .then((result) => {
        res.status(200).send("okay")
      }).catch((err) => {
        console.log(err)
        res.status(404).send(err)
      });
     })


    app.post('/showMe', function (req, res) { 
      // console.log(req.body)
      mongoose.profile.findOne({"all.name":req.body.name},{"all.name.$":1})
      .then((result) => {
        res.status(200).send(result)
      }).catch((err) => {
        console.log(err)
        res.status(404).send("err")
      });
     })

module.exports = app;



// var map = function () { 
//   // filteredEmp = [];
//   // this.workers.forEach(element => {
//   //   console.log(element)
//   //   // if(element.name == "Chitral"){
//   //   //   filteredEmp.push(element)
//   //   // }
//   // });
//   console.log("this.name")
//   emit(this.workers.workers, this.workers.workers)

// }
// var reduce= function(key, value) { 
//   console.log(value)
//   return value
//  }