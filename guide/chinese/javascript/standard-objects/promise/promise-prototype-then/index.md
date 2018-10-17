---
title: Promise.prototype.then
localeTitle: Promise.prototype.then
---
## Promise.prototype.then

`Promise.prototype.then`函数接受两个参数并返回一个Promise。

第一个参数是一个接受一个参数的必需函数。成功实现承诺将触发此功能。

第二个参数是一个可选函数，它也接受一个自己的参数。抛出错误或拒绝承诺将触发此功能。

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

Promise.prototype.then `allows you to perform many asynchronous activities in sequence. You do this by attaching one` \`\`\`函数`allows you to perform many asynchronous activities in sequence. You do this by attaching one`到另一个由点运算符分隔的函数来`allows you to perform many asynchronous activities in sequence. You do this by attaching one`操作。

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

#### 更多信息：