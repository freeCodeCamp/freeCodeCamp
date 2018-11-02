---
title: Script Src Attribute
localeTitle: السمة سيناريو Src
---
## السمة سيناريو Src

السمة 'src' في هي المسار إلى ملف أو مورد خارجي تريد ربطه بمستند HTML الخاص بك.

على سبيل المثال ، إذا كان لديك ملف جافا سكريبت مخصص لك باسم "script.js" وأردت إضافة وظائفه إلى صفحة HTML ، فيمكنك إضافته كما يلي:

 `
<!DOCTYPE html> 
 <html lang="en"> 
  <head> 
    <title>Script Src Attribute Example</title> 
  </head> 
  <body> 
 
  <script src="./script.js"></script> 
  </body> 
 </html> 
` 

يشير ذلك إلى ملف يسمى "script.js" موجود في نفس الدليل كملف .html. يمكنك أيضًا الارتباط بأدلة أخرى باستخدام ".." في مسار الملف.

 `
<script src="../public/js/script.js"></script> 
` 

يقفز هذا مستوى دليل واحد ثم إلى دليل "عام" ثم إلى دليل "js" ثم إلى ملف "script.js".

يمكنك أيضًا استخدام السمة "src" للارتباط بملفات .js الخارجية التي تستضيفها جهة خارجية. يتم استخدام هذا إذا كنت لا تريد تنزيل نسخة محلية من الملف. لاحظ فقط أنه في حالة تغيير الرابط أو الوصول إلى الشبكة ، فلن يعمل الملف الخارجي الذي تقوم بالربط به.

هذا المثال يرتبط بملف jQuery.

 `
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> 
` 

#### معلومات اكثر:

[المادة MDN على HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src) tag</a></p></x-turndown>