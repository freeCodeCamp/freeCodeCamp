---
title: Promise.prototype.then
localeTitle: Promise.prototype.then
---
## Promise.prototype.then

تقبل وظيفة `Promise.prototype.then` الوسيطتين وتقوم بإرجاع Promise.

الوسيطة الأولى هي دالة مطلوبة تقبل وسيطة واحدة. النجاح في تنفيذ الوعد سيؤدي إلى هذه الوظيفة.

الوسيطة الثانية هي دالة اختيارية تقبل أيضًا وسيطة واحدة خاصة بها. سيؤدي خطأ يرمى أو رفض من Promise إلى تشغيل هذه الوظيفة.

 `   function onResolved (resolvedValue) { 
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
` 

Promise.prototype.then `allows you to perform many asynchronous activities in sequence. You do this by attaching one` وظيفة `allows you to perform many asynchronous activities in sequence. You do this by attaching one` \`\` إلى أخرى مفصولة بواسطة مشغل النقطة.

 `   promiseReturningFunction(paramList) 
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
` 

#### معلومات اكثر: