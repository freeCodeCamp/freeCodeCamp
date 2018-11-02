---
title: Serve an HTML File
localeTitle: تخدم ملف HTML
---
## تخدم ملف HTML

ربما تحتاج إلى التعليق على التحدي الأخير. إذا كان لديك موقع ويب وترغب في عرض ملف index.html ، فربما تريد وضع هذا في مجلد عام. هذا لضمان أن الجمهور لا يرى شيئًا لا تريده ، ويطلق عليه أحيانًا اسم "عام" أو "مشاهدات" ، ولكن يمكنك من الناحية الفنية تسمية أي شيء تريده.

لتقديم ملف index.html في مجلد يسمى "عام" في النطاق الجذر ، يمكنك القيام بذلك على النحو التالي:

 `  app.get("/", function(req, res) { 
        res.sendFile( __dirname + "/public/index.html"); 
  }); 
` 

ملاحظة: \_\_dirname يرجع الدليل الجذر هو أفضل الممارسات لمطوري العقدة.

[ساعد مجتمعنا على توسيع هذه التلميحات والأدلة](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/serve-an-html-file/index.md) .