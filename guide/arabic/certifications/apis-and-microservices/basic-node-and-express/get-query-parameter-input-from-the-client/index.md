---
title: Get Query Parameter Input from the Client
localeTitle: الحصول على إدخال معلمة طلب البحث من العميل
---
## الحصول على إدخال معلمة طلب البحث من العميل

إعطاء التلميح بعد كعب الروتين ، "/ الاسم الأول = وأخيرا = ، "يمكننا بناء الاستجابة مثل:

 ` app.get("/name", function(req, res) { 
   var firstName = req.query.first; 
   var lastName = req.query.last; 
   // Send the json object 
 }); 
` 

[ساعد مجتمعنا على توسيع هذه التلميحات والأدلة](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/get-query-parameter-input-from-the-client/index.md) .