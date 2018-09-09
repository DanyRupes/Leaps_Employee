var app = angular.module('nineleaps',['ngRoute','home','table','list','add','showEmp','editprofile'])


app.config(function ($routeProvider,$locationProvider) { 

$routeProvider
.when('/',{
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
.when('/show/employee',{
    templateUrl : '/main/show_emp/show.html',
    controller : 'showEmpController'
})
.when('/edit/profile',{
    templateUrl : '/main/edit/edit.html',
    controller : 'editController'
})
.otherwise('/',{
    templateUrl : '/main/home/home.html',
    controller : 'homeController'
})
    $locationProvider.hashPrefix(''); 
 })