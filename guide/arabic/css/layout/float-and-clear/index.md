---
title: Float and Clear
localeTitle: تعويم وواضحة
---
## تعويم وواضحة

تحدد خاصية `float` CSS كيفية تعويم العنصر.

تحدد الخاصية `clear` CSS العناصر التي يمكن أن تطفو بجانب العنصر الذي تم تطهيره وعلى أي جانب.

### الخاصية `float`

يتم استخدام الخاصية `float` لتحديد المواقع والتخطيط على صفحات الويب.

يمكن أن تحتوي الخاصية `float` على إحدى القيم التالية:

`left` - يطفو العنصر إلى يسار الحاوية الخاصة به `right` - يطفو العنصر إلى يمين الحاوية الخاصة به `none` - لا يطفو العنصر (سيتم عرضه فقط حيث يحدث في النص). هذا هو الافتراضي `inherit` - العنصر يرث قيمة عائم أصله في أبسط استخدام لها ، يمكن استخدام الخاصية `float` لالتفاف النص حول الصور.

#### تعويم في الصورة:

![float image for print layout](https://github.com/jamal-pb95/guides/blob/master/assets/css3-float-print-layout.png "CSS-الحيل تعويم قيمه img")

 `img { 
    float: right; 
 } 
` 

يحدد هذا المثال أن الصورة يجب أن تطفو إلى اليمين في صفحة:

![Float image for web layout](https://github.com/jamal-pb95/guides/blob/master/assets/css3-float-web-text-wrap.png "تعويم img على شبكة الإنترنت")

 `img { 
    float: left; 
 } 
` 

يحدد هذا المثال أن الصورة يجب أن تطفو إلى اليسار في صفحة:

 `img { 
    float: none; 
 } 
` 

في المثال التالي ، سيتم عرض الصورة فقط في مكان حدوثها في النص ( `float: none;` ):

### الممتلكات `clear`

تحدد الخاصية `clear` العناصر التي يمكن أن تطفو بجانب العنصر الممسوح وعلى أي جانب.

يمكن أن تحتوي الخاصية `clear` على إحدى القيم التالية:

`none` - يسمح للعناصر الطافية على كلا الجانبين. هذا هو الافتراضي `left` - لا يسمح بعناصر متحركة على الجانب الأيسر `right` - لا يسمح بالعناصر العائمة على الجانب الأيمن `both` - لا يسمح بالعناصر العائمة على اليسار أو الجانب الأيمن `inherit` - يرث العنصر القيمة الواضحة لأصله الرئيسي الطريقة الأكثر شيوعًا لاستخدام الخاصية `clear` هي بعد استخدام خاصية `float` على عنصر.

عند إزالة العوامات ، يجب أن تتطابق مع `clear` `float` . إذا تم تعويم عنصر إلى `left` ، فعليك `clear` إلى `left` . سيستمر العنصر floated في `float` ، ولكن سيظهر العنصر الذي تم مسحه أسفله في صفحة الويب.

#### مثال:

![unclear footer image](https://github.com/jamal-pb95/guides/blob/master/assets/unclearedfooter.png "صورة تذييل غير واضح") المصدر: CSS-TRICS

 `div { 
    clear: left; 
 } 
` 

![clear footer image](https://github.com/jamal-pb95/guides/blob/master/assets/clearedfooter.png "صورة تذييل واضح") المصدر: CSS-TRICS

### الموارد الإضافية:

*   MDN CSS: [Float](https://developer.mozilla.org/en-US/docs/Web/CSS/float) & [Clear](https://developer.mozilla.org/en-US/docs/Web/CSS/clear)
*   [W3chools الدروس](https://www.w3schools.com/css/css_float.asp)
*   CSS-Tricks: [float](https://css-tricks.com/all-about-floats/) & [clear](https://css-tricks.com/almanac/properties/c/clear/)