---
title: String Find Method
localeTitle: طريقة البحث عن سلسلة
---
## طريقة البحث عن سلسلة

هناك خياران للعثور على سلسلة فرعية داخل سلسلة في Python ، `find()` و `rfind()` .

كل سوف يعود الموقف الذي تم العثور على سلسلة فرعية في. الفرق بين الاثنين هو أن `find()` ترجع الموضع الأدنى ، و `rfind()` ترجع أعلى موضع.

يمكن توفير وسيطات البدء والانتهاء الاختيارية للحد من البحث عن السلسلة الفرعية داخل أجزاء من السلسلة.

مثال:

 `>>> string = "Don't you call me a mindless philosopher, you overweight glob of grease!" 
 >>> string.find('you') 
 6 
 >>> string.rfind('you') 
 42 
` 

إذا لم يتم العثور على السلسلة الفرعية ، يتم إرجاع -1.

 `>>> string = "Don't you call me a mindless philosopher, you overweight glob of grease!" 
 >>> string.find('you', 43)  # find 'you' in string anywhere from position 43 to the end of the string 
 -1 
` 

معلومات اكثر:

[وثائق](https://docs.python.org/3/library/stdtypes.html#string-methods) طرق سلسلة.