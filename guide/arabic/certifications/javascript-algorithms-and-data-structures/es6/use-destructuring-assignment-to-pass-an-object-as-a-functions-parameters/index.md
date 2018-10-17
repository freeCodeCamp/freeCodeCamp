---
title: Use Destructuring Assignment to Pass an Object as a Function's Parameters
localeTitle: استخدم Destructuring Assignment لتمرير كائن كمعامل الدالة
---
## استخدم Destructuring Assignment لتمرير كائن كمعامل الدالة

يمكنك تمرير الكائن بأكمله ، ثم اختيار السمات المحددة التي تريدها باستخدام `.` المشغل أو العامل. لكن ES6 يقدم خيار أكثر أناقة!

## تلميح 1:

تخلص من `stats` ، وتحقق مما إذا كان بإمكانك تدميرها. نحن بحاجة إلى `max` و `min` من `stats` .

## تحذير المفسد - حلول قادمة!

## الحل 1:

 `const half = (function() { 
  "use strict"; // do not change this line 
 
  // change code below this line 
  return function half({max, min}) { 
    // use function argument destructuring 
    return (max + min) / 2.0; 
  }; 
  // change code above this line 
 
 })(); 
` 

لاحظ أننا ندمر `stats` لتمرير اثنين من صفاتها - `max` `min` - إلى الوظيفة. لا تنس تعديل بيان الإرجاع الثاني. تغيير `stats.max` إلى `max` ، وتغيير `stats.min` إلى `min` فقط.

## الحل 2:

هنا هو حل آخر يعمل. ليس الكثير من الاختلاف ، بخلاف حقيقة أن الوظيفة لا تملك اسمًا.

 `const half = (function() { 
  "use strict"; // do not change this line 
 
  // change code below this line 
  return (({max, min}) => { 
    // use function argument destructuring 
    return (max + min) / 2.0; 
  }); 
  // change code above this line 
 
 })(); 
`