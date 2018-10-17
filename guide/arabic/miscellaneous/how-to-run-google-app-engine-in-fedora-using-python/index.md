---
title: How to Run Google App Engine in Fedora Using Python
localeTitle: كيفية تشغيل محرك تطبيقات جوجل في فيدورا عن طريق بايثون
---
تتناول هذه المقالة دليل خطوة بخطوة لتثبيت Google App Engine على نظام التشغيل Fedora الخاص بك باستخدام python.

*   اتبع الخطوات الواردة في هذه الوثائق من [Google.](https://cloud.google.com/appengine/docs/python/#uploading_the_application)

قد لا يعمل اختبار التطبيق على النحو الوارد في المستند أعلاه للكثيرين.

لذا ، جرب [هذا](http://stackoverflow.com/a/16970921) كما قدمه Brice Lin.

أيضا ، اتبع استراتيجية النشر كما قدمها Brice Lin. للقيام بذلك فتح محطة أخرى (إذا كنت ترغب في ذلك).

*   قبل النشر ، يجب عليك إنشاء المشروع في Google Cloud Platform. اتبع الخطوات من [تحميل التطبيق](https://cloud.google.com/appengine/docs/python/#uploading_the_application)
    
*   لكن لا يزال اتباع استراتيجية النشر المذكورة أعلاه قد لا يعمل للكثيرين. وقد يحدث خطأ مثل هذا:
    
    `ERROR appcfg.py:2396 An error occurred processing file '': HTTP Error 400: Bad Request Unexpected HTTP status 400\. Aborting. Error 400: --- begin server output --- A version or backend parameter is required. --- end server output ---`
    

يحدث هذا الخطأ بسبب عبارة Version المفقودة في ملف **app.yaml** . لذلك إضافة `version: 1` في ملف **app.yaml** في مستودع التطبيق. هنا ، `helloworld` هو المستودع. الآن سوف تعمل. سعيد الترميز وصنع التطبيق.

لا تنس التحقق من هذا الرابط: [تطوير تطبيق ونشره على Google App Engine على Youtube.](https://www.youtube.com/watch?v=bfgO-LXGpTM)