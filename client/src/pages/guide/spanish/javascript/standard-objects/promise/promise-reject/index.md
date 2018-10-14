---
title: Promise Reject
localeTitle: Promesa de rechazo
---
## Promesa de rechazo

Una función `Promise.reject` devuelve una condición de error a la función que llama. Toma un solo parámetro, un objeto o valor de Error, como la razón del rechazo.

El encadenamiento de una función de captura al final de una llamada de Promise le permitirá detectar la condición de error.

```javascript
promiseCallingFunction(paramList) 
  .then( ... ) 
  ... 
  .then( ... ) 
  .catch( function(err) { // catch function 
    /* 
     * this is where you can access the reason for the rejection 
     */ 
  }); 

```