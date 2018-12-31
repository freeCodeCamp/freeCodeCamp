---
title: Installing and Using Python 3
localeTitle: تركيب واستخدام بايثون 3
---
## تثبيت بيثون 3

يمكنك تنزيل بايثون من هذا [الرابط](https://www.python.org/downloads/) الرسمي. استنادًا إلى نظام التشغيل (Windows أو Linux أو OSX) ، قد ترغب في تثبيت Python 3 باتباع [هذه الإرشادات](http://docs.python-guide.org/en/latest/starting/installation/) .

## باستخدام البيئات الافتراضية

إنها لفكرة رائعة أن تقوم بوضع [sandbox](https://en.wikipedia.org/wiki/Sandbox_(computer_security)) لتثبيت Python الخاص بك. والاحتفاظ بها منفصلة عن _نظام بايثون_ الخاص بك. _بايثون النظام_ هو المسار إلى مترجم Python ، والذي يتم استخدامه بواسطة الوحدات النمطية الأخرى المثبتة مع نظام التشغيل الخاص بك.

**ليس من الآمن** تثبيت Python Web-frameworks أو المكتبات مباشرة باستخدام _System Python_ . بدلاً من ذلك ، يمكنك استخدام [Virtualenv](https://virtualenv.readthedocs.org/en/latest/) لإنشاء عملية بيثون منفصلة وإصدارها عند تطوير تطبيقات Python.

### Virtualenvwrapper

تعمل [الوحدة النمطية Virtualenvwrapper على](https://virtualenvwrapper.readthedocs.org/en/latest/) تسهيل إدارة و وضع الحماية لبيئات Python sandboxed المتعددة في جهاز واحد. دون إفساد أي وحدات أو خدمات مكتوبة في بايثون ويستخدمها جهازك.

وبالطبع ، فإن معظم بيئة التطوير المستضافة في السحاب مثل [Nitrous](https://www.nitrous.io/) أو [Cloud9](https://c9.io/) تأتي أيضًا مع هذه المثبتة مسبقا وجاهزة لك للحصول على الترميز! يمكنك اختيار صندوق من لوحة المعلومات بسرعة ، وبدء الترميز بعد تنشيط بيئة Python 3.

في [Cloud9](https://c9.io/) ، تحتاج إلى تحديد مربع Django أثناء إنشاء بيئة تطوير جديدة.

سوف يتبع بعض الأمثلة أمر shell. إذا كنت ترغب في النسخ واللصق ، فلاحظ أن علامة `$` هي اختصار لمطالب الجهاز الطرفي ، وليست جزءًا من الأمر. يبدو مطابقتها الطرفية شيئًا كالتالي:

 `alayek:~/workspace (master) $ 
` 

و ، `ls` تبدو

 `alayek:~/workspace (master) $ ls 
` 

ولكن أثناء كتابتي نفس الشيء في هذه الوثائق ، سأكتبها على أنها

 `$ ls 
` 

بالعودة إلى مناقشتنا ، يمكنك إنشاء sandbox مضمّن في Python 3 على Cloud9 عن طريق تشغيله على جهازك السحابي:

 `$ mkvirtualenv py3 --python=/usr/bin/python3 
` 

يجب عليك تشغيلها مرة واحدة فقط بعد إنشاء مربع جديد لمشروعك. بمجرد تنفيذه ، سيعمل هذا الأمر على إنشاء virtualenv جديد في وضع sandboxed جاهز للاستخدام ، يسمى `py3` .

لعرض البيئات الافتراضية المتاحة ، يمكنك استخدامها

 `$ workon 
` 

لتنشيط `py3` ، يمكنك استخدام الأمر `workon` باسم البيئة:

 `$ workon py3 
` 

تعمل جميع الأوامر الطرفية الثلاثة المذكورة أعلاه أيضًا على أجهزة Linux المحلية أو أجهزة OSX. هذه أوامر [virtualenvwrapper](https://virtualenvwrapper.readthedocs.org/en/latest/#introduction) ؛ لذلك إذا كنت تخطط لاستخدامها ، تأكد من تثبيت هذه الوحدة وإضافتها إلى متغير `PATH` .

إذا كنت داخل بيئة افتراضية ؛ يمكنك بسهولة العثور على ذلك عن طريق التحقق من مطابقتك الطرفية. سيظهر اسم البيئة بوضوح في مطابقتك الطرفية.

على سبيل المثال ، عندما أكون داخل بيئة `py3` ؛ سوف أرى هذا كمطالبتي الطرفية:

 `(py3)alayek:~/workspace (master) $ 
` 

لاحظ `(py3)` في الأقواس! إذا كنت لا ترى ذلك لسبب ما ، حتى لو كنت داخل بيئة افتراضية ؛ يمكنك محاولة القيام بأحد الأشياء [المذكورة هنا](http://stackoverflow.com/questions/1871549/python-determine-if-running-inside-virtualenv) .

للخروج من بيئة افتراضية. أو لإلغاء تنشيط - استخدم الأمر

 `$ deactivate 
` 

مرة أخرى ، يعمل هذا فقط مع وحدة virtualenvwrapper.

### Pipenv

بديل لاستخدام virtualenvwrapper هو [Pipenv](https://docs.pipenv.org/) . ينشئ تلقائياً بيئات ظاهرية `Pipfile` ، ويحافظ على `Pipfile` الذي يحتوي على التبعيات. استخدام Pipenv يعني أنك لم تعد بحاجة إلى استخدام النقطة و virtualenv بشكل منفصل ، أو إدارة ملف `requirements.txt` الخاص بك. بالنسبة لأولئك المطلعين على جافا سكريبت ، يشبه Pipenv استخدام أداة تغليف مثل `npm` .

لبدء استخدام Pipenv ، يمكنك اتباع هذا [الدليل](https://docs.pipenv.org/install.html#installing-pipenv) المفصل للغاية. يجعل Pipenv من السهل [تحديد إصدار Python](https://docs.pipenv.org/basics.html#specifying-versions-of-python) الذي ترغب في استخدامه لكل مشروع ، [والاستيراد](https://docs.pipenv.org/basics.html#importing-from-requirements-txt) من ملف `requirements.txt` موجود [ورسم](https://docs.pipenv.org/#pipenv-graph) تبعياتك.