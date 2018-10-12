---
title: Promise Reject
localeTitle: وعد رفض
---
## وعد رفض

إرجاع دالة `Promise.reject` شرط خطأ إلى الدالة الاستدعاء. يأخذ معلمة واحدة ، كائن خطأ أو قيمة ، كسبب للرفض.

سيسمح لك تسلسل وظيفة catch في نهاية المتصل Promise بالتقاط حالة الخطأ.

 `promiseCallingFunction(paramList) 
  .then( ... ) 
  ... 
  .then( ... ) 
  .catch( function(err) { // catch function 
    /* 
     * this is where you can access the reason for the rejection 
     */ 
  }); 
`