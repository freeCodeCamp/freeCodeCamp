---
title: Guide to Build a Sliding Image Gallery
localeTitle: دليل لبناء معرض الصور الانزلاقية
---
سيرشدك هذا البرنامج التعليمي خلال إنشاء شريط تمرير للصور باستخدام مكتبة [jQuery](https://jquery.com/) .

[![GIF تعرض شريط التمرير أثناء العمل](//discourse-user-assets.s3.amazonaws.com/original/2X/0/08d83a22c28da836a06853b1f1ea669b398326b9.gif)](https://codepen.io/atjonathan/pen/BKMxxq)

سيحتوي هذا البرنامج التعليمي على أربعة أجزاء:

*   [HTML](#html)
*   [SCSS](#scss)
*   [JS](#js)
*   [المراجع](#references)

## HTML

[سنستخدم Bootstrap](http://getbootstrap.com/) لهذا البرنامج التعليمي للحفاظ على الأشياء تبدو جيدة ، دون قضاء الكثير من الوقت.

سيكون هيكلنا على النحو التالي:

 `<div class="container"> 
 
  <!-- The wrapper for our slider --> 
  <div class="slider"> 
    <ul class="slides"><!-- Each image will be inside this unordered list --></ul> 
  </div> 
 
  <div class="buttons"><!-- Pause and play buttons will go in here --></div> 
 
 </div> 
` 

داخل لدينا `ul` مع فئة من `slides` سيكون لدينا ما يلي:

 `<li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
 <li class="slide"><img src="#" /></li> 
` 

داخل فئة `.buttons` لدينا يجب أن يكون لديك ما يلي:

 `<button type="button" class="btn btn-default pause"> 
    <span class="glyphicon glyphicon-pause"></span> 
 </button> 
 <button type="button" class="btn btn-default play"> 
    <span class="glyphicon glyphicon-play"></span> 
 </button> 
` 

في ما يلي مثال لما يجب أن تبدو عليه `html` :

> ملاحظة: يجب استبدال السمة `src` للصورة بالمحتوى الخاص بك.

 `<div class="container"> 
 
  <div class="slider"> 
    <ul class="slides"> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=120" /></li> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=70" /></li> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=50" /></li> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=170" /></li> 
      <li class="slide"><img src="https://unsplash.it/1280/720/?image=190" /></li> 
    </ul> 
  </div> 
 
  <div class="buttons"> 
    <button type="button" class="btn btn-default pause"> 
      <span class="glyphicon glyphicon-pause"></span> 
    </button> 
    <button type="button" class="btn btn-default play"> 
      <span class="glyphicon glyphicon-play"></span> 
    </button> 
  </div> 
 
 </div> 
` 

## SCSS

نحن نستخدم قواعد [Sass](http://sass-lang.com/) و SCSS حتى نتمكن من استخدام المتغيرات واستخدامها ![:heart_decoration:](//forum.freecodecamp.com/images/emoji/emoji_one/heart_decoration.png?v=2 ": heart_decoration:")

يمكننا استخدام SCSS التالية لتحديد التصميم الخاص بنا:

 `// Variables 
 $width: 720px; 
 
 .slider { 
  width: $width; 
  height: 400px; 
  overflow: hidden; 
  margin: 0 auto; 
  text-align: center; 
 
  .slides { 
    display: block; 
    width: 6000px; 
    height: 400px; 
    margin: 0; 
    padding: 0; 
  } 
 
  .slide { 
    float: left; 
    list-style-type: none; 
    width: $width; 
    height: 400px; 
 
    img { 
      width: 100%; 
      height: 100%; 
    } 
  } 
 } 
 
 .buttons { 
  margin: 0; 
  width: $width; 
  position: relative; 
  top: -40px; 
  margin: 0 auto; 
 
  .play { 
    display: none; 
  } 
 
  .btn { 
    display: flex; 
    margin: 0 auto; 
    text-align: center; 
  } 
 } 
` 

## JS

#### المتغيرات

_في مقتطف الشفرة التالي ، نحدد المتغيرات المستخدمة لاحقًا في الشفرة._

 `var animationSpeed = 1000; // How quickly the next slide animates. 
 var pause = 3000; // The pause between each slide. 
` 

سنستخدم متغيرًا فارغًا حيث سنتصل بطريقة `setInterval` :

 `var interval; 
` 

#### الرسوم المتحركة سنقوم بلف رسوم متحركة المنزلق الخاصة بنا داخل إحدى الوظائف:

 `function startSlider() {} 
` 

نحن نستخدم طريقة جافا سكريبت الأصلية `setInterval()` لأتمتة محتويات الدالة على مشغل يستند إلى الوقت.

 `interval = setInterval(function() {}, pause); 
` 

نستخدم متغير `pause` لمعرفة عدد المللي ثانية للانتظار قبل استدعاء الوظيفة مرة أخرى. اقرأ المزيد عن طريقة `setInterval` المحلية هنا: https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval. داخل وظيفتنا ، سنستخدم jQuery لتتلاشى بين الشرائح بسرعة متغير animationSpeed:

 `$('.slides > li:first') 
  .fadeOut(animationSpeed) 
  .next() 
  .fadeIn(animationSpeed) 
  .end() 
  .appendTo('.slides'); 
` 

*   نحن نستهدف الشريحة الأولى باستخدام `$('.slides > li:first')` . - `.fadeOut(animationSpeed)` الشريحة الأولى ثم تستخدم `.next()` ، ننتقل إلى الشريحة التالية. - بمجرد أن ننتقل إلى الشريحة التالية ، سوف `.fadeIn(animationSpeed)` في: `.fadeIn(animationSpeed)` . - سيستمر هذا التسلسل حتى الشريحة الأخيرة ( `.end()` ) ، ثم نوقف الرسم المتحرك. سنقوم الآن باستدعاء وظيفة `startSlider` لبدء الرسوم المتحركة:
    
    startSlider ()؛
    

#### Play and Pause _هذه الميزة اختيارية ، ولكنها سهلة التنفيذ._ سنخفي زر التشغيل ، لذلك لا نرى أزرار التشغيل والإيقاف المؤقت:

 `$('.play').hide(); // Hiding the play button. 
` 

سنقوم الآن بإنشاء زر الإيقاف المؤقت (يظهر تلقائيًا عند تحميل الصفحة):

 `$('.pause').click(function() { 
    clearInterval(interval); 
    $(this).hide(); 
    $('.play').show(); 
 }); 
` 

*   سنتصل بوظائفنا في كل مرة يتم النقر فوق زر الإيقاف المؤقت باستخدام jQuery. - سنقوم بإزالة الفاصل الزمني باستخدام طريقة `clearInterval` واستخدام متغير `interval` بنا `clearInterval` ، مع الإشارة إلى الفاصل الزمني للتوقف. - نظرًا لأن شريط التمرير متوقف مؤقتًا ، فسوف نخفي زر الإيقاف المؤقت باستخدام `$(this).hide();` . ملاحظة: نحن نستخدم `this` ، والذي سيشير إلى ما يتصل به `.pause` أي. - سنقوم بعد ذلك بعرض زر التشغيل الخاص بنا بحيث يمكن للمستخدم استئناف الرسوم المتحركة: `$('.play').show();` . تعمل التعليمة البرمجية التالية على إعداد زر التشغيل (مخفي تلقائيًا عند تحميل الصفحة):
    
    $ (". play"). انقر فوق (function () { startSlider ()؛ $ (هذا) .hide ()؛ $ ( '. قفة') عرض ()؛ })؛
    
*   سنقوم باستدعاء وظيفتنا في كل مرة يتم فيها النقر على زر التشغيل باستخدام jQuery.
    
    *   سنبدأ الفاصل الزمني أو نعيد تشغيله باستخدام وظيفة `startSlider` .
    *   نظرًا لأن شريط التمرير يعمل حاليًا ، فسوف نخفي زر التشغيل باستخدام `$(this).hide();` . ملاحظة: نحن نستخدم `this` ، والذي سيشير إلى ما يقوم به `.play` .
    *   سنقوم بعد ذلك بإظهار زر الإيقاف المؤقت الخاص بنا بحيث يمكن للمستخدم إيقاف الرسم المتحرك حسب الرغبة: `$('.pause').show();` .

## المراجع

*   الخروج من التعليمات البرمجية المصدر والمثال على [CodePen](https://codepen.io/atjonathan/pen/BKMxxq) لهذا البرنامج التعليمي.