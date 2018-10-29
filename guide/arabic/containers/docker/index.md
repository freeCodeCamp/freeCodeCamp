---
title: Docker
localeTitle: عامل ميناء
---
## عامل ميناء

[Docker](https://www.docker.com/) هو عبارة عن منصة حاويات مستخدمة على نطاق واسع ومتوفرة لنظامي التشغيل Linux و Windows و Mac ، بالإضافة إلى مزودي خدمات السحابة مثل AWS و Azure.

قد تكون حالة الاستخدام الشائع هي حزم التطبيق وكل متطلباته في الحاوية. يمكن بعد ذلك استخدام الحاوية أثناء التطوير ، وتمريرها إلى ضمان / اختبار الجودة ، وإلى الإنتاج / العمليات. هذا يزيل عقلية "يعمل على الجهاز الخاص بي" ، حيث أن الحاوية _هي_ الآلة بشكل فعال ، بغض النظر عن الأجهزة الفعلية التي قد تعمل عليها.

بعد الانتهاء من إعداد جهاز الكمبيوتر الخاص بك و docker dockig ، يمكنك ببساطة اختبار Docker الخاص بك عن طريق تشغيل الأمر:

 `$ docker run hello-world 
 Unable to find image 'hello-world:latest' locally 
 latest: Pulling from library/hello-world 
 ca4f61b1923c: Pull complete 
 Digest: sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7 
 Status: Downloaded newer image for hello-world:latest 
 
 Hello from Docker! 
 This message shows that your installation appears to be working correctly. 
 ... 
` 

إذا لم يكن لديك صورة hello-world محليًا ، فسيقوم Docker بتنزيلها تلقائيًا على جهازك. يمكنك إدراج الصورة التي تم تنزيلها أو إنشاؤها على جهازك عن طريق تشغيل الأمر:

 `$ docker image ls 
` 

يحتوي [متجر Docker Store](https://hub.docker.com/explore/) على العديد من التطبيقات الشائعة المجمعة في حاويات وجاهزة للاستخدام.

## قراءة متعمقة

*   [وثائق عامل الميناء](https://docs.docker.com)