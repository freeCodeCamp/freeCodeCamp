---
title: AngularJS Expressions
---
# AngularJS Expressions
------
AngularJS expressions can be written inside double braces: `{{ expression }}`.

AngularJS expressions can also be written inside a directive: `ng-bind="expression"`.

AngularJS will resolve the expression, and return the result exactly where the expression is written.

##### AngularJS expressions are much like JavaScript expressions: They can contain literals, operators, and variables.

Example `{{ 5 + 5 }}` or `{{ firstName + " " + lastName }}`

#### Sample HTML
```html
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="">
  <p>My first expression: {{ 5 + 5 }}</p>
</div>

</body>
</html>
```
#### More info @ [https://www.w3schools.com/angular/angular_expressions.asp](https://www.w3schools.com/angular/angular_expressions.asp)
