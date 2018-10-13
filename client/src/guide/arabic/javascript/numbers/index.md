---
title: Numbers
localeTitle: أعداد
---
## أعداد

يعتمد تطبيق `number` s في JavaScript على معيار `IEEE 754` ، الذي يُسمى غالبًا "نقطة عائمة".

[IEEE 754 ويكيبيديا لينك](https://en.wikipedia.org/wiki/IEEE_754) [IEEE 754 Double Decision Floating Point Visualization](http://bartaz.github.io/ieee754-visualization/)

وأعرب عدد الحرفية عموما `base-10` حرفية عشري.

 `var foo = 47; 
 var bar = 47.9; 
` 

الجزء الرئيسي من القيمة العشرية ، إذا كان `0` ، هو اختياري:

 `var same = 0.47; 
 var stillSame = .47; 
` 

وبالمثل ، فإن الجزء زائدة (الجزئي) من قيمة عشرية بعد `.` ، إذا كان `0` ، هو اختياري:

 `var a = 47.0; 
 var b = 47.; 
` 

بشكل افتراضي ، سيتم إخراج معظم الأرقام في شكل `base-10` decimals ، مع إزالة الكسر `0` ثانية. وبالتالي:

 `var foo = 47.300; 
 var bar = 47.0; 
 
 foo; // 47.3 
 bar; // 47 
` 

يمكن كتابة `numbers` كبيرة جدًا أو صغيرة جدًا على النحو التالي:

 `var foo = 47e8; // 4700000000 
 var baz = 47e-8; // 00.00000047 
` 

يمكن استخدام طريقة `toExponential` لتحويل `number` إلى `exponential notation` .

 `var foo = 47e8; 
 foo;  // 4700000000 
 foo.toExponential()   //"47e8" 
` 

لدى الأرقام الوصول إلى الأساليب المضمنة في `Number.prototype` .

فمثلا: `toFixed()` طريقة `toFixed()` رقمًا مع عدد محدد من الأرقام إلى يمين `toFixed()` العشرية.

 `var foo = 47.69; 
 foo.toFixed(0);  // "48" 
 foo.toFixed(1);  // "47.7" 
 foo.toFixed(2);  // "47.69" 
` 

> اكتب `Number.prototype` في متصفحك `Number.prototype` الطرق الأخرى المتاحة بنفسك.

#### معلومات اكثر:

1.  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
2.  [أرقام جافا سكريبت](https://www.w3schools.com/js/js_numbers.asp)

#### المراجع

1.  [أنواع وقواعد النحو](https://github.com/getify/You-Dont-Know-JS/tree/master/types%20%26%20grammar) كايل سيمبسون.
2.  [مواصفات لغة ECMAScript: 4.3.20](https://www.ecma-international.org/ecma-262/5.1/#sec-4.3.20)
3.  [مواصفات لغة ECMAScript: 15.7 عدد الكائنات](https://www.ecma-international.org/ecma-262/5.1/#sec-15.7)