---
title: currentColor Keyword
localeTitle: الكلمة الرئيسية الحالية
---
## الكلمة الرئيسية الحالية

الكلمة الأساسية الحالية ، كما يوحي الاسم ، هي قيمة لون صالحة في CSS. يمثل هذا قيمة خاصية `color` عنصر محدد. يتيح لك هذا استخدام قيمة خاصية `color` للخصائص التي لا تستلمها افتراضيًا.

### دعم المتصفح

الكلمة الرئيسية الحالية ملونة مدعومة بشكل جيد عبر المتصفحات. مدعوم من IE9 + ، سفاري 4+ ، وجميع المتصفحات الحديثة الأخرى. تحقق من القائمة الكاملة في [caniuse.com](https://caniuse.com/#feat=currentcolor)

### مثال

نعلن أن كل div يحتوي على حدود 3px بلون _currentColor_ ، مما يعني أن كل حد div سيتم تلوينه بنفس قيمة خاصية `color` الخاصة به. تحقق من المثال الحي [هنا](http://jsfiddle.net/tjkp0cm3/)

 `div{ 
  /* The currentColor keyword for the color value, which means that the border will have the value of the respective div's color property */ 
  border: 3px solid currentColor; 
 } 
 
 /* This div will have green borders, because its color value is green. */ 
 #div1{ 
  color: green; 
 } 
 
 /* This div will have blue borders, because its color value is blue. */ 
 #div2{ 
  color: blue; 
 } 
` 

### التطبيق العملي مع SVG

إليك مثال شائع جدًا على الويب - زر يحتوي على رمز SVG ونص فيه. يتغير لون الحدود والنص والرموز عند تحريك الماوس فوق الزر. توضح الصورة التالية الحالة الأولية والحالات التي تم تحريكها للزر بالترتيب.

![صور الزر](https://image.ibb.co/hWveBR/button_variations.png)

يمكن أيضًا استخدام خطوط الرموز لهذا الغرض ، ولكن هناك مزايا مختلفة من SVG المضمنة على خطوط الأيقونات ، وقد يؤدي ذلك إلى جعل SVGs خيارًا للعديد من المطورين. نقلا [CSS-Tricks](https://css-tricks.com/icon-fonts-vs-svg/) ،

> يمكن أن يكون محبطًا وضع رمز خط. يتم إدراج الرموز عبر عنصر زائف ، ويعتمد ذلك على `line-height` ، `vertical-align` ، `letter-spacing` `word-spacing` ، وكيف تم تصميم الصورة الرمزية `letter-spacing` (هل من الطبيعي وجود مساحة حوله؟ هل يحتوي على معلومات تقنين الأحرف)؟ . ثم العناصر الزائفة `display` يؤثر نوع إذا كانت هذه الخصائص لها تأثير أم لا. SVG فقط هو الحجم الذي هو عليه.

باختصار ، قد يكون من المحبط أحيانًا استخدام رموز الخط مع النص.

يمكننا استخدام هذا الرمز الخاص بنا لتحقيق السلوك المطلوب.

 `button{ 
  color: #016898; 
 } 
 
 .emailIcon{ 
  fill: #016898; 
 } 
 
 button:hover { 
  color: #19B5FE; 
 } 
 
 button:hover .emailIcon{ 
  fill: #19B5FE; 
 } 
` 

الآن، بدلا من تغيير SVG في `fill` اللون على تحوم بشكل واضح، فإننا يمكن أن يحدد التعبئة ل `currentColor` . يقوم هذا تلقائيًا بتغيير لون SVG إلى قيمة خاصية `color` الخاصة بالزر. نحن الآن بحاجة فقط إلى تغيير خاصية `color` من الزر. هذا يجعل رمز CSS أقصر وأذكى.

 `.emailIcon{ 
  fill: currentColor; 
 } 
 
 button{ 
  color: #016898; 
 } 
 
 button:hover { 
  color: #19B5FE; 
 } 
` 

تحقق من المثال المباشر على https://repl.it/NNt9/2.

#### معلومات اكثر:

*   [مستندات MDN على خاصية `color` CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
*   [MDN Docs على الكلمة الرئيسية الحالية](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_example)
*   [المادة على اللون الحالي في osvaldas.info](https://osvaldas.info/keeping-css-short-with-currentcolor)