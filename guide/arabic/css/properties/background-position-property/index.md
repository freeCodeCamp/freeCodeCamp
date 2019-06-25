---
title: Background Position Property
localeTitle: موقع الخلفية الملكية
---
## موقع الخلفية الملكية

تحدد خاصية الخلفية الموقع من حيث يجب أن تبدأ صورة الخلفية. بمعنى آخر ، ستأخذ هذه الخاصية قيمة س وقيمة ص وستبدأ الصورة من النقطة `(x, y)` .

**مثال:**

 `/* setting background-image of HTML doc */ 
 body { 
  background-image: url('https://cdn-media-1.freecodecamp.org/imgr/6Z2VStD.png'); 
  background-repeat: no-repeat; 
  background-position: right top; 
 } 
` 

بشكل افتراضي ، يتم تعيين الخاصية background-position إلى `0% 0%` .

**قيم العقارات:**

`background-position: x-value y-value` حيث ،

_x-value_ : `left | center | right | x% | x px` و

_ص القيمة_ : `top | center | bottom | y% | y px` .

قيم الخاصية الأخرى المسموح بها هي قيم `initial` `inherit` .

`initial` : تعيين هذه الخاصية إلى قيمتها الافتراضية.

`inherit` : `inherit` القيمة من العنصر الرئيسي.

**ملاحظة:** عند إعطاء قيمة واحدة فقط لخاصية الخلفية ، يتم تعيين القيمة الأخرى إلى `center` .

**موارد آخرى:**

مستندات MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/background-position