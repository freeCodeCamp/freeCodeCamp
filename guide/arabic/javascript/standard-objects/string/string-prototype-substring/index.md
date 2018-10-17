---
title: String.prototype.substring
localeTitle: String.prototype.substring
---
## String.prototype.substring

تقوم الدالة `substring()` _باستخلاص_ تسلسل من الأحرف من سلسلة معينة أخرى. لا يغير السلسلة الأصلية.

يمكنك تحديد التسلسل لاستخراج مع _فهرس حرف البداية والنهاية_ . يتم تمرير هذه الفهارس في الدالة `substring()` كمعلمات. يتم تشكيل سلسلة فرعية من حرف مؤشر البداية على طول الطريق إلى شخصية مؤشر نهاية. يتم حساب كل من الفهارس من بداية السلسلة ، بدءًا من `0` .

أمثلة:

 `"Hello, campers".substring(7, 14); 
 // output is "campers" 
 
 "Hello, world".substring(0, 5); 
 // output is "Hello" 
` 

يمكنك أيضًا حذف معلمة فهرس الأحرف الأخيرة ، وسيتم استخراج التسلسل الفرعي من فهرس البدء حتى نهاية السلسلة. مثال:

 `"Hello, campers!".substring(7); 
 // output is "campers!" 
` 

#### معلومات اكثر:

*   [String.prototype.substring () على MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)