---
title: Python Defining Functions
localeTitle: بيثون تعريف وظائف
---
[بيثون مستندات](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

يمكننا إنشاء وظيفة تكتب سلسلة فيبوناتشي إلى حد تعسفي:

 `>>> def fib(n):    # write Fibonacci series up to n 
 ...     """Print a Fibonacci series up to n.""" 
 ...     a, b = 0, 1 
 ...     while a < n: 
 ...         print(a, end=' ') 
 ...         a, b = b, a+b 
 ...     print() 
 ... 
 >>> # Now call the function we just defined: 
 ... fib(2000) 
 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 
` 

تقدم الكلمة المفتاحية [`def`](https://docs.python.org/3/reference/compound_stmts.html#def) تعريف دالة. يجب أن يتبعه اسم الوظيفة وقائمة المعلمات الرسمية. تبدأ العبارات التي تشكل نص الدالة في السطر التالي ويجب أن يتم وضع مسافة بادئة لها.

يمكن أن يكون البيان الأول للجسم الوظيفي عبارة عن سلسلة حرفية ؛ هذه السلسلة الحرفية عبارة عن سلسلة وثائق الدالة ، أو [docstring](https://www.python.org/dev/peps/pep-0257/) (يمكن العثور على المزيد حول docstrings في قسم وثائق السلاسل). تستخدم بعض الأدوات مستندات التوثيق لإنتاج المستندات عبر الإنترنت أو المطبوع تلقائيًا أو للسماح للمستخدم بالتصفح عبر الشفرة بشكل تفاعلي. من الممارسات الجيدة أن تقوم بتضمين التوثيق في الكود الذي تكتبه ، لذا حاول أن تعتاد عليه.