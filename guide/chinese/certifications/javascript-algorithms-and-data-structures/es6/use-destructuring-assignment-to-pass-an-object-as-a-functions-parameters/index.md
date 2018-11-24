---
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
localeTitle: 使用解构分配将对象作为函数的参数传递
---
## 使用解构分配将对象作为函数的参数传递

您可以传递整个对象，然后使用选择所需的特定属性`.`运营商。但ES6提供了更优雅的选择！

## 提示1：

摆脱`stats` ，看看你是否可以解构它。我们需要`max`和`min`的`stats` 。

## 扰流板警告 - 未来的解决方案！

## 解决方案1：

```javascript
const half = (function() { 
  "use strict"; // do not change this line 
 
  // change code below this line 
  return function half({max, min}) { 
    // use function argument destructuring 
    return (max + min) / 2.0; 
  }; 
  // change code above this line 
 
 })(); 
```

请注意，我们正在对`stats`进行解构，以将其两个属性（ `max`和`min` ）传递给函数。不要忘记修改第二个return语句。将`stats.max`更改为`max` ，并将`stats.min`更改为`min` 。

## 解决方案2：

这是另一种有效的解决方案。除了函数没有名称这一事实之外，没什么区别。

```javascript
const half = (function() { 
  "use strict"; // do not change this line 
 
  // change code below this line 
  return (({max, min}) => { 
    // use function argument destructuring 
    return (max + min) / 2.0; 
  }); 
  // change code above this line 
 
 })(); 

```