---
title: The Python Strings
localeTitle: سلاسل بايثون
---
يسمح Python `str` كائنات `str` أو _سلاسل الأحرف_ بعدة طرق مختلفة:

*   علامات التنصيص المفردة: `'Single quote strings can have "double" quotes inside.'` الاقتباس الأحادية على علامات `'Single quote strings can have "double" quotes inside.'`
    
*   علامات الاقتباس المزدوجة: `"Double quote strings can have 'single' quotes inside."` الاقتباس المزدوجة على علامات `"Double quote strings can have 'single' quotes inside."`
    
*   الثلاثي المقتبس:
    
     `"""Triple quoted strings can span multiple lines. 
     Unescaped "double" and 'single' quotes in triple quoted strings are retained.""" 
     
     '''Triple quoted strings can be 'single'or "double" quotes. 
     Unescaped newlines are also retained.''' 
    ` 
    
*   غير قابل للتغيير: لا يمكنك تحرير / تغيير سلسلة Python مباشرة بعد إنشائها. على سبيل المثال ، إذا حاولت إعادة تعيين / تغيير الحرف الأول مباشرةً في سلسلة ، فسيتم طرح خطأ.
    
     `>>> foo = "my string" 
     >>> foo[0] = "a" 
     Traceback (most recent call last): 
            File "<stdin>", line 1, in <module> 
     TypeError: 'str' object does not support item assignment 
    ` 
    

## مرجع:

[نوع تسلسل النص _str_](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)