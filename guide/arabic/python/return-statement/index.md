---
title: Python Return Statement
localeTitle: بيان العودة بايثون
---
[بيثون مستندات](https://docs.python.org/3/reference/simple_stmts.html#the-return-statement)

جميع الوظائف ترجع قيمة عند استدعاء.

إذا كانت عبارة return متبوعة بقائمة تعبير ، يتم تقييم قائمة التعبير هذه ويتم إرجاع القيمة:

 `>>> def greater_than_1(n): 
 ...     return n > 1 
 ... 
 >>> print(greater_than_1(1)) 
 False 
 >>> print(greater_than_1(2)) 
 True 
` 

إذا لم يتم تحديد قائمة التعبير، `None` يتم إرجاع:

 `>>> def no_expression_list(): 
 ...     return    # No return expression list. 
 ... 
 >>> print(no_expression_list()) 
 None 
` 

إذا تم الوصول إلى بيان الإرجاع أثناء تنفيذ إحدى الوظائف ، فسيتم ترك استدعاء الدالة الحالية في هذه النقطة:

 `>>> def return_middle(): 
 ...     a = 1 
 ...     return a 
 ...     a = 2     # This assignment is never reached. 
 ... 
 >>> print(return_middle()) 
 1 
` 

إذا لم يكن هناك بيان إرجاع ، فسوف تُرجع الدالة بلا عندما تصل إلى النهاية:

 `>>> def no_return(): 
 ...     pass     # No return statement. 
 ... 
 >>> print(no_return()) 
 None 
` 

وظيفة واحدة يمكن أن يكون لديك عدة `return` البيانات. ينتهي تنفيذ الدالة عند الوصول إلى أحد عبارات `return` :

 ` >>> def multiple_returns(n): 
 ...    if(n): 
 ...        return "First Return Statement" 
 ...    else: 
 ...        return "Second Return Statement" 
 ... 
 >>> print(multiple_returns(True)) 
 First Return Statement 
 >>> print(multiple_returns(False)) 
 Second Return Statement 
` 

يمكن لوظيفة واحدة إرجاع أنواع مختلفة:

 ` >>> def various_return_types(n): 
 ...     if(n==1): 
 ...         return "Hello World."   # Return a string 
 ...     elif(n==2): 
 ...         return 42               # Return a value 
 ...     else: 
 ...         return True             # Return a boolean 
 ... 
 >>> print(various_return_types(1)) 
 Hello World. 
 >>> print(various_return_types(2)) 
 42 
 >>> print(various_return_types(3)) 
 True 
` 

من الممكن حتى أن تقوم دالة واحدة بإرجاع قيم متعددة بعائد واحد فقط:

 ` >>> def return_two_values(): 
 ...     a = 40 
 ...     b = 2 
 ...     return a,b 
 ... 
 >>> print("First value = %d,  Second value = %d" %(return_two_values())) 
 First value = 40,  Second value = 2 
`