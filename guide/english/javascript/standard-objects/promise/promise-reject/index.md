---
title: Promise Reject
---
## Promise Reject

 A ```Promise.reject``` function returns an error condition to the calling function. It takes a single parameter, an Error object or value, as the reason for rejection.

Chaining a catch function at the end of a Promise caller will allow you to catch the error condition.

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
