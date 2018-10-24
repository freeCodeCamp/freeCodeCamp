---
title: AngularJS Directives
---
# AngularJS Directives
------
Directives are a unique and powerful feature available in AngularJS. Directives let you invent new HTML syntax, specific to your application. (more info @[https://angularjs.org/](https://angularjs.org/))

Example
```html
<div ng-app="" ng-init="firstName='John'">

<p>Name: <input type="text" ng-model="firstName"></p>
<p>You wrote: {{ firstName }}</p>

</div>
```
The `ng-app` directive initializes an AngularJS application.

The `ng-init` directive initializes application data.

The `ng-model` directive binds the value of HTML controls (input, select, textarea) to application data.

More info @ [https://www.w3schools.com/angular/angular_directives.asp](https://www.w3schools.com/angular/angular_directives.asp)
