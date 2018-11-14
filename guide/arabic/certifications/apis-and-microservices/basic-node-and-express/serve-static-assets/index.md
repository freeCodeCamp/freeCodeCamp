---
title: Serve Static Assets
localeTitle: خدمة الأصول الثابتة
---
## خدمة الأصول الثابتة

صفحات الويب الثابتة بسيطة إلى حد ما مع التعبير السريع. قد يكون هذا مفيدًا لإنشاء موقع الويب الخاص بك أو المدونة الخاصة بك ، إلخ.

لعرض صفحة ويب ثابتة من مجلد "طرق العرض" ، يمكنك استخدام رمز مثل:

 ` const express = require("express"); 
 const app = express(); 
 app.use(express.static(__dirname + "/views")); 
` 

[ساعد مجتمعنا على توسيع هذه التلميحات والأدلة](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/meet-the-node-console/index.md) .