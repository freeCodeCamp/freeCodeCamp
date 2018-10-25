---
title: Make Code More Reusable with the this Keyword
localeTitle: 使用此关键字使代码更可重用
---
## 使用此关键字使代码更可重用

### 方法：

这个挑战只是展示了`this`关键字的强大功能。用`dog.numLegs`替换`dog.numLegs`通过直接引用此对象`this.numLegs`强化我们的代码。 [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)有很多例子来确定`this`关键字的效果。

### 解：

```javascript
let dog = { 
  name: "Spot", 
  numLegs: 4, 
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";} 
 }; 
 
 dog.sayLegs(); 

```