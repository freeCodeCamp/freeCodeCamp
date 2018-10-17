---
title: List Remove Method
localeTitle: طريقة إزالة القائمة
---
## طريقة إزالة القائمة

`remove()` أسلوب `remove()` الوسيطة المعطاة لها من القائمة.

#### مثال للاستخدام

 `words = ["I", "love", "Python"] 
 words.remove("I") 
 print(words) 
` 

#### انتاج |

 `["love","Python"] 
` 

لاحظ أنه يقوم بإرجاع خطأ إذا لم يتم العثور على العنصر المراد إزالته في القائمة كما هو موضح في المثال أدناه.

 `kiss = ["keep", "it", "simple", "stupid"] 
 kiss.remove("complex") 
 print(kiss) 
` 

#### انتاج |

 `Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: list.remove(x): x not in list 
` 

#### معلومات اكثر:

يمكن العثور على مزيد من المعلومات حول `remove()` [هنا](https://docs.python.org/3.6/tutorial/datastructures.html)