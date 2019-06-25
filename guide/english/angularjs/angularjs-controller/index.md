---
title: AngularJS Controller
---
# AngularJS Controller
------
Controllers are the behavior behind the DOM elements. AngularJS lets you express the behavior in a clean readable form without the usual boilerplate of updating the DOM, registering callbacks or watching model changes. (more info @ [https://angularjs.org/](https://angularjs.org/)

Example
```html
<div ng-app="myApp" ng-controller="myCtrl">

First Name: <input type="text" ng-model="firstName"><br>
Last Name: <input type="text" ng-model="lastName"><br>
<br>
Full Name: {{firstName + " " + lastName}}

</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
</script>
```
The ng-controller directive defines the application controller.

A controller is a JavaScript Object, created by a standard JavaScript object constructor.

More info @[https://www.w3schools.com/angular/angular_controllers.asp](https://www.w3schools.com/angular/angular_controllers.asp)
