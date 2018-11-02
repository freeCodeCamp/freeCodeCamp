---
title: Array.prototype.pop
localeTitle: Array.prototype.pop
---
# Array.prototype.pop

تقوم طريقة `pop()` بإزالة العنصر الأخير من وتغيير طول صفيف.

**بناء الجملة**

 `    arr.pop() 
` 

**قيمة الإرجاع**

*   العنصر الذي تمت إزالته من المصفوفة ؛ غير معروف إذا كان الصفيف فارغًا.

## وصف

يقوم أسلوب `pop()` بإزالة العنصر الأخير من صفيف وإرجاع تلك القيمة إلى المستدعي.

إذا قمت بالاتصال `pop()` على صفيف فارغ ، فإنها تقوم بإرجاع undefined.

## أمثلة

 `let array = [1, 2, 3, 4]; 
 array.pop(); // removes 4 
 console.log(array); // [1, 2, 3] 
 
 [].pop() // undefined 
` 

#### معلومات اكثر:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)