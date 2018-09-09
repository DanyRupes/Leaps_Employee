var app = angular.module('table',[])

app.controller('tableController',function ($scope,$http,$rootScope) {



    $http({
      url : '/table',
      method : "get",
    })
    .then((result) => {
      console.log(result)
      $scope.profile = result.data[0].all;
    }).catch((err) => {
      
    });

    $scope.getEmployee = function (prof) { 
      console.log(prof.name)
      $rootScope.showprofileName = prof.name
      window.location.href="#/show/employee"
     }

  })