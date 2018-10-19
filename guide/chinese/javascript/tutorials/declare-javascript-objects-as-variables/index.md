---
title: Declare JavaScript Objects as Variables
localeTitle: 将JavaScript对象声明为变量
---
这有一个简单的格式。您声明您的变量并使其等于`{ key: value}`形式的对象
```
var car = { 
  "wheels":4, 
  "engines":1, 
  "seats":5 
 }; 
```

您可以使用点表示法或括号表示法访问对象的属性。

使用点符号：

```javascript
console.log(car.wheels); // 4 
```

使用括号表示法：

```javascript
console.log(car["wheels"]); // 1 
```

使用动态括号表示法：

```javascript
var seatsProperty = "seats"; 
 console.log(car[seatsProperty]); // 5 

```