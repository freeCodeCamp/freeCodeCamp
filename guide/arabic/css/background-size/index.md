---
title: Background Size
localeTitle: حجم الخلفية
---
## حجم الخلفية

تحدد خاصية حجم الخلفية حجم صور الخلفية. يمكنك تعيين طول أو نسبة ، مع القيمة الأولى هي العرض والثانية هي الارتفاع. يمكنك أيضًا استخدام إحدى قيم الكلمات الرئيسية الخمس:

 `.auto {background-size: auto;} 
 .cover {background-size: cover;} 
 .contain {background-size: contain;} 
 .initial {background-size: initial;} 
 .inherit {background-size: inherit;} 
 /* Percentage and pixel can also be used */ 
 .pixel {background-size: 50px 50px;} 
 .percentage {background-size: 50% 50%;} 
` 

لتعيين هذه الخاصية على صور خلفية متعددة ، قم بفصل القيم بفاصلة:

 `.multiple { 
    background-image: url(1.png), url(2.png); 
    background-size: 3px 3px, cover; 
 } 
` 

#### معلومات اكثر:

الوثائق: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)

CSS-Tricks: [background-size](https://css-tricks.com/almanac/properties/b/background-size/)

دعم المتصفح: [caniuse](http://caniuse.com/#search=background-size)