---
title: Promise.prototype.then
localeTitle: Promise.prototype.then
---
## Promise.prototype.then

Una función `Promise.prototype.then` acepta dos argumentos y devuelve una Promesa.

El primer argumento es una función requerida que acepta un argumento. El cumplimiento exitoso de una Promesa activará esta función.

El segundo argumento es una función opcional que también acepta un argumento propio. Un error lanzado o el rechazo de una promesa activará esta función.

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

Promise.prototype.then le `allows you to perform many asynchronous activities in sequence. You do this by attaching one` agregue `allows you to perform many asynchronous activities in sequence. You do this by attaching one` función then\`\`\` a otra separada por un operador de puntos.

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

#### Más información: