---
title: Python Powxy
localeTitle: بايثون بوكسي
---
`pow(x, y, z)` هي دالة مضمنة في Python 3 لحساب `x` إلى القدرة `y` ، وإذا كان `z` موجودًا ، فترجع `x` إلى `y` [modulo](https://processing.org/reference/modulo.html) `z` .

## الحجج

يجب أن تحتوي الوسيطات على أنواع رقمية. تأخذ هذه الوظيفة وسيطتين ، `x` و `y` ، بالإضافة إلى ثلاثة ، `x` ، `y` ، و `z` . إذا كان `z` موجودًا ، يجب أن يكون `x` و `y` من الأنواع الصحيحة ، ويجب أن يكون y غير سلبي.

## إرجاع

إذا كان `z` موجودًا ، فسوف يقوم بإرجاع `x` إلى power `y` modulo `z` . في حالة وجود `x` و `y` فقط ، يتم إرجاع `x` إلى طاقة `y` (مثل `x**y` ).

## مثال

 `print(pow(2,4))    # prints 16 
 print(pow(10,-2))  # prints 0.01 
 print(pow(4,3,5))  # prints 4 
` 

[كود ران](https://repl.it/CTGi)

[الوثائق الرسمية](https://docs.python.org/3/library/functions.html#pow)