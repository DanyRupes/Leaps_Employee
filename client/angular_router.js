var app = angular.module('nineleaps',['ngRoute','home','table','list','add'])


app.config(function ($routeProvider,$locationProvider) { 

$routeProvider
.when('/home',{
    templateUrl : '/main/home/home.html',
    controller : 'homeController'
})
.when('/table',{
    templateUrl : '/main/table/table.html',
    controller : 'tableController'
})
.when('/list',{
    templateUrl : '/main/list/list.html',
    controller : 'listController'
})
.when('/add',{
    templateUrl : '/main/add/add.html',
    controller : 'addController'
})
.otherwise('/',{
    templateUrl : '/main/home/home.html',
    controller : 'homeController'
})
    $locationProvider.hashPrefix(''); 
 })