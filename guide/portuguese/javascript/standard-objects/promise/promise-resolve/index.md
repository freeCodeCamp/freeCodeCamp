---
title: Promise Resolve
localeTitle: Promise Resolve
---
## Promise Resolve

### Descrição

Uma função `Promise.resolve` indica a conclusão bem-sucedida de uma promessa. Esta função permite que você retorne um Promise para a função de chamada.

`Promise.resolve` usa um único parâmetro para retornar à função de chamada. Esse parâmetro pode ser um valor, uma alternativa ou outra promessa.

Um "valor" para uma função de resolução pode ser tipos, matrizes ou objetos básicos de JavaScript.

```javascript
Promise.resolve('success'); // string 
 Promise.resolve([2, 3, 5]); // array 
 Promise.resolve({name: 'John', age: '43'}); // object 
```

Um "thenable" é uma função que usa duas funções de retorno de chamada como parâmetros. Você pode usar o primeiro parâmetro para acionar uma conclusão bem-sucedida e o segundo para retornar um erro na Promessa.

```javascript
thenableFunction = {then: function(onSuccesss, onFailure) { 
    if (condition === 'success') { 
      onSuccess(paramList); // success condition 
    } else { 
      onFailure(paramList); // error condition 
    } 
  } 
 } 
 
 Promise.resolve(thenableFunction); 
```

Encadear uma função para um chamador de promessa lhe dará acesso ao resultado de `Promise.resolve` .

```javascript
promiseCallingFunction(paramList) 
  .then(function(value) { 
    /* 
     * this is where you get access to the value 
     * returned by a promise on successful completion 
     */ 
  }); 

```