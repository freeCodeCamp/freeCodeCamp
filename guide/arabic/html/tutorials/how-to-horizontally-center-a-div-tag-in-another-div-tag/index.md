---
title: How to Horizontally Center a Div Tag in Another Div Tag
localeTitle: كيفية توسيط علامة Div في علامة Div أخرى
---
## كيفية توسيط علامة Div في علامة Div أخرى

التركيز الأفقي لـ `<div>` داخل `<div>` سهل للغاية.

لنبدأ بإنشاء علامتين div مع فئتي "parent" و "child". سيكون الوالد الحاوية لدينا ، وسيكون الطفل هو `<div>` الذي نركز عليه أفقيًا.

 `
<!DOCTYPE html> 
 <html> 
 <head> 
  <meta charset="UTF-8"> 
  <title>How to Horizontally Center a Div Tag in Another Div Tag</title> 
 </head> 
 <body> 
  <div class="parent"> 
    <div class="child"> 
      <p>This is the center.</p> 
    </div> 
  </div> 
 </body> 
 </html> 
` 

هناك عدة طرق يمكنك من خلالها معالجة هذا الأمر ، ولكن دعنا نركز على هذا البرنامج التعليمي على اثنين. سنقوم في `flexbox` باستخدام `<div>` باستخدام `margin` وفي الثانية سنستخدم `flexbox` .

### مثال على توسيط علامة Div ذات هوامش

إذا قمت بتحديد `width` على div div ، يمكنك استخدام `margin: auto` . سيؤدي هذا إلى توسيط طفلك `<div>` عن طريق توزيع هوامش اليسار واليمين بالتساوي.

 `.parent { 
  border: 2px solid red; 
 } 
 
 .centered-child { 
  width: 50%; 
  margin: auto; 
  border: 1px solid black; 
 } 
` 

### مثال على توسيط علامة Div مع Flexbox

استخدام flexbox في الوسط `<div>` مختلف قليلاً. أولاً ، لا يتطلب منك تحديد `width` على طفلك `<div>` . ثانيًا ، تقوم بتوسيط الطفل `<div>` عن طريق تطبيق خصائص css على الأصل `<div>` .

لتوسيط طفل `<div>` باستخدام flexbox ، يلزمك استخدام `display: flex` مع `justify-content: center` الضبط `justify-content: center` على الأصل `<div>` .

 `.parent { 
  display: flex; 
  justify-content: center; 
  border: 2px solid red; 
 } 
 
 .centered-child { 
  border: 1px solid black; 
 } 
` 

#### معلومات اكثر:

[مصفوفة دعم Flexbox](http://caniuse.com/#search=flexbox)