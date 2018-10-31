---
title: String.prototype.trim
localeTitle: String.prototype.trim
---
## String.prototype.trim

تقوم الدالة `trim()` بإزالة أية أحرف بيضاء من كل من بداية ونهاية سلسلة معينة. لا يقوم بتعديل السلسلة الأصلية؛ انها تنتج واحدة جديدة.

أمثلة:

 `"  Hello, campers. I have spaces on both ends!  ".trim(); 
 // output is "Hello, campers. I have spaces on both ends!" 
` 

`trim()` لا يزيل فقط أحرف الفضاء. يزيل أي حرف مسافة بيضاء ، مثل علامات التبويب ، فواصل الأسطر ، فواصل عدم الانكسار ، إلخ.

وهذا مفيد ، على سبيل المثال ، عندما تريد معالجة إدخال نص من مستخدم وقد يكون قد أرسل سلسلة تحتوي على مسافات في النهاية قد لا تريدها.

#### معلومات اكثر:

*   [String.prototype.trim () على MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)