---
title: Array.prototype.shift
localeTitle: Array.prototype.shift
---
ستقوم طريقة مصفوفة جافا سكريبت `.shift()` بإزالة العنصر الأول من مصفوفة وإرجاع تلك القيمة. سيؤدي هذا أيضًا إلى تغيير طول الصفيف

**بناء الجملة**

 `  var array = [1, 2, 3, 4]; 
  array.shift(); 
` 

## وصف

`.shift()` إلى إزالة العنصر في الفهرس 0 للصفيف الذي يتم استدعاؤه عليه. ثم تقوم بإرجاع القيمة التي تمت إزالتها وتقوم بنقل كافة العناصر المتبقية إلى الأسفل بقيمة مؤشر واحد.

`.shift()` `undefined` إذا لم يحتوي المصفوفة التي يطلق عليها على أي عناصر.

## أمثلة

**تحويل القيمة الأولى من صفيف**

 `  var array = [1, 2, 3, 4, 5]; 
  console.log(array); 
  // Console will output 1, 2, 3, 4, 5 
 
  array.shift(); 
  // If we console.log(array.shift()); the console would output 1. 
 
  console.log(array); 
  /* Console will output 2, 3, 4, 5 and 
  the variable array now contains the set [2, 3, 4, 5] where 
  each element has been moved down 1 index value. */ 
` 

المصدر: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)