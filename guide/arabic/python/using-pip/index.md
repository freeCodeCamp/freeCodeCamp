---
title: Python Using Pip
localeTitle: بايثون باستخدام النقطة
---
لقد رأينا كيفية استخدام `import` البيانات إلى `import` الوحدات المختلفة واستخدامها في برامجنا. بيثون نفسها تأتي مع العديد من الوحدات المدمجة ، لكن مجتمع بايثون لديه الكثير ليقدمه.

> انها الوحدات التي تجعل الثعبان قوية جدا!

تضيف وحدات الطرف الثالث المزيد من الوظائف إلى Python. الآن سوف نتعلم كيفية تثبيت هذه الوحدات حتى نتمكن من استخدام تلك الموجودة في برامجنا.

أبسط طريقة هي استخدام `pip`

 `pip install <module_name> 
` 

إذا كنت قد استخدمت `npm` ، فيمكنك التفكير في الأمر على أنها _npm_ لبيثون.

ملاحظة جانبية: الفرق هو أنه مع `npm install` ، `npm install` حزم التثبيت الافتراضية محليًا إلى مشروع ، في حين يتم `pip install` `npm install` افتراضيًا على مستوى العالم. لتثبيت الوحدات النمطية محليًا ، تحتاج إلى إنشاء وتفعيل ما يسمى [بيئة افتراضية](http://docs.python-guide.org/en/latest/dev/virtualenvs/) ، بحيث يتم `pip install` إلى المجلد حيث توجد هذه البيئة الظاهرية ، بدلاً من العمومية (والتي قد تتطلب امتيازات المسؤول).

في آخر مرة ، في ويكي `import-statements` استخدمنا نموذج `requests` كمثال. كما هو وحدة طرف ثالث لدينا لتثبيته بشكل منفصل بعد تثبيت python.

سيكون `pip install requests` بسيطًا مثل `pip install requests` . يمكنك حتى تمرير الحجج المختلفة معه. تلك التي `--upgrade` كثير من الأحيان هي - `--upgrade` . يمكنك ترقية وحدة python من خلال:

 `pip install <module_name> --upgrade 
` 

على سبيل المثال ، سيكون ترقية وحدة الطلبات إلى أحدث إصدار بسيطًا مثل `pip install requests --upgrade` .

قبل استخدام `pip` ، ستحتاج إلى تثبيته (الأمر بسيط للغاية). يمكنك تثبيته من [هنا](https://bootstrap.pypa.io/get-pip.py)

فقط إضغط على الرابط. واحفظ الملف `get-pip.py` _فضلك لا تنسى ملحق `.py` ._ و أديرها

بديل لاستخدام pip سيكون محاولة [`easy_install`](https://bootstrap.pypa.io/ez_setup.py) .

استخدام `easy_install` هو أيضا بسيط. الصيغة هي:

 `easy_install <module_name> 
` 

ومع ذلك ، `pip` أكثر شعبية من استخدام `easy_install` .

**ملاحظة:** في بعض الأنظمة التي يتم فيها تثبيت Python 2 & Python 3 ، تقوم `pip` و `pip3` بأشياء مختلفة. `pip` بتثبيت الإصدار Python 2 من الحزمة ، وسوف تقوم `pip3` بتثبيت الإصدار Python 3 من الحزمة. لمزيد من المعلومات حول الفرق بين Python 2 & 3 ، راجع [هذا](https://guide.freecodecamp.org/python/python-2-vs-python-3) الدليل. يمكنك التحقق من إصدار `pip` عن طريق عمل `pip --version` و / أو `pip3 --version` :

 `pip3 --version 
 pip 18.0 from /usr/local/lib/python3.5/dist-packages/pip (python 3.5) 
` 

يمكننا أيضًا إنشاء ملف txt يحتوي على قائمة الوحدات التي يجب تثبيتها باستخدام النقطة. على سبيل المثال ، يمكننا إنشاء ملف `requirements.txt` ومحتواه:

 `Kivy-Garden==0.1.4 
 macholib==1.5.1 
 idna==2.6 
 geoip2nation==0.1.2 
 docutils>=0.14 
 Cython 
` 

في هذا الملف ، يمكننا أيضًا تعيين إصدار للتثبيت. بعد ذلك ، من خلال استدعاء نقطة مع:

 ` pip install -r <FILE CONTAINING MODULES> 
 
          OR IN OUR CASE 
 
 pip install -r requirements.txt 
` 

يجب تثبيت جميع الوحدات المدرجة في الملف.