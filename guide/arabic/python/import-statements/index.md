---
title: Python Import Statements
localeTitle: بيثون استيراد البيانات
---
أثناء تعلم البرمجة وقراءة بعض الموارد كنت قد صادفت هذه الكلمة "التجريد" والتي تعني ببساطة للحد من وإعادة استخدام التعليمات البرمجية قدر الإمكان.

وظائف ووحدات تسهل التجريد. يمكنك إنشاء وظائف عندما تريد القيام بشيء بشكل متكرر داخل ملف.

تأتي الوحدات في الصورة عندما تريد إعادة استخدام مجموعة من الوظائف في ملفات مصدر مختلفة. الوحدات مفيدة أيضًا في هيكلة البرنامج بشكل جيد.

*   استخدام المكتبات القياسية والوحدات الأخرى التابعة لجهات خارجية:
*   هيكلة البرنامج

## استخدام المكتبات القياسية

مثال: يمكنك الاطلاع على طرق / وظائف جميع المكتبات القياسية في محررات بيثون الرسمية بالتفصيل.

 `import time 
 for i in range(100): 
    time.sleep(1)   # Waits for 1 second and then executes the next command 
    print(str(i) + ' seconds have passed')  # prints the number of seconds passed after the program was started 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CS6C)

 `# To calculate the execution time of a part of program 
 import time 
 start = time.time() 
 # code here 
 end = time.time() 
 print('Execution time:' , end-start) 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CS6C/1)

 `# Using math Module 
 import math 
 print(math.sqrt(100))   # prints 10 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":صاروخ:") [تشغيل الكود](https://repl.it/CS6C/2)

## استخدام وحدات طرف ثالث

لا تأتي وحدات الطرف الثالث مجمعة مع python ، ولكن يتعين علينا تثبيتها خارجيًا باستخدام مديري الحزم مثل برنامج [`pip`](https://bootstrap.pypa.io/get-pip.py) [`easy install`](https://bootstrap.pypa.io/ez_setup.py)

 `# To make http requests 
 import requests 
 rq = requests.get(target_url) 
 print(rq.status_code) 
` 

تعرف على المزيد حول وحدة طلبات الأيونات [هنا](http://docs.python-requests.org/en/master/)

## لتركيب البرامج

نحن نريد أن نجعل من برنامج يحتوي على وظائف مختلفة فيما يتعلق بالأرقام الأولية. دعنا نبدأ. `prime_functions.py` جميع الوظائف في `prime_functions.py`

 `# prime_functions.py 
 from math import ceil, sqrt 
 def isPrime(a): 
    if a == 2: 
        return True 
    elif a % 2 == 0: 
        return False 
    else: 
        for i in range(3,ceil(sqrt(a)) + 1,2): 
            if a % i == 0: 
                return False 
        return True 
 
 def print_n_primes(a): 
    i = 0 
    m = 2 
    while True: 
        if isPrime(m) ==True: 
            print(m) 
            i += 1 
        m += 1 
        if i == a: 
            break 
` 

الآن نريد أن استخدام وظائف أننا بإنشائه في `prime_functions.py` لذلك نحن إنشاء ملف جديد `playground.py` لاستخدام تلك الوظائف.

> _يرجى ملاحظة أن هذا البرنامج بسيط للغاية لجعل ملفين منفصلين ، فقط للتدليل. ولكن عندما تكون هناك برامج معقدة كبيرة ، فإن إنشاء ملفات مختلفة مفيد حقًا._

 `# playground.py 
 import prime_functions 
 print(prime_functions.isPrime(29)) # returns True 
` 

## فرز الواردات

وتتمثل الممارسة الجيدة في تصنيف وحدات `import` في ثلاث مجموعات - استيراد المكتبات القياسية ، واردات الأطراف الثالثة ذات الصلة ، والواردات المحلية. داخل كل مجموعة ، من المنطقي فرز الحروف أبجديًا حسب اسم الوحدة. يمكنك العثور على [مزيد من المعلومات في PEP8](https://www.python.org/dev/peps/pep-0008/?#imports) .

من أهم الأمور بالنسبة إلى لغة Python هي الوضوح ، ووحدات الفرز الأبجدي هي أسرع في القراءة والبحث. كما أنه من الأسهل التحقق من استيراد شيء ما وتجنب الواردات المتكررة.