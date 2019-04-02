---
title: Body Bgcolor Attribute
localeTitle: الهيئة Bgcolor السمة
---
## الهيئة Bgcolor السمة

`<body bgcolor>` لون خلفية لمستند HTML.

**بناء الجملة** :

`<body bgcolor="color">` يمكن أن تكون قيمة اللون إما اسم لون (مثل ، `purple` ) أو قيمة سداسية عشرية (مثل ، `#af0000` ).

لإضافة لون خلفية إلى صفحة ويب ، يمكنك استخدام السمة `<body bgcolor="######">` . يحدد لونًا لعرض مستند HTML.

**فمثلا:**

 `
<html> 
  <head> 
    <title>Body bgcolor Attribute example</title> 
  </head> 
  <body bgcolor="#afafaf"> 
    <h1>This webpage has colored background.</h1> 
  </body> 
 </html> 
` 

يمكنك تغيير اللون عن طريق استبدال ###### بقيمة سداسية عشرية. للألوان البسيطة ، يمكنك أيضًا استخدام الكلمة ، مثل "أحمر" أو "أسود".

تدعم جميع المتصفحات الرئيسية السمة `<body bgcolor>` .

_ملحوظة:_

*   لا يدعم HTML 5 السمة `<body bgcolor>` . استخدم CSS لهذا الغرض. ماذا؟ باستخدام التعليمة البرمجية التالية: `<body style="background-color: color">` بالطبع ، يمكنك أيضًا القيام بذلك في مستند منفصل بدلاً من طريقة مضمنة.
    
*   لا تستخدم قيمة RGB في السمة `<body bgcolor>` لأن `rgb()` لـ CSS فقط ، أي أنها لن تعمل في HTML.
    

**شاهده في العمل:** https://repl.it/Mwht/2

**موارد آخرى:**

*   أسماء ألوان HTML: https://www.w3schools.com/colors/colors\_names.asp
*   خاصية لون خلفية CSS: https://www.w3schools.com/cssref/pr\_background-color.asp