---
title: Arrow Functions
localeTitle: 箭头功能
---
Arrow函数是用于编写JavaScript函数表达式的新ES6语法。较短的语法节省了时间，并简化了功能范围。

## 什么是箭头功能？

箭头函数表达式是使用“胖箭头”标记（ `=>` ）编写函数表达式的更简洁的语法。

### 基本语法

以下是箭头功能的基本示例：

```javascript
// ES5 syntax 
 var multiply = function(x, y) { 
  return x * y; 
 }; 
 
 // ES6 arrow function 
 var multiply = (x, y) => { return x * y; }; 
 
 // Or even simpler 
 var multiply = (x, y) => x * y; 
```

您不再需要`function`和`return`关键字，甚至是大括号。

### 简化了`this`

在箭头函数之前，新函数定义了它们自己的`this`值。要在传统的函数表达式中使用`this` ，我们必须编写一个类似的解决方法：

```javascript
// ES5 syntax 
 function Person() { 
  // we assign `this` to `self` so we can use it later 
  var self = this; 
  self.age = 0; 
 
  setInterval(function growUp() { 
    // `self` refers to the expected object 
    self.age++; 
  }, 1000); 
 } 
```

箭头功能没有定义它自己的`this`值，它继承了`this`从封闭功能：

```javascript
// ES6 syntax 
 function Person(){ 
  this.age = 0; 
 
  setInterval(() => { 
    // `this` now refers to the Person object, brilliant! 
    this.age++; 
  }, 1000); 
 } 
 
 var p = new Person(); 
```

#### 进一步阅读

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)