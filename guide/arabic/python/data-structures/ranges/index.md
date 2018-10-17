---
title: The Python Range
localeTitle: نطاق بايثون
---
## بايثون نطاقات

بدلاً من كونه دالة ، فإن النطاق هو في الواقع [نوع متسلسل غير قابل للتغيير](https://docs.python.org/3/library/stdtypes.html#immutable-sequence-types) ويشيع استخدامه لحل عدد محدد من المرات في الحلقات.

**خلق:**

يتم إنشاء `ranges` باستخدام منشئ `range` . المعلمات منشئ هي:

*   `start` : القيمة الأولى الشاملة للنطاق (عدد صحيح اختياري ، القيم الافتراضية إلى 0).
*   `stop` : قيمة التوقف الحصرية ، يتوقف النطاق عند توفير هذه القيمة أو أكبر (العدد الصحيح المطلوب).
*   `step` : القيمة المضافة إلى القيمة الحالية للحصول على القيمة التالية (عدد صحيح اختياري ، الإعداد الافتراضي إلى 1).

 `>>> range(10)          # Only the stop parameter is required. 
 range(0, 10) 
 >>> range(0, 10)       # Default for start parameter is 0. 
 range(0, 10) 
 >>> range(0, 10, 1)    # Default for step is 1\. Start parameter is required if 
 step is needed. 
 range(0, 10) 
` 

**أمثلة:**

ونظرًا لأن `ranges` متكررة ، يمكن تمريرها إلى `list` `tuple` لإنشاء هذه الأنواع من التسلسلات. باستخدام هذه الحقيقة ، يمكننا تصور بعض الأمثلة:

 `>>> list(range(10))     # range as argument for list constructor. 
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
 >>> tuple(range(10))    # range as argument for tuple constructor. 
 (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) 
` 

`ranges` طول الصفر:

 `>>> list(range(10, 0))        # start greater than stop with postive step. 
 [] 
 >>> list(range(10, 10))       # start equal to stop with postive step. 
 [] 
 >>> list(range(10, 10, -1))   # start equal to stop with negative step. 
 [] 
 >>> list(range(0, 10, -1))    # start less than stop with negative step. 
 [] 
` 

`ranges` مع وسيطات الخطوة:

 `>>> list(range(0, 10, 2))       # next value would be 10, stops at 8. 
 [0, 2, 4, 6, 8] 
 >>> list(range(0, 10, 3))       # next value would be 12, stops at 9. 
 [0, 3, 6, 9] 
 >>> list(range(0, 10, 4))       # next value would be 12, stops at 8. 
 [0, 4, 8] 
 >>> list(range(10, 0, -1))      # negative step makes decreasing ranges. 
 [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] 
 >>> list(range(-5, -30, -3))    # negative integers are valid arguments. 
 [-5, -8, -11, -14, -17, -20, -23, -26, -29] 
` 

**فوائد:**

إن الفائدة من استخدام `range` هي أنه بغض النظر عن مدى نطاق معين ، فإن هناك حاجة إلى كمية صغيرة من الذاكرة لتخزين `range` ، وقيم البدء ، والتوقف ، والخطوة. يتم حساب القيم الفردية `ranges` عند التكرار.

 `>>> import sys 
 >>> a_range = range(1000000) 
 >>> a_list = list(a_range) 
 >>> a_tuple = tuple(a_range) 
 >>> sys.getsizeof(a_range) 
 48 
 >>> sys.getsizeof(a_list) 
 9000112 
 >>> sys.getsizeof(a_tuple) 
 8000048 
` 

### مزيد من المعلومات:

[بيثون دوك - النطاقات](https://docs.python.org/3/library/stdtypes.html#ranges)

**TODO: `ranges` الطرق لا تنفذ ولا تنفذ**