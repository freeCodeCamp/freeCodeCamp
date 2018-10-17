---
title: Array.prototype.indexOf
localeTitle: Array.prototype.indexOf
---
## Array.prototype.indexOf

إرجاع الأسلوب `indexOf()` الفهرس الأول الذي يمكن العثور على عنصر معين في الصفيف. إذا كان العنصر غير موجود ، فسوف يقوم بإرجاع -1.

**بناء الجملة**

 `  arr.indexOf(searchElement[, fromIndex]) 
` 

## المعلمات

*   **searchElement** العنصر الذي تبحث عنه
    
*   **fromIndex** اختياري. الفهرس الذي تريد بدء البحث عليه. إذا كان fromIndex أكبر من أو يساوي طول الصفيف ، فلن يتم البحث في الصفيف وترجع الطريقة -1. إذا كان fromIndex عبارة عن رقم سالب ، فإنه يعتبر إزاحة من نهاية الصفيف (لا يزال يتم البحث عن الصفيف من هناك). القيمة الافتراضية هي 0 ، مما يعني أنه يتم البحث في الصفيف بأكمله.
    

## وصف

تأخذ طريقة `indexOf` كل عنصر من عناصر الصفيف في ترتيب الفهرسة التصاعدي `searchElement` منه مقابل `searchElement` باستخدام المساواة التامة ( `===` ). بمجرد أن يعثر على عنصر يقوم بإرجاع `true` ، فإنه يقوم بإرجاع الفهرس الخاص به.

## أمثلة

 `var array = [1, 2, 4, 1, 7] 
 
 array.indexOf(1); // 0 
 array.indexOf(7); // 4 
 array.indexOf(6); // -1 
 array.indexOf('1'); // -1 
 array.indexOf('hello'); // -1 
 array.indexOf(1, 2); // 3 
 array.indexOf(1, -3); // 3 
` 

### معلومات اكثر:

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

[رابط MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-array-javascript)