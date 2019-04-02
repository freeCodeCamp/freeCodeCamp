---
title: How to Convert Strings into Integers in Python
localeTitle: كيفية تحويل السلاسل إلى أعداد صحيحة في بيثون
---
## كيفية تحويل السلاسل إلى أعداد صحيحة في بيثون

تمامًا كما هو الحال في `str()` المضمنة ، تقدم Python أيضًا أداة يدوية مدمجة تأخذ كائن السلسلة كوسيطة وتعيد الكائن الصحيح المناظر.

#### مثال للاستخدام:

 `# Here age is a string object 
 age = "18" 
 print(age) 
 # Converting string to integer 
 int_age = int(age) 
 print(int_age) 
` 

انتاج |

 `18 
 18 
` 

على الرغم من أن المخرجات متشابهة بصريًا ، إلا أنه يجب أن تضع في اعتبارك أن السطر الأول يطبع كائن سلسلة بينما يقوم السطر الموجود بجواره بطباعة كائن صحيح يتضح أكثر في المثال التالي:

 `age = "18" 
 print(age+2) 
` 

انتاج:

 `Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 TypeError: cannot concatenate 'str' and 'int' objects 
` 

`The error should make it clear to you that you need to convert the` الكائن age إلى عدد صحيح قبل إضافة شيء إليه.

 `age = "18" 
 age_int = int(age) 
 print(age_int+2) 
` 

انتاج:

 `20 
` 

لكن يجب أن تضع في اعتبارك بعض الحالات الخاصة:

1.  نقطة عائمة (عدد صحيح مع جزء كسري) كوسيطة ستعيد العوامة تقريبًا إلى أقرب عدد صحيح كامل. على سبيل المثال: `print(int(7.9))` ستطبع `7` . ستؤدي أيضًا `print(int("7.9"))` إلى حدوث خطأ نظرًا لأن السلسلة عبارة عن وسيطة غير صالحة للتحويل إلى عدد صحيح.
    
     `Traceback (most recent call last): 
      File "<stdin>", line 1, in <module> 
     ValueError: invalid literal for int() with base 10: '7.9' 
    ` 
    
2.  أيضا أي عدد صحيح في الكلمات إذا تم تقديمه كوسيطة سيعود نفس الخطأ على النحو الوارد أعلاه: `print(int("one"))` سوف تعطي خطأ كما يلي:
    
     `Traceback (most recent call last): 
      File "<stdin>", line 1, in <module> 
     ValueError: invalid literal for int() with base 10: 'one' 
    ` 
    

#### معلومات اكثر:

يمكن العثور على الوثائق الرسمية لـ `int()` المضمنة [هنا](https://docs.python.org/3.6/library/functions.html#int)