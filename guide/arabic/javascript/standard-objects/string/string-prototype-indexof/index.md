---
title: String.prototype.indexOf
localeTitle: String.prototype.indexOf
---
## String.prototype.indexOf

إرجاع الأسلوب `indexOf()` الفهرس الأول الذي يمكن العثور على عنصر معين في الصفيف. إذا كان العنصر غير موجود ، فسوف يقوم بإرجاع -1.

**بناء الجملة**

 `str.indexOf(searchValue[, fromIndex]) 
` 

### المعلمات

*   **searchValue** Substring التي تبحث عنها. إذا كان هذا فارغًا ( `''` ) ولا توجد معلمة `fromIndex` ، فسيؤدي ذلك إلى إرجاع 0.
    
*   **fromIndex** اختياري. الفهرس الذي تريد بدء البحث فيه. إذا كانت قيمة `fromIndex` أكبر من أو تساوي طول السلسلة ، فلن يتم البحث في السلسلة ويعيد الأسلوب -1. إذا كان `searchValue` عبارة عن سلسلة فارغة ( `''` ) وكان `fromIndex` أقل من طول السلسلة ، فسوف يقوم بإرجاع `fromIndex` ؛ خلاف ذلك ، فإنه سيعود طول السلسلة. (سيتم التعامل مع الرقم السالب كما لو لم تكن هناك وسيطة.)
    

### وصف

يتحقق الأسلوب `indexOf()` السلسلة من اليسار إلى اليمين. مؤشر الحرف الأول هو 0؛ فهرس الحرف الأخير هو `string.length - 1` . تتحقق الطريقة من كل سلسلة فرعية مقابل `searchValue` باستخدام المساواة التامة ( `===` ) ، مما يعني أن هذه الطريقة حساسة لحالة الأحرف. بمجرد العثور على سلسلة فرعية ترجع `true` ، فإنها تُرجع الفهرس الخاص بحرفها الأول.

### أمثلة

 `'Blue Whale'.indexOf('Blue');     // returns  0 
 'Blue Whale'.indexOf('Blute');    // returns -1 
 'Blue Whale'.indexOf('Whale', 0); // returns  5 
 'Blue Whale'.indexOf('Whale', 5); // returns  5 
 'Blue Whale'.indexOf('Whale', 7); // returns -1 
 'Blue Whale'.indexOf('');         // returns  0 
 'Blue Whale'.indexOf('', 9);      // returns  9 
 'Blue Whale'.indexOf('', 10);     // returns 10 
 'Blue Whale'.indexOf('', 11);     // returns 10 
 'Blue Whale'.indexOf('blue');     // returns -1 
` 

### معلومات اكثر:

*   وثائق [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) : [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
*   وثائق [MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-string-javascript) : [MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-string-javascript)