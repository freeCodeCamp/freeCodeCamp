---
title: Declare JavaScript Objects as Variables
localeTitle: قم بتعريف كائنات JavaScript كمتغيرات
---
هذا له تنسيق بسيط. تقوم بتعريف المتغير الخاص بك ويكون له مساوٍ لكائن في النموذج `{ key: value}`

 `var car = { 
  "wheels":4, 
  "engines":1, 
  "seats":5 
 }; 
` 

يمكنك الوصول إلى خصائص الكائن باستخدام تدوين النقطة أو تدوين قوس.

باستخدام ميزة التدوين النقطي:

 `console.log(car.wheels); // 4 
` 

باستخدام تدرج قوس:

 `console.log(car["wheels"]); // 1 
` 

استخدام تدرج قوس ديناميكي:

 `var seatsProperty = "seats"; 
 console.log(car[seatsProperty]); // 5 
`