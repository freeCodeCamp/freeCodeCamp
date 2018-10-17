---
title: Promise Resolve
localeTitle: Promesa de resolución
---
## Promesa de resolución

### Descripción

Una función `Promise.resolve` indica la finalización exitosa de una Promesa. Esta función le permite devolver una Promesa a la función de llamada.

`Promise.resolve` toma un solo parámetro para volver a la función de llamada. Este parámetro puede ser un valor, una opción, u otra Promesa.

Un "valor" para una función de resolución puede ser tipos básicos de JavaScript, arrays u objetos.

```javascript
Promise.resolve('success'); // string 
 Promise.resolve([2, 3, 5]); // array 
 Promise.resolve({name: 'John', age: '43'}); // object 
```

Un "thenable" es una función que toma dos funciones de devolución de llamada como parámetros. Puede usar el primer parámetro para desencadenar una finalización exitosa y el segundo para devolver un error en la Promesa.

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

El encadenamiento de una función then a un llamante de promesa le dará acceso al resultado de `Promise.resolve` .

```javascript
promiseCallingFunction(paramList) 
  .then(function(value) { 
    /* 
     * this is where you get access to the value 
     * returned by a promise on successful completion 
     */ 
  }); 

```