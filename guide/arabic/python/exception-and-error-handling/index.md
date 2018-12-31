---
title: Exceptions and Errors Handling
localeTitle: الاستثناءات ومعالجة الأخطاء
---
## الاستثناءات ومعالجة الأخطاء

عند إنشاء برنامج ، يمكننا ارتكاب الأخطاء التي تنتهي بالأخطاء ، وأسوأ البرامج التي نجعلها تتوقف عن العمل ، سيكون الأمر مزعجًا أكثر إذا لم نتمكن من العثور على أخطاء في الشفرة التي قمنا بها أو ما هو الخطأ. بكلمات بسيطة ، الأخطاء هي شيء يتجنبه المبرمجون في صنع برنامج. لحل هذه المشكلة في python يمكننا استخدام `try` `except`

مثال:

 `>>> try: 
 >>> . . . print "this is not a string "+1 
 >>> except: 
 >>> . . . print "error" 
 error 
` 

وإذا كنت ترغب في الحصول على رسائل خطأ بمزيد من التفاصيل من التعليمات البرمجية ، فيمكنك إضافة وسائط `except Exception as err`

 `>>> try: 
 >>> . . . print "this is not a string "+1 
 >>> except Exception as err: 
 >>> . . . print "error:\n"+str(err) 
 error: 
 cannot concatenate 'str' and 'int' objects 
` 

معلومات اكثر:

[وثائق](https://docs.python.org/2/tutorial/errors.html) الأخطاء والاستثناءات.