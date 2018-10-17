---
title: Promise Reject
localeTitle: 承诺拒绝
---
## 承诺拒绝

`Promise.reject`函数向调用函数返回错误条件。它需要一个参数，一个Error对象或值作为拒绝的原因。

在Promise调用者的末尾链接catch函数将允许您捕获错误条件。

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