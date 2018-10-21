---
title: HTTP
localeTitle: HTTP
---
## HTTP

يحتوي Node.js على مجموعة من الوحدات المضمنة التي يمكنك استخدامها بدون أي تثبيت إضافي. وبالمثل ، تحتوي **وحدة HTTP** على مجموعة من الوظائف المطلوبة لنقل البيانات عبر بروتوكول نقل النص التشعبي (HTTP).

يمكن لوحدة HTTP إنشاء خادم HTTP يستمع إلى منافذ الخادم ويعطي استجابةً إلى العميل.

من أجل تضمين وحدة نمطية ، استخدم الدالة `require()` مع اسم الوحدة.

 `const http = require('http');
`

## Node.js كملقم ويب

يتم استخدام الأسلوب `createServer()` لإنشاء خادم HTTP. الوسيطة الأولى من أسلوب `res.writeHead()` هي رمز الحالة ، `200` يعني أن كل شيء على ما يرام ، والوسيطة الثانية هي كائن يحتوي على رؤوس الاستجابة.

 `const http = require('http');

 //create a server object:
 http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
 }).listen(8000); //the server object listens on port 8000

 console.log("Server is listening on port no : 8000");
`

### خطوات التنفيذ:

*   يجب أن يكون لديك Node.js مثبتًا في جهاز الكمبيوتر الخاص بك.
*   قم بإنشاء ملف _app.js_ وقم بلصق الكود أعلاه.
*   الآن افتح وحدة التحكم الخاصة بك في دليل العمل وتنفيذ `node app.js` الأوامر `node app.js`
*   افتح المتصفح وأدخل `http://localhost:8000`

_ملاحظة:_ لإغلاق الخادم ، اضغط على `ctrl + C` في وحدة التحكم الخاصة بك لمستخدمي Windows.

## مصادر

*   [Node.js API](https://nodejs.org/api/http.html#http_http)
*   [مدارس W3](https://www.w3schools.com/nodejs/nodejs_http.asp)