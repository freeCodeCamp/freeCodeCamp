---
title: Object.prototype.hasOwnProperty
localeTitle: Object.prototype.hasOwnProperty
---
## Object.prototype.hasOwnProperty

### بناء الجملة

`Object.hasOwnProperty(prop)`

### وصف

ترجع **الدالة hasOwnProperty ()** قيمة [منطقية](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) تشير إلى ما إذا كان الكائن يملك الخاصية المحددة.

هذه طريقة ملائمة للتحقق مما إذا كان الكائن يحتوي على الخاصية المحددة أم لا؛ العودة الصواب / خطأ وفقا لذلك.

### المعلمات

##### دعم

[سلسلة](https://developer.mozilla.org/en-US/docs/Glossary/String) أو [رمز](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) للاختبار.

### أمثلة

باستخدام **hasOwnProperty ()** لاختبار ما إذا كانت خاصية موجودة أم لا في كائن محدد:

 `var course = { 
  name: 'freeCodeCamp', 
  feature: 'is awesome', 
 } 
 
 var student = { 
  name: 'enthusiastic student', 
 } 
 
 course.hasOwnProperty('name');  // returns true 
 course.hasOwnProperty('feature');   // returns true 
 
 student.hasOwnProperty('name');  // returns true 
 student.hasOwnProperty('feature'); // returns false 
` 

#### الروابط

[MDN hasOwnProperty](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)