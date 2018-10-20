---
title: Python Zip Function
localeTitle: بيثون الرمز البريدي وظيفة
---
`zip()` هي دالة مضمنة في Python تقوم بإرجاع قائمة tuples. سيحتوي الـ nth tuple على العنصر n من كل من الوسيطات المتكرّرة. إذا كانت الوسيطات في التسلسل ذات أطوال غير متساوية ، فستعرض قائمة مقطوعة إلى طول أقصر فترة التكرار.

## جدال

أي عدد من iterables مفصولة بفاصلة.

## قيمة الإرجاع

قائمة tuple من عنصر nth من جميع التسلسلات

## عينة الكود

 `nums = [1,2,3,4] 
 print(*nums) # prints 1 2 3 4 
 numsAndNames = zip([1,2,3],['one','two','three']) 
 print(*numsAndNames) # prints (1,'one') (2,'two') (3,'three') 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/@StuffsExplained/pythonZipFunction)

[المستندات الرسمية - Python 3](https://docs.python.org/3.3/library/functions.html#zip)

[الوثائق الرسمية - بيثون 2.7](https://docs.python.org/2/library/functions.html#zip)