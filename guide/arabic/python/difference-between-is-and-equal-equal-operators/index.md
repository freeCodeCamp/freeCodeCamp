---
title: Difference between Python 'is' and '==' operators
localeTitle: الفرق بين معاملات Python 'is' و '=='
---
`is` التحقق من هوية الكائن - أي التحقق مما إذا كان هناك متغيرين أو أكثر يشيران إلى نفس الكائن. لا يمكن أن يكون الزائد `is` .

`==` تقييم `==` إلى true إذا كان الكائن المشار إليه بواسطة المتغيرات مساوياً. يمكنك التحميل الزائد `==` عبر مشغل `__eq__` .

## قيمة الإرجاع

ستكون قيمة الإرجاع لكل منهما `True` أو `False` .

## عينة الكود

 `a = 2.3 
 a is 2.3  # => False 
 a == 2.3  # => True 
 
 a = [234,123,321] 
 b = [234,123,321] 
 a == b  # => True 
 a is b  # => False 
 a = b 
 a == b  # => True 
 a is b  # => True, because if we change a, b changes too 
`