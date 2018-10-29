---
title: Run Your First Docker Image
localeTitle: تشغيل أول صورة عامل الميناء الخاص بك
---
## تشغيل أول صورة عامل الميناء الخاص بك

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

معلومات اكثر:

اختبار [وثائق](https://docs.docker.com/get-started/#test-docker-installation) تركيب Docker.