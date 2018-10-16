---
title: Where to Get Fonts
localeTitle: من أين احصل على الخطوط
---
## من أين احصل على الخطوط

توفر خدمات الخط عبر الإنترنت مثل Google Fonts أو Font Squirrel طريقة سهلة لاستخدام خطوط مختلفة على موقعك دون الحاجة إلى القلق بشأن ما إذا كان الشخص الذي يعرض موقعك سيتاح الخط على نظامه أم لا.

### الخطوط التي تم تنزيلها

تتيح لك المواقع مثل Font Squirrel تنزيل ملفات الخطوط التي اخترتها. بمجرد الانتهاء من ذلك ، يجب عليك تحميلها على الخادم الذي يستضيف موقع الويب الخاص بك. لاستخدامها ، تحتاج بعد ذلك إلى إعلانها في ورقة أنماط CSS الخاصة بك ، مما يعني إخبار CSS الخاص بك أن تطلب من متصفح المستخدم عرضه. يتم عادةً إعداد خط باستخدام `@font-face` أعلى ورقة أنماط CSS.

 `@font-face { 
  font-family: "My Super Awesome Open Sans Font"; /* name that you will use later to apply the font */ 
  src: url("/fontfolder/open-sans.woff"); /* path to the file */ 
 } 
 body { 
  font-family: "My Super Awesome Open Sans Font"; 
 } 
` 

لاحظ أنه يمكنك أيضًا تحديد تنسيق الخط وفقًا لتوافق المستعرض كما يلي.

 `@font-face { 
 font-family: "My Super Awesome Open Sans Font"; 
 src: url("/fontfolder/open-sans.woff"); format("woff"), 
 } 
` 

### جوجل الخطوط

باستخدام Google Fonts ، لن تحتاج إلى تحميل ملفات الخطوط على موقعك ، عليك فقط وضع رابط معين على `head` موقعك.

لاستخدام Google Fonts ، استعرض [الموقع](https://fonts.google.com/) للعثور على الخط الذي يناسب مشروعك. بمجرد اختيارك ، انقر فوق علامة زائد (+) الموجودة بجوار الخط. سيظهر شريط في أسفل الشاشة. انقر عليه. سيتم بعد ذلك منحك عدة أسطر من الشفرة. انسخ والصق سطر HTML في رأس ملف HTML الخاص بك فوق الملف الموجود  جزء. ثم خذ CSS واستخدمه عند الضرورة في ورقة الأنماط.

 `
<html> 
  <head> 
  <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet"> 
  </head> 
  <body> 
  Some text. 
  </body> 
 </html> 
` 

 `body{ 
  font-family: "Inconsolata", monospace; 
 } 
` 

انت انتهيت! لديك بنجاح خطوط جديدة لموقعك.

##### الموارد الإضافية:

*   [جوجل الخطوط](http://fonts.google.com)
*   [FontSpace](http://www.fontspace.com)
*   [الخط السنجاب](http://fontsquirrel.com)
*   [DaFont](http://www.dafont.com)
*   [1001 الخطوط الحرة](http://www.1001freefonts.com)

#### معلومات اكثر:

*   [نظرة عامة على خطوط الويب من شبكة مطوري موزيلا](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)