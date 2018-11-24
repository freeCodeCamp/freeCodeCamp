---
title: Python Ord Function
localeTitle: بيثون اورد وظيفة
---
## وظيفة Ord

`ord()` هي دالة مضمنة في Python 3 ، لتحويل السلسلة التي تمثل حرف Unicode إلى عدد صحيح يمثل رمز Unicode للحرف.

#### أمثلة:

 `>>> ord('d') 
 100 
 >>> ord('1') 
 49 
` 

## وظيفة chr

`chr()` هي وظيفة مضمنة في Python 3 ، لتحويل العدد الصحيح تمثل شفرة Unicode في سلسلة تمثل حرفًا مطابقًا.

#### أمثلة:

 `>>> chr(49) 
 '1' 
` 

هناك أمر واحد يمكن ملاحظته ، إذا كانت قيمة العدد الصحيح التي تم تمريرها إلى `chr()` خارج النطاق ، فسيتم رفع قيمة ValueError.

 `>>> chr(-10) 
 'Traceback (most recent call last): 
  File "<pyshell#24>", line 1, in <module> 
    chr(-1) 
 ValueError: chr() arg not in range(0x110000)' 
`