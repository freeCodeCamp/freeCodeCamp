---
title: Array.prototype.lastIndexOf
localeTitle: Array.prototype.lastIndexOf
---
## Array.prototype.lastIndexof

ترجع `lastIndexOf()` الفهرس الأخير الذي يمكن العثور فيه على عنصر معين في الصفيف ، أو -1 إذا لم يكن موجودًا. يتم البحث في الصفيف إلى الخلف ، بدءًا من `fromIndex` .

**بناء الجملة**

 `  arr.lastIndexOf(searchElement, fromIndex = arr.length - 1]) 
` 

## المعلمات

*   **searchElement**
    
    *   عنصر لتحديد مكان في الصفيف.
*   **fromIndex**
    
    *   _اختياري_ . الفهرس الذي يبدأ عنده البحث إلى الخلف. افتراضيا لطول الصفيف ناقص واحد ، أي سوف يتم البحث عن المجموعة الكاملة. إذا كان الفهرس أكبر من أو يساوي طول الصفيف ، فسيتم البحث في الصفيف بأكمله. إذا كانت سلبية ، يتم أخذها كإزاحة من نهاية الصفيف. لاحظ أنه حتى عندما يكون الفهرس سالباً ، لا يزال البحث في الصفيف من الخلف إلى الأمام. إذا كان الفهرس المحسوب أقل من 0 ، فسيتم إرجاع -1 ، أي لن يتم البحث في المصفوفة.

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) | [رابط MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff679972%28v=vs.94%29.aspx)

## عائدات

فهرس آخر ظهور من `searchElement` في المصفوفة ، أو -1 إذا لم يتم العثور على `searchElement` .

## وصف

`lastIndexOf` يقارن `searchElement` لعناصر المصفوفة باستخدام المساواة التامة (نفس الطريقة التي يستخدمها ===، أو يساوي ثلاثة أضعاف، المشغل).

## ملاحظات

البحث يحدث بترتيب تنازلي للفهرس (العضو الأخير أولاً). للبحث بترتيب تصاعدي ، استخدم طريقة `indexOf` .

تحدد الوسيطة `fromIndex` الاختيارية فهرس الصفيف الذي يبدأ `fromIndex` البحث. إذا كان `fromIndex` أكبر من أو يساوي طول الصفيف ، `fromIndex` البحث في الصفيف بأكمله. إذا كان `fromIndex` سالباً ، يبدأ البحث في طول الصفيف بالإضافة إلى `fromIndex` . إذا كان الفهرس المحسوب أقل من 0 ، فسيتم إرجاع -1.

## أمثلة

 `  var array = [2, 5, 9, 2]; 
  array.lastIndexOf(2);     // 3 
  array.lastIndexOf(7);     // -1 
  array.lastIndexOf(2, 3);  // 3 
  array.lastIndexOf(2, 2);  // 0 
  array.lastIndexOf(2, -2); // 0 
  array.lastIndexOf(2, -1); // 3 
 
  // Create an array. 
  var ar = ["ab", "cd", "ef", "ab", "cd"]; 
 
  // Determine the first location, in descending order, of "cd". 
  document.write(ar.lastIndexOf("cd") + "<br/>"); 
 
  // Output: 4 
 
  // Find "cd" in descending order, starting at index 2. 
  document.write(ar.lastIndexOf("cd", 2) + "<br/>"); 
 
  // Output: 1 
 
  // Search for "gh" (which is not found). 
  document.write(ar.lastIndexOf("gh")+ "<br/>"); 
 
  // Output: -1 
 
  // Find "ab" with a fromIndex argument of -3. 
  // The search in descending order starts at index 3, 
  // which is the array length minus 2. 
  document.write(ar.lastIndexOf("ab", -3) + "<br/>"); 
  // Output: 0 
`