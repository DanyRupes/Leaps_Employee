var app = angular.module('home',[])
app.controller('homeController',function($scope){

    console.log("home working")

    $scope.user = {
        name : "Da",
        class  : "IT" 
    }

})