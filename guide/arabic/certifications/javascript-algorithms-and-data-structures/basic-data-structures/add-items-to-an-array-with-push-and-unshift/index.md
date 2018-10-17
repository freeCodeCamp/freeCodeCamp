---
title: Add Items to an Array with push() and unshift()
localeTitle: إضافة عناصر إلى مصفوفة بدفع () و unshift ()
---
## إضافة عناصر إلى مصفوفة بدفع () و unshift ()

*   تمامًا مثل المثال المعطى ، استخدم طريقة `.unshift()` على الصفيف لإضافة عناصر إلى بداية الصفيف واستخدم طريقة `.push()` لإضافة عناصر إلى نهاية الصفيف.

## حل:

 `function mixedNumbers(arr) { 
  // change code below this line 
 arr.unshift('I',2,'three'); 
 arr.push(7,'VIII', 9); 
  // change code above this line 
  return arr; 
 } 
 
 // do not change code below this line 
 console.log(mixedNumbers(['IV', 5, 'six'])); 
`