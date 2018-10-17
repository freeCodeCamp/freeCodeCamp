---
title: Python Floating Point Numbers
localeTitle: بايثون العائمة نقطة أرقام
---
يمكن العثور [هنا على](https://docs.python.org/3/tutorial/floatingpoint.html) بعض المعلومات العامة حول أرقام النقاط العائمة وكيفية عملها في بايثون.

تتبع جميع تطبيقات بايثون تقريبًا مواصفات IEEE 754: قياسي لحساب الحساب العائم الثنائي Binary Floating-Point Arithmetic. تم العثور على مزيد من المعلومات على [موقع IEEE](http://grouper.ieee.org/groups/754/) .

يمكن إنشاء الكائنات [العائمة](https://docs.python.org/3/reference/lexical_analysis.html#floating-point-literals) باستخدام [القيم الحرفية العائمة](https://docs.python.org/3/reference/lexical_analysis.html#floating-point-literals) :

 `>>> 3.14 
 3.14 
 >>> 314\.    # Trailing zero(s) not required. 
 314.0 
 >>> .314    # Leading zero(s) not required. 
 0.314 
 >>> 3e0 
 3.0 
 >>> 3E0     # 'e' or 'E' can be used. 
 3.0 
 >>> 3e1     # Positive value after e moves the decimal to the right. 
 30.0 
 >>> 3e-1    # Negative value after e moves the decimal to the left. 
 0.3 
 >>> 3.14e+2 # '+' not required but can be used for exponent part. 
 314.0 
` 

لا تحتوي القيم الحرفية الرقمية على أي إشارة ، إلا أنه من الممكن إنشاء كائنات عائمة سلبية عن طريق البدء بمعامِل وحيد `-` (ناقص) بدون مساحة قبل الحرف

 `>>> -3.141592653589793 
 -3.141592653589793 
 >>> type(-3.141592653589793) 
 <class 'float'> 
` 

وبالمثل ، يمكن أن تبدأ مسبقات الأجسام الموجبة الإيجابية بعامل وحيد `+ (` زائد) بدون مساحة قبل الحرفية. عادةً ما يتم حذف `+` :

 `>>> +3.141592653589793 
 3.141592653589793 
` 

ﻻﺣ Note أن اﻟﺼﻔﺮ (اﻟﺼﻔﺤﺎت) اﻟﻘﻴﺎدﻳﺔ واﻟﺰاﻣﻨﺔ ﺻﺎﻟﺤﺔ ﻟﻠﺤﺮوف اﻟﻔﺎرﻏﺔ

 `>>> 0.0 
 0.0 
 >>> 00.00 
 0.0 
 >>> 00100.00100 
 100.001 
 >>> 001e0010      # Same as 1e10 
 10000000000.0 
` 

إن [منشئ `float`](https://docs.python.org/3/library/functions.html#float) طريقة أخرى لإنشاء كائنات `float` .

خلق `float` الأجسام العائمة مع الحرفية نقطة ويفضل عندما يكون ذلك ممكنا:

 `>>> a = 3.14         # Prefer floating point literal when possible. 
 >>> type(a) 
 <class 'float'> 
 >>> b = int(3.14)    # Works but unnecessary. 
 >>> type(b) 
 <class 'float'> 
` 

ومع ذلك ، يسمح منشئ floatctor إنشاء كائنات عائمة من أنواع الأعداد الأخرى:

 `>>> a = 4 
 >>> type(a) 
 <class 'int'> 
 >>> print(a) 
 4 
 >>> b = float(4) 
 >>> type(b) 
 <class 'float'> 
 >>> print(b) 
 4.0 
 >>> float(400000000000000000000000000000000) 
 4e+32 
 >>> float(.00000000000000000000000000000004) 
 4e-32 
 >>> float(True) 
 1.0 
 >>> float(False) 
 0.0 
` 

سيقوم منشئ `float` أيضًا بجعل الكائنات `float` من السلاسل التي تمثل القيم الحرفية العددية:

 `>>> float('1') 
 1.0 
 >>> float('.1') 
 0.1 
 >>> float('3.') 
 3.0 
 >>> float('1e-3') 
 0.001 
 >>> float('3.14') 
 3.14 
 >>> float('-.15e-2') 
 -0.0015 
` 

يمكن أيضًا استخدام منشئ `float` لجعل التمثيل الرقمي لـ `NaN` (ليس رقمًا) ، `infinity` السالبة `infinity` (السلاسل الملاحظة لهؤلاء غير حساسة لحالة الأحرف):

 `>>> float('nan') 
 nan 
 >>> float('inf') 
 inf 
 >>> float('-inf') 
 -inf 
 >>> float('infinity') 
 inf 
 >>> float('-infinity') 
 -inf 
`