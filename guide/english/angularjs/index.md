---
title: AngularJS
---
## AngularJS

AngularJS (versions 1.x) is an open source front-end JavaScript framework. AngularJS extends HTML to develop rich and powerful front-ends. 
It reduces the repetitive use of HTML code. This repetition can be avoided by using the directives provided by AngularJS which saves 
much time and effort.

## AngularJS Expressions
AngularJS expressions can be written inside double braces: {{ expression }}.
AngularJS expressions can also be written inside a directive: ng-bind="expression".
AngularJS will resolve the expression, and return the result exactly where the expression is written.
AngularJS expressions are much like JavaScript expressions: They can contain literals, operators, and variables.
Example {{ 5 + 5 }} or {{ firstName + " " + lastName }}

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
