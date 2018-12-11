---
title: Creating a Project with Django
localeTitle: إنشاء مشروع مع Django
---
الآن بعد أن عرفنا كيفية إنشاء بيئات افتراضية ونستخدم النقطة ، يمكننا البدء في بناء مشروعنا. في هذه المقالة ، سنقوم بإنشاء مشروعنا الأول لـ Django ، وكتابة الاختبارات ، وبدء تشغيل خادم التطوير الخاص بنا.

## خلق البيئة الافتراضية

أولاً ، لنقم بإنشاء بيئة افتراضية جديدة لهذا المشروع. (إذا لم تكن قد قمت بالفعل ، قم بإلغاء تنشيط virtualenv السابقة بكتابة `deactivate` في المحطة الطرفية). لمزيد من المعلومات حول البيئات الافتراضية وكيفية استخدامها ، قم بزيارة هذه الصفحة .

انتقل إلى الدليل حيث تريد مشروع Django واكتب ما يلي في المحطة:

 `mkvirtualenv taskplanner --python=/usr/bin/python3 
` 

قد تضطر إلى تغيير مسار بايثون إذا كان يبدو مختلفًا عن المسار الوارد أعلاه.

يجب أن تبدو shell سطر الأوامر الآن كما هو موضح أدناه ، مما يشير إلى أنك في بيئة ظاهرية.

 `(taskplanner)<a href='https://sites.google.com/a/chromium.org/chromedriver/downloads' target='_blank' rel='nofollow'>munsterberg@Lenovo ~/workspace] $ 
` 

إذا لم يكن الأمر كذلك ، فاكتب فقط:

 `workon taskplanner 
` 

يمكننا الآن تثبيت Django:

 `pip install Django 
` 

## إنشاء مشروع Django

مع تثبيت Django يمكننا إنشاء مشروعنا:

 `django-admin.py startproject taskplanner 
` 

بعد ذلك ، انتقل إلى مشروعنا الجديد بكتابة:

 `cd taskplanner 
` 

قبل أن نفعل أي شيء ، دعونا نضع هذا الدليل كدليل عمل لدينا باستخدام virtualenvwrapper:

 `setvirtualenvproject 
` 

**Sidenote** : للحصول على قائمة أوامر virtualenvwrapper ، اكتب `virtualenvwrapper` في الطرفية الخاصة بك.

الآن ، عندما نكون في بيئتنا الافتراضية ، يمكننا كتابة `cdproject` للتنقل مباشرة إلى دليل العمل الخاص بنا.

يجب أن يظهر دليل مشروعك على النحو التالي:

 `taskplanner // our main working directory 
 |--- manage.py // similar to the django-admin script, you will see this used a 
               // lot throughout our project 
 |--- taskplanner 
    |--- __init__.py // this just tells python to treat this directory as a package 
    |--- settings.py // main configuration file for our project 
    |--- urls.py // we will use this to configure urls 
    |--- wsgi.py // this is used for deploying our project to a production server 
` 

## الاختبار الوظيفي

التطوير المعتمد على الاختبار هو أفضل الممارسات المستخدمة على نطاق واسع في تطوير البرمجيات. بشكل أساسي ، نريد أن نكتب اختبارًا أولاً يفشل ، ثم نكتب أقل كمية ممكنة من الشفرة لتمرير هذا الاختبار. مع Django ، هدفنا هو كتابة كل من الاختبارات الوظيفية (المعروفة أيضًا باسم ؛ اختبارات التكامل ، اختبارات نهاية إلى نهاية ، وما إلى ذلك) ، واختبارات الوحدة خلال التطوير. لا تتعرق ، فالاختبار ليس صعبًا كما يبدو!

لكننا نحتاج أولاً إلى إنشاء بيئة افتراضية جديدة مخصصة للاختبار. افتح علامة تبويب جديدة في الجهاز ، وانتقل إلى دليل مشروع مخطط المهام واكتب:

 `mkvirtualenv taskplanner_test --python=/usr/bin/python3 
` 

الآن يجب أن يكون لديك علامتا تبويب مفتوحتان في الجهاز الخاص بك ، واحد في بيئة ظاهرية (مخطط المهام) ، والآخر في بيئة ظاهرية (taskplanner\_test).

إذا قمت `pip freeze` في بيئة الاختبار الجديدة (taskplanner\_test) ، ستلاحظ أي شيء يظهر. هذا لأننا لم نقم بتركيب أي شيء في بيئتنا الجديدة.

لذلك دعونا نمضي قدمًا ونركّب دجانجو أولاً في بيئة الاختبار (taskplanner\_test):

 `pip install Django 
` 

لإنشاء اختباراتنا الوظيفية ، سنحتاج إلى بعض الأشياء. أولاً ، نحتاج إلى تثبيت متصفح الويب Firefox في جهازنا. إذا لم يكن لديك Firefox ، فقم بتثبيته الآن.

