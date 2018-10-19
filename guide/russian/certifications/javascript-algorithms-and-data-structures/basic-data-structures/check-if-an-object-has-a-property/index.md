---
title: Check if an Object has a Property
localeTitle: Проверьте, имеет ли объект свойство
---
## Проверьте, имеет ли объект свойство

Метод:

*   Самый простой способ завершить эту задачу - создать « `ìf-statement` для проверки, чтобы убедиться, что объект не содержит всех пользователей, а затем вернуть истинную или ложную инструкцию. Первое решение делает именно это.
*   Второе решение работает точно так же, только в нем используется одна строка кода - `Conditional(ternary)-Operator` .

[developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) предоставляет более глубокий анализ тернарного оператора.

### Решение-1:

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

### Решение-2:

```javascript
function isEveryoneHere(obj) { 
  return (users.hasOwnProperty('Alan','Jeff','Sarah','Ryan')) ? true : false; 
 } 

```