---
title: Python 2 vs Python 3
localeTitle: Python 2 vs Python 3
---
نحن لا نأخذ جانبًا في النقاش. إذا كنت مهتمًا بمعرفة المزيد عنها لأغراض أكاديمية ، فربما [تقارن بين مقالتي Python 2 و Python 3](https://wiki.python.org/moin/Python2orPython3) .

ولكن ، لا يمكننا أيضا أن نجهل حقيقة أن هناك نوعان من النكهات الرئيسية من بايثون هناك. لماذا ترتدي الرعاية ، تسأل؟ لأن التعليمة البرمجية المكتوبة لإصدار واحد من Python يمكن أن تؤدي إلى خطأ في بناء الجملة في إصدار آخر من Python.

ما يلي هو عبارة `print` صالحة في Python 2 ، ولكنها لا تعمل على Python 3:

 `print "Hello World" 
` 

في Python 3 ، يلقي نفس العبارة خطأ كالتالي:

 `>>> print "hello" 
  File "<stdin>", line 1 
    print "hello" 
                ^ 
 SyntaxError: Missing parentheses in call to 'print' 
` 

في Python 2 ، تتم معاملة "print" كإشارة بدلاً من دالة. ليست هناك حاجة إلى التفاف النص الذي تريد طباعته بين قوسين ، على الرغم من أنك تستطيع ذلك إن أردت. يعامل Python 3 بشكل واضح "print" كدالة ، مما يعني أنه يجب عليك تمرير العناصر التي تحتاج إلى طباعتها إلى الوظيفة بين قوسين بطريقة قياسية ، أو ستحصل على خطأ في بناء الجملة

يعد استخدام وظيفة `print()` 'آمن' في كل من Python 2 و 3:

 `print("Hello World") 
` 

هناك فرق آخر بين Python 2 و Python 3 وهو بنية البيانات التي يتم إرجاعها عند استدعاء الدالة `map()` .

في Python 2 ، تقوم `map()` بإرجاع قائمة:

 `>>> result = map(int,['10','20','30','40']) 
 >>> print result 
 >>> [10,20,30,40] 
` 

في Python 3 ، تقوم `map()` بإرجاع مكرر:

 `>>> result = map(int,['10','20','30','40']) 
 >>> print (result) 
 >>> <map object at 0x7f40896b4630> 
` 

للحصول على قائمة في Python 3 ، يجب عليك تحويلها:

 `>>> result = list(map(int,['10','20','30','40'])) 
 >>> print (result) 
 >>> [10,20,30,40] 
` 

لذا ، فإن السؤال الوحيد الذي تحتاج إلى الاهتمام به الآن. هو الذي يجب عليك اختياره؟ إذا كنت جديدًا في Python ، فيجب أن تختار Python 3. Python 2 لديها حاليًا تاريخ [End of Life الذي تم](https://www.python.org/dev/peps/pep-0373/#update) تعيينه إلى عام 2020. بمعنى أن bugfixes العادية غير مضمنة للمضي قدمًا ونعمًا ، يستغرق الأمر وقتًا حتى للتعرف على الجوانب الأكثر شيوعًا إما بيثون. ووقتك مهم. لذا ، استثمر وقتك وجهدك بحكمة!

في حين أن Python 2 مدعومة وشائعة ، فإن معظم المكتبات العامة وأطر العمل في Python تفضل Python 3. Django [توصي](https://docs.djangoproject.com/en/1.9/faq/install/#faq-python-version-support) رسميًا [بـ](https://docs.djangoproject.com/en/1.9/faq/install/#faq-python-version-support) Python 3. كما يتم [دعم](http://flask.pocoo.org/docs/0.10/python3/#python3-support) القارورة وكل تبعياتها في Python 3.

كلاهما Python 2 و Python 3 رائعان. معظم توزيعات Linux و macOS تأتي مثبتة مسبقاً مع Python 2 كإصدار افتراضي من Python. ولدت بايثون 3 من البحث النهم عن بنيات لغة أكثر قابلية للقراءة وأكثر جمالا.

تستخدم هذه المقالة Python 3 لإعداد إطارات الويب في بيئة التطوير الخاصة بك. ولكن قبل ذلك ، تحتاج إلى التأكد من أن لديك Python 3 وتعرف كيف تستخدمه!

#### معلومات اكثر:

*   [بايثون 2 أو 3 مقالة](https://wiki.python.org/moin/Python2orPython3)