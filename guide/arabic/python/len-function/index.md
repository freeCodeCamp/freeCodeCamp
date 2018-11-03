---
title: Python Len Function
localeTitle: بيثون لين وظيفة
---
`len()` هي دالة مضمنة في Python 3. تقوم هذه الطريقة بإرجاع طول (عدد العناصر) لكائن ما. يستغرق حجة واحدة `x` .

## الحجج

يستغرق حجة واحدة ، `x` . قد تكون هذه الوسيطة عبارة عن تسلسل (مثل سلسلة أو وحدات بايت أو مجموعة حروف أو قائمة أو نطاق) أو مجموعة (مثل قاموس أو مجموعة أو مجموعة مجمدة).

## قيمة الإرجاع

هذه الدالة تقوم بإرجاع عدد العناصر في الوسيطة التي تم تمريرها إلى الدالة `len()` .

## عينة الكود

 `list1 = [123, 'xyz', 'zara'] # list 
 print(len(list1)) # prints 3 as there are 3 elements in the list1 
 
 str1 = 'basketball' # string 
 print(len(str1)) # prints 10 as the str1 is made of 10 characters 
 
 tuple1 = (2, 3, 4, 5) # tuple 
 print(len(tuple1)) # prints 4 as there are 4 elements in the tuple1 
 
 dict1 = {'name': 'John', 'age': 4, 'score': 45} # dictionary 
 print(len(dict1)) # prints 3 as there are 3 key and value pairs in the dict1 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CUmt/15)

[المستندات الرسمية](https://docs.python.org/3/library/functions.html#len)