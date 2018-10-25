---
title: Deploying to Openshift
localeTitle: نشر إلى Openshift
---
إذا قمت بنشر تطبيقاتك في Heroku ، فيمكنك فقط تحميل 5 تطبيقات ، إذا كنت ترغب في نشر تطبيقات جديدة ، فستحتاج إلى التحقق من حسابك ببطاقتك الائتمانية.

![هيروكو خطأ](//discourse-user-assets.s3.amazonaws.com/original/2X/2/27219029fea50142009b1521d5268c06ded15b57.jpg)

هذه هي الخطوات التي تحتاج إلى اتباعها للانتشار في [OpenShift](https://www.openshift.com/app/account/new) .

## المتطلبات

*   حساب في [OpenShift](https://www.openshift.com/app/account/new)
*   لدينا التطبيق في مستودع [Git](//forum.freecodecamp.com/t/wiki-git-resources/13136)

## التغييرات في شفرتك

*   `app.listen` مع `process.env.OPENSHIFT_NODEJS_PORT` و `process.env.OPENSHIFT_NODEJS_IP` ، كلاهما يتطلب.
*   في **الحزمة package.json** حدد `"main": 'yourMainFile.js` و `"script": { "start": "node yourMainFile.js" }`

## نشر التطبيق لدينا

*   [إضافة تطبيق جديد](https://openshift.redhat.com/app/console/application_types)

![اختر خرطوشة برمجة الويب](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e07c056ab351ee6bd728b8d5f648b3fac9c6bf86.jpg)

*   اختر اسمًا (سيكون الإدخال الثاني نفسه لجميع التطبيقات التي تستخدمها)

\[ ![املأ اسمنا ونطاقنا](//discourse-user-assets.s3.amazonaws.com/original/2X/9/9e929388f653ca9725e4dc2ca823f06cee493bc2.jpg)

*   املأ عنوان Git URL واسم فرعنا

![حيث يمكنك العثور على عنوان URL الخاص بـ Git واسم فرعك في Github](//discourse-user-assets.s3.amazonaws.com/original/2X/1/1a720934d9c2fd79a4aaa14b4ca07e6c1df7f2ce.jpg)

![املأ عنوان URL الخاص بـ Git واسم الفرع الخاص بك](//discourse-user-assets.s3.amazonaws.com/original/2X/9/989e44c1af80c9b8f26883a3d897f377b3a27ca4.jpg)

*   "إنشاء التطبيق". وسوف يستغرق بعض الوقت

![ستتم إعادة توجيهك هنا عند الانتهاء من النشر](//discourse-user-assets.s3.amazonaws.com/original/2X/f/f0de3f67ec78b75df6786301560a903f76aec022.jpg)

*   أدخل إلى "التطبيق" ، ثم إلى التطبيق الخاص بك وتحقق من أنها بدأت.

![قائمة التطبيقات الخاصة بك](//discourse-user-assets.s3.amazonaws.com/original/2X/d/d71ea954dd23eb341243bf568a3d67b682590274.jpg)

![تفاصيل التطبيق الخاص بك](//discourse-user-assets.s3.amazonaws.com/original/2X/4/497bacfd85fd2c8e815413df1e942a1a42f045f0.jpg)

## متغيرات البيئة

في حالتي لدي قاعدة البيانات الخاصة بي في mLab ، لذلك أحتاج إلى إنشاء بعض المتغيرات البيئة.

*   [تثبيت روبي و rhc.](https://developers.openshift.com/getting-started/windows.html#client-tools)

يعمل **rhc** فقط مع الإصدارات 1.9.3 و 2.0.0 من Ruby.

*   [إعداد جهازك](https://developers.openshift.com/getting-started/windows.html#rhc-setup)

إذا كنت تواجه مشكلة في إعداد `rhc` ، فجرّب [هذه](http://stackoverflow.com/questions/28896733/rhc-setup-gives-error-no-such-file-dl-import) الإجابة على StackOverflow.

*   [متغيرات البيئة المخصصة](https://developers.openshift.com/managing-your-applications/environment-variables.html#custom-variables)

`rhc env set VARIABLE=value VARIABLE2=value2 -a App_Name` .

يجب إعادة تشغيل التطبيق لتحميل المتغيرات.

إذا وجدت طريقة أفضل لحل هذا القيد. لا تتردد في المساهمة في الويكي الخاص بنا ومشاركته معنا.

يمكنك التحقق من التطبيق يعمل على [http://voting-pitazo.rhcloud.com/#/polls](http://voting-pitazo.rhcloud.com/#/polls)