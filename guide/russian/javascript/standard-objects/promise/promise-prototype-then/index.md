---
title: Promise.prototype.then
localeTitle: Promise.prototype.then
---
## Promise.prototype.then

Функция `Promise.prototype.then` принимает два аргумента и возвращает Promise.

Первый аргумент - это требуемая функция, которая принимает один аргумент. Успешное выполнение обещания вызовет эту функцию.

Второй аргумент - необязательная функция, которая также принимает один собственный аргумент. Выброшенная ошибка или отказ от обещания вызовет эту функцию.

```javascript
   function onResolved (resolvedValue) { 
     /* 
     * access to resolved values of promise 
     */ 
   } 
 
  function onRejected(rejectedReason) { 
     /* 
     * access to rejection reasons of promise 
     */ 
   } 
 
  promiseReturningFunction(paramList) 
     .then( // then function 
       onResolved, 
       [onRejected] 
     ); 
 ``` 
```

Promise.prototype.then `allows you to perform many asynchronous activities in sequence. You do this by attaching one` функцию \`\` \`к другому, разделенному оператором точки.

```javascript
   promiseReturningFunction(paramList) 
   .then( // first then function 
     function(arg1) { 
       // ... 
       return someValue; 
     } 
   ) 
   ... 
   .then( // nth then function 
     function(arg2) { 
       // ... 
       return otherValue; 
     } 
   ) 
```

#### Дополнительная информация: