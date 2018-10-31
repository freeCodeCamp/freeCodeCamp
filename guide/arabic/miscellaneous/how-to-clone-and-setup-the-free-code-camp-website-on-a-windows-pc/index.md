---
title: How to Clone and Setup the Free Code Camp Website on a Windows Pc
localeTitle: كيفية استنساخ وإعداد موقع حر مدونة مخيم على شبكة ويندوز
---
تعمل هذه القائمة مع موقع freeCodeCamp وقد تم اختبارها على هذا [البرنامج التعليمي الزاوي](https://docs.angularjs.org/tutorial) كذلك. يعد إعداد بيئة التطوير على جهاز كمبيوتر يعمل بنظام Windows أمرًا سهلاً ، على الرغم من أنه من المرجح أن يقدم الكثير من الأخطاء أولاً في العملية. الجزء المهم هو تصحيح هذه الأخطاء.

## المتطلبات الأساسية

1.  [جيت باش](https://msysgit.github.io/)
2.  [نود.جي إس](https://nodejs.org/)
3.  [MongoDB](https://www.mongodb.org/downloads)
4.  [بايثون 2.7.10](https://www.python.org/downloads/release/python-2710/)

قم بتنزيل وتثبيت 4 متطلبات أساسية. عند تثبيت Python و Node ، من المهم التحقق من الخيار add إلى متغير المسار. يقوم مثبت Node بذلك بشكل افتراضي. من الاختياري إضافة Mongo إلى المسار. يجب تثبيت Python في مجلد فرعي في٪ programfiles٪

1.  افتح موجه الأوامر مع حقوق المسؤول.
    
2.  تحقق من أن العقدة في المسار بتشغيل `node -v`
    
3.  تحقق من أن npm في المسار عن طريق تشغيل `npm -v`
    
4.  قم بتشغيل الأوامر التالية:
    
     `npm install gulp -g 
     npm install node-gyp -g 
    ` 
    
5.  إذا كنت ترغب في توفير الوقت المستغرق في البحث عن Mongo عند بدء تشغيل إنشاء ملف `.cmd` على سطح المكتب وكتابة المسار إلى Mongo. ربما `%programfiles%\MongoDB\Server\3.0\bin\mongod.exe` .
    
6.  إنشاء المجلد الافتراضي لـ Mongo لتخزين قواعد البيانات: `C:\data\db`
    

**الأوامر التالية _جميعا_ ليتم تنفيذها في بوابة باش**

1.  اتبع الإرشادات هنا [**freeCodeCamp على جيثب**](https://github.com/FreeCodeCamp/freecodecamp) واستنساخ المشروع.
2.  تأكد من أنك في الدليل الذي استنسخته مع GitHub (بشكل افتراضي ، يكون هذا هو freecodecamp).
3.  قم بتشغيل `cp sample.env .env`
4.  قم بتشغيل `npm install`
5.  بدء تشغيل Mongo من اختصار سطح المكتب وتشغيل `npm run only-once` . يجب أن تشاهد الآن الكثير من النشاط في النافذة التي بدأت فيها Mongo.
6.  تشغيل `gulp` . بعد قليل ، يجب تشغيل الإصدار المحلي من برنامج FreeCodeCamp. يمكنك زيارته في متصفحك على `http://localhost:3000`

تهانينا ، لقد انتهيت! إذا واجهت أي مشكلات أثناء إعداد الإصدار المحلي من freeCodeCamp ، فلا تتردد في التواصل مع [غرفة الدردشة التابعة لنا](https://gitter.im/FreeCodeCamp/Contributors) .