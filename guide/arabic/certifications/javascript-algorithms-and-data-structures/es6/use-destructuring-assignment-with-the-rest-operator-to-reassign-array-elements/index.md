---
title: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
localeTitle: استخدم Destructuring Assignment مع عامل التشغيل الباقي لإعادة تعيين عناصر المصفوفة
---
## استخدم Destructuring Assignment مع عامل التشغيل الباقي لإعادة تعيين عناصر المصفوفة

تذكر أن المشغل الباقي يسمح للأعداد المتغيرة من الوسيطات. في هذا التحدي ، عليك التخلص من العنصرين الأولين في مصفوفة.

## تلميح 1:

قم بتعيين أول عنصرين إلى متغيرين عشوائيين.

## تلميح 2:

اضبط الجزء المتبقي من المصفوفة على `...arr` .

\=======

## تلميح 1

استخدم destructuring لإنشاء متغير `arr` .

 `function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
` 

## تلميح 2

انشر معلمة `list` في `arr` .

 `function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [...arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
` 

## تلميح 3

استبعاد أول عنصرين من صفيف `arr` مع `,,` .

 `function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [,,...arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
` 

## تنبيه المفسد - الحل إلى الأمام!

 `function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [a, b, ...arr] = list; 
  // change code above this line 
  return arr; 
 } 
`