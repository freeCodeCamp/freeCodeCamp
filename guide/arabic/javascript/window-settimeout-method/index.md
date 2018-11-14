---
title: Window setTimeout Method
localeTitle: نافذة setTimeout الطريقة
---
## نافذة setTimeout الطريقة

استدعاء الأسلوب `setTimeout()` دالة أو تقييم تعبير بعد عدد محدد من مللي ثانية.

نصائح:

*   1000 ms = 1 ثانية.
*   يتم تنفيذ الوظيفة مرة واحدة فقط. إذا كنت بحاجة إلى تكرار التنفيذ ، استخدم الطريقة `setInterval()` .
*   استخدم الأسلوب `clearTimeout()` لمنع الوظيفة من التشغيل.

إن بناء جملة الأسلوب `setTimout()` كما يلي:

 `setTimeout(function, milliseconds, param1, param2, ...); 
` 

فمثلا:

 `setTimeout(function(){ alert("Hello"); }, 3000); 
` 

شيء مهم جداً حول `setTimeout()` هو أنه سيتم تنفيذه بشكل غير متزامن. لنأخذ مثال على ذلك:

 `console.log("A"); 
 setTimeout(function(){ console.log("B"); }, 0); 
 console.log("C"); 
 // The order in the console will be 
 // A 
 // C 
 // B 
` 

**ليس كما exepected! لكننا نحدد فقط 0 ثانية !!!** لحل هذه المشكلة والتأكد من تنفيذ الكود الخاص بنا بشكل متزامن ، يجب علينا فقط ضبط وحدة التحكم الأخيرة في الوظيفة

 `console.log("A"); 
 setTimeout(function() { 
    console.log("B"); 
    console.log("C"); 
 }, 0); 
 // The order in the console will be 
 // A 
 // B 
 // C 
` 

#### معلومات اكثر:

الوثائق: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

مزيد من الأمثلة عن وظيفة setTimeout: [w3schools](https://www.w3schools.com/jsref/met_win_settimeout.asp)

لفهم حقيقة ما يحدث تحت غطاء المحرك ، شاهد هذا الفيديو الرائع [فيليب روبرتس: ما هيك هو حلقة الحدث على أي حال؟ | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ)