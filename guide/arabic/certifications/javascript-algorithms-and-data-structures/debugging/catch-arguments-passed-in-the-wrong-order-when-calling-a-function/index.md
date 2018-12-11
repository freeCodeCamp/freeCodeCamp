---
title: Catch Arguments Passed in the Wrong Order When Calling a Function
localeTitle: Catch Arguments Passed in the Wrong Order When Calling a Function
---
## Catch Arguments Passed in the Wrong Order When Calling a Function

 `function raiseToPower(b, e) { 
  return Math.pow(b, e); 
 } 
` 

*   تستخدم الوظيفة المذكورة أعلاه لرفع العدد الأساسي `b` إلى قوة الأس `e` .
*   يجب استدعاء الدالة على وجه التحديد مع المتغيرات بالترتيب الصحيح. وبخلاف ذلك ، تقوم الوظيفة بخلط كلا المتغيرين وإرجاع إجابة غير مرغوبة.
*   تأكد من أن `power` tha المتغيرة تقوم بتنفيذ وظيفة `raiseToPower` بشكل صحيح.

## حل:

 `let power = raiseToPower(base, exp); 
`