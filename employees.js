workers: [
    {
      name: 'Anika ',
      desig: 'COO',
      path : ',ceo,',
      workers: [
        {
          name: 'Udit',
          desig: ' Accounts Manager',
          path : ',ceo,coo,',
        },
        {
          name: 'Yatiyasa' ,           
          desig: ' Business Analyst',
          path : ',ceo,coo,',          
        },
        {
          name: 'Zena' ,           
          desig: ' Scrum Master',
          path : ',ceo,coo,',          
        },
        {
          name: 'Aahna' ,           
          desig: ' Head (Quality)',
          path : ',ceo,coo,', 
                workers : [{
                  name : "Yashraj",
                  desig : " Quality Manager",
                  path : ',ceo,coo,quality_head,',
                    workers : [
                      {
                        "name":"Veena",
                        "desig":" Tester",
                        path : ',ceo,coo,quality_head,quality_man,',
                    },
                      {
                        "name":"Torsha",
                        "desig":"Mobile Tester",
                        path : ',ceo,coo,quality_head,quality_man,',
                        workers : [
                              {
                                "name":"Birju",
                                "desig":"  VP Marketing",
                                path : ',ceo,coo,quality_head,quality_man,mobile_test,',
                                workers : [
                                  {
                                    "name":"Jaganmay",
                                    "desig":"Manager Marketing",
                                    path : ',ceo,coo,quality_head,quality_man,mobile_test,vp_market,',
                                },
                              ]
                            },
                          ]
                    },
                    {
                      "name":"Ruchita ",
                      "desig":"Tester",
                      path : ',ceo,coo,quality_man,',
                  },
                  {
                    "name":"Oindrila",
                    "desig":"Mobile Tester",
                    path : ',ceo,coo,quality_man,',
                   },
                  ] //yashraj
          },
        ]         
        }, //Aahana
        { // Madhulika Head (Development)
            name: 'Madhulika',
            desig: 'Head (Development)',
            path : ',ceo,coo,',
            workers: [
              { 
                name: 'Kimaya',
                desig: ' Developer',
                path : ',ceo,coo,head_dev,'
              },
              {
                name: 'Indu ',
                desig: 'Developerr',
                path : ',ceo,coo,head_dev,'
              },
              {
                name: 'Gayatri',
                desig: ' Developer',
                path : ',ceo,coo,head_dev,'
              }
            ]
        }
      ]
    },
    {
      name: 'Ashlesha',
      desig: ' VP Sales',
      path : ',ceo,',
      workers: [
        { 
          name: 'Hardik',
          desig: ' Manager Sales',
          path : ',ceo,vp_sales,'
        },
      ]        
    },

    {
      name: 'Devak',
      desig: ' Head (HR)',
      path : ',ceo,',
      workers: [
        { 
          name: 'Lakhan',
          desig: ' Recruitment Manager',
          path : ',ceo,hr,'
        },
        {
          name: 'Naamdev',
          desig: ' L&D Manager',
          path : ',ceo,hr,'
        },
        {
          name: 'Pradosh ',
          desig: 'Facilities',
          path : ',ceo,hr,'
        }
      ]
    },
    {
        name: 'Phani ',
        desig: 'Head (Finance)',
        path : ',ceo,'
      },
    {
      name: 'Sachit',
      desig: 'CTO',
      path : ',ceo,',
      workers: [
        { 
          name: 'Ekaa',
          desig: '  Solution Architect',
          path : ',ceo,cto,'
        },
        {
          name: 'Kenn',
          desig: 'Solution Architect',
          path : ',ceo,cto,'
        }
      ]
    }

  ]