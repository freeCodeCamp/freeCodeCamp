---
title: CSS Flexbox Tips and Tricks
localeTitle: CSS Flexbox نصائح والخدع
---
# CSS Flexbox

يسمح [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) لنا بتنسيق HTML الخاص بنا بسهولة كما لم تعرف أبدًا. مع flexbox فمن الممكن لمحاذاة عموديا وأفقيا ، بسهولة. مثل صوت ذلك؟ نعم انا ايضا.

وهو أيضًا رائع للتخطيط العام لموقعك على الويب أو تطبيقك ، فمن السهل تعلمه ودعمه جيدًا (في جميع المتصفحات الحديثة) وهو أمر رائع للعمل معه ، ناهيك عن أنه لا يستغرق وقتًا طويلاً للسيطرة على الإطلاق !

## حول flexbox

فيما يلي قائمة بخصائص flexbox التي يمكن استخدامها لوضع عناصر خارجة في css:

### CSS التي يمكن تطبيقها على الحاوية

 `display: flexbox | inline-flex; 
 flex-direction: row | row-reverse | column | column-reverse; 
 flex-wrap: nowrap | wrap | wrap-reverse; 
 flex-flow: <'flex-direction'> || <'flex-wrap'> 
 justify-content: flex-start | flex-end | center | space-between | space-around; 
 align-items: flex-start | flex-end | center | baseline | stretch; 
 align-content: flex-start | flex-end | center | space-between | space-around | stretch; 
` 

### CSS التي يمكن تطبيقها على العناصر / العناصر في الحاوية

 `order: <integer>; 
 flex-grow: <number>; /* default 0 */ 
 flex-shrink: <number>; /* default 1 */ 
 flex-basis: <length> | auto; /* default auto */ 
 flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] 
 align-self: auto | flex-start | flex-end | center | baseline | stretch; 
` 

حتى الآن لديك مجموعة الأدوات الخاصة بك ولكنك تسأل "ماذا أفعل بأدواتي ، كيف أستخدمها؟" ، دعني أريك.

### عرض فليكس

`display: flex;` هو فقط لإخبار المستعرض الخاص بك مهلا أود استخدام flexbox مع هذه الحاوية ، من فضلك. سيؤدي هذا إلى تهيئة هذا المربع كحاوية مرنة وتطبيق بعض خصائص المرن الافتراضية.

هذا هو ما يشبه الحاوية بدون `display: flex;`

![ملعب CSS لا توجد خصائص مرنة](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8f20f30d24cba9a7f56bf950a3f23d37d356ca51.png)

بعد إضافة `display: flex;` نحصل على أدناه ، يتم تطبيق خصائص المرن الافتراضية مما يجعلها تظهر على هذا النحو

