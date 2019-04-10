---
title: Functions
localeTitle: المهام
---
## المهام

تسمح لك الوظيفة بتعريف كتلة قابلة لإعادة الاستخدام من التعليمات البرمجية التي يمكن تنفيذها عدة مرات داخل البرنامج.

تتيح لك الوظائف إنشاء حلول أكثر جُرَفاً و [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) لمشاكل معقدة.

في حين أن بيثون توفر بالفعل العديد من الوظائف المضمنة مثل `print()` و `len()` ، يمكنك أيضًا تحديد وظائفك الخاصة لاستخدامها في مشاريعك.

إحدى المزايا الرائعة لاستخدام الدالات في التعليمات البرمجية الخاصة بك أنه يقلل العدد الإجمالي خطوط التعليمات البرمجية في المشروع.

### بناء الجملة

في Python ، يحتوي تعريف الدالة على الميزات التالية:

1.  الكلمة `def`
2.  اسم وظيفة
3.  paranthesis '()' ، وداخل معلمات إدخال paranthesis ، على الرغم من أن معلمات الإدخال اختيارية.
4.  القولون ':'
5.  بعض كتلة من التعليمات البرمجية للتنفيذ
6.  بيان الإرجاع (اختياري)

 `# a function with no parameters or returned values 
 def sayHello(): 
  print("Hello!") 
 
 sayHello()  # calls the function, 'Hello!' is printed to the console 
 
 # a function with a parameter 
 def helloWithName(name): 
  print("Hello " + name + "!") 
 
 helloWithName("Ada")  # calls the function, 'Hello Ada!' is printed to the console 
 
 # a function with multiple parameters with a return statement 
 def multiply(val1, val2): 
  return val1 * val2 
 
 multiply(3, 5)  # prints 15 to the console 
` 

دالات هي كتل من التعليمات البرمجية التي يمكن إعادة استخدامها ببساطة عن طريق استدعاء الدالة. ويتيح ذلك إعادة استخدام الشفرة البسيطة والأنيقة دون إعادة كتابة أجزاء من التعليمات البرمجية بشكل صريح. هذا يجعل التعليمات البرمجية أكثر قابلية للقراءة ، مما يجعل تصحيح الأخطاء أسهل ، ويحد من أخطاء الكتابة.

يتم إنشاء دالات في Python باستخدام الكلمة المفتاحية `def` ، متبوعةً باسم دالة ومعلمات دالة داخل أقواس.

وظيفة دوما بإرجاع قيمة، و `return` يستخدم الكلمة بواسطة الدالة لإرجاع قيمة، إذا كنت لا ترغب في عودة أي قيمة، القيمة الافتراضية `None` سوف إرجاعها.

يتم استخدام اسم الدالة لاستدعاء الدالة ، تمرير المعلمات المطلوبة داخل الأقواس.

 `# this is a basic sum function 
 def sum(a, b): 
  return a + b 
 
 result = sum(1, 2) 
 # result = 3 
` 

يمكنك تعريف القيم الافتراضية للمعلمات ، وبهذه الطريقة سوف تفسر بايثون أن قيمة هذه المعلمة هي القيمة الافتراضية إذا لم يتم تحديد أي منها.

 `def sum(a, b=3): 
  return a + b 
 
 result = sum(1) 
 # result = 4 
` 

يمكنك تمرير المعلمات بالترتيب الذي تريده ، باستخدام اسم المعلمة.

 `result = sum(b=2, a=2) 
 # result = 4 
` 

ومع ذلك ، لا يمكن تمرير وسيطة الكلمات الرئيسية قبل كلمة غير أساسية

 `result = sum(3, b=2) 
 #result = 5 
 result2 = sum(b=2, 3) 
 #Will raise SyntaxError 
` 

وظائف هي أيضا كائنات ، لذلك يمكنك تعيينها لمتغير ، واستخدام هذا المتغير مثل وظيفة.

 `s = sum 
 result = s(1, 2) 
 # result = 3 
` 

### ملاحظات

*   إذا تضمن تعريف الدالة معلمات ، فيجب عليك توفير نفس العدد من المعلمات عند استدعاء الوظيفة.
    
     `print(multiply(3))  # TypeError: multiply() takes exactly 2 arguments (0 given) 
     
     print(multiply('a', 5))  # 'aaaaa' printed to the console 
     
     print(multiply('a', 'b'))  # TypeError: Python can't multiply two strings 
    ` 
    
*   تتضمن كتلة التعليمة البرمجية التي ستقوم الدالة بتشغيل كافة عبارات بادئة داخل الدالة.
    
     `def myFunc(): 
     print('this will print') 
     print('so will this') 
     
     x = 7 
     # the assignment of x is not a part of the function since it is not indented 
    ` 
    
*   المتغيرات المحددة ضمن وظيفة موجودة فقط داخل نطاق تلك الوظيفة.
    
     `def double(num): 
     x = num * 2 
     return x 
     
     print(x)  # error - x is not defined 
     print(double(4))  # prints 8 
    ` 
    
    يفسر -Python كتلة الدالة فقط عندما يتم استدعاء الدالة وليس عندما يتم تعريف الدالة.حتى إذا كانت كتلة تعريف الدالة تحتوي على نوع من الخطأ ، فسيشير تفسر python إلى ذلك فقط عند استدعاء الدالة.
    

### معلومات اكثر:

*   [Python 3 Docs: تحديد الوظائف](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)