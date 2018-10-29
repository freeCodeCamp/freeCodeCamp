---
title: Use Closure to Protect Properties Within an Object from Being Modified Externally
localeTitle: 使用闭包保护对象内的属性不被外部修改
---
## 使用闭包保护对象内的属性不被外部修改

### 方法

就像在给出的示例中一样，不是使用`this`关键字声明`weight`变量，而是必须使用`let`关键字将其声明为私有变量。这样它只能在`Bird`函数内访问。然后必须在`Bird`函数内添加`getWeight`方法以访问`weight`变量。

### 解

```javascript
function Bird() { 
  let weight = 15; 
 
  this.getWeight = function() { 
    return weight; 
  }; 
 
 } 

```