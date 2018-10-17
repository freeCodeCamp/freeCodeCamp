---
title: Promise Resolve
localeTitle: 承诺解决
---
## 承诺解决

### 描述

`Promise.resolve`函数表示Promise的成功完成。此函数允许您将Promise返回给调用函数。

`Promise.resolve`接受一个参数返回调用函数。此参数可以是值，也可以是其他Promise。

resolve函数的“值”可以是基本的JavaScript类型，数组或对象。

```javascript
Promise.resolve('success'); // string 
 Promise.resolve([2, 3, 5]); // array 
 Promise.resolve({name: 'John', age: '43'}); // object 
```

“thenable”是一个将两个回调函数作为参数的函数。您可以使用第一个参数触发成功完成，第二个参数返回Promise上的错误。

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

将then函数链接到promise调用者将使您可以访问`Promise.resolve`的结果。

```javascript
promiseCallingFunction(paramList) 
  .then(function(value) { 
    /* 
     * this is where you get access to the value 
     * returned by a promise on successful completion 
     */ 
  }); 

```