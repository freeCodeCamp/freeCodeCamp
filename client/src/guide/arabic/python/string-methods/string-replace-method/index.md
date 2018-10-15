---
title: String Replace Method
localeTitle: طريقة استبدال السلاسل
---
## طريقة استبدال السلاسل

يتم استخدام `str.replace(old, new, max)` لاستبدال السلسلة الفرعية `old` بالسلسلة `new` لمجموع مرات `max` . هذا الأسلوب بإرجاع نسخة جديدة من السلسلة مع الاستبدال. لا يتم تغيير `str` السلسلة الأصلية.

#### أمثلة

1.  استبدال كافة تكرارات `"is"` بـ `"WAS"`

 `string = "This is nice. This is good." 
 newString = string.replace("is","WAS") 
 print(newString) 
` 

انتاج |

 `ThWAS WAS nice. ThWAS WAS good. 
` 

2.  استبدال أول تكرارين لـ `"is"` بـ `"WAS"`

 `string = "This is nice. This is good." 
 newString = string.replace("is","WAS", 2) 
 print(newString) 
` 

انتاج |

 `ThWAS WAS nice. This is good. 
` 

#### معلومات اكثر:

اقرأ المزيد حول استبدال السلسلة في [مستندات Python](https://docs.python.org/2/library/string.html#string.replace)