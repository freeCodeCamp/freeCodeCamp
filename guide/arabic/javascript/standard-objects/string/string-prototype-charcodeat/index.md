---
title: String.prototype.charCodeAt
localeTitle: String.prototype.charCodeAt
---
إرجاع الأسلوب `charCodeAt()` قيمة Unicode الرقمية للحرف في الفهرس المحدد (باستثناء codepoints unicode> 0x10000).

## بناء الجملة

 `str.charCodeAt(index) 
` 

### المعلمات

**فهرس**

عدد صحيح أكبر من أو يساوي 0 وأقل من طول السلسلة ؛ إذا لم يكن رقمًا ، فسيكون الإعداد الافتراضي صفرًا.

[وصلة MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt) | [رابط MSDN](https://msdn.microsoft.com/en-us/LIBRary/hza4d04f%28v=vs.94%29.aspx)

## وصف

لاحظ أن `charCodeAt()` ستقوم دائمًا بإرجاع قيمة أقل من 65536. وذلك لأن نقاط التعليمة البرمجية الأعلى يتم تمثيلها بواسطة زوج من الأحرف الزائفة (البديلة ذات القيمة المنخفضة) التي يتم استخدامها لتضمين الحرف الحقيقي. وبسبب هذا ، لفحص أو إعادة إنشاء الحرف الكامل للأحرف الفردية بقيمة 65536 وما فوق ، بالنسبة لمثل هذه الأحرف ، من الضروري استرداد `charCodeAt(i)` ، وكذلك `charCodeAt(i+1)` (كما لو كان فحص / إعادة إنتاج سلسلة بحرفين). انظر المثال 2 و 3 أدناه.

إرجاع `charCodeAt()` `NaN` إذا كان `index` المعطى أقل من 0 أو يساوي أو أكبر من طول السلسلة.

## أمثلة

 `'ABC'.charCodeAt(0); // returns 65 
 
 var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 document.write(str.charCodeAt(str.length - 1)); 
 
 // Output: 90 
`