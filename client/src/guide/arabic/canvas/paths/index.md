---
title: Paths
localeTitle: مسارات
---
## مسارات في قماش

المسارات هي لبنة الرسم في Canvas. المسار هو مجرد شكل. ثم ، يمكن رسم الشكل إما عن طريق التمسيد عليه أو تعبئته.

يمكننا خلق مسارات استخدام مع `beginPath` ، `fill` ، و `stroke` .

 `ctx.beginPath(); 
 ctx.rect(0, 0, 100, 100); 
 ctx.fillStyle="black"; 
 ctx.fill(); 
` 

يؤدي هذا إلى إنشاء مربع أسود في الزاوية العلوية اليمنى من اللوحة القماشية. يمكننا تغيير `strokeStyle` والتعبئات باستخدام `strokeStyle` و `fillStyle` ، `fillStyle` سلاسل ألوان تشبه CSS. يمكننا أيضا استخدام `lineWidth` لجعل السكتات الدماغية أكثر سمكا.

 `ctx.beginPath(); 
 ctx.moveTo(0,0); 
 ctx.lineTo(300,150); 
 ctx.moveTo(0, 100); 
 ctx.lineTo(300, 250); 
 
 ctx.strokeStyle="red"; 
 ctx.lineWidth=2; 
 ctx.stroke(); 
` 

هناك أربع وظائف الرسم الأساسية: `rect` ، `moveTo` ، `lineTo` ، و `arc` .

*   يضيف المستطيل `rect(x, y, width, height)` مستطيلاً تم إنشاؤه من ( `x` ، `y` ) من الأبعاد ( `width` `height` ) إلى المسار.
*   `moveTo(x,y)` بنقل القلم إلى نقطة على اللوحة
*   `lineTo(x,y)` تحريك القلم إلى نقطة على اللوحة ، ثم يضيف خطًا بين النقطة الجديدة والنقطة القديمة إلى المسار.
*   يضيف `arc(x, y, r, ti, tf)` قوس (جزء من دائرة) عند ( `x` ، `y` ) ، ونصف قطر `r` ، ومن زاوية `ti` إلى `tf` إلى المسار.

لاحظ أن هذه الوظائف تضيف إلى مسار العمل. لا ينشئون مسارات جديدة.

 `//example 1 
 ctx.beginPath(); 
 ctx.rect(0, 0, 50, 50); 
 ctx.rect(100, 100, 50, 50); 
 ctx.fill(); 
 
 //example 2 
 ctx.beginPath(); 
 ctx.rect(0, 0, 50, 50); 
 ctx.beginPath(); 
 ctx.rect(100, 100, 50, 50); 
 ctx.fill(); 
` 

`beginPath` المثال الأول مربعين ، بينما يرسم الثاني مربعًا واحدًا منذ أن قام `beginPath` من المستطيل الأول على مسار العمل القديم.

هذه الحقيقة تؤدي إلى خطأ شائع في صنع الرسوم المتحركة `canvas` .

 `var x = 0; 
 var y = 0; 
 function draw() { 
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
 
  ctx.rect(x, y, 50, 50); 
  ctx.fill(); 
  x+=1; 
 
  window.requestAnimationFrame(draw); 
 } 
 
 window.requestAnimationFrame(draw); 
` 

الرسم المتحرك أعلاه ، الذي من المفترض أن يقوم بتحريك مربع عبر الشاشة ، ينشئ شريط أسود طويل بدلاً من ذلك. السبب هو أن `beginPath` لا يسمى داخل حلقة `draw` .

لقراءة المزيد عن الرسوم المتحركة ، انظر صفحة [الرسوم المتحركة](/articles/canvas/animation-in-canvas/) .

#### معلومات اكثر:

*   [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)