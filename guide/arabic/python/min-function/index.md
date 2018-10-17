---
title: Python Min Function
localeTitle: بيثون مين وظيفة
---
`min()` هي دالة مضمنة في Python 3. تقوم بإرجاع أصغر عنصر في iterable أو الأصغر من الوسيطتين أو أكثر.

## الحجج

تأخذ هذه الوظيفة رقمين أو أكثر أو أي نوع من التكرار كوسيطة. في حين أننا نقدم حتمًا كحجة ، يجب أن نتأكد من أن جميع العناصر في المتغير هي من نفس النوع. هذا يعني أنه لا يمكننا تمرير قائمة تحتوي على كل من قيم السلسلة والعدد الصحيح المخزّنة فيه.

الحجج الصحيحة:

 `min(2, 3) 
 min([1, 2, 3]) 
 min('a', 'b', 'c') 
` 

حجج باطلة:

 `min(2, 'a') 
 min([1, 2, 3, 'a']) 
 min([]) 
` 

## قيمة الإرجاع

يتم إرجاع أصغر عنصر في iterable. إذا تم توفير اثنين أو أكثر من الوسيطات الموضعية ، فإن أصغر حجج الموضعية  
يتم إرجاع. إذا كان iterable فارغًا ولا يتم توفير الافتراضي ، يتم رفع ValueError.

## عينة الكود

 `print(min(2, 3)) # Returns 2 as 2 is the smallest of the two values 
 print(min(2, 3, -1)) # Returns -1 as -1 is the smallest of the two values 
 
 list1 = [1, 2, 4, 5, -54] 
 print(min(list1)) # Returns -54 as -54 is the smallest value in the list 
 
 list2 = ['a', 'b', 'c' ] 
 print(min(list2)) # Returns 'a' as 'a' is the smallest in the list in alphabetical order 
 
 list3 = [1, 2, 'abc', 'xyz'] 
 print(min(list3)) # Gives TypeError as values in the list are of different type 
 
 #Fix the TypeError mentioned above first before moving on to next step 
 
 list4 = [] 
 print(min(list4)) # Gives ValueError as the argument is empty 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CVir/4)

[المستندات الرسمية](https://docs.python.org/3/library/functions.html#min)