---
title: Array.prototype.slice
localeTitle: Array.prototype.slice
---
`.slice()` طريقة صفيف جافا سكريبت `.slice()` كائن مصفوفة جديد سيكون جزءًا (شريحة) من المصفوفة الأصلية. لا يتم تعديل المصفوفة الأصلية.

**بناء الجملة**

 `  array.slice() 
  arr.slice(startIndex) 
  arr.slice(startIndex, endIndex) 
` 

## المعلمات

*   **startIndex** فهرس يستند إلى الصفر حيث يجب أن تبدأ الشريحة. إذا تم حذف القيمة ، فسيبدأ عند 0.
    
*   **endIndex** ستنتهي الشريحة **قبل** هذا المؤشر الذي يستند إلى الصفر. يتم استخدام فهرس سلبي للإزاحة من نهاية الصفيف. إذا تم حذف القيمة ، فسيتم تقسيم الشريحة إلى نهاية الصفيف.
    

## أمثلة

 `  var array = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
 
  var everything = array.slice() 
  // everything = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
 
  var kitchen = array.slice(2, 4) 
  // kitchen = ['cup', 'sandwich'] 
 
  var random = array.slice(4) 
  // random = ['bag', 'phone', 'cactus'] 
 
  var noPlants = array.slice(0, -1) 
  // noPlats = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone'] 
 
  // array will still equal ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
` 

#### معلومات اكثر:

المصدر: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)