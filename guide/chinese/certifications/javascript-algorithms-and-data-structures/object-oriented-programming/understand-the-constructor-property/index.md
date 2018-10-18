---
title: Understand the Constructor Property
localeTitle: 理解构造函数属性
---
## 理解构造函数属性

### 方法

只需完成类似于给定示例的功能。使用`if-statement`来测试`candidate`是否是`Dog` 。

### 解

```javascript
function Dog(name) { 
  this.name = name; 
 } 
 
 // Add your code below this line 
 function joinDogFraternity(candidate) { 
  if(candidate.constructor === Dog) { 
    return true; 
  } 
  else { 
    return false; 
  } 
 } 

```