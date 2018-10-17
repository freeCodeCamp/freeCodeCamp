---
title: Introducing Else If statements
localeTitle: إدخال آخر إذا البيانات
---
## إدخال آخر إذا البيانات

تذكر استخدام Read-Search-Ask إذا واجهتك مشكلة. حاول إقران البرنامج وكتابة التعليمات البرمجية الخاصة بك.

\### شرح المشكلة:

 `function testElseIf(val) { 
  if (val > 10) { 
    return "Greater than 10"; 
  } 
 
  if (val < 5) { 
    return "Smaller than 5"; 
  } 
 
  return "Between 5 and 10"; 
 } 
 
 // Change this value to test 
 testElseIf(7); 
` 

سنقوم بتعديل الشفرة الموجودة أعلاه بحيث تتبع تدفق المنطق الذي **يتضمنه** بيان آخر.

\### تلميح: 1 `javascript if (val > 10) { return "Greater than 10"; }` كل ما `if` العبارات ومختلف المتغيرات تبدأ ببيان `if` .

> _حاول أن تحل المشكلة الآن_

\### تلميح: 2 `javascript else if (val < 5) { return "Smaller than 5"; }` التصريحات بين `if` البيان و `else` بيان في **آخر، إذا** تدفق هم في آخر اذا شكل

> _حاول أن تحل المشكلة الآن_

\### تلميح: 3 `javascript else { return "Between 5 and 10"; }` البيان الأخير في **آخر اذا** التدفق في `else` شكل ### تنبيه المفسد! ![المفسد](http://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif) الحل في المستقبل! ## حل الرمز الأساسي:

 `function testElseIf(val) { 
  if (val > 10) { 
    return "Greater than 10"; 
  } 
 
  else if (val < 5) { 
    return "Smaller than 5"; 
  } 
 
  else { 
  return "Between 5 and 10"; 
  } 
 } 
 
 // Change this value to test 
 testElseIf(7); 
` 

: صاروخ: [تشغيل الكود](https://repl.it/@RyanPisuena/GoldenWorriedRuntime) ## شرح الكود بنية **آخر، إذا تدفق المنطق** هو أولي `if` البيان، أكثر واحد `if-else` التصريحات، ونهائي واحد `else` بيان.

### مصادر

*   ["if… else" - _MDN JavaScript reference_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)