---
title: Match Single Character with Multiple Possibilities
localeTitle: تطابق شخصية واحدة مع إمكانيات متعددة
---
## تطابق شخصية واحدة مع إمكانيات متعددة

### استخراج

باستخدام طريقة match () ، يمكنك استخراج أجزاء من سلسلة تتطابق مع تعبيرك العادي. في هذا التحدي ، أنت تقوم باستخلاص أحرف العلة "a، e، i، o، u" من سلسلة مقدمة.

### تلميح 1:

هل تحاول استخدام طريقة test ()؟ تذكر هذه الطريقة فقط بإرجاع True أو False - نحتاج إلى استخراج أحرف العلة من السلسلة.

### تلميح 2:

هل جرّبت استخدام مطابقة حالة الأحرف "\[\]" بدون الفواصل؟ أي \[abcd\] مقابل \[a، b، c، d\]

### تنبيه المفسد - الحل إلى الأمام!

## حل

 `let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it."; 
 let vowelRegex = /[aeiou]/ig; // Change this line 
 let result = quoteSample.match(vowelRegex); // Change this line 
`