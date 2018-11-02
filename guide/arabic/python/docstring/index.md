---
title: Docstring
localeTitle: Docstring
---
## Docstring

Docstring هو وسيلة للمطورين لتوصيل الغرض ، والمعلمات والمتطلبات ، واستخدام وظيفة في بيثون للمطورين الآخرين. وهو يتيح سهولة صيانة الكود وفهمه.

على عكس تعليقات كود المصدر التقليدية يجب أن يصف docstring ما وظيفة لا ، كيف.

من الأمثلة المشابهة على DocstringJavadoc في جافا.

تتم كتابة Docstring كتعليق متعدد الأسطر بعد رأس الإعلان في Python مباشرة. هناك 4 أجزاء مختلفة لأوراق التوزيع:

1.  نوع المدخلات ونوع المخرجات
    *   يمكن أن يكون الإدخال / الإخراج `obj, list, bool, int, str, float`
2.  وصف الوظيفة
    *   موجز ، ولكن وصف دقيق لما تقوم به وظيفتك
3.  المتطلبات
    *   قراءة هذا من قبل الإنسان ، لذلك ليس من الضروري أن يكون رمز
4.  حالات الاختبار (عادة 2-3)

التنسيق العام مدرج أدناه.

## تنسيق Docstring

 `def my_examplefunc(input_type1, input_type2): 
  '''(input_type1, input_type2) -> output_type        # Your first line will be the input/output. Remember the space around the arrow! 
  Here is a description of my example function        # Your second line will be the description 
  REQ: type(input_type1) == list                      # Your next line (or lines) will be the requirements for the input of your function 
  REQ: type(input_type2) == str 
  >>> my_example_func([2, 3], "Hello World!")         # After the requirements come test cases 
  [2, 3] "Hello World" 
  >>> my_example_func([7, 2], "Another test case")    # Your first line of the test case is an example of the usage, prefaced by >>> 
  [7, 2] "Another test case"                          # Your second line of the test case is the output 
  >>> my_example_func([5, 6], "Last test case") 
  [5, 6] "Last test case" 
  ''' 
  # Your code goes here, underneath the Docstring 
` 

من الأفضل فهم Docstring بأمثلة ، لذا ألق نظرة على برنامج المثال أدناه حيث يخرج البرنامج True إذا كان الرقم أقل من 5 ، و False إذا كان الرقم أكبر من 5.

## مثال 1

 `def is_less_than_five(some_number): 
  '''(int) -> bool 
  Returns True if the given number is less than 5, and False is the given number is greater than 5. 
  REQ: some_number != 5 
  >>> is_less_than_five(4) 
  True 
  >>> is_less_than_five(6) 
  False 
  >>> is_less_than_five(100000) 
  False 
  ''' 
  # Your code goes here 
` 

### بعض الروابط المفيدة:

تعتبر Numpy و Google Docstrings منهجين شائع الاستخدام:

*   Google: http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example\_google.html
*   Numpy: http://sphinxcontrib-napoleon.readthedocs.io/en/latest/example\_numpy.html أيضًا ، يرجى الرجوع إلى بعض التعليقات الجيدة السابقة حول PEP: https://www.python.org/dev/peps/pep-0257/