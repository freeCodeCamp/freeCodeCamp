---
title:  Iterate Through the Keys of an Object with a for...in Statement
localeTitle:  使用for ... in Statement中的对象键迭代
---
## 使用for ... in Statement中的对象键迭代

方法：

*   注意： `dot-notation`会导致此挑战出错。
*   必须使用`[square-bracket]`表示法来调用变量属性名称。
*   以下代码无效。

### 例1：

```javascript
for (let user in obj) { 
    if(obj.user.online === true) { 
      //code 
    } 
  } 
```

*   示例2演示了如何使用`[square-bracket]`表示法执行代码。

### 例2：

```javascript
for (let user in obj) { 
    if(obj[user]online === true) { 
      //code 
    } 
  } 
```

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
 function countOnline(obj) { 
  // change code below this line 
  let result = 0; 
  for (let user in obj) { 
    if(obj[user].online === true) { 
      result++; 
    } 
  } 
  return result; 
  // change code above this line 
 } 
 console.log(countOnline(users)); 

```