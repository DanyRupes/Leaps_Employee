
var app = angular.module('editprofile',[])
app.controller('editController',function($scope,$http,$rootScope){


    console.log("add working")
    let Man_;
   $scope.showprofileName = $rootScope.showprofileName
   
   $scope.showprofileDesig = $rootScope.showprofileDesig
    // $scope.name = $rootScope.showprofileName
    // $scope.desig = $rootScope.showprofileDesig
    $http ({
        url : '/table',
        method : 'GET',
    })
    .then((result) => {
        // console.log(result)
        $scope.selections = result.data[0].all
        console.log(result.data)
    }).catch((err) => {
        
    });
 
    $scope.set_man="MANAGER"
    $scope.setMe = function(v){
      
        console.log(v.select.name)
        $scope.set_man = v.select.name
        Man_ = v.select.name;
    }

    $scope.updateEmp = function () { 

    console.log($rootScope.showprofileName)
    console.log($rootScope.showprofileDesig)
   
        console.log(Man_)
        console.log( $scope.showprofileName)
        console.log( $scope.showprofileDesig)
            $http({
                url : '/update',
                method :'POST',
                data : {
                    o_name : $rootScope.showprofileName,
                    n_name : $scope.showprofileName,
                    n_desig : $scope.showprofileDesig,
                    manager : Man_
                }                    
            })
                .then((result) => {
                    alert("updated")
                    window.location.href="/#/table"
                    console.log(result)
                }).catch((err) => {

            })

     }
})