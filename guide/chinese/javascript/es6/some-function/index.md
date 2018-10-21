---
title: Some Function
localeTitle: 一些功能
---## 一些功能

`some()`函数用于验证数组中是否至少有一个元素满足给定条件。如果条件由一个元素满足，则该函数返回`true`如果任何元素满足条件，则返回false

某些函数的原始语法是：

```javascript
arr.some(function callback(currentValue, index, array) { 
  // Do some stuff with currentValue (index and array are optionals) 
 }, [thisArg]); 
```

### 示例（ES6）：

```javascript
const arr = [1, 4, 5, 11]; 
 if (arr.some(el => el % 2 == 0)) { 
  console.log("There's at least one even number"); 
 } 
```

`some()`是`Array`对象的一个​​方法，因此要将该函数传递给一个可迭代对象，必须确保该对象是一个Array。