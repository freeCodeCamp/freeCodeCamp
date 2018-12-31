---
title: Python Max Function
localeTitle: بيثون ماكس وظيفة
---
`max()` هي دالة مضمنة في Python 3. تقوم بإرجاع أكبر عنصر في iterable أو أكبر من الوسيطتين أو أكثر.

## الحجج

تأخذ هذه الوظيفة رقمين أو أكثر أو أي نوع من التكرار كوسيطة. في حين أننا نقدم حتمًا كحجة ، يجب أن نتأكد من أن جميع العناصر في المتغير هي من نفس النوع. هذا يعني أنه لا يمكننا تمرير قائمة تحتوي على كل من قيم السلسلة والعدد الصحيح المخزّنة فيه. بناء الجملة: max (iterable، \* iterables \[، key، default\]) max (arg1، arg2، \* args \[، key\])

الحجج الصحيحة:

 `max(2, 3) 
 max([1, 2, 3]) 
 max('a', 'b', 'c') 
` 

حجج باطلة:

 `max(2, 'a') 
 max([1, 2, 3, 'a']) 
 max([]) 
` 

## قيمة الإرجاع

يتم إرجاع أكبر عنصر في iterable. إذا تم توفير اثنين أو أكثر من الوسيطات الموضعية ، فسيتم إرجاع أكبر الوسيطات الموضعية. إذا كان iterable فارغًا ولا يتم توفير الافتراضي ، يتم رفع `ValueError` .

## عينة الكود

 `print(max(2, 3)) # Returns 3 as 3 is the largest of the two values 
 print(max(2, 3, 23)) # Returns 23 as 23 is the largest of all the values 
 
 list1 = [1, 2, 4, 5, 54] 
 print(max(list1)) # Returns 54 as 54 is the largest value in the list 
 
 list2 = ['a', 'b', 'c' ] 
 print(max(list2)) # Returns 'c' as 'c' is the largest in the list because c has ascii value larger then 'a' ,'b'. 
 
 list3 = [1, 2, 'abc', 'xyz'] 
 print(max(list3)) # Gives TypeError as values in the list are of different type 
 
 #Fix the TypeError mentioned above first before moving on to next step 
 
 list4 = [] 
 print(max(list4)) # Gives ValueError as the argument is empty 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CVok)

[المستندات الرسمية](https://docs.python.org/3/library/functions.html#max)