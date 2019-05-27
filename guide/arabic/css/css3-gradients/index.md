---
title: CSS3 Gradients
localeTitle: تدرجات CSS3
---
## تدرجات CSS3

تتيح لك التدرجات CSS3 عرض انتقالات سلسة بين لونين محددين أو أكثر.

في وقت سابق ، كان عليك استخدام الصور لهذه التأثيرات. ومع ذلك ، باستخدام تدرجات CSS3 ، يمكنك تقليل وقت التنزيل واستخدام النطاق الترددي. بالإضافة إلى ذلك ، تبدو العناصر ذات التدرجات أفضل عند التكبير ، لأن التدرج يتم إنشاؤه بواسطة المستعرض.

يعرف CSS3 نوعين من التدرجات:

*   التدرجات الخطية (تنخفض / أعلى / يسار / يمين / مائل)
*   تدرجات نصف قطرية (محددة بمركزها)

### تدرجات خطية CSS3

لإنشاء تدرج خطي ، يجب تحديد نقطتي توقف للألوان على الأقل. توقف اللون هي الألوان التي تريد تقديم انتقالات سلسة بين. يمكنك أيضًا ضبط نقطة بداية واتجاه (أو زاوية) مع تأثير التدرج.

#### بناء الجملة

 `background: linear-gradient(direction, color-stop1, color-stop2, ...); 
` 

##### التدرج الخطي - من الأعلى إلى الأسفل (هذا هو الإعداد الافتراضي)

يوضح المثال التالي تدرج خطي يبدأ من الأعلى. يبدأ باللون الأحمر ، مع الانتقال إلى الأصفر: ![الافتراضي الخطية التدرج](https://cdn-media-1.freecodecamp.org/imgr/2uGfleD.jpg)

#### مثال

 `<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(red, green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(red, green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Top to Bottom</h3> 
 <p>This linear gradient starts at the top. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
` 

![الافتراضي الخطية التدرج](https://cdn-media-1.freecodecamp.org/imgr/CvtXCMd.jpg)

##### التدرج الخطي - من اليسار إلى اليمين

يوضح المثال التالي تدرج خطي يبدأ من اليسار. يبدأ باللون الأحمر ، مع الانتقال إلى الأصفر: ![من اليسار إلى اليمين](https://cdn-media-1.freecodecamp.org/imgr/e4dRvZR.jpg)

#### مثال

 `<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(left, red , green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(right, red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(right, red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(to right, red , green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Left to Right</h3> 
 <p>This linear gradient starts at the left. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
` 

![من اليسار إلى اليمين](https://cdn-media-1.freecodecamp.org/imgr/k4FSyXz.jpg)

#### التدرج الخطي - قطري

يمكنك جعل التدرج قطريًا بتحديد موضعتي البدء الأفقية والرأسية.

يوضح المثال التالي تدرج خطي يبدأ من أعلى اليسار (ويذهب إلى أسفل اليمين). يبدأ باللون الأحمر ، مع الانتقال إلى الأصفر:

![قطري](https://cdn-media-1.freecodecamp.org/imgr/YvtbUBH.jpg)

#### مثال

 `<!DOCTYPE html> 
 <html> 
 <head> 
 <style> 
 #grad1 { 
    height: 200px; 
    background: red; /* For browsers that do not support gradients */ 
    background: -webkit-linear-gradient(left top, red, green); /* For Safari 5.1 to 6.0 */ 
    background: -o-linear-gradient(bottom right, red, green); /* For Opera 11.1 to 12.0 */ 
    background: -moz-linear-gradient(bottom right, red, green); /* For Firefox 3.6 to 15 */ 
    background: linear-gradient(to bottom right, red, green); /* Standard syntax (must be last) */ 
 } 
 </style> 
 </head> 
 <body> 
 
 <h3>Linear Gradient - Diagonal</h3> 
 <p>This linear gradient starts at top left. It starts red, transitioning to yellow:</p> 
 
 <div id="grad1"></div> 
 
 <p><strong>Note:</strong> Internet Explorer 9 and earlier versions do not support gradients.</p> 
 
 </body> 
 </html> 
` 

![قطري-إكسب](https://cdn-media-1.freecodecamp.org/imgr/8gKRhAp.jpg)

#### معلومات اكثر:

[MDN Documentatiion](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient) || [w3schools](https://www.w3schools.com/css/css3_gradients.asp)