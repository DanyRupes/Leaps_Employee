var app = angular.module('add',[])
app.controller('addController',function($scope,$http){


    console.log("add working")
  

    $scope.addSubmit = function () { 
        console.log("good add")
        console.log($scope.name)
        console.log($scope.desig)
        console.log($scope.manager)
        $http({
            method : "POST",
            url : '/add',
            data : {
                name : $scope.name,
                desig : $scope.desig,
                manager : $scope.manager
            }
        })
        .then((result) => {
            console.log("success to node")
            console.log(result)
            alert("Employee Added Successfully")
            window.location.href="/#/table"
        }).catch((err) => {
            console.log(err)
        });

     }
})