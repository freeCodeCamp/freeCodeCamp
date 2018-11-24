---
title: Set Up D3
localeTitle: إعداد D3
---
## إعداد HTML

في الوقت الحالي ، ستستخدم فقط ملفًا نصيًا ومتصفح الويب. سوف تبدأ مع صفحة ثابتة من HTML. ثم ستضيف d3.js. قم بإنشاء مجلد باسم _مشاريع_ d3js _. قم بإنشاء ملف HTML في المجلد المسمى project_ 1.html.

ابدأ بصفحة HTML الأساسية على الويب:

 `
<!DOCTYPE html> 
 <html> 
  <head> 
  </head> 
  <body> 
    <p>Hello!</p> 
  </body> 
 </html> 
` 

الذي يظهر في المتصفح:

![](https://d1gg5jm9r4jrt6.cloudfront.net/project_1_browser_snapshot_600x198.png)

### D3.js الإعداد

للحصول على ملف جافا سكريبت D3.js الرئيسي ، انتقل إلى موقع D3.js الإلكتروني. بعد الفقرة الأولى في الصفحة ، سترى قسمًا يحتوي على روابط لأحدث إصدار. قم بتنزيل أحدث إصدار d3.v2.min.js. احفظ هذا الملف في مجلد d3js\_projects.

يتم حفظ الملف d3.v2.min.js في نفس المجلد كملف HTML بحيث يمكن الرجوع إليه بسهولة. نشير إلى ملف جافا سكريبت من رأس ملف HTML. يبدو الآن ملف HTML المحدث الخاص بنا كما يلي:

`html <!DOCTYPE html> <html> <head> <script type="text/javascript" src="d3.v2.min.js"></script> </head> <body> <p>Hello!</p> </body> </html>`

اختبار ملف المصدر اختبار

لاختبار إعداد D3.js ، نفتح مجموعة أدوات عنصر الفحص. في علامة التبويب العنصر في Webkit Inspector ، نفتح جميع العناصر حتى نتمكن من رؤية بنية HTML بالكامل. ثم نحوم فوق d3.vs.min.js src.

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.installation.check.png)

عندما نضغط على الرابط ، يأخذنا إلى علامة تبويب المصادر. سيظهر هذا رمز D3.js minified.

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.source.check.png)

\### اختبار جافا سكريبت الإعداد اختبار

سيتم إجراء الاختبار الأخير في وحدة تحكم جافا سكريبت. يخبرنا هذا الاختبار إذا تم تحميل D3.js بشكل صحيح لاستخدامنا في وحدة تحكم JavaScript. في هذه اللقطة ، حدد موقع علامة التبويب "Console" في Webkit Inspector:

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.installation.check.png)

عندما تنقر على علامة التبويب ، ستظهر لك شاشة فارغة يمكنك كتابة وتكوين JavaScript بها.

![](https://d1gg5jm9r4jrt6.cloudfront.net/JavaScript_Console_600x170.png)

في وحدة تحكم جافا سكريبت ، اكتب ما يلي:

`javascript alert("hello");`

سيؤدي ذلك إلى تنبيه منبثق لتنبيه "Hello!". هذا ما يبدو عليه:

![](https://d1gg5jm9r4jrt6.cloudfront.net/JavaScript_Consoler_Alert_600x335.png)

الآن لاختبار ما إذا تم تحميل D3.js بشكل صحيح. اكتب حرفًا صغيرًا "d3" في وحدة التحكم متبوعًا بنقطة:

`javascript d3`

إذا تم تثبيت D3.js بشكل صحيح ، يجب أن يظهر ما يلي:

![](https://d1gg5jm9r4jrt6.cloudfront.net/d3.js.javascript.console_300x420.png)

إذا مرت جميع الاختبارات وكنت قادراً على تحميل D3.js بشكل صحيح ، فأنت جاهز للبدء.

\#### معلومات اكثر