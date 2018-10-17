---
title: Start a Working Express Server
localeTitle: بدء تشغيل خادم اكسبرس العمل
---
## بدء تشغيل خادم اكسبرس العمل

إذا كان لديك موقع ويب على "example.com/" وأردت تقديم سلسلة مثل "Hello World" لمن يزور النطاق الجذر ، فيمكنك إجراء ذلك بسهولة باستخدام العقدة و / أو التعبير السريع:

 `app.get("/", function(req, res) { 
  res.send("Hello World"); 
 }); 
` 

أيضًا ، باستخدام ES6 + يمكنك حفظ بعض الكتابة باستخدام "=>" بدلاً من "الوظيفة" ، والتي تبدو كالتالي:

 `app.get("/", (req, res) => { 
  res.send("Hello World"); 
 }); 
` 

[ساعد مجتمعنا على توسيع هذه التلميحات والأدلة](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/start-a-working-express-server/index.md) .