---
title: Grid Layout
localeTitle: تخطيط الشبكة
---
## تخطيط الشبكة

CSS Network Layout ، والمعروف ببساطة باسم الشبكة ، هو مخطط تخطيط هو الأحدث والأكثر قوة في CSS. وهو [مدعوم من جميع المتصفحات الرئيسية](https://caniuse.com/#feat=css-grid) ويوفر طريقة لوضع العناصر على الصفحة ونقلها.

ويمكنه تعيين العناصر تلقائيًا إلى _مناطق_ وحجمها وتغيير حجمها ، ثم الاهتمام بإنشاء أعمدة وصفوف بناءً على نمط تحدده ، والقيام بكل العمليات الحسابية باستخدام وحدة `fr` المقدمة حديثًا.

### لماذا الشبكة؟

*   يمكنك بسهولة الحصول على شبكة ذات 12 عمودًا بخط واحد من CSS. `grid-template-columns: repeat(12, 1fr)`
*   الشبكة تتيح لك تحريك الأشياء في أي اتجاه. على عكس Flex ، حيث يمكنك نقل العناصر أفقياً ( `flex-direction: row` ) أو رأسيًا ( `flex-direction: column` ) - ليس كلاهما في نفس الوقت ، تتيح لك الشبكة نقل أي _عنصر شبكة_ إلى أي _منطقة شبكة_ محددة مسبقًا على الصفحة. لا يجب أن تكون العناصر التي تنقلها متاخمة.
*   باستخدام CSS Grid ، يمكنك **تغيير ترتيب عناصر HTML باستخدام CSS فقط** . حرك شيئًا ما من الأعلى إلى اليمين ، انقل العناصر التي كانت في تذييل إلى الشريط الجانبي ، إلخ. بدلاً من نقل `<div>` من `<footer>` إلى `<aside>` في HTML ، يمكنك فقط تغيير موضعه مع `grid-area` في ورقة أنماط CSS.

### الشبكة مقابل فلكس

*   فليكس هو أحادي البعد - سواء أفقي أو رأسي ، في حين أن الشبكة ثنائية الأبعاد ، مما يعني أنه يمكنك تحريك العناصر في كل من المستويين الأفقي والعمودي
*   في الشبكة ، نطبق أنماط التخطيط على الحاوية الرئيسية وليس على العناصر. من ناحية أخرى ، يستهدف فليكس العنصر المرن لتعيين خصائص مثل `flex-basis` `flex-grow` `flex-shrink`
*   الشبكة و Flex ليست حصرية. يمكنك استخدام كليهما في نفس المشروع.

### التحقق من `@supports` المتصفح مع `@supports`

من الناحية المثالية ، عند إنشاء موقع ، يمكنك تصميمه مع الشبكة واستخدام Flex كحل بديل. يمكنك معرفة ما إذا كان المستعرض يدعم الشبكة باستخدام قاعدة CSS `@support` (يُعرف أيضًا باسم استعلام الميزات). إليك مثال على ذلك:

 `.container { 
  display: grid; /* display grid by default */ 
 } 
 
 @supports not (display: grid) { /* if grid is not supported by the browser */ 
  .container { 
    display: flex; /* display flex instead of grid */ 
  } 
 } 
` 

### ابدء

لجعل أي عنصر شبكة ، تحتاج إلى تعيين خاصية `display` الخاصة بها إلى `grid` ، مثل:

 `.conatiner { 
  display: grid; 
 } 
` 

وهذا كل شيء. لقد قمت للتو `.container` . يصبح كل عنصر داخل `.container` عنصر شبكة بشكل تلقائي.

### تحديد القوالب

الصفوف والأعمدة

 `grid-template-columns: 1fr 1fr 1fr 1fr; 
 grid-template-rows: auto 300px; 
` 

المناطق

 `grid-template-areas: 
  "aaaa" 
  "bcde" 
  "bcde" 
  "ffff"; 
` 

أو

 `grid-template-areas: 
  "header header header header" 
  "nav main main sidebar"; 
` 

### مناطق الشبكة

فيما يلي بعض نماذج التعليمات البرمجية حول كيفية تحديد مناطق الشبكة وتعيينها

 `.site { 
  display: grid; 
  grid-template-areas: /* applied to grid container */ 
    "head head" /* you're assigning cells to areas by giving the cells an area name */ 
    "nav  main" /* how many values kind of depends on how many cells you have in the grid */ 
    "nav  foot"; 
 } 
 
 .site > header { 
  grid-area: head; 
 } 
 
 .site > nav { 
  grid-area: nav; 
 } 
 
 .site > main { 
    grid-area: main; 
 } 
 
 .site > footer { 
    grid-area: foot; 
 } 
` 

### وحدة `fr`

شبكة يدخل وحدة `fr` الجديدة ، والتي تقف على _جزء_ . الشيء الجيد في استخدام وحدة `fr` هو أنه يعتني بالحسابات لك. باستخدام `fr` يتجنب الهامش ومسائل الحشو. مع `%` و `em` وما إلى ذلك ، تصبح معادلة حسابية عند حساب `grid-gap` . إذا كنت تستخدم وحدة `fr` ، فستقوم بحساب كل من أحجام العمود والميزاب تلقائيًا وضبط حجم الأعمدة وفقًا لذلك ، بالإضافة إلى عدم وجود فجوات نزيف في النهاية أيضًا.

### أمثلة

#### تغيير ترتيب العناصر استنادًا إلى حجم الشاشة

لنفترض أنك تريد نقل التذييل إلى أسفل على الشاشات الصغيرة وإلى اليمين على شاشات أكبر ، وهناك مجموعة من عناصر HTML الأخرى بين الاثنين.

الحل البسيط هو تغيير `grid-template-areas` أساس حجم الشاشة. يمكنك أيضًا **تغيير عدد الأعمدة والصفوف بناءً على حجم الشاشة** أيضًا. هذا هو بديل أنظف وأبسط بكثير لنظام Bootstrap الشبكة ( `col-xs-8 col-sm-6 col-md-4 col-lg-3` ).

 `.site { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-areas: 
    "title title" 
    "main header" 
    "main sidebar" 
 } 
 
 @media screen and (min-width: 34em) { /* If the screen is big enough, use a different template for grid areas */ 
  .site { 
    grid-template-columns: 2fr 1fr 1fr; 
    grid-template-areas: 
      "title title title" 
      "main header header" 
      "main sidebar footer" 
  } 
 } 
` 

انظر [شبكة](https://codepen.io/aamnah/pen/RLVVoE/) القلم [المغلق من خلال المثال - 2 (مناطق الشبكة + شبكة الفجوة) من](https://codepen.io/aamnah/pen/RLVVoE/) قبل Aamnah أكرم ( [aamnah](https://codepen.io/aamnah) ) على [CodePen](https://codepen.io) .

#### معلومات اكثر:

*   [CSS Grid Palyground by Mozilla](https://mozilladevelopers.github.io/playground/) نقطة انطلاق رائعة إذا كنت جديدًا على CSS Grids. لديها بصريات لمساعدتك على فهم المصطلحات بسهولة
*   [يوتيوب: Morten Rand-Hendriksen: CSS Grid Changes كل شيء (حول تخطيطات الويب)](https://www.youtube.com/watch?v=txZq7Laz7_4) سوف يقنعك هذا العرض التقديمي في أقل من ساعة من الأسباب التي تجعل CSS Grids رائعة ولماذا / كيف يجب عليك استخدامها
*   [فيديو: Learn Rid Layout Video Series بقلم راشيل أندرو](https://gridbyexample.com/video/) راشيل أندرو تعتبر خبيرة في هذا الموضوع. قد تبدو عناوين الفيديو غريبة وساحقة ، ولكن المحتوى قصير ولجميع النقاط
*   [الكتاب: كن مستعدًا لـ CSS Grid Layout بواسطة Rachel Andrew](https://abookapart.com/products/get-ready-for-css-grid-layout)