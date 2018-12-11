---
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
localeTitle: استخدم بعض الأسلوب للتحقق من أن أي عناصر في مصفوفة تطابق معايير
---
## استخدم بعض الأسلوب للتحقق من أن أي عناصر في مجموعة تطابق معايير

### شرح المشكلة

استخدم بعض الطريقة داخل وظيفة checkPositive للتحقق مما إذا كان أي عنصر في arr موجبًا. يجب أن ترجع الدالة `checkPositive` قيمة منطقية.

#### روابط ذات صلة:

*   [Array.prototype.some ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

### حل:

 `function checkPositive(arr) { 
  return arr.some((elem) => elem > 0); 
 } 
 checkPositive([1, 2, 3, -4, 5]); 
`