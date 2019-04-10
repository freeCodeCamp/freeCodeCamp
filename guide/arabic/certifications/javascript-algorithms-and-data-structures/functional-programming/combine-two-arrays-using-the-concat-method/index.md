---
title: Combine Two Arrays Using the concat Method
localeTitle: الجمع بين اثنين من المصفوفات باستخدام طريقة concat
---
## الجمع بين اثنين من المصفوفات باستخدام طريقة concat

*   يتم استخدام الأسلوب concat لربط صفيفين أو أكثر أو سلاسل.
*   هذه الطريقة لا تحوِّل الصفائف الموجودة ، ولكنها تعيد صفيفًا جديدًا.

## حل

 `function nonMutatingConcat(original, attach) { 
  // Add your code below this line 
 
  return original.concat(attach); 
 
  // Add your code above this line 
 } 
 var first = [1, 2, 3]; 
 var second = [4, 5]; 
 nonMutatingConcat(first, second); 
`