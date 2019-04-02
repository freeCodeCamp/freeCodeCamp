---
title: Function Invocation
localeTitle: استدعاء وظيفة
---
## استدعاء وظيفة

يتم تنفيذ الشفرة داخل إحدى الوظائف عندما يتم استدعاء الدالة. من الشائع استخدام المصطلح "استدعاء دالة" بدلاً من "استدعاء دالة".

يجب أن تكون الوظائف في النطاق عندما يتم استدعاؤها. نطاق الوظيفة هو الوظيفة التي يتم الإعلان عنها ، أو البرنامج بالكامل إذا تم الإعلان عنه في المستوى الأعلى.

 `function myFunction(a, b) { 
  return a * b; 
 } 
 myFunction(10, 2);           // Function invocation, will return 20 
 
 //optional parameters (es6 only) 
 //allow to set optional parameters 
 
 function myFunction(a, b = 10) { 
  return a * b; 
 } 
 myFunction(1);           // Function invocation, will return 10 
 myFunction(1,5);           // Function invocation, will return 5 
` 

في مثال التعليمة البرمجية ، يكون a و b هما معلمات الدالة التي تحتوي على القيمتين 10 و 2 ، وهما الوسيطات المستخدمة في استدعاء الدالة.

### استدعاء وظيفة كوسيلة

في JavaScript ، يمكنك تحديد الدالات كطرق كائن.

المثال التالي يقوم بإنشاء كائن ( `myObject` ) ، مع خاصيتين ( `firstName` و `lastName` ) ، وطريقة ( `fullName` ):

 `var myObject = { 
  firstName:"John", 
  lastName: "Doe", 
  fullName: function () { 
    return this.firstName + " " + this.lastName; 
  } 
 } 
 myObject.fullName();         // Function invoked as a method, will return "John Doe" 
` 

### وظائف السهم

في الإصدار الأحدث من Javascript ، يمكنك أيضًا تقصير البنية باستخدام Arrow Functions. يوضح ما يلي وظيفتين. تتم كتابة واحدة في النموذج القياسي ، يتم كتابة واحد كدالة سهم. ضع في اعتبارك أن وظائف الأسهم لا تملك هذه الخاصة بها أو الحجج أو السوبر أو new.target.

 `//regular function 
 
 function addStuff(args) { 
   return args + 2; 
 } 
 
 addStuff(2); 
 //returns 4 
 
 //arrow function 
 
 var addStuff = (args) => args + 2; 
 addStuff(2); 
 //returns 4 
` 

هذه النسخة المختصرة من وظيفة السهم لها عودة ضمنية حتى لا تحدد بيان إرجاع.

### معلومات اكثر:

*   وثائق الوظيفة: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)