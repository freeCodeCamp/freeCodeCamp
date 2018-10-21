---
title: Serve JSON on a Specific Route
localeTitle: خدمة JSON على طريق معين
---
## خدمة JSON على طريق معين

من البسيط أن تخدم كائن json بعقدة (على المسار '/ json') ، إذا أردنا تسليم رسالة وإعطائها القيمة "Hello World" ، يمكننا القيام بذلك على النحو التالي:

 `  app.get("/json", function(req, res) { 
        res.json({"message": "Hello World"}); 
  }); 
` 

[ساعد مجتمعنا على توسيع هذه التلميحات والأدلة](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/serve-json-on-a-specific-route/index.md) .