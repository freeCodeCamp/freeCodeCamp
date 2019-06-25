---
title: AngularJS ng-model Directive
---
# AngularJS ng-model Directive
------
With the ng-model directive you can bind the value of an input field to a variable created in AngularJS.

Example
```html
<div ng-app="myApp" ng-controller="myCtrl">
    Name: <input ng-model="name">
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = "John Doe";
});
</script>
```
Two-Way Binding example
```html
<div ng-app="myApp" ng-controller="myCtrl">
    Name: <input ng-model="name">
    <h1>You entered: {{name}}</h1>
</div>
```

More info @ [https://www.w3schools.com/angular/angular_model.asp](https://www.w3schools.com/angular/angular_model.asp)
