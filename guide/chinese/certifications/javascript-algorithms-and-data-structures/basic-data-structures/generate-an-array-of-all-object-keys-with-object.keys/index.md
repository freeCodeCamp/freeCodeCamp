---
title: Generate an Array of All Object Keys with Object.keys()
localeTitle: 使用Object.keys（）生成所有对象键的数组
---
## 使用Object.keys（）生成所有对象键的数组

### 方法：

*   要返回用户数组， `Object.keys()`方法必须采用争论。
*   可以使用单行返回语句来解决此挑战。

### 解：

```javascript
let users = { 
  Alan: { 
    age: 27, 
    online: false 
  }, 
  Jeff: { 
    age: 32, 
    online: true 
  }, 
  Sarah: { 
    age: 48, 
    online: false 
  }, 
  Ryan: { 
    age: 19, 
    online: true 
  } 
 }; 
 
 function getArrayOfUsers(obj) { 
  // change code below this line 
  return Object.keys(obj); 
  // change code above this line 
 } 
 
 console.log(getArrayOfUsers(users)); 

```