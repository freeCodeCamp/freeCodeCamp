---
title: Promise Resolve
localeTitle: وعد بالقرار
---
## وعد بالقرار

### وصف

تشير الدالة `Promise.resolve` إلى الإكمال الناجح لـ Promise. تتيح لك هذه الوظيفة إعادة الوعد إلى وظيفة الاستدعاء.

يأخذ `Promise.resolve` معلمة واحدة للعودة إلى وظيفة الاستدعاء. يمكن أن تكون هذه المعلمة إما قيمة ، أو قابلة للتشغيل ، أو وعد آخر.

يمكن أن تكون "القيمة" لدالة التصميم هي أنواع جافا سكريبت الأساسية ، أو المصفوفات ، أو الكائنات.

 `Promise.resolve('success'); // string 
 Promise.resolve([2, 3, 5]); // array 
 Promise.resolve({name: 'John', age: '43'}); // object 
` 

A "thenable" هي دالة تأخذ وظيفتي رد اتصال كمعلمات. يمكنك استخدام المعلمة الأولى لتشغيل عملية إكمال ناجحة ، والثاني لإرجاع خطأ في Promise.

 `thenableFunction = {then: function(onSuccesss, onFailure) { 
    if (condition === 'success') { 
      onSuccess(paramList); // success condition 
    } else { 
      onFailure(paramList); // error condition 
    } 
  } 
 } 
 
 Promise.resolve(thenableFunction); 
` 

سيؤدي تسلسل وظيفة ثم إلى متصل الوعد إلى الوصول إلى نتيجة `Promise.resolve` .

 `promiseCallingFunction(paramList) 
  .then(function(value) { 
    /* 
     * this is where you get access to the value 
     * returned by a promise on successful completion 
     */ 
  }); 
`