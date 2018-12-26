---
title: Use the .env File
localeTitle: استخدم ملف .env
---
## استخدم ملف .env

يمكننا استخدام طريقة. toUpperCase () لإنشاء سلسلة جميع الأحرف الكبيرة ، مثل:

 `  var response = "Hello World".toUpperCase(); // now becomes "HELLO WORLD" 
` 

كل ما نحتاج إلى القيام به الآن هو التحقق من قيمة متغير البيئة ، والتي يمكنك القيام بها مثل:

 `   if (process.env.VAR_NAME === "allCaps") { 
    resonse = "Hello World".toUpperCase(); 
   } else { 
    response = "Hello World"; 
   } 
  }); 
` 

[ساعد مجتمعنا على توسيع هذه التلميحات والأدلة](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/apis-and-microservices/basic-node-and-express/use-the-.env-file/index.md) .