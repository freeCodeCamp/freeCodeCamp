---
title: A Tag
localeTitle: يوم
---
## علامة

تقوم العلامة `<a>` أو عنصر _الارتساء_ بإنشاء ارتباط تشعبي إلى صفحة أو ملف آخر. للارتباط بصفحة أو ملف مختلف ، يجب أن تحتوي العلامة `<a>` أيضًا على سمة `href` ، والتي تشير إلى وجهة الرابط.

يصبح النص بين علامتي الفتح `<a>` هو الرابط.

بشكل افتراضي ، يتم عرض صفحة مرتبطة في نافذة المتصفح الحالية ما لم يتم تحديد هدف آخر.

#### مثال:

 `
  <a href= "https://guide.freecodecamp.org/">freeCodeCamp</a> 
` 

يمكن أيضًا تحويل الصورة إلى ارتباط بإحاطة العلامة `<img>` في علامة `<a>` .

#### مثال:

 `
  <a href= "https://guide.freecodecamp.org/"><img src="logo.svg"></a> 
` 

من الممكن أيضًا تحديد هدف العلامة `<a>` . يتم ذلك باستخدام السمة `target` . تحتوي السمة `target` على القيم التالية متاحة `_blank|_self|_parent|_top|framename` .

`_blank` : يفتح الرابط في علامة تبويب جديدة أو نافذة جديدة بناءً على تفضيلات المستخدم. `_self` : يفتح الرابط في نفس الإطار (السلوك الافتراضي). `_parent` : يفتح الرابط في الإطار الرئيسي ، على سبيل المثال عندما ينقر المستخدم على رابط في iframe. `_top` : يفتح الرابط في النص الكامل للنافذة. `framename` : يفتح الرابط في الإطار المحدد.

#### مثال:

 `
  <a href= "https://guide.freecodecamp.org/" target="_blank">freeCodeCamp</a> 
` 

[freeCodeCamp](https://guide.freecodecamp.org/) يتم إنشاء هذا الارتباط بالطريقة نفسها التي يقترحها مثال التعليمة البرمجية. انقر فوقه لمعرفة كيف يعمل.

#### معلومات اكثر:

*   [HTML <a> عنصر: MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
*   [علامة: w3schools](https://www.w3schools.com/tags/tag_a.asp)
*   [علامة: htmlreference.io](http://htmlreference.io/element/a/)