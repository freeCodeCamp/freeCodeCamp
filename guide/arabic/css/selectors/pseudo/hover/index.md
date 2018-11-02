---
title: Hover
localeTitle: يحوم
---
## يحوم

The `selector:hover` يتم تشغيل فئة pseudo-class عند التفاعل مع العنصر (selector) مع وجود جهاز تأشير بشكل عام مؤشر الماوس. سيتم تجاوز أنماط العنصر المحلق فوق من خلال النمط المحدد في `selector:hover` فئة زائفة. لوضع روابط / عناصر نمطية يجب تعريف القواعد بالترتيب: : link -: visited -: hover -: active

**بناء الجملة :**

 ` selector:hover { 
    css declarations; 
 } 
` 

## مزيد من الأمثلة

في ما يلي بعض الأمثلة الأكثر تعقيدًا عما يمكنك فعله باستخدام `:hover` فئة زائفة `:hover` . نضع في اعتبارنا أن `.second` شعبة **يجب أن** يأتي بعد `.first` شعبة في كل من هذه الأمثلة.

1.  عندما تقوم بتحريك مؤشر الماوس فوق عنصر ما ، قم بتغيير الأخوة المجاورة.

 `
<style> 
  .first:hover + .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first">First</div> 
 <div class="second">Second</div> 
` 

سيعمل الرمز أعلاه على تغيير لون خلفية `.second` إلى blue عند تحريك مؤشر الماوس فوق `.first` .

2.  عندما تقوم بتحريك مؤشر الماوس فوق عنصر ما ، قم بتغيير الأخوة العامة.

 `
<style> 
  .first:hover ~ .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first">First</div> 
 <div class="middle">Middle</div> 
 <div class="second">Second</div> 
` 

يعطي هذا المثال مرونة أكثر قليلاً حيث لم يعد من الضروري أن يكون العنصران متجاورين مباشرة.

3.  عندما تقوم بتحريك مؤشر الماوس فوق عنصر ما ، قم بتغيير سليل مباشر.

 `
<style> 
  .first:hover > .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first"> 
  First 
  <div class="second">Second</div> 
 </div> 
` 

سيعمل الرمز أعلاه على تغيير لون خلفية `.second` إلى blue عند تحريك مؤشر الماوس فوق `.first` .

4.  عندما تقوم بتحريك مؤشر الماوس فوق عنصر ، قم بتغيير سلال عام.

 `
<style> 
  .first:hover .second { 
    background-color: blue; 
  } 
 </style> 
 
 <div class="first"> 
  First 
  <div class="container"> 
    Container 
    <div class="second">Second</div> 
  </div> 
 </div> 
` 

وكما في المثال 2 ، فإن هذا يمنح المزيد من المرونة حيث أن العنصرين لم يعد من الضروري أن يكونا متجاورين مباشرة. ستلاحظ أن المساحة التي يمكن `.first` أكبر في الأمثلة 3 و 4. يحدث هذا لأنك لا تزال تحوم فوق `.first` ما دام المؤشر فوق أحد أطفاله.

#### معلومات اكثر:

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahover) [w3schools](https://www.w3schools.com/cssref/sel_hover.asp)