---
title: Function Length
localeTitle: طول الوظيفة
---
## طول الوظيفة

تحمل الخاصية `length` في كائن الدالة عدد الوسيطات المتوقع بواسطة الدالة عند استدعاء.

 `function noArgs() { } 
 
 function oneArg(a) { } 
 
 console.log(noArgs.length); // 0 
 
 console.log(oneArg.length); // 1 
` 

### ES2015 التركيب

ES2015 ، أو ES6 كما يطلق عليه عادة ، قدم المعلمات المتبقية العامل والافتراضية وظيفة. كل من هذه الإضافات تغيير طريقة عمل الخاصية `length` .

إذا تم استخدام عامل التشغيل المتبقي أو المعلمات الافتراضية في تعريف الدالة ، فإن خاصية `length` ستشمل فقط عدد الوسيطات قبل عامل تشغيل باقي أو معلمة افتراضية.

 `function withRest(...args) { } 
 
 function withArgsAndRest(a, b, ...args) { } 
 
 function withDefaults(a, b = 'I am the default') { } 
 
 console.log(withRest.length); // 0 
 
 console.log(withArgsAndRest.length); // 2 
 
 console.log(withDefaults.length); // 1 
` 

يمكن العثور على مزيد من المعلومات حول `Function.length` على [مستندات MDN الخاصة بـ Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length) .