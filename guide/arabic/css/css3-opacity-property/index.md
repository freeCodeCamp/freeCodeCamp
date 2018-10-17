---
title: CSS3 Opacity Property
localeTitle: خاصية عتامة CSS3
---
## خاصية عتامة CSS3

تتيح لك `opacity` التحكم في مدى شفافية العنصر على مقياس من `0` إلى `1` .

إذا قمت بتعيين الخاصية لعنصر إلى `0` ستكون شفافة. إذا قمت بتعيينه إلى `1` سيكون معتمًا.

ضبط عنصر على `opacity: 0;` لا يزيلها من الصفحة. سيظل العنصر قابلاً للنقر وسيؤثر على تدفق محتوى الصفحة.

 `.transparent { 
    opacity: 0; 
 } 
 
 .verySeeThrough { 
    opacity: 0.3; 
 } 
 
 .slightlySeeThrough { 
    opacity: 0.7; 
 } 
 
 .opaque { 
    opacity: 1; 
 } 
` 

[يوضح هذا المثال البسيط](https://jsfiddle.net/1ogmxaf8/1/) كيفية استخدام التعتيم مع تأثير التمرير.

#### معلومات اكثر:

*   [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
*   [المغلق الخدع تقويم](https://css-tricks.com/almanac/properties/o/opacity/)