---
title: Docker compose
localeTitle: يؤلف عامل الميناء
---
## يؤلف عامل الميناء

Docker-Compose هو أداة لتحديد وتشغيل تطبيقات Docker متعددة الحاويات. باستخدام Compose ، يمكنك استخدام ملف YAML لتكوين خدمات التطبيق الخاص بك.

الخطوات اللازمة لاستخدام عامل الميناء-إنشاء

 `1)create a Dockerfile which defines the image and can be produsable every where. 
` 

 `2)create a docke-compose yml file to run the services 
` 

 `3)use docker-compose up to start the sevices specified in docker-compose.yml file 
` 

#### الأوامر الأساسية في buser-compose

*   الأمر لتشغيل حاويات عامل ميناء

 `docker-compose -f docker-compose.yml up 
` 

*   أمر لتشغيل الحاويات في وضع فصل

 `docker-compose -f docker-compose.yml up -d 
` 

*   الأمر لتشغيل الحاويات بعد بناء الصور مرة أخرى (ملاحظة: المرة الأولى التي نستخدم فيها بناء حاويات حاويات السفن سوف يحدث تلقائيًا)

 `docker-compose -f docker-compose.yml --build -d 
` 

*   أمر لإيقاف الحاويات عندما نركض في وضع فصل

 `docker-compose -f docker-compose.yml down 
` 

#### معلومات اكثر:

*   \[مزيد من المعلومات حول Docker-compose\] (https://docs.docker.com/compose/)