**Sidenote** : يمكنك استخدام Chrome لاختبار الدمج ، ولكن يجب عليك تنزيل برنامج التشغيل [هنا](https://sites.google.com/a/chromium.org/chromedriver/downloads) واتباع [سؤال تجاوز سعة التكديس هذا](http://stackoverflow.com/questions/13724778/how-to-run-selenium-webdriver-test-cases-in-chrome) . يتمتع Firefox بأداء أفضل مقارنة بالكروم عند إجراء اختبارات التكامل ، وهو أمر مهم للغاية نظرًا لأن اختبارات التكامل بطيئة للغاية مقارنة مع اختبارات الوحدة.

وذلك لأن اختبارات التكامل تختبر النظام **بأكمله** ، بدلاً من "الوحدات" (مكونات صغيرة). في العالم الحقيقي ، من الأفضل في بعض الأحيان تجنب اختبارات التكامل بسبب وقت التطوير الطويل لإنشاءها ، ووقت التشغيل البطيء ، والأخطاء الغامضة ، وغيرها من الأسباب التي قد تكتشفها في الوقت المناسب.

ومع ذلك ، فهي لا تزال تستحق النظر عند تطوير تطبيق العالم الحقيقي ، ويمكن أن تكون مفيدة للغاية من حيث الموثوقية على الرغم من سلبيات الأداء.

بعد ذلك ، نحتاج إلى تثبيت حزمة تسمى [السيلينيوم](http://selenium.googlecode.com/svn/trunk/docs/api/py/index.html) . هذه الحزمة سوف توفر لنا WebDriver حتى نتمكن من التحكم في المتصفح مع اختباراتنا. عادة ما يستخدم السيلينيوم لأتمتة المتصفح الخاص بك.

 `pip install selenium 
` 

والآن بعد أن قمنا بتثبيتها ، سنحتاج إلى دليل لإنشاء اختباراتنا:

 `mkdir functional_tests 
` 

في دليل `taskplanner` يجب أن تشاهد الآن ما يلي:

 `taskplanner 
 |-- functional_tests 
 |--- manage.py 
 |--- taskplanner 
    ... 
` 

نحتاج الآن إلى إنشاء بعض الملفات في مجلد وظائفنا `functional_tests` . `__init__.py` ملف `__init__.py` (سيؤدي هذا إلى إخبار بايثون بمعالجة `functional_tests` مثل الحزمة) ، وملف `test_all_users.py` على اختباراتنا.

دعونا نفعل ذلك الآن:

 `touch functional_tests/__init__.py 
 touch functional_tests/test_all_users.py 
` 

**Sidenote** : `__init__.py` هو دائمًا ملف فارغ. لمزيد من المعلومات حول ما يتم استخدامه ، اطلع على [إجابة stackoverflow هذه.](http://stackoverflow.com/questions/448271/what-is-init-py-for)

يمكننا أخيرا البدء في كتابة أول اختبار وظيفي لدينا! الاختبارات الوظيفية هي لاختبار مجموعة من الوظائف في تطبيق الويب الخاص بنا. يصف برنامج TDD مع بايثون الاختبارات الوظيفية بأنها "كيفية عمل التطبيق من وجهة نظر المستخدم".

`test_all_users.py` ملف `test_all_users.py` في محرر النصوص لدينا. أولاً ، نريد استيراد webdriver selenium ، ولجعل هذا أسهل كثيرًا ، يوفر Django شيئًا معروفًا باسم StaticLiveServerTestCase للاختبار المباشر. دعونا استيراد كل من هؤلاء الآن:

 `from selenium import webdriver 
 from django.contrib.staticfiles.testing import StaticLiveServerTestCase 
` 

بما أننا نختبر من منظور المستخدمين ، دعنا نسمي هذه الاختبارات NewVisitorTest. أضف ما يلي:

 `class NewVisitorTest(StaticLiveServerTestCase): 
    def setUp(self): 
        self.browser = webdriver.Firefox() 
        self.browser.implicitly_wait(2) 
 
    def tearDown(self): 
        self.browser.quit() 
` 

أولاً ، قمنا بإنشاء فئة StaticLiveServerTestCase باسم NewVisitorTest ، وهذا سيتضمن اختباراتنا التي نريد تشغيلها لزائر جديد. ثم ، لدينا طريقتين باسم setUp و tearDown. تتم تهيئة طريقة setUp عند إجراء اختباراتنا. لذلك ، بالنسبة إلى كل اختبار نجريه ، نفتح متصفح Firefox وننتظر لمدة ثانيتين حتى يتم تحميل الصفحة. يتم تنفيذ tearDown بعد انتهاء كل اختبار ، تغلق هذه الطريقة المتصفح لنا بعد كل اختبار.

الآن يمكننا كتابة أول اختبار لنا ، وإطلاق Firefox وإغلاقه تلقائيًا لنا. لنكتب اختبارنا الآن أسفل طريقة tearDown.

 `    def test_home_title(self): 
        self.browser.get('http://localhost:8000') 
        self.assertIn('Welcome to Django', self.browser.title) 
` 

الاختبار الأول لدينا ، كيف مثيرة! دعونا نمر من خلاله. يجب أن يبدأ كل اختبار نرغب في إنشائه بـ "اختبار". على سبيل المثال ، إذا أردت إنشاء اختبار لـ css الخاص بي ، فإنني سأتصل بالطريقة `test_h2_css` . هنا ، `test_home_title` . هذا واضح إلى حد ما ، وهو بالضبط ما نريده لاختباراتنا. تجلب هذه الطريقة أولاً Firefox إلى عنوان url `http://localhost:8000` ، ثم تتحقق مما إذا كان 'Welcome to Django' في عنوان علامات html head.

لنقم بإجراء هذا الاختبار الآن ونرى ما يحدث:

 `python manage.py test functional_tests 
` 

أولاً ، ما الذي نكتبه هنا بالضبط؟ يقدم لنا البرنامج النصي manage.py شيئًا يسمى "اختبار" ، وسنستخدمه لتشغيل جميع اختباراتنا. هنا نقوم بتشغيله في حزمة `functional_tests` التي قمنا بإنشائها باستخدام ملف `__init__.py` .

بعد تشغيل هذا ، سترى شيئًا مثل ما يلي في جهازك:

 `F 
 ====================================================================== 
 FAIL: test_home_title (functional_tests.test_all_users.NewVisitorTest) 
 ---------------------------------------------------------------------- 
 Traceback (most recent call last): 
  File "/Users/username/url/to/project/taskplanner/functional_tests/test_all_users.py", line 15, in test_home_title 
    self.assertIn('Welcome to Django', self.browser.title) 
 AssertionError: 'Welcome to Django' not found in 'Problem loading page' 
 
 ---------------------------------------------------------------------- 
 Ran 1 test in 4.524s 
 
 FAILED (failures=1) 
` 

لذلك فشلت ، لكنها أعطتنا بعض النصائح المفيدة. أولا ، AssertionError. "مرحبا بك في Django" غير موجود في صفحة "مشكلة التحميل". هذا يعني أن عنوان `http://localhost:8000` كان 'صفحة تحميل المشكلة'. إذا انتقلت إلى عنوان url ، فسترى أن صفحة الويب لم تكن متوفرة.

دعونا نحاول تشغيل خادم Django الخاص بنا للحصول على الاختبار. قم بالتبديل إلى علامة التبويب الطرفية الموجودة في بيئة ظاهرية `taskplanner` وقم بتشغيل الخادم الخاص بنا.

 `python manage.py runserver 
` 

يجب أن ترى شيئًا كالتالي:

 `Performing system checks... 
 
 System check identified no issues (0 silenced). 
 
 You have unapplied migrations; your app may not work properly until they are applied. 
 Run 'python manage.py migrate' to apply them. 
 
 March 06, 2016 - 20:53:38 
 Django version 1.9.4, using settings 'taskplanner.settings' 
 Starting development server at http://127.0.0.1:8000/ 
 Quit the server with CONTROL-C. 
` 

لا تقلق بشأن رسالة الترحيل غير المطبقة بعد.

الآن لدينا خادم يعمل على `http://localhost:8000` ، يتيح تشغيل الاختبار مرة أخرى.

ارجع إلى علامة التبويب الطرفية الأخرى الموجودة في بيئة ظاهرية في `taskplanner_test` وقم بتشغيل التالي مرة أخرى:

 `python manage.py test functional_tests 
` 

يجب أن ترى ما يلي.

 `Creating test database for alias 'default'... 
 . 
 ---------------------------------------------------------------------- 
 Ran 1 test in 4.033s 
 
 OK 
 Destroying test database for alias 'default'... 
` 

## ما قمنا به حتى الآن

لدينا أول اختبار اجتياز!

لقد غطينا الكثير في هذه المقالة. أنشأنا أول مشروع لدينا ، وقمنا بإعداد بيئات افتراضية لأغراض التطوير والاختبار ، وكتبنا أول اختبار وظيفي ، وتابعتنا عملية التطوير المدفوعة بالتجربة بكتابة اختبار فاشل ، ومن ثم جعله يمر.

## باستخدام قوالب بداية

يمكنك أن توفر على نفسك الكثير من الوقت من خلال بدء مشروعك باستخدام قالب بداية جانج. تستخدم هذه المشروعات أفضل الممارسات التي ستوفر لك صداعًا لاحقًا عندما ينمو مشروعك. بعض من أكثر المشاريع شعبية هي

*   [قطاعة البسكويت](https://github.com/pydanny/cookiecutter-django)
*   [هاكاثون المبدئ](https://github.com/DrkSephy/django-hackathon-starter)
*   [حافة](https://github.com/arocks/edge)