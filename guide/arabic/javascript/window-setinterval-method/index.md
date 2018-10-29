---
title: Window setInterval Method
localeTitle: نافذة setInterval الطريقة
---
## نافذة setInterval الطريقة

`setInterval()` الأسلوب `setInterval()` دالة أو تقييم تعبير في فواصل زمنية محددة (بالمللي ثانية).

 `    setInterval(function(){ alert("Hello"); }, 3000); 
` 

سيستمر أسلوب `setInterval()` استدعاء الدالة حتى يتم استدعاء `clearInterval()` أو إغلاق الإطار.

يمكن لأسلوب `setInterval()` تمرير معلمات إضافية للدالة ، كما هو موضح في المثال أدناه.

 `    setInterval(function, milliseconds, parameter1, parameter2, parameter3); 
` 

يتم `setInterval()` قيمة المعرف التي تم إرجاعها بواسطة `setInterval()` كمعلمة `clearInterval()` .

نصائح:

*   1000 ms = 1 ثانية.
*   لتنفيذ وظيفة مرة واحدة فقط ، بعد عدد محدد من المللي ثانية ، استخدم الطريقة `setTimeout()` .

#### معلومات اكثر:

الوثائق: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

JavaScript setInterval () دالة أمثلة: [Sitepoint](https://www.sitepoint.com/setinterval-example/)

وبعض الأمثلة الأخرى: [w3schools](https://www.w3schools.com/jsref/met_win_setinterval.asp)