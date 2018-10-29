---
title: Construct JavaScript Objects with Functions
localeTitle: 用函数构造JavaScript对象
---
使用构造函数，可以使用蓝图或构造函数轻松创建新对象。声明语法略有不同，但仍然易于记忆。
```
// Let's add the properties engines and seats to the car in the same way that the property wheels has been added below. They should both be numbers. 
 var Car = function() { 
  this.wheels = 4; 
  this.engines = 1; 
  this.seats = 1; 
 }; 
 
 var myCar = new Car(); 
```

构造函数的名称通常以大写字母开头（与其他函数不同，后者往往以小写字符开头）。大写字母应该有助于提醒开发人员在使用该函数创建对象时使用new关键字。