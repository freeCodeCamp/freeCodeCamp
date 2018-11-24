---
title: AngularJS
---
## AngularJS

[AngularJS](https://angularjs.org/) is an open source front-end JavaScript framework. AngularJS extends HTML to develop rich and powerful front-ends. 
It reduces the repetitive use of HTML code. This repetition can be avoided by using the directives provided by AngularJS which saves much time and effort.

## AngularJS Expressions
- Expressions can be written inside double braces: `{{ expression }}`
- Expressions can also be written inside a directive: `ng-bind="expression"`
- AngularJS will resolve the expression, and return the result exactly where the expression is written
- Expressions are much like JavaScript expressions: They can contain literals, operators, and variables.

Example:
```js
{{ 5 + 5 }} or {{ firstName + " " + lastName }}
```

Minimal example for usage of AngularJS in an HTML page:
```html
<!doctype html>
  <html ng-app>
    <head>
      <!-- include the AngularJS script -->
      <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular.min.js"></script>
    </head>
    <body>
      <div>
        <label>Your Name:</label>
        <input type="text" ng-model="yourName" placeholder="Enter your full name here">
        <hr>
        <h1>Hello {{yourName}}!</h1>
      </div>
    </body>
  </html>
```


## Install

It is recommended to source the script from Google's CDN (Content Delivery Network) in your deployed, customer facing app whenever possible (better caching, decreased latency, increased parallelism). Please check the latest version on [AngularJS](https://angularjs.org/).
```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular.min.js"></script>
```

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
