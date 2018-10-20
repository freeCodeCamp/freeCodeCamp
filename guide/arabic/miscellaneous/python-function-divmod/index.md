---
title: Python Function Divmod
localeTitle: بيثون وظيفة Divmod
---
# بايثون `divmod(a,b)`

`divmod()` هي `divmod()` في Python 3 ، والتي تقوم بارجاع quient والباقي عند قسمة الرقم `a` على الرقم `b` . يستغرق الأمر رقمين كوسيطة `a` & `b` . لا يمكن أن تكون الوسيطة رقمًا معقدًا.

## جدال

يستغرق الوسيطتين `a` & `b` - عدد صحيح ، أو رقم عشري. لا يمكن أن يكون رقمًا معقدًا.

## قيمة الإرجاع

ستكون قيمة الإرجاع هي زوج الأرقام الموجبة المكونة من حاصل القسمة والبقية التي يتم الحصول عليها بقسمة `a` `b` . في حالة أنواع المعاملات المختلطة ، سيتم تطبيق قواعد مشغلي الحساب الثنائي.  
بالنسبة **لقيم الرقم الصحيح** ، ستكون قيمة الإرجاع مماثلة `(a // b, a % b)` .  
بالنسبة **لقيم الأعداد العشرية** ، ستكون قيمة الإرجاع مماثلة لـ `(q, a % b)` ، حيث `q` عادةً ما يكون **math.floor (a / b)** ولكن قد يكون أقل من ذلك.

## عينة الكود

 `print(divmod(5,2)) # prints (2,1) 
 print(divmod(13.5,2.5)) # prints (5.0, 1.0) 
 q,r = divmod(13.5,2.5)  # Assigns q=quotient & r= remainder 
 print(q) # prints 5.0 because math.floor(13.5/2.5) = 5.0 
 print(r) # prints 1.0 because (13.5 % 2.5) = 1.0 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [REPL ذلك!](https://repl.it/FGLK/0)

[المستندات الرسمية](https://docs.python.org/3/library/functions.html#divmod)