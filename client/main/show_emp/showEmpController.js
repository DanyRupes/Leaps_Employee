var app = angular.module('showEmp',[])

app.controller('showEmpController', function ($scope,$http,$rootScope) { 
    console.log("show emp")


    // $scope.getEmployee = function (prof) { 
        console.log($rootScope.showprofileName)
        $http({
          url : '/showMe',
          method : "post",
          data :{
            name: $rootScope.showprofileName
          }
        })
        .then((result) => {
          console.log(result)
          $scope.profile = result.data.all[0];
          $rootScope.selectingHelp =  result.data.all[0];
        }).catch((err) => {
          
        });
    


        $scope.editProfile = function () { 
          $rootScope.editProfileName = $rootScope.showprofileName
          window.location.href = "/#/edit/profile"
         }
 })