var app = angular.module('list',[])
app.controller('listController',function($scope,$http,$rootScope){

   
            console.log("good add")
            console.log($scope.name)
            console.log($scope.desig)
            console.log($scope.manager)
            $http({
                method : "GET",
                url : '/list',
            })
            .then((result) => {
                console.log("success to node")
                console.log(result)
                $scope.employees = result.data
                
            }).catch((err) => {
                console.log(err)
            });
    

            $scope.showMe = function (emp,desig) { 
                console.log(emp)
                console.log(desig)
                $rootScope.showprofileName = emp
                $rootScope.showprofileDesig = desig
                window.location.href="#/show/employee"
             }

})