---
title: AngularJS
---
## AngularJS

AngularJS (versions 1.x) is an open source front-end JavaScript framework. AngularJS extends HTML to develop rich and powerful front-ends. 
It reduces the repetitive use of HTML code. This repetition can be avoided by using the directives provided by AngularJS which saves 
much time and effort.

**Install**:

npm:

```shell 
npm install angular
```
HTML:

```html
<script src="/node_modules/angular/angular.js"></script>
```

bower:

```shell
bower install angular
```
HTML:

```html
<script src="/bower_components/angular/angular.js"></script>
```
# Starting With Angularjs
---
## Defining angular app:

```Script.js
var myFirstApp = angular.module('My First App',[]);
myFirstApp.controller('myFirstController',['$scope', function($scope){
  console.log('This is my first angularjs app.');
}]);

```
## Interpolation:

```Script.js
var myFirstApp = angular.module('My First App',[]);
myFirstApp.controller('myFirstController',['$scope', function($scope){
  $scope.name = 'John Doe';
}]);

HTML
<h1>{{name}}</h1>

```
