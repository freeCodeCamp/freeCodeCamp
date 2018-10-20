---
title: CSS3 Shadow Effects
localeTitle: تأثيرات الظل CSS3
---
## تأثيرات الظل CSS3

باستخدام CSS3 ، يمكنك إنشاء نوعين من الظلال: `text-shadow` (يضيف الظل إلى النص) `box-shadow` (يضيف الظل إلى عناصر أخرى).

### CSS3 نص الظل

يمكن أن تأخذ خاصية " `text-shadow` ما يصل إلى أربع قيم:

*   الظل الأفقي
*   الظل الرأسي
*   تأثير التمويه
*   اللون

##### أمثلة:

*   ظل نص عادي

 `h1 { 
    text-shadow: 2px 2px 5px crimson; 
 } 
` 

![مثال على ظل النص العادي](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow1.png)

*   تأثير النص متوهجة

 `h1 { 
    text-shadow: 0 0 4px #00FF9C; 
 } 
` 

![مثال متوهج النص](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow2.png)

#### ظلال متعددة

لتحقيق ذلك ، يمكنك ببساطة إضافة فاصلة بين مجموعتين من القيم (أو أكثر):

 `h1 { 
    color: white; 
    text-shadow: 0 0 3px #F10D58, 0 0 7px #4578D5; 
 } 
` 

![ظلال متعددة تتفحص بنص أبيض](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/text-shadow3.png)

### CSS3 صندوق الظل

يمكن أن تأخذ الخاصية `box-shadow` ما يصل إلى ست قيم:

*   (اختياري) الكلمة الأساسية `inset` (تغيير الظل إلى واحد داخل الإطار)
*   الظل الأفقي
*   الظل الرأسي
*   تأثير التمويه
*   الانتشار
*   اللون

##### أمثلة:

 `.first-div { 
    box-shadow: 1px 1px 5px 3px grey; 
 } 
 
 .second-div { 
    box-shadow: 0 0 5px 1px lightgrey; 
 } 
 
 .third-div { 
    box-shadow: inset 0 0 15px 5px rgba(0,0,0,0.75); 
 } 
` 

![أمثلة Box-shadow](https://raw.githubusercontent.com/nawnaw7/FCC-guides-CSS3-shadows-images/master/CSS3%20Shadow%20Effects%20Images/box-shadows.png)

#### معلومات اكثر:

*   [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow?v=b)
*   [تحقق من دعم المستعرض](https://caniuse.com/#search=box-shadow)
*   [CSS box-shadow generator](https://www.cssmatic.com/box-shadow) (لا تتردد في تجربة الظلال)