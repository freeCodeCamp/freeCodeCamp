---
title: Z Index
localeTitle: مؤشر Z
---
## مؤشر Z

Z Index ( `z-index` ) هي خاصية CSS تقوم بتعريف ترتيب عناصر HTML المتداخلة. سيتم وضع العناصر ذات مؤشر أعلى على عناصر ذات مؤشر أقل.

**ملاحظة** : يعمل الفهرس Z فقط على العناصر الموضوعة ( `position:absolute` ، `position:relative` ، أو `position:fixed` ).

#### القيم الممكنة

 `/* Default value if not specified */ 
 z-index: auto; 
 
 /* Integer values */ 
 z-index: 1; 
 z-index: 100; 
 z-index: 9999; 
 z-index: -1; 
 
 /* Global values */ 
 z-index: inherit; 
 z-index: initial; 
 z-index: unset; 
` 

#### مثال للاستخدام

في هذا المثال ، يمكنك مشاهدة ثلاث مربعات معروضة فوق بعضها البعض في أوامر مختلفة باستخدام `z-index` .

_HTML_

 `
<div class="container"> 
  <div class="box" id="blue"></div> 
  <div class="box" id="red"></div> 
  <div class="box" id="green"></div> 
 </div> 
` 

_CSS_

 `#blue { 
  background-color: blue; 
 } 
 
 #red { 
  background-color: red; 
 } 
 
 #green { 
  background-color: green; 
 } 
` 

بما أنه لم يتم تعريف `z-index` ، فستكون له قيمة افتراضية من `auto` . هذه نتيجة:

![صورة من ثلاث مربعات](https://image.prntscr.com/image/Yc9oGkdKTnm_YIHzaKQmbQ.png)

حاول تغيير الترتيب إلى الأخضر والأزرق والأحمر في CSS باستخدام `z-index` .

 `#blue { 
  background-color: blue; 
  z-index: 2; 
 } 
 
 #red { 
  background-color: red; 
  z-index: 1; 
 } 
 
 #green { 
  background-color: green; 
  z-index: 3; 
 } 
` 

ستكون النتيجة الخاصة بك:

![صورة من ثلاث مربعات](https://image.prntscr.com/image/Am9XxPO4Q2mq-PcokJ47Wg.png)

استخدم Z Index إذا كنت بحاجة إلى وضع عنصر خلفية أسفل الحاوية. يمكنك وضع الخلفية بسهولة تحت كل عنصر عن طريق إعطائها مؤشر Z سلبي مثل أدناه:

 `#background { 
  z-index: -1; 
 } 
` 

#### معلومات اكثر:

[https://css-tricks.com/almanac/properties/z/z-index/](https://css-tricks.com/almanac/properties/z/z-index/)

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS _Positioning / Understanding_ z\_index](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index)

[https://philipwalton.com/articles/what-no-one-told-you-about-z-index/](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)