---
title: Python Bool Function
localeTitle: بيثون بول وظيفة
---
`bool()` هي دالة مضمنة في Python 3. هذه الدالة تقوم بإرجاع قيمة Boolean ، أي True أو False. يستغرق حجة واحدة ، `x` .

## الحجج

يستغرق حجة واحدة ، `x` . يتم تحويل `x` باستخدام [الإجراء](https://docs.python.org/3/library/stdtypes.html#truth) القياسي [لاختبار الحقيقة](https://docs.python.org/3/library/stdtypes.html#truth) .

## قيمة الإرجاع

إذا كانت `x` خاطئة أو تم حذفها ، فسيؤدي ذلك إلى إرجاع `False` ؛ وإلا فإنها ترجع `True` .

## عينة الكود

 `print(bool(4 > 2)) # Returns True as 4 is greater than 2 
 print(bool(4 < 2)) # Returns False as 4 is not less than 2 
 print(bool(4 == 4)) # Returns True as 4 is equal to 4 
 print(bool(4 != 4)) # Returns False as 4 is equal to 4 so inequality doesn't holds 
 print(bool(4)) # Returns True as 4 is a non-zero value 
 print(bool(-4)) # Returns True as -4 is a non-zero value 
 print(bool(0)) # Returns False as it is a zero value 
 print(bool('dskl')) # Returns True as the string is a non-zero value 
 print(bool([1, 2, 3])) # Returns True as the list is a non-zero value 
 print(bool((2,3,4))) # Returns True as tuple is a non-zero value 
 print(bool([])) # Returns False as list is empty and equal to 0 according to truth value testing 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CVCS/2)

[المستندات الرسمية](https://docs.python.org/3/library/functions.html#bool)