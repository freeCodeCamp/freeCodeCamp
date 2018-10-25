---
title: Remove Items Using splice()
localeTitle: إزالة العناصر باستخدام لصق ()
---
## إزالة العناصر باستخدام لصق ()

*   يجب استدعاء الدالة `splice()` على صفيف `arr` لإزالة عنصر واحد أو أكثر من مركز الصفيف.
*   يضيف صفيف `arr` حاليا إلى قيمة 16. ببساطة إزالة العديد من المتغيرات اللازمة للعودة 10.

## حل:

 `function sumOfTen(arr) { 
  // change code below this line 
  arr.splice(1,2); 
  // change code above this line 
  return arr.reduce((a, b) => a + b); 
 } 
 
 // do not change code below this line 
 console.log(sumOfTen([2, 5, 1, 5, 2, 1])); 
`