---
title: Get Data from POST Requests
localeTitle: الحصول على البيانات من طلبات POST
---
## الحصول على البيانات من طلبات POST

تماما مثل استخدام req.query يمكننا أن نفعل req.body للحصول على بياناتنا. يشبه هذا التحدي إلى حد كبير "الحصول على إدخال معلمة طلب البحث من العميل".

للحصول على بيانات من طلب النشر ، يكون التنسيق العام هو:

 `app.post(PATH, function(req, res) { 
  // Handle the data in the request 
 }); 
` 

[ساعد مجتمعنا على توسيع هذه التلميحات والأدلة](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/use-body-parser-to-parse-post-requests/index.md) .