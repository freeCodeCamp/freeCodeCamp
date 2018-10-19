---
title: Generate an Array of All Object Keys with Object.keys()
localeTitle: Генерировать массив всех ключей объекта с помощью Object.keys ()
---
## Генерировать массив всех ключей объекта с помощью Object.keys ()

### Метод:

*   Чтобы вернуть массив пользователей, метод `Object.keys()` должен принять аргумент.
*   Эта задача может быть решена с помощью оператора прямой строки.

### Решение:

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