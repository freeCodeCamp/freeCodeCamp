---
title: Python Escape Sequences
localeTitle: بيثون الهروب التسلسل
---
يمكن العثور على قائمة بتسلسلات الهروب [هنا](https://docs.python.org/3/reference/lexical_analysis.html#strings)

تسمح تتابعات الهروب بإدراج حروف خاصة في سلاسل.

 `>>> print('Single quote strings can have \'single\' quotes if they are escaped') 
 "Single quote strings can have 'single' quotes if they are escaped" 
 >>> print("Double quote strings can have \"double\" quotes if they are escaped") 
 'Double quote strings can have "double" quotes if they are escaped' 
 >>> print("Multiline strings\ncan be created\nusing escape sequences.") 
 Multiline strings 
 can be created 
 using escape sequences. 
 >>> print("Backslashes \\ need to be escaped.") 
 Backslashes \ need to be escaped. 
` 

يمكن استخدام سلسلة _أولية_ عن طريق إدخال السلسلة مع `r` أو `R` التي تسمح بتضمين الخطوط المائلة العكسية دون الحاجة إلى الهروب منها -

 `>>> print(r"Backslashes \ don't need to be escaped in raw strings.") 
 Backslashes \ don't need to be escaped in raw strings. 
 >>> print(r"An odd number of backslashes at the end of a raw string will cause an error\") 
  File "<stdin>", line 1 
    print(r"An odd number of backslashes at the end of a raw string will cause an error\") 
                                                                                         ^ 
 SyntaxError: EOL while scanning string literal. 
` 

\# بعض الأمثلة الإضافية من تسلسلات الهروب. تسلسل الهروب  
\\ يطبع Backslash  
\`يطبع واحد الاقتباس  
\\ "يطبع الاقتباس المزدوج  
\\ a جرس ASCII يجعل رنين أصوات تنبيه الجرس (على سبيل المثال. xterm) \\ b ASCII backspace (BS) يزيل الحرف السابق \\ n يضيف السطر الجديد.