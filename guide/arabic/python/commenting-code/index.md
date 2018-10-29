---
title: Python Commenting Code
localeTitle: بيثون تعليق كود
---
تستخدم التعليقات للتعليق أو الوصف أو شرح الكود المعقد أو الصعب الفهم. سوف تتجاهل بايثون عن قصد التعليقات عندما تتحول إلى شفرة البايت من قبل المترجم. يحتوي برنامج [`PEP 8`](https://www.python.org/dev/peps/pep-0008/#comments) على قسم يتعامل مع التعليقات. كما أنه يزيد من سهولة القراءة عن طريق إضافة لغة سهلة ووصفية لفهم أفضل.

**كتلة** والتعليقات **المضمنة** تبدأ مع `#` ، متبوعا بمسافة قبل التعليق:

 `    # This is a block comment. 
    print('Hello world!') # This is an inline commment. 
` 

لا تتضمن Python طريقة رسمية لكتابة التعليقات متعددة الأسطر. يجب أن يبدأ كل سطر من تعليق يغطي عدة أسطر بـ `#` ومساحة:

 `    # This is the first line of a multiline comment. 
    # This is the second line. 
` 

هناك نوع آخر من التعليقات هو مستند **التوزيع** موثق في [`PEP 257`](https://www.python.org/dev/peps/pep-0257/) . Docstrings هي نوع محدد من التعليقات التي تصبح السمة `__doc__` .

بالنسبة إلى سلسلة حرفية أن تكون عبارة عن docstring ، يجب أن تبدأ وتنتهي بـ `\"\"\"` وأن تكون أول عبارة عن تعريف الوحدة النمطية أو الوظيفة أو الفئة أو الأسلوب الذي تقوم بتوثيقه:

 `    class SomeClass(): 
        """Summary line for SomeClass. 
 
        More elaborate descriptions may require using a 
        a multiline docstring. 
        """ 
 
        def method_a(self): 
            """Single line summary of method_a.""" 
            pass 
` 

يمكن استخدام القيم الحرفية للسلسلة التي تبدأ وتنتهي بـ `"""` التي لا تمثل docstrings (وليس العبارة الأولى) ، للسلاسل متعددة الأسطر. لن تصبح سمات `__doc__` . إذا لم يتم تعيينها لمتغير ، فلن تقوم بإنشاء كود البايت. هناك بعض النقاش حول استخدامها كتعليقات متعددة الأسطر موجودة [هنا](http://stackoverflow.com/questions/7696924/multiline-comments-in-python) .