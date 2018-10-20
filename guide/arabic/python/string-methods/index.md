---
title: String Methods
localeTitle: طرق سلسلة
---
**TODO: معلومات أساسية عن `string`**

[بيثون مستندات - سلاسل](https://docs.python.org/3/library/stdtypes.html#strings)

**خلق:**

يتم إنشاء `string` فارغة باستخدام زوج من علامات الاقتباس أو apostrophes:

 `>>> new_string = '' 
 >>> type(new_string) 
 <class 'string'> 
 >>> len(new_string) 
 0 
` 

[Python Docs - المزيد على سلاسل](https://docs.python.org/3/tutorial/datastructures.html#more-on-strings)

*   `string.find('you')` بإرجاع الموضع الأدنى الذي توجد به السلسلة الفرعية.
    
*   `str.join(iterable)` انضم إلى جميع العناصر في `iterable` بسلسلة محددة.
    
*   `str.replace(old, new, max)` لاستبدال السلسلة الفرعية `old` بالسلسلة `new` لمجموع مرات `max` . هذا الأسلوب بإرجاع نسخة جديدة من السلسلة مع الاستبدال و `str` الأصلي دون تغيير.
    
*   `string.split(separator, maxsplit)` بإرجاع قائمة من سلاسل فرعية محددة بواسطة `separator` ، وعدد `maxsplit` اختياري من المرات ، وإذا لم يتم تحديدها ، فسيتم تقسيم السلسلة على كل مثيلات `separator` .
    
*   `string.strip(to_strip)` سلسلة مع ازالة `to_strip` من بداية ونهاية السلسلة. إذا لم يتم تحديد `to_strip` ، فسيؤدي ذلك إلى تجريد كل المسافات البيضاء.