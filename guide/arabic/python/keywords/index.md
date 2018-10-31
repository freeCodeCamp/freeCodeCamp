---
title: Python Keywords
localeTitle: بايثون الكلمات الرئيسية
---
## بايثون الكلمات الرئيسية

لدى Python قائمة [بالكلمات الرئيسية](https://docs.python.org/3/reference/lexical_analysis.html#keywords) التي لا يمكن استخدامها كمعرفات (أسماء المتغيرات). ستحاول محاولة استخدام أي من هذه الكلمات الرئيسية كمتغيرات إنشاء **خطأ في بناء الجملة** ولن يتم تشغيل البرنامج النصي Python الخاص بك:

 `>>> False = "Hello campers!" 
 File "<stdin>" 
 SyntaxError: can't assign to keyword 
 
 >>> break = "Hello campers!" 
 File "<stdin>", line 1 
    break = "Hello campers!" 
            ^ 
    SyntaxError: invalid syntax 
` 

#### قائمة الكلمات الرئيسية

الكلمة الرئيسية - | - | - | - --- | --- | --- | --- | --- `False` | `class` `finally` `is` | `return` `None` | `continue` | `for` | `lambda` | `try` `True` | `def` | `from` | `nonlocal` | `while` `and` | `del` | `global` | `not` `with` `as` | `elif` | `if` | `or` | `yield` `assert` `else` `import` | `pass` `break` `except` | `in` | `raise`