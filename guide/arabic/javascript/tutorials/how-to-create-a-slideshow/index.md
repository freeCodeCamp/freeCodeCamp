---
title: How to Create a Slideshow
localeTitle: كيف تصنع عرض الشرائح
---
## كيف تصنع عرض الشرائح

عرض الشرائح على الويب عبارة عن سلسلة من الصور أو النصوص التي تظهر في عنصر واحد من هذا التسلسل في فترة زمنية.

بالنسبة إلى هذا البرنامج التعليمي ، يمكنك إنشاء عرض شرائح باتباع الخطوات التالية:

### اكتب ترميز.

\`\` \`أتش تي أم أل   عرض الشرائح  

 `### Write styles to hide slides and show only one slide. 
 
 For hide the slides you have to give them a default style and only show one slide if this is active or you want to show it. 
` 

المغلق \[data-component = "slideshow"\] .slide { عرض لا شيء؛ }

\[data-component = "slideshow"\] .slide.active { العرض محجوب؛ }

 `### Change the slides in a time interval. 
 
 The first step to change the slides to show, is select the slide wrapper(s) and then its slides. 
 
 When you selected the slides you have to go over each slide and add or remove an active class depending on the slide that you want to show, and then just repeat the process in a time interval. 
 
 Keep it in mind when you remove a active class to a slide, you are hidden it because the styles defined in the previous step. But when you add an active class to the slide, you are overwritring the style ``display:none to display:block`` , so the slide will show to the users. 
` 

شبيبة var slideshows = document.querySelectorAll ('\[data-component = "slideshow"\] ")؛

// تطبيق على جميع عروض الشرائح التي تحددها مع كتابة العلامات slideshows.forEach (initSlideShow)؛

وظيفة initSlideShow (عرض الشرائح) {

 ``var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides 
 
 var index = 0, time = 5000; 
 slides[index].classList.add('active'); 
 
 setInterval( () => { 
  slides[index].classList.remove('active'); 
 
  //Go over each slide incrementing the index 
  index++; 
 
  // If you go over all slides, restart the index to show the first slide and start again 
  if (index === slides.length) index = 0; 
 
  slides[index].classList.add('active'); 
 
 }, time); 
`` 

} \`\` \`

#### [مثال Codepen بعد هذا البرنامج التعليمي](https://codepen.io/AndresUris/pen/rGXpvE)