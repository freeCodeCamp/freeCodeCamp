---
title: Use the Twitch JSON API
localeTitle: استخدم واجهة برمجة تطبيقات Twitch JSON
---
تحديث 29 أيلول (سبتمبر) 2016: غيّر Twitch واجهة برمجة التطبيقات ، ويتطلب الآن مفتاح واجهة برمجة التطبيقات لتشغيل الاستعلامات. إذا كنت تستخدم صفحات CodePen أو GitHub لإنشاء هذه الصفحات ، فإننا لا نوصي بإضافة مفتاح API إلى مشروعك لأسباب تتعلق بالأمان.

بدلاً من استخدام واجهة برمجة تطبيقات Twitch ، نوصي بشدة بتشفير [JSON هذا](https://gist.github.com/QuincyLarson/2ff6892f948d0b7118a99264fd9c1ce8) في تطبيقك كمتغير. إنها سلسلة من الردود على حسابات مختلفة من Twitch.

* * *

إذا كنت تحاول معالجة هذا التحدي باستخدام `$.getJSON()` jQuery ، `$.getJSON()` لك رسالة خطأ تتعلق `$.getJSON()` مصادر Cross-Origin (CORS).

أسهل طريقة لحل هذه المشكلة هي استخدام إمكانات jSuop في jQuery. من [الصفحة التمهيدية](https://github.com/justintv/Twitch-API#json-p) لـ Twitch API:

> تدعم جميع أساليب واجهة برمجة التطبيقات تطبيق JSON-P من خلال توفير معلمة معاودة الاتصال مع الطلب.

كما تنص [وثائق jQuery](http://api.jquery.com/jQuery.getJSON/) :

> إذا كان عنوان URL يتضمن السلسلة "callback =؟" (أو ما شابه ، كما هو محدد بواسطة واجهة برمجة التطبيقات من جانب الخادم) ، يتم التعامل مع الطلب على أنه JSONP بدلاً من ذلك.

في ما يلي مثال لإجراء مكالمة لجلب بيانات قناة Twitch لمخيم Free Code:

 `$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) { 
  console.log(data); 
 }); 
` 

تعتبر JSONP غير آمنة [وفقًا لـ Wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing#CORS_vs_JSONP) ، ولكن يجب أن تكون كافية لأغراضنا. لإجراء مناقشة تفصيلية حول تقييد CORS من Twitch ، يرجى قراءة [المسألة رقم 133](https://github.com/justintv/Twitch-API/issues/133) في مستودع Twitch-API.