---
title: Accessing Object Properties with Variables
localeTitle: 使用变量访问对象属性
---
## 使用变量访问对象属性

这是一个可行的解决方案，以防您遇到困难：

```js
// Setup 
 var testObj = { 
  12: "Namath", 
  16: "Montana", 
  19: "Unitas" 
 }; 
 
 // Only change code below this line; 
 
 var playerNumber = 16;       // Change this Line 
 var player = testObj[playerNumber];   // Change this Line 

```