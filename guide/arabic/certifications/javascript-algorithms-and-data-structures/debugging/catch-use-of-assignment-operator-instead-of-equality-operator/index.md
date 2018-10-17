---
title: Catch Use of Assignment Operator Instead of Equality Operator
localeTitle: قبض على استخدام مشغل التعيين بدلا من مشغل المساواة
---
## قبض على استخدام مشغل التعيين بدلا من مشغل المساواة

*   فقط بيان if يجب أن يتم تحريره في هذا challenege.
*   يتم استخدام عامل التشغيل `=` فقط من أجل تعيين القيم ، وليس لمقارنتها.

## حل

 `let x = 7; 
 let y = 9; 
 let result = "to come"; 
 
 if(x == y) { 
  result = "Equal!"; 
 } else { 
  result = "Not equal!"; 
 } 
 
 console.log(result); 
`