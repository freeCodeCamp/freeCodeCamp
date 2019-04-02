---
title: Implement a Root-Level Request Logger Middleware
localeTitle: تنفيذ برنامج طلب تسجيل مستوى الجذر الوسيطة
---
## تنفيذ برنامج طلب تسجيل مستوى الجذر الوسيطة

من الأسهل كتابة هذا التحدي في الأعلى (يوجد بالفعل كعب له). ويرجع ذلك إلى أنه يجب وضع البرامج الوسيطة في المكالمات التي ترغب في استخدامها.

لإعداد البرنامج الوسيط الخاص بك ، يمكنك القيام بذلك كما يلي:

 `app.use(function middleware(req, res, next) { 
  // Do something 
  // Call the next function in line: 
  next(); 
 }); 
` 

إذا واجهتك مشكلة في تنسيق السلسلة بشكل صحيح ، فستبدو طريقة واحدة لتنفيذها كما يلي:

 `  var string = req.method + ' ' + req.path + ' - ' + req.ip; 
` 

[ساعد مجتمعنا على توسيع هذه التلميحات والأدلة](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/implement-a-root-level-request-logger-middleware/index.md) .