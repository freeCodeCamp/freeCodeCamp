---
title: Catch Off By One Errors When Using Indexing
localeTitle: القبض عن طريق واحدة من الأخطاء عند استخدام الفهرسة
---
## القبض عن طريق واحدة من الأخطاء عند استخدام الفهرسة

### مبادئ

بسبب الطريقة التي تعمل بها فهارس جافا سكريبت `firstFive` لديها **خمسة عناصر** لكنها مفهرسة من **0 إلى 4** !

 `console.log(len); // 5 
 console.log(firstFive[0]); // 1 
 /**/ 
 console.log(firstFive[4]); // 5 
 console.log(firstFive[5]); // undefined 
` 

يجب أن يعطيك ما يكفي لإدراك حدود `firstFive` . توجيه انتباهك إلى الحلقة. ماذا تعمل، أو ماذا تفعل؟ يمكنك محاولة تصحيح الأخطاء لمعرفة ذلك!

### التصحيح

يتم منحك هذا الرمز:

 `  for (let i = 1; i <= len; i++) { 
    console.log(firstFive[i]); 
  } 
` 

لتصحيح هذه القطعة من التعليمات البرمجية ، استخدم `console.clear()` . ما هو أفضل مكان لذلك؟ الجواب الصحيح قبل `for` بيان!

 `  console.clear(); 
  for (let i = 1; i <= len; i++) { 
    console.log(firstFive[i]); 
  } 
` 

إخراج وحدة التحكم:

 `  Console was cleared. 
  2 
  3 
  4 
  5 
  undefined 
` 

### تحليل

دراسة الانتاج. تحت هذه الشروط ، تقوم الحلقة أولاً بطباعة العنصر الموضع في 1… وهو 2! يحاول أيضًا طباعة العنصر المفهرس في 5 وهو غير `undefined` .

يمكن اعتبار هذا هو الهدف من هذا التحدي. إبقاء `console.log()` و `console.clear()` الحالية. سوف تساعدك على فهم كيفية عمل التعليمات البرمجية الخاصة بك.

### حل

الطريقة الأكثر مباشرة لإصلاح هذا هي تغيير الشروط (). اجعل `i` تبدأ عند 0. كذلك **لا** يجب تنفيذ الحلقة لـ i = = 5. وبعبارة أخرى ، يجب أن تكون العلاقة بين `i` و `len` `false` عند i == 5. يمكن تحقيق ذلك باستخدام `i < len` (Is 5 <len؟ false ، ولن يتم تنفيذ الحلقة!).

 `  for (let i = 0; i < len; i++) { 
` 

**الترميز سعيدة!** :الحاسوب:

### مصادر

*   [لتحدي البيانات في FreeCodeCamp](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops)
*   [للإدلاء ببيانات في مستندات ويب MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)