---
title: Breakpoints
localeTitle: نقاط
---
## نظرة عامة

نقطة توقف CSS هي نقطة محددة يتغير فيها تخطيط موقع الويب ، بناءً على [استعلام الوسائط](https://guide.freecodecamp.org/css/css3-media-queries) تصبح نشطة.

بشكل عام ، يمكنك تحديد نقطة توقف عندما تريد إعادة تهيئة تخطيط موقع الويب إلى حجم إطار عرض المستعرض ؛ في الغالب ، إلى عرض إطار العرض.

على سبيل المثال ، إذا كان محتوى موقعك الإلكتروني يبدو رائعًا على إطار عرض ضيق (كما هو الحال في متصفح الهاتف الذكي) ، إلا أنه يبدأ في الظهور على شاشات أكبر حجمًا (على سبيل المثال ، قد يكون حجم الخطوط صغيرًا جدًا ويصعب قراءته) ، قد ترغب في تقديم نقطة توقف جديدة للشاشات الأكبر التي تجعل الخطوط أكبر:

يمكن اعتبار CSS Breakpoints أساس تصميم الويب المتجاوب لأنه يحدد كيفية تصرف المحتوى أو يتم ترتيبه في عرض / مقياس جهاز مختلف يسمح لك بعرض أفضل تخطيط ممكن للمستخدم.

![مثال](https://getflywheel.com/wp-content/uploads/2018/02/css-breakpoints-layouts-01.jpg)

## ضبط نقاط الاستراحة

يتم تعيين breakpoints بشكل واسع على أساس أي مما يلي.

*   نقاط التوقف حسب عرض الجهاز.
*   نقاط التوقف على أساس المحتوى.

### نقاط التوقف حسب عرض الجهاز

من الواضح تمامًا أن جميع أجهزتنا لا تمتلك نفس عرض / أحجام الشاشة. هو الآن قرار تصميم لتضمين مجموعة من أجهزة معينة ورمز قواعد css وفقًا لذلك. لدينا بالفعل أجهزة كافية للقلق ، وعندما يخرج جهاز جديد بعرض مختلف ، فإن الرجوع إلى CSS الخاص بك وإضافة نقطة توقف جديدة من جديد يستهلك الكثير من الوقت.

وهنا مثال على ذلك

 `/* ----------- iPhone 6, 6S, 7 and 8 ----------- */ 
 
 /* Portrait */ 
 
 @media only screen 
 
 and (min-device-width: 375px) 
 
 and (max-device-width: 667px) 
 
 and (-webkit-min-device-pixel-ratio: 2) 
 
 and (orientation: portrait) { 
 
 } 
 
 /* Landscape */ 
 
 @media only screen 
 
 and (min-device-width: 375px) 
 
 and (max-device-width: 667px) 
 
 and (-webkit-min-device-pixel-ratio: 2) 
 
 and (orientation: landscape) { 
 
 } 
 
 /* ----------- Google Pixel ----------- */ 
 
 /* Portrait */ 
 
 @media screen 
 
 and (device-width: 360px) 
 
 and (device-height: 640px) 
 
 and (-webkit-device-pixel-ratio: 3) 
 
 and (orientation: portrait) { 
 
 } 
 
 /* Landscape */ 
 
 @media screen 
 
 and (device-width: 360px) 
 
 and (device-height: 640px) 
 
 and (-webkit-device-pixel-ratio: 3) 
 
 and (orientation: landscape) { 
 
 } 
` 

> مع هذا النهج ، سوف ينتهي بك الأمر وجود قائمة ضخمة من الاستفسارات الإعلامية.

### نقاط التوقف على أساس المحتوى

هذا هو الخيار المفضل أثناء إجراء أو كتابة قواعد نقطة الإيقاف. لأنه من الأسهل ضبط المحتوى وفقًا لتخطيط معين فقط عندما يتطلب تغييرًا.

 `@media only screen (min-width: 768px){ 
 ... 
 } 
` 

> تعني نقطة الإيقاف هذه أنه سيتم تطبيق CSS عندما يكون عرض الجهاز 768 بكسل وما فوق.

#### يمكنك أيضًا تعيين نطاق بنقاط توقف ، بحيث لا يتم تطبيق CSS إلا ضمن هذه الحدود.

 `@media only screen and (min-width: 768px) and (max-width: 959px){ 
 
 ... 
 
 } 
` 

**ملحوظة** حاول دائمًا إنشاء نقاط توقف استنادًا إلى المحتوى الخاص بك وليس إلى الأجهزة. تقسيمها إلى عرض منطقي بدلاً من عرض عشوائي والاحتفاظ بها إلى عدد يمكن إدارتها ، لذلك يبقى التعديل بسيطة وواضحة.

تكون **نقاط التوقف CSS** مفيدة عندما تريد تحديث الأنماط استنادًا إلى حجم الشاشة. على سبيل المثال ، من جهاز قياس عرض 1200 بكسل وما فوق ، استخدم `font-size: 20px;` أو ما عدا ذلك ، استخدم `font-size: 16px;` .

ما بدأناه هو من عرض أكبر من 1200 بكسل ، وهو عرض شاشة الكمبيوتر المحمول الشائعة. قد تلاحظ أيضًا أننا قد ذكرنا "أكبر من" ، مما يعني أننا نستخدم طريقة مثل " **if-then** ".

دعونا نحولها إلى رمز CSS:

 `.text1 { 
    font-size: 16px; 
 } 
 @media (min-width: 1200px) { 
    .text1 { 
        font-size: 20px; 
    } 
 } 
` 

**للراحة لدينا،** وكتابة `.text1` التصميم الأساسي أولا ... ثم بعد ذلك سنقوم تحديد `@media` القواعد.

**تلميح** : قد تشاهد على إطار CSS مشترك يسمى "Bootstrap" ، حيث أنها تبنت **"min-width" وأعلى** في Bootstrap v4.0 ، بالمقارنة مع Bootstrap v3.0 القديمة باستخدام **"max-width" و down** . هذا مجرد **تفضيل** ، ولا حرج في قول " _هذا_ الحجم وأقل من" مقابل " _هذا_ الحجم وأكبر من".

من الجيد تمامًا استخدام `@media (max-width) {}` . هنا مثال:

 `.text1 { 
    font-size: 20px; 
 } 
 @media (max-width: 1199px) { 
    font-size: 16px; 
 } 
` 

 `// Normal, basic styles 
 // that look great on small screens 
 // but not on bigger screens 
 body { 
  font-size: 16px; 
 } 
 
 // Define a new breakpoint, with a media query. 
 // In this case, for when the viewport's width 
 // is at least 512px wide. 
 @media (min-width: 512px) { 
    body { 
        font-size: 20px; 
    } 
 } 
` 

نقاط التوقف المستندة إلى محتوى بدلاً من الجهاز تكون أقل تعقيدًا. إليك مقتطف بسيط يتم `code 700px` عندما يكون عرض الجهاز أعلى من حجم شاشة الهاتف الذكي بحجم `code 700px` تقريبًا

 `@media only screen and (min-width: 700px) { 
  something { 
    something: something; 
  } 
 } 
` 

يمكنك أيضًا تعيين الحد الأدنى والحد الأقصى للعرض ، والذي يتيح لك إجراء التجارب باستخدام نطاقات مختلفة. هذا واحد تقريبا يطلق بين الهاتف smar وأكبر حجم سطح المكتب وأحجام الشاشة

 `@media only screen and (min-width: 700px) and (max-width: 1500px) { 
  something { 
    something: something; 
  } 
 } 
` 

#### معلومات اكثر:

*   [نقاط توقف متجاوبة](https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints)
*   [مقالة freecodecamp.org حول استخدام نقاط توقف CSS](https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862)
*   [استعلامات الوسائط CSS3](https://guide.freecodecamp.org/css/css3-media-queries)
*   [تحديد نقاط التوقف](https://responsivedesign.is/strategy/page-layout/defining-breakpoints/)
*   [CSS-Tricks:media queries](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
*   [w3schools: نقاط توقف الجهاز النموذجية](https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp)