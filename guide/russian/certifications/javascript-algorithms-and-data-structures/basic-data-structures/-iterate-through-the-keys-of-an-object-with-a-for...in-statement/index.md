---
title:  Iterate Through the Keys of an Object with a for...in Statement
localeTitle:  Итерация через ключи объекта с помощью for for ... in Statement
---
## Итерация через ключи объекта с помощью for for ... in Statement

Метод:

*   Примечание. `dot-notation` вызовет ошибки в этой проблеме.
*   `[square-bracket]` notation должна использоваться для вызова имени свойства переменной.
*   Следующий код не будет работать.

### Пример 1:

```javascript
for (let user in obj) { 
    if(obj.user.online === true) { 
      //code 
    } 
  } 
```

*   В примере 2 показано, как использовать нотацию с `[square-bracket]` код будет выполнен.

### Пример 2:

```javascript
for (let user in obj) { 
    if(obj[user]online === true) { 
      //code 
    } 
  } 
```

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