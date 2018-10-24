---
title: AngularJS Data Binding
---
# AngularJS Data Binding
------

* Data-binding is an automatic way of updating the view whenever the model changes, as well as updating the model whenever the view changes. This is awesome because it eliminates DOM manipulation from the list of things you have to worry about.
(more info @ [https://angularjs.org/](https://angularjs.org/))

Sample Javascript
```javascript
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstname = "John";
    $scope.lastname = "Doe";
});
```
Sample HTML
```html
<p ng-bind="firstname"></p>
```
OR you can also use double braces {{ }} to display content from the model:
```html
<p>{{firstname}}</p>
```
More info @[https://www.w3schools.com/angular/angular_databinding.asp](https://www.w3schools.com/angular/angular_databinding.asp)
