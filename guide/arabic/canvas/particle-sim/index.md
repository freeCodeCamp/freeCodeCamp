---
title: Particle Sim
localeTitle: الجسيمات نعم
---
## محاكاة الجسيمات في قماش

في هذا الدليل ، سنقوم ببناء محاكاة للجسيمات الأساسية في Canvas باستخدام مبادئ بسيطة من الرسوم المتحركة.

سنرغب في إنشاء مجموعة من الجسيمات مع التسارع والسرعات. سنقوم بإنشاء 100 جسيم في نقاط عشوائية على اللوحة.

 `canvas = document.getElementById("canvas"); 
 ctx = canvas.getContext('2d'); 
 
 var particles = []; 
 for(var i=0; i<100; i++) { 
  particles.push( 
    { 
      x:Math.random()*canvas.width, 
      y:Math.random()*canvas.height, 
      vx:0, 
      vy:0, 
      ax:0, 
      ay:0 
    } 
  ); 
 } 
` 

في حلقة الرسم لدينا ، نقدم هذه الجسيمات.

 `function draw() { 
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
  for(var i=0; i<particles.length; i++) { 
    // update state 
 
    // render state 
    ctx.beginPath(); 
    ctx.arc(particles[i].x, particles[i].y, 5, 0, 2*Math.PI); 
    ctx.fill(); 
  } 
 
  window.requestAnimationFrame(draw); 
 } 
 window.requestAnimationFrame(draw); 
` 

الآن ، كل ما نحتاجه هو تحديث السرعة وتسريع كل إطار. سنضيف التسارع إلى السرعة وإضافة السرعة إلى الموضع.

 `function draw() { 
  for(var i=0; i<particles.length; i++) { 
    // update state 
    particles[i].x+=particles[i].vx; 
    particles[i].y+=particles[i].vy; 
    particles[i].vx+=particles[i].ax; 
    particles[i].vy+=particles[i].ay; 
 
    /* render code */ 
  } 
 
  window.requestAnimationFrame(draw); 
 } 
 window.requestAnimationFrame(draw); 
` 

هذا هو! كل ما يتعين علينا القيام به هو خلق قوة في مكان ما. دعونا نفعل ذلك مع مستمع النقر.

 `canvas.addEventListener("click", function(e) { 
  var clickX = e.clientX-canvas.offsetLeft; 
  var clickY = e.clientY-canvas.offsetTop; 
  for(var i=0; i<particles.length; i++) { 
    var delx = particles[i].x-clickX; 
    var dely = particles[i].y-clickY; 
    var magnitudeSquared = Math.pow(delx, 2)+Math.pow(dely, 2); 
 
 
    particles[i].ax = 0.1*delx/magnitudeSquared; 
    particles[i].ay = 0.1*dely/magnitudeSquared; 
 
  } 
 }); 
` 

هذا يضيف قوة عبر قانون مربع معكوس. انظر [هذه الصفحة](#placeholder) لمزيد من التفاصيل.

هذا كل شئ! codepen النهائي:

شاهد Pen [Particle Sim (FCC)](https://codepen.io/alanluo/pen/OjMbpm/) بواسطة Alan Luo ( [alanluo](https://codepen.io/alanluo) ) على [CodePen](https://codepen.io) .

#### معلومات اكثر:

*   [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)