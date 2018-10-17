---
title: Box Shadow
localeTitle: صندوق الظل
---
## صندوق الظل

تقوم خاصية `box-shadow` بإرفاق ظلال أو أكثر حول إطار عنصر (يمكن أن تكون بداخله). إنه خيار يمنحك القدرة على تصميم تأثيرات الظل الرائعة بسهولة. تُعد ظلال Box طريقة رائعة لرفع مستوى صور صفحتك على الويب.

يمكن وصف ظل صندوق بالعديد من الخصائص بما في ذلك:

*   X و Y offset من العنصر
*   ضبابية وانتشار نصف القطر
*   اللون

### بناء الجملة:

 ``  div { 
    box-shadow: none | [inset? && [ <offset-x> <offset-y> <blur-radius>? <spread-radius>? <color>? ] ]# 
    } 
  ``` 
 * #### inset (default: none) 
 If not specified, the shadow is assumed to be a drop shadow (as if the box were raised above the content). 
 The presence of the `inset` keyword changes the shadow to one inside the frame 
 
 * #### offset-x offset-y 
 These are two `length` values to set the shadow offset. <offset-x> specifies the horizontal distance. Negative values place the shadow to the left of the element. `offset-y` specifies the vertical distance. Negative values place the shadow above the element. See `length` for possible units. 
 
 * #### blur-radius (default: 0) 
 This is a third `length` value. The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed. If not specified, it will be 0 (the shadow's edge is sharp). 
 
 * #### spread-radius (default: 0) 
 This is a fourth <length> value. Positive values will cause the shadow to expand and grow bigger, negative values will cause the shadow to shrink. If not specified, it will be 0 (the shadow will be the same size as the element). 
 
 * #### color 
 This value is used to set the color of the shadow, usually defined with hex `#000000`, rgba value `rgba(55,89,88,0.8)` or rgb value `rgb(55,89,88)` 
 
 #### Extended 
 
 To maximize compatibility, it is recommended that you declare box shadow property for `moz-appearance` and `webkit`, this extends the normal syntax to: 
`` 

المغلق شعبة { مربع الظل: لا شيء \[أقحم؟ && \[ ؟ ؟ ؟ \]\] # -moz-box-shadow: none | \[أقحم؟ && \[ ؟ ؟ ؟ \]\] # -webkit-box-shadow: لا شيء \[أقحم؟ && \[ ؟ ؟ ؟ \]\] # }

 `However, this step can be ignored if it is creating confusion, as moz property and webkit property will only work in specific applications such as Firefox, and are not on a standards track. 
 
 ### Examples 
 
 #### Basic use 
` 

المغلق div { العرض: 200 بكسل ؛ الارتفاع: 50 بكسل ؛ لون الخلفية: # 333 ؛ box-shadow: 10px 10px 5px #ccc؛ }

 `10px - offset-x 
 10px - offset-y 
 5px -  blur 
 #ccc - light gray color 
 
 It will display 
 
 ![image](https://raw.githubusercontent.com/krzysiekh/images/master/box-shadow1.png) 
 
 #### Inside box shadow 
` 

المغلق div { العرض: 200 بكسل ؛ الارتفاع: 50 بكسل ؛ لون الخلفية: # 333 ؛ box-shadow: inset 10px 10px 5px #ccc؛ }

 `It uses very similar code, but with inset value, which displays shadow inside the div element 
 
 ![image](https://raw.githubusercontent.com/krzysiekh/images/master/box-shadow2.png) 
 
 
 #### Multiple box shadows 
` 

المغلق div { العرض: 200 بكسل ؛ الارتفاع: 50 بكسل ؛ لون الخلفية: # 333 ؛ box-shadow: inset 10px 10px 5px #ccc، 10px 10px 5px #ccc؛ } \`\` \`

يمكنك الجمع بين الجزأين السابقين من ظلال مربع باستخدام فاصلة للحصول على عدة ظلال مربع في نفس div

#### معلومات اكثر

*   المستندات: [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)