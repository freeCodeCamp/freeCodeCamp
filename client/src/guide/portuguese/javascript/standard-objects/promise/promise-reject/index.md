---
title: Promise Reject
localeTitle: Promise Rejeitar
---
## Promise Rejeitar

Uma função `Promise.reject` retorna uma condição de erro para a função de chamada. É necessário um único parâmetro, um objeto ou valor Error, como o motivo da rejeição.

Encadear uma função catch no final de um chamador Promise lhe permitirá capturar a condição de erro.

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