---
title: Chain Middleware to Create a Time Server
localeTitle: سلسلة Middleware لإنشاء خادم الوقت
---
## سلسلة Middleware لإنشاء خادم الوقت

على غرار التحدي الأخير ، ولكن الآن نحن تسلسل وظيفتين معا. يبدو معقدًا ، لكنه مجرد جافا سكريبت.

بدلاً من الاستجابة مع الوقت ، يمكننا أيضًا إضافة سلسلة إلى الطلب وتمريرها إلى الوظيفة التالية. هذا تافه ، لكنه يجعل مثالًا جيدًا. يبدو الرمز مثل:

 `app.get("/now", middleware(req, res, next) { 
  req.string = "example"; 
  next(); 
 }, 
  function (req, res) { 
      res.send(req.string); // This will display "example" to the user 
  }); 
` 

[ساعد مجتمعنا على توسيع هذه التلميحات والأدلة](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/chain-middleware-to-create-a-time-server/index.md) .