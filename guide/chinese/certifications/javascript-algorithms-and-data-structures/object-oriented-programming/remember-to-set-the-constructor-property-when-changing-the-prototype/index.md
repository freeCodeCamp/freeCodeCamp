---
title: Remember to Set the Constructor Property when Changing the Prototype
localeTitle: 请记住在更改原型时设置构造函数属性
---
## 请记住在更改原型时设置构造函数属性

*   在将原型设置为新对象时，请记住定义构造函数属性。

# 解

```javascript
Dog.prototype = { 
 
  constructor: Dog, // Solution 
 
  numLegs: 2, 
  eat: function() { 
    console.log("nom nom nom"); 
  }, 
  describe: function() { 
    console.log("My name is " + this.name); 
  } 
 }; 

```