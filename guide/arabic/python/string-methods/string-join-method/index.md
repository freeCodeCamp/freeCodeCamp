---
title: String Join Method
localeTitle: طريقة الانضمام إلى سلسلة
---
## طريقة الانضمام إلى سلسلة

يتم استخدام أسلوب `str.join(iterable)` جميع العناصر في `iterable` مع `str` سلسلة محددة. إذا احتوى المتغير على أي قيم غير سلسلة ، فإنه يؤدي إلى رفع استثناء TypeError.

`iterable` : كل ​​iterables من السلسلة. يمكن أن تكون قائمة من السلاسل ، مجموعة من السلسلة أو حتى سلسلة بسيطة.

#### أمثلة

1) الانضمام إلى ist من السلاسل مع `":"`

 `print ":".join(["freeCodeCamp", "is", "fun"]) 
` 

انتاج |

 `freeCodeCamp:is:fun 
` 

2) الانضمام إلى مجموعة من الأوتار مع `" and "`

 `print " and ".join(["A", "B", "C"]) 
` 

انتاج |

 `A and B and C 
` 

3) أدخل `" "` بعد كل حرف في سلسلة

 `print " ".join("freeCodeCamp") 
` 

انتاج:

 `free C ode C amp 
` 

4) الانضمام مع سلسلة فارغة.

 `list1 = ['p','r','o','g','r','a','m'] 
 print("".join(list1)) 
` 

انتاج:

 `program 
` 

5) الانضمام مع مجموعات.

 `test =  {'2', '1', '3'} 
 s = ', ' 
 print(s.join(test)) 
` 

انتاج:

 `2, 3, 1 
` 

#### معلومات اكثر:

[وثائق بيثون على سلسلة الانضمام](https://docs.python.org/2/library/stdtypes.html#str.join)