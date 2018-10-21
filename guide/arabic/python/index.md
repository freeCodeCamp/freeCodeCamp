---
title: Python
localeTitle: الثعبان
---
## ما هي بايثون؟

[بايثون](https://www.python.org) هي لغة برمجة عامة الغرض ، يتم كتابتها وتفسيرها ديناميكيًا وتعرف بسهولة قراءتها مع مبادئ التصميم الرائعة.

لمعرفة المزيد عن Python ، راجع هذه الصفحات على python.org:

[ما هي بايثون؟](https://www.python.org/doc/essays/blurb/)

[بيثون أسئلة وأجوبة](https://docs.python.org/3/faq/general.html) .

## Python 2 أو Python 3

*   النسختان متشابهتان ، مع معرفة تحويل واحد إلى رمز الكتابة للآخر سهل.
*   [Python 2 أو Python 3](https://wiki.python.org/moin/Python2orPython3)
    *   [لن يتم الحفاظ على بيثون 2.x بعد عام 2020.](https://www.python.org/dev/peps/pep-0373/)
    *   3.x قيد التطوير النشط. هذا يعني أن جميع تحسينات المكتبة القياسية الأخيرة ، على سبيل المثال ، لا تتوفر إلا بشكل افتراضي في Python 3.x.
    *   لقد جمعت أنظمة بيثون البيئية كمية كبيرة من برامج الجودة على مر السنين. الجانب السلبي من كسر التوافق إلى الوراء في 3.x هو أن بعض من هذا البرنامج (وخاصة البرامج الداخلية في الشركات) لا يزال لا يعمل على 3.x حتى الآن.

## التركيب

معظم أنظمة التشغيل المعتمدة على nix تأتي مع Python المثبتة (عادة Python 2، Python 3 في أحدثها). استبدال نظام بايثون غير مستحسن وقد يسبب مشاكل. ومع ذلك ، يمكن تثبيت إصدارات مختلفة من بايثون بأمان جنبا إلى جنب مع نظام بايثون. انظر [بايثون الإعداد والاستخدام](https://docs.python.org/3/using/index.html) .

لا يأتي Windows مع Python ، حيث يمكن العثور على برنامج التثبيت والإرشادات [هنا](https://docs.python.org/3/using/windows.html)

## بايثون مترجم

مترجم Python هو ما يستخدم لتشغيل برامج Python النصية.

إذا كان متاحًا وفي مسار البحث في Unix shell ، فمن الممكن بدء تشغيله عن طريق كتابة الأمر `python` متبوعًا باسم البرنامج النصي سيستدعي المترجم وتشغيل النص البرمجي.

`hello_campers.py`

 `print('Hello campers!') 
` 

من المحطة:

 `$ python hello_campers.py 
 Hello campers! 
` 

"عندما يتم تثبيت إصدارات متعددة من Python ، فإن الاتصال بها حسب الإصدار ممكن اعتمادًا على تكوين التثبيت. في بيئة مخصصة لـ Cloud9 IDE ، يمكن استدعائها مثل:

 `$ python --version 
 Python 2.7.6 
 $ python3 --version 
 Python 3.4.3 
 $ python3.5 --version 
 Python 3.5.1 
 $ python3.6 --version 
 Python 3.6.2 
 $ python3.7 --version 
 Python 3.7.1 
` 

## بايثون Interpreter الوضع التفاعلي

يمكن بدء الوضع التفاعلي عن طريق استدعاء مترجم Python باستخدام العلامة `-i` أو بدون أية وسائط.

يحتوي الوضع التفاعلي على موجه حيث يمكن إدخال أوامر Python وتشغيلها:

 `$ python3.5 
 Python 3.5.1 (default, Dec 18 2015, 00:00:00) 
 GCC 4.8.4 on linux 
 Type "help", "copyright", "credits" or "license" for more information. 
 >>> print("Hello campers!") 
 Hello campers! 
 >>> 1 + 2 
 3 
 >>> exit() 
 $ 
` 

## زن بيثون

يتم تضمين بعض المبادئ التي أثرت في تصميم بايثون كبيض عيد الفصح ويمكن قراءتها باستخدام الأمر داخل الوضع التفاعلي لمترجم Python:

 `>>> import this 
 The Zen of Python, by Tim Peters 
 
 Beautiful is better than ugly. 
 Explicit is better than implicit. 
 Simple is better than complex. 
 Complex is better than complicated. 
 Flat is better than nested. 
 Sparse is better than dense. 
 Readability counts. 
 Special cases aren't special enough to break the rules. 
 Although practicality beats purity. 
 Errors should never pass silently. 
 Unless explicitly silenced. 
 In the face of ambiguity, refuse the temptation to guess. 
 There should be one-- and preferably only one --obvious way to do it. 
 Although that way may not be obvious at first unless you're Dutch. 
 Now is better than never. 
 Although never is often better than *right* now. 
 If the implementation is hard to explain, it's a bad idea. 
 If the implementation is easy to explain, it may be a good idea. 
 Namespaces are one honking great idea -- let's do more of those! 
` 

## إيجابيات وسلبيات بيثون

### الايجابيات

1.  لغة تفاعلية مع دعم وحدة لكل الوظائف تقريبًا.
2.  المصدر المفتوح: إذن ، يمكنك المساهمة في المجتمع ، والوظائف التي طورتها للاستخدام في المستقبل ولمساعدة الآخرين
3.  وهناك الكثير من المترجمين الفوريين وأجهزة الكمبيوتر المحمولة المتاحة لتجربة أفضل مثل دفتر jupyter.

#### سلبيات

1.  كونها مفتوحة المصدر ، تطورت العديد من الطرق المختلفة على مدار العام لنفس الوظيفة. هذا في بعض الأحيان ، يخلق الفوضى للآخرين لقراءة شخص آخر رمز.
2.  إنها لغة بطيئة. لذلك ، لغة سيئة للغاية لاستخدامها لتطوير الخوارزميات العامة.

## كابل بيانات

[بيثون موثقة جيدا](https://docs.python.org/3/) . تتضمن هذه المستندات برامج تعليمية وأدلة ومراجع ومعلومات وصفية للغة.

مرجع مهم آخر هو مقترحات تحسين بيثون ( [PEPs](https://www.python.org/dev/peps/) ). المدرجة في PEPs هو دليل الاسلوب لكتابة رمز بيثون ، [`PEP 8`](https://www.python.org/dev/peps/pep-0008/) .

## التصحيح

يمكن استخدام عبارات `print` المضمنة لتصحيح الأخطاء البسيطة:

> **... غالبًا ما تكون أسرع طريقة لتصحيح أخطاء البرنامج هي إضافة بعض عبارات الطباعة إلى المصدر: إن دورة "تحرير - اختبار - تصحيح" سريعة تجعل هذا الأسلوب البسيط فعّالاً للغاية.**
> 
> \- [ملخص تنفيذي](https://www.python.org/doc/essays/blurb/)

تتضمن Python أيضًا أدوات أكثر فاعلية لتصحيح الأخطاء ، مثل:

*   وحدة [_تسجيل الدخول_](https://docs.python.org/3/library/logging.html) ، [_وقطع الأشجار_](https://docs.python.org/3/library/logging.html)
*   وحدة تصحيح الأخطاء ، [_pdb_](https://docs.python.org/3/library/pdb.html)

فقط لاحظ أن هذه موجودة في الوقت الحالي.

## مرحبا بالعالم!

وبالعودة إلى المستندات ، يمكننا أن نقرأ عن وظيفة [`print`](https://docs.python.org/3/library/functions.html#print) ، وهي وظيفة [_مدمجة في_](https://docs.python.org/3/library/functions.html) [مكتبة Python القياسية](https://docs.python.org/3/library/index.html) .

 `print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False) 
` 

يتم سرد الوظائف المضمنة بترتيب أبجدي. يتبع الاسم قائمة متقابلة بالمعلمات الرسمية مع القيم الافتراضية الاختيارية. تحت هذا هو وصف موجز للوظيفة وتعطى معلماته وأحيانا مثال على ذلك.

تستبدل وظيفة [`print`](https://docs.python.org/3/library/functions.html#print) في Python 3 بيان [`print`](https://docs.python.org/2/reference/simple_stmts.html#print) في Python 2.

 `>>> print("Hello world!") 
 Hello world! 
` 

يتم استدعاء الدالة عندما يتبع اسم الدالة `()` . لعالم مرحبا! على سبيل المثال ، يتم استدعاء وظيفة الطباعة مع سلسلة كوسيطة للمعلمة الأولى. لبقية المعلمات يتم استخدام الافتراضات.

إن الوسيطة التي أطلقنا عليها دالة `print` باستخدام كائن `str` أو _سلسلة_ ، أحد أنواع بايثون [_المضمنة_](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str) . كما أن أهم شيء عن python هو أنه لا يتعين عليك تحديد نوع البيانات أثناء إعلان متغير ، مترجم python سوف يفعل ذلك بنفسه على أساس نوع القيمة المعينة.

معلمة `objects` مسبوقة بـ `*` والتي تشير إلى أن الدالة ستأخذ عددًا عشوائيًا من الوسيطات الخاصة بهذه المعلمة.

## تريد معرفة المزيد؟

Free Code Camp لديه بعض الموارد الرائعة. تعد الويب مكانًا كبيرًا ، وهناك الكثير لاستكشافه:

*   كتاب ممارسة بيثون: http://anandology.com/python-practice-book/index.html
*   فكر في بايثون: http://greenteapress.com/thinkpython/html/index.html
*   بيثون للأعمال العملية: http://pbpython.com/
*   دورة أخرى: https://realpython.com/؟utm _source = fsp & utm_ medium = promo & utm\_campaign = bestresources
*   عام: https://www.fullstackpython.com/
*   تعلم الأساسيات: https://www.codecademy.com/learn/learn-python
*   علوم الكمبيوتر باستخدام Python: https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-11؟ref=hackernoon#!
*   قائمة بمزيد من الموارد لتعلم python: https://github.com/vinta/awesome-python
*   بيثون التفاعلية: http://interactivepython.org/runestone/static/thinkcspy/index.html
*   دليل المطور لبيثون: https://devguide.python.org/