![يعرض ملعب CSS النمط الافتراضي المرن](//discourse-user-assets.s3.amazonaws.com/original/2X/6/66404664f9177ae748be00f769faf67d5956034d.png)

### فليكس الاتجاه

`flex-direction:` يسمح لنا بالتحكم في كيفية عرض العناصر في الحاوية ، هل تريدها من اليسار إلى اليمين ، من اليمين إلى اليسار ، من الأعلى إلى الأسفل أو من الأسفل إلى الأعلى؟ يمكنك القيام بكل ذلك بسهولة مع تحديد الاتجاه المرن للحاوية.

يطبق Flexbox الصف باعتباره الافتراضي للاتجاه. هذا ما يبدو عليه الجميع:

`flex-direction: row;`

![الاتجاه المرن: صف ؛ مثال](//discourse-user-assets.s3.amazonaws.com/original/2X/9/951cc993820547efa28e70dca905f5531a4488d5.png)

`flex-direction: row-reverse;`

![الاتجاه المرن: مثال عكس الصف](//discourse-user-assets.s3.amazonaws.com/original/2X/c/cf738aaf83f29eccdb461e91b775b10e41b92389.png)

`flex-direction: column;`

![flex-direction: column example](//discourse-user-assets.s3.amazonaws.com/original/2X/7/7ef77565bc07ee86fd3033a531dd76b49709cf7e.png)

`flex-direction: column-reverse;`

![الاتجاه المرن: مثال عكس العمود](//discourse-user-assets.s3.amazonaws.com/original/2X/e/ec9a1ec064bf0027fa61016ca620df14d9bd47a9.png)

### فليكس التفاف

ستحاول Flexbox بشكل افتراضي أن تلائم جميع العناصر في صف واحد ولكن يمكنك تغيير ذلك باستخدام خاصية التعبئة المرنة ، وهذا يسمح لك بتحديد ما إذا كانت العناصر ستنسكب أم لا ، هناك 3 خصائص `flex-wrap:`

`flex-wrap: nowrap` هذا هو `flex-wrap: nowrap` الافتراضي وسوف يتناسب مع كل شيء في صف واحد من اليسار إلى اليمين.

`flex-wrap: wrap` هذا سيسمح للعناصر بالاستمرار لإنشاء صفوف متعددة ومن اليسار إلى اليمين.

`flex-wrap: wrap-reverse` يتيح `flex-wrap: wrap-reverse` أن تكون العناصر على عدة صفوف ولكن يتم عرضها من اليمين إلى اليسار هذه المرة.

### فليكس فلو

ويجمع التدفق المرن بين استخدام `flex-wrap` `flex-direction` في خاصية واحدة ، ويتم استخدامه أولاً من خلال تحديد الاتجاه ثم الالتفاف.

`flex-flow: column wrap;` هو مثال إذا كنت تستخدم هذا.

### تبرير المحتوى

`justify-content` خاصية aa لمحاذاة العناصر في الحاوية على طول المحور الرئيسي (يتغير هذا بناءً على كيفية عرض المحتوى). هناك العديد من الخيارات لهذا الأمر ، ويسمح لنا بملء أي مساحة فارغة على الصفوف ، ولكن تحديد كيفية "تبرير" ذلك.

فيما يلي خياراتنا عندما نبرر `flex-start | flex-end | center | space-between | space-around;` المحتوى الخاص بنا `flex-start | flex-end | center | space-between | space-around;` .

### محاذاة العناصر

تتيح لنا عناصر المحاذاة محاذاة العناصر على المحور المقابل. يسمح ذلك بوضع المحتوى بعدة طرق مختلفة باستخدام تبرير المحتوى ومحاذاة العناصر معًا.

`align-items: flex-start | flex-end | center | baseline | stretch;`

### محاذاة المحتوى

هذا هو لمحاذاة العناصر مع خطوط متعددة ، وهو للمحاذاة على المحور المقابل ولن يكون له أي تأثير على المحتوى الذي هو سطر واحد.

`align-content: flex-start | flex-end | center | space-between | space-around | stretch;`

## الألعاب والتطبيقات

[Flexbox Defense](http://www.flexboxdefense.com/) هي لعبة الويب التي تعلم flexbox بطريقة ممتعة.

[Flexbox Froggy](http://flexboxfroggy.com/) هي لعبة على شبكة الإنترنت تعلم المرن بطريقة ممتعة.

[Flexbox in 5](http://flexboxin5.com/) هو تطبيق ويب يسمح لك بمشاهدة كيفية عمل flexbox مع بعض عناصر التحكم البسيطة.

[Flexyboxes](http://the-echoplex.net/flexyboxes/) هو تطبيق يتيح لك أيضًا مشاهدة نماذج التعليمات البرمجية وتغيير المعلمات لمعرفة كيف يعمل flexbox بصريًا.

[Flexbox Patters](http://www.flexboxpatterns.com) هو موقع ويب يعرض كميات من أمثلة flexbox

## كابل بيانات

[شبكة مطوري موزيلا](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

[CSS الخدع](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## أشرطة فيديو

[أساسيات Flexbox](https://www.youtube.com/watch?v=G7EIAgfkhmg)

[أمثلة عملية Flexbox](https://www.youtube.com/watch?v=H1lREysgdgc)

[ما ال Flexbox؟](https://www.youtube.com/watch?v=Vj7NZ6FiQvo&list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid)