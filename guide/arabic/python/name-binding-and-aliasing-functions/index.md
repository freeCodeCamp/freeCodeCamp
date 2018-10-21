---
title: Python Name Binding and Aliasing Functions
localeTitle: Python Name Binding and Aliasing Functions
---
يقدم تعريف الدالة اسم الدالة في جدول الرموز الحالي. تحتوي قيمة اسم الدالة على نوع يتم التعرف عليه بواسطة المترجم كدالة معرفة من قبل المستخدم.

 `>>> something = 1 
 >>> type(something) 
 <type 'int'> 
 >>> def something(): 
 ...     pass 
 ... 
 >>> type(something) 
 <type 'function'> 
 >>> something = [] 
 >>> type(something) 
 <type 'list'> 
` 

يمكن تعيين هذه القيمة إلى اسم آخر يمكن استخدامه أيضًا كدالة. هذا بمثابة آلية إعادة تسمية عامة:

 `>>> fib 
 <function fib at 10042ed0> 
 >>> f = fib 
 >>> f(100) 
 0 1 1 2 3 5 8 13 21 34 55 89 
`