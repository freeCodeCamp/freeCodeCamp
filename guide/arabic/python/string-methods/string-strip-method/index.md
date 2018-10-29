---
title: String Strip Method
localeTitle: طريقة قطاع سترينج
---
## طريقة قطاع سترينج

هناك ثلاثة خيارات من أجل تجريد الأحرف من سلسلة في Python و `lstrip()` و `rstrip()` و `strip()` .

كل منهما سيعيد نسخة من السلسلة بأحرف تم إزالتها ، من البداية أو النهاية أو كل من البداية والنهاية. إذا لم يتم إعطاء أي وسيطات ، يكون الإعداد الافتراضي هو تجريد أحرف المسافات البيضاء.

مثال:

 `>>> string = '   Hello, World!    ' 
 >>> strip_beginning = string.lstrip() 
 >>> strip_beginning 
 'Hello, World!    ' 
 >>> strip_end = string.rstrip() 
 >>> strip_end 
 '   Hello, World!' 
 >>> strip_both = string.strip() 
 >>> strip_both 
 'Hello, World!' 
` 

يمكن تقديم وسيطة اختيارية كسلسلة تحتوي على كل الحروف التي ترغب في تجريدها.

 `>>> url = 'www.example.com/' 
 >>> url.strip('w./') 
 'example.com' 
` 

ومع ذلك ، هل لاحظ أن الأول فقط `.` جردت من الخيط ويرجع ذلك إلى أن وظيفة `strip` فقط بتمييز أحرف الوسيطة الموجودة على اليسار أو أقصى اليمين. منذ w يأتي قبل الأول `.` يتم تجريدهم معا، بينما "com" موجود في النهاية الصحيحة قبل `.` بعد تجريد `/`

#### معلومات اكثر:

[وثائق](https://docs.python.org/3/library/stdtypes.html#string-methods) طرق سلسلة.