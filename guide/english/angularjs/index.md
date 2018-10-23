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

---
Title:AngularJa Basics
---
##AngularJs

**Why AngularJS?**

HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.

**TheBasics:**
<!doctype html>
<html ng-app>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular.min.js"></script>
  </head>
  <body>
    <div>
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <hr>
      <h1>Hello {{yourName}}!</h1>
    </div>
  </body>
</html>

**Extensibilty:**
AngularJS is a toolset for building the framework most suited to your application development. It is fully extensible and works well with other libraries. Every feature can be modified or replaced to suit your unique development workflow and feature needs. Read on to find out how.
