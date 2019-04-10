---
title: Check if an Object has a Property
localeTitle: 检查对象是否具有属性
---
## 检查对象是否具有属性

方法：

*   完成此挑战的最简单方法是创建一个“ `ìf-statement`来检查对象是否包含所有用户，然后返回true或false语句。第一个解决方案就是这样做的。
*   第二个解决方案以完全相同的方式工作，只有它在函数内使用1行代码 - `Conditional(ternary)-Operator` - `Conditional(ternary)-Operator` 。

[developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)对三元运算符进行了更深入的分析。

### 方案1：

```javascript
let users = { 
  Alan: { 
    age: 27, 
    online: true 
  }, 
  Jeff: { 
    age: 32, 
    online: true 
  }, 
  Sarah: { 
    age: 48, 
    online: true 
  }, 
  Ryan: { 
    age: 19, 
    online: true 
  } 
 }; 
 
 function isEveryoneHere(obj) { 
  // change code below this line 
  if(users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) { 
    return true; 
  } 
  return false; 
  // change code above this line 
 } 
 
 console.log(isEveryoneHere(users)); 
```

### 方案2：

```javascript
function isEveryoneHere(obj) { 
  return (users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) ? true : false; 
 } 

```