---
title: CSS3 Transitions
localeTitle: التحولات CSS3
---
## التحولات CSS3

قد يكون استخدام عمليات **النقل من** CSS3 مفيدًا إذا كنت تريد أن يكون تطبيقك أو صفحتك على الويب أكثر ديناميكية وحسن المظهر.

في الواقع ، تسمح لك الانتقالات بتغيير قيم الخاصية ( `width` ، `color` ، ...) بطريقة **سلسة** .

الخاصية `transition` هي خاصية مختزلة لخاصية `transition-property` ، `transition-duration` `transition-timing-function` ، `transition-timing-function` `transition-delay` ، وبناء الجملة هو ما يلي:

 `transition: transition-property transition-duration transition-timing-function transition-delay 
` 

فمثلا :

 `transition: width 2s ease-in-out 1s; 
` 

### وصف الخصائص

#### `transition-property`

حدد **اسم** الموقع الذي يجب عليك تطبيق النقل عليه:

*   `background-color`
*   `color`
*   `width`
*   `height`
*   `margin`
*   `border-radius`
*   وما إلى ذلك وهلم جرا !

فمثلا :

 `transition-property: width; /* means the transition applies on the width */ 
` 

#### `transition-duration`

حدد **عدد الثواني أو الألف** من **الثانية التي** يجب أن **يستغرقها** الانتقال:

فمثلا :

 `transition-duration: 2s /* means the transition effect last 2s */ 
` 

#### `transition-timing-function`

حدد **منحنى السرعة** لتأثير الانتقال. وبالتالي ، يمكنك تغيير **سرعة انتقالك على مدار مدته** .

فيما يلي القيم الأكثر استخدامًا:

*   `linear`
*   `ease`
*   `ease-in`
*   `ease-out`
*   `ease-in-out`
*   `cubic-bezier(n, n, n, n)`

فمثلا :

 `transition-timing-function: linear 
` 

ملاحظة: جميع القيم المذكورة أعلاه هي في الواقع تفاصيل `cubic-bezier` . `linear` ، على سبيل المثال ، تعادل `cubic-bezier(0.25,0.1,0.25,1)`

يمكنك تجربة ومعرفة المزيد عن _بيزييه مكعب_ [هنا](http://cubic-bezier.com/)

#### `transition-delay`

حدد خلال **ثوانٍ أو ميلي ثانية** عندما **يبدأ النقل** .

فمثلا :

 `transition-delay: 1s /* means wait 1s before the transition effect start */ 
` 

### كيفية استخدام التحولات؟

يمكنك كتابة انتقال بطريقتين:

#### استخدام الخاصية المختزلة ( `transition` )

 `div { 
  width: 200px; 
  transition: all 1s ease-in-out; 
 } 
 
 div:hover { 
  width: 300px; 
 } 
` 

#### إعطاء جميع خصائص النقل قيمة

 `div { 
  width: 200px; 
  transition-property: width; 
  transition-duration: 1s; 
  transition-timing-function: ease-in-out; 
 } 
` 

ملاحظة: كلا المثالين **متساويان**

### أمثلة

إليك بعض الأقلام البسيطة التي تحتوي على انتقالات بسيطة:

*   [التحولات الأساسية](https://codepen.io/thomlom/pen/gGqzNp)
*   [التحولات + جافا سكريبت](https://codepen.io/thomlom/pen/JrxZKz?editors=1111)

#### معلومات اكثر:

*   [w3schools: CSS3 Transitions](https://www.w3schools.com/css/css3_transitions.asp)
*   [مستندات ويب MDN: استخدام انتقالات CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
*   [DevTips: CSS الانتقالية](https://www.youtube.com/watch?v=8kK-cA99SA0)