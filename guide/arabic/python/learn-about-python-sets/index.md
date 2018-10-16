---
title: Learn About Python Sets
localeTitle: تعرف على مجموعات بايثون
---
`Set` s في Python هي نوع من بنية البيانات القابلة للتغيير ولكنها غير مرتبة ، والتي يمكن أن تحتوي فقط على عناصر _فريدة_ .

**خلق:**

`set` حرفية:

_لا_ يمكن استخدام الأقواس المتعرجة ، `{}` ، لإنشاء مجموعة فارغة:

 `>>> not_set = {}     # set constructor must be used to make empty sets. 
 >>> type(not_set)    # Empty curly brackets create empty dictionaries. 
 <class 'dict'> 
` 

يمكنك فقط إنشاء مجموعة فارغة باستخدام طريقة `set()` .

 `>>> example_set = set() 
 >>> type(example_set) 
 <class 'set'> 
` 

ومع ذلك ، إذا تم تضمين العناصر داخل الأقواس المتعرجة ، فسيكون بناء الجملة مقبولًا لإنشاء مجموعة.

 `>>> example_set_2 = {1, 2, 3} 
 >>> type(example_set_2) 
 <class 'set'> 
` 

\`