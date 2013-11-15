'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'partials/partial1',
      controller: MyCtrl1
    });
    $routeProvider.when('/view2', {
      templateUrl: 'partials/partial2',
      controller: MyCtrl2
    });
    $routeProvider.when('/login', {
      templateUrl: 'partials/login',
      controller: MyCtrl3
    });

    $routeProvider.when('/logout', {
      controller: MyCtrl4
    });
    $routeProvider.otherwise({ redirectTo: '/view1' });
    $locationProvider.html5Mode(true);
  }]);