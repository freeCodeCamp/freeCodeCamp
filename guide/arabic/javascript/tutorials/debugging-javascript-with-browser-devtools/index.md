---
title: Debugging JavaScript with Browser Devtools
localeTitle: تصحيح JavaScript باستخدام متصفح Devtools
---
كمطور ، ستحتاج غالبًا إلى تصحيح التعليمات البرمجية. ربما تكون قد استخدمت بالفعل `console.log` في بعض التحديات ، وهي أبسط طريقة لتصحيح الأخطاء.

في هذه المقالة سنخبرك ببعض من أروع الحيل ، لتصحيح الأخطاء باستخدام أدوات تصحيح الأخطاء الأصلية للمتصفحات.

## نظرة سريعة على محرر Code FreeCodeCamp:

قبل القفز إلى تصحيح الأخطاء ، يتسنى لنا تسريب بعض الحقائق السرية عن _محرك فحص الشفرة الرائع_ في FCC.

نحن نستخدم [CodeMirror](http://codemirror.net/mode/javascript/index.html) مخصصة ، كمحرر التعليمات البرمجية. يتم استخدام [دالة `eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) لتقييم شفرة جافا سكريبت ممثلة كسلسلة من المحرر. عندما يتم استدعاء `eval()` ، ستنفذ المستعرضات التعليمات البرمجية الخاصة بك. سنتعلم المزيد عن سبب أهمية هذا السر في الأقسام اللاحقة من هذه المقالة.

## الآن ننتقل إلى الحيل:

## جوجل كروم DevTools

يُعد Google Chrome أحد المتصفحات الأكثر شيوعًا باستخدام محرك جافا سكريبت مدمج يُسمى [V8](https://developers.google.com/v8/) ، ويوفر مجموعة أدوات رائعة للمطورين تسمى [Chrome DevTools](https://developer.chrome.com/devtools) . نوصيك بشدة بزيارة [دليل تصحيح أخطاء جافا سكريبت الكامل](https://developer.chrome.com/devtools/docs/javascript-debugging) .

### 1: أساسيات DevTools

#### إطلاق Chrome DevTools

ضرب `F12`

. بدلا من ذلك يمكنك الضغط

`Ctrl` + `Shift` + `I`

على ويندوز ولينكس أو

`Cmd` + `Shift` + `I`

على جهاز Mac أو إذا كنت تحب الماوس فقط ، فانتقل إلى `Menu > More Tools > Developer Tools` .

#### التعرف على `Sources` وعلامات تبويب `console` .

هاتين العلامتين هي ربما ستكون أفضل أصدقائك أثناء تصحيح الأخطاء. يمكن استخدام علامة تبويب `Sources` لتصور جميع النصوص البرمجية الموجودة على صفحة الويب التي تزورها. تحتوي علامة التبويب هذه على أقسام لإطار التعليمات البرمجية ، وشجرة الملفات ، ومكالمات المكالمة ، ونوافذ المراقبة ، إلخ.

علامة تبويب `console` هي المكان الذي ينتقل فيه كل خرج السجل. بالإضافة إلى ذلك ، يمكنك استخدام مطالبة علامة تبويب وحدة التحكم لتنفيذ تعليمات جافا سكريبت. نوعه من المترادفة لموجه الأوامر على ويندوز ، أو محطة على لينكس.

_نصيحة: يمكنك تبديل وحدة التحكم في أي وقت في DevTools باستخدام مفتاح `Esc` ._

### 2: اختصارات وميزات مشتركة

في حين يمكنك زيارة [القائمة الكاملة للاختصارات](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts) ، وفيما يلي عدد قليل من الاستخدامات الأكثر استخدامًا:

ميزة ويندوز ، لينكس ماك  
البحث عن كلمة رئيسية ، يتم دعم regex. `Ctrl` + `F``Cmd` + `F`  
بحث وفتح ملف `Ctrl` + `P``Cmd` + `P`  
الانتقال إلى الخط `Ctrl` + `G` + `:line_no``Cmd` + `G` + `:line_no`  
أضف نقطة توقف `Ctrl` + `B` ، أو انقر فوق السطر no. `Cmd` + `B` ، أو انقر فوق السطر no.  
Pause / استئناف تنفيذ البرنامج النصي `F8` `F8`  
الخطوة فوق الوظيفة التالية استدعاء `F10` `F10`  
ادخل إلى الوظيفة التالية اتصل بـ `F11` `F11`

### 3: استخدام خريطة المصدر لقواعدنا

واحدة من أروع الميزات التي ستحبها هي [تصحيح السيناريو الديناميكي](https://developer.chrome.com/devtools/docs/javascript-debugging#breakpoints-dynamic-javascript) ، على الطاير ، عبر تطبيق [Source Maps](https://developer.chrome.com/devtools/docs/javascript-debugging#source-maps) .

يمكن تصور كل نص برمجي في علامة التبويب المصدر في DevTools. تحتوي علامة التبويب المصدر على جميع ملفات مصدر JavaScript. ولكن يتم تنفيذ التعليمات البرمجية من محرر التعليمة البرمجية عبر `eval()` في حاوية ببساطة تسمى الجهاز الظاهري (VM) داخل عملية المستعرض.

كما قد تكون قد خمنت الآن ، فإن الكود هو في الواقع برنامج نصي لا يحتوي على اسم ملف. لذلك لا نرى ذلك في علامة التبويب المصدر.

> ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": البريق:") **_هنا يأتي الاختراق!_** ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": البريق:")

يجب أن نستخدم `Source Maps` لتعيين اسم لجافا سكريبت من محررنا. انها بسيطة جدا:

دعنا نقول نحن على التحدي [Factorialize](https://www.freecodecamp.com/challenges/factorialize-a-number) ، [وكودنا](https://www.freecodecamp.com/challenges/factorialize-a-number) يشبه هذا:

 `function factorialize(num) { 
  if(num <= 1){ 
  ... 
 } 
 factorialize(5); 
` 

كل ما نحتاج إلى فعله هو إضافة `//# sourceURL=factorialize.js` إلى الجزء العلوي من الشفرة ، أي السطر الأول:

 `//# sourceURL=factorialize.js 
 
 function factorialize(num) { 
  if(num <= 1){ 
  ... 
` 

> ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": البريق:") **_و Eureka هذا كل شيء!_** ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": البريق:")

الآن افتح DevTools وابحث عن اسم الملف. أضف نقاط كسر ، تصحيح بعيدا والتمتع به!