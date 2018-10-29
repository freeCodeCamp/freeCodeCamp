---
title: Promise.prototype.then
localeTitle: Promise.prototype.then
---
## Promise.prototype.then

Uma função `Promise.prototype.then` aceita dois argumentos e retorna um Promise.

O primeiro argumento é uma função exigida que aceita um argumento. O cumprimento bem-sucedido de uma promessa ativará essa função.

O segundo argumento é uma função opcional que também aceita um argumento próprio. Um erro ou rejeição de uma promessa lançará essa função.

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

Promise.prototype.then `allows you to perform many asynchronous activities in sequence. You do this by attaching one` função \`\` \`a outra separada por um operador de ponto.

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

#### Mais Informações: