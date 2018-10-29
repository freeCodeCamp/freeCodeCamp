---
title: HTML DOM getElementById Method
localeTitle: HTML DOM getElementById الطريقة
---
إرجاع الأسلوب `getElementById()` العنصر الذي يحتوي على سمة معرف بالقيمة المحددة. يستغرقه وسيطة واحدة ، وهي سلسلة حساسة لحالة معرف العنصر الذي تريده.

تعد هذه الطريقة إحدى الطرق الأكثر شيوعًا في HTML DOM ، ويتم استخدامها تقريبًا في كل مرة تريد فيها معالجة عنصر في مستندك أو الحصول على معلومات منه. إليك مثال بسيط على البنية:

**محتوى HTML:**

 `
<div id="demo"></div> 
` 

**محتوى جافا سكريبت:**

 `document.getElementById("demo"); // Returns the element with id "demo" 
` 

إذا كان لديك أكثر من عنصر واحد له نفس قيمة `id` (ممارسة سيئة!) ، فسوف يعرض `getElementById` العنصر الأول الذي تم العثور عليه:

 `
<div id="demo">First</div> 
 <div id="demo">Second</div> 
` 

 `document.getElementById("demo"); // Returns the element with id "demo" containing 'First' 
` 

#### معلومات اكثر:

[document.getElementById ()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

#### حلول بديلة:

هناك بديل شائع الاستخدام لـ `document.getElementById` يستخدم محدد jQuery الذي تقرأه عن المزيد [هنا](https://github.com/freeCodeCamp/guides/tree/master/src/pages/jquery) .