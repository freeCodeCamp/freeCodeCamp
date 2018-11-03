---
title: Get Route Parameter Input from the Client
localeTitle: الحصول على إدخال معلمة المسار من العميل
---
## الحصول على إدخال معلمة المسار من العميل

إذا طلب منك أحد الأشخاص إنشاء GET أو POST ، فستفعل app.get (…) أو app.post (…) وفقًا لذلك. الهيكل الأساسي للتحدي هو:

 `app.get("/:word/echo", function(req, res) { 
  // word = req.params.word; 
  // respond with the json object 
 }); 
` 

[ساعد مجتمعنا على توسيع هذه التلميحات والأدلة](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/get-route-parameter-input-from-the-client/index.md) .