---
title: Arrow Functions
localeTitle: وظائف السهم
---
وظائف Arrow هي بنية ES6 جديدة لكتابة تعبيرات دالة JavaScript. يوفر بناء الجملة الأقصر الوقت ، فضلاً عن تبسيط نطاق الوظائف.

## ما هي وظائف السهم؟

تعبير دالة السهم هو صيغة موجزة أكثر لكتابة تعبيرات الدالة باستخدام الرمز المميز "fat fat" ( `=>` ).

### التركيب الأساسي

فيما يلي مثال أساسي لوظيفة السهم:

 `// ES5 syntax 
 var multiply = function(x, y) { 
  return x * y; 
 }; 
 
 // ES6 arrow function 
 var multiply = (x, y) => { return x * y; }; 
 
 // Or even simpler 
 var multiply = (x, y) => x * y; 
` 

لم تعد تحتاج إلى `function` `return` الكلمات الرئيسية ، أو حتى الأقواس المتعرجة.

### تبسيط `this`

قبل ظائف السهم، حددت وظائف جديدة خاصة بهم `this` القيمة. لاستخدام `this` داخل تعبير دالة تقليدي ، يجب علينا كتابة حل بديل مثل:

 ``// ES5 syntax 
 function Person() { 
  // we assign `this` to `self` so we can use it later 
  var self = this; 
  self.age = 0; 
 
  setInterval(function growUp() { 
    // `self` refers to the expected object 
    self.age++; 
  }, 1000); 
 } 
`` 

لا تحدد وظيفة السهم `this` القيمة الخاصة به ، بل إنها تكتسب `this` من وظيفة الإحاطة:

 ``// ES6 syntax 
 function Person(){ 
  this.age = 0; 
 
  setInterval(() => { 
    // `this` now refers to the Person object, brilliant! 
    this.age++; 
  }, 1000); 
 } 
 
 var p = new Person(); 
`` 

#### قراءة متعمقة

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)