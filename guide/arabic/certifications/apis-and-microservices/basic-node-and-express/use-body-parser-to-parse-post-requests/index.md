---
title: Use body-parser to Parse POST Requests
localeTitle: استخدام محلل الجسم إلى Parse POST الطلبات
---
## استخدام محلل الجسم إلى Parse POST الطلبات

يجب إضافة محلل الجسد بالفعل إلى مشروعك إذا كنت تستخدم النص المتوفر ، ولكن إذا لم يكن كذلك ، فيجب أن يكون موجودًا على النحو التالي:

 `"dependencies": { 
    "body-parser": "^1.4.3", 
    ... 
` 

ما عليك القيام به لهذا التحدي هو تمرير الوسيطة إلى app.use (). تأكد من أنها تأتي قبل المسارات التي تحتاج إلى استخدامها.

[ساعد مجتمعنا على توسيع هذه التلميحات والأدلة](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/use-body-parser-to-parse-post-requests/index.md) .