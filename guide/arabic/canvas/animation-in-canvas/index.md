---
title: Animation
localeTitle: الرسوم المتحركة
---
## الرسوم المتحركة في قماش

لتحريك الأشياء في `canvas` ، استخدم `window.requestAnimationFrame` لإعداد حلقة رسم.

 `function draw() { 
  /* code goes here */ 
  window.requestAnimationFrame(draw); 
 } 
 window.requestAnimationFrame(draw); 
` 

سيؤدي الرمز أدناه إلى تشغيل وظيفة `draw` كل إطار.

`canvas` لا يوجد لديه وظائف خاصة تسمح للرسوم المتحركة. عليك فقط أن تستخدم للكتابة في حلقات الرسوم المتحركة. نموذج التصميم المعتاد لحلقات الرسوم المتحركة هو تحديث الحالة ، ثم رسم الحالة. على سبيل المثال ، لرسم مربع يتحرك عبر الشاشة:

 `canvas = document.getElementById("canvas"); 
 ctx = canvas.getContext('2d'); 
 
 var x=0; 
 var y=50; 
 function draw() { 
  // reset canvas 
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
  //update state 
  x+=1; 
 
  // render state 
  ctx.beginPath(); 
  ctx.rect(x, y, 50, 50); 
  ctx.fill(); 
 
  window.requestAnimationFrame(draw); 
 } 
 window.requestAnimationFrame(draw); 
` 

لرؤية هذا المفهوم في العمل ، راجع صفحة " [الجسيم سيم](/articles/canvas/particle-sim) ".

#### معلومات اكثر:

*   [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)