---
title: Write Reusable JavaScript with Functions
localeTitle: اكتب Reusable JavaScript مع الوظائف
---
في JavaScript ، يمكننا تقسيم الشفرة إلى أجزاء قابلة لإعادة الاستخدام تسمى الوظائف.

فيما يلي مثال على وظيفة:

 `function functionName() { 
  console.log("Hello World"); 
 } 
` 

يمكنك `call` أو `invoke` هذه الدالة باستخدام اسمها متبوعًا بأقواس ، مثل:

 `functionName(); 
` 

في كل مرة يتم استدعاء الدالة فإنه سيتم طباعة الرسالة "Hello World" على وحدة تحكم dev. سيتم تنفيذ جميع التعليمات البرمجية بين الأقواس المتعرجة في كل مرة يتم استدعاء الدالة.

هنا مثال آخر:

 `function otherFunctionName (a, b) { 
    return(a + b); 
 } 
` 

يمكننا `call` أو `invoke` مثل هذا:

 `otherFunctionName(1,2); 
` 

وسوف يتم تشغيلها وإرجاع قيمتها المرتجعة لنا.