---
title: Promise Reject
localeTitle: Promise Reject
---
## Promise Reject

Функция `Promise.reject` возвращает условие ошибки вызывающей функции. В качестве причины отклонения требуется один параметр, объект или значение ошибки.

Объединение функции catch в конце вызывающего абонента Promise позволит вам уловить условие ошибки.

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