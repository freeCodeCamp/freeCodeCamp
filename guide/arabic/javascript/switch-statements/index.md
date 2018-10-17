---
title: Switch Statements
localeTitle: تبديل العبارات
---
## تبديل العبارات

يشبه بيان `switch` في البرمجة عبارة `if-else` ، ولكنه يستفيد أحيانًا من سهولة القراءة عند وجود الكثير من الشروط. كما أنه يسمح بإضافة كتلة `default` سيتم تنفيذها في حالة عدم تحقق أي من الشروط الأخرى.

### بناء الجملة:

 `switch(expression) { 
  case 1: 
    console.log('1'); 
    break; 
   case 2: 
     console.log('2'); 
     break; 
   default: 
     console.log('No true condition, default'); 
 } 
` 

يظهر المقتطف أعلاه بناء الجملة لبيان `switch` أساسي. في هذا المثال ، هناك 3 سيناريوهات مختلفة لـ:

*   `expression = 1` : الشرط الأول صحيح ، ويتم طباعة `1` إلى وحدة التحكم.
*   `expression = 2` : الشرط الثاني صحيح ، ويتم طباعة `2` إلى وحدة التحكم.
*   `expression = 'anything else'` : Case 1 and Case 2 كلاهما false ، لذا يتم تنفيذ الشرط الافتراضي.

الشرط `default` هو الشرط الذي سيتم تنفيذه إذا لم يكن أي من الحالات الأخرى صحيحًا.

ملاحظة: هناك نقطة مهمة يجب ملاحظتها هنا وهي أنه في المقتطف أعلاه ، قد يبدو أن `case 1:` `case 2:` تمثل نوعًا من الترتيب ، ولكن `1` و `2` لا يمثلان سوى الإجابات التي قد يتم تقييمها `(expression)` . لذلك ، بدلاً من 1 و 2 ، يمكن أن يكون أي شيء يمكن لـ `(expression)` تقييمه ويمكن اختباره.

فمثلا:

 `var someValue; 
 var expression = someValue; 
 switch(expression){ 
  case someValue: 
    console.log('10'); // 10 would be printed to the console 
    break; 
  case 23: 
    console.log('12'); 
    break; 
  default: 
    console.log('No matches'); 
 } 
` 

ملاحظة: يمكن أن يكون `expression` في المقتطف أعلاه عبارة عن سلسلة أو رقم.

### استراحة

مطلوب الكلمة الأساسية `break` في كل حالة للتأكد من أن يتم تنفيذ التعليمات البرمجية فقط في هذه الحالة. بدون الفاصل ، يمكن تنفيذ عدة حالات. عندما تصل JavaScript إلى كلمة رئيسية `break` ، فإنها `break` عن كتلة المحول. إذا تم ترك `break` خارج المثال أعلاه ، فهذا ما سيحدث:

 `var expression = 1; 
 switch(expression) { 
  case 1: 
    console.log('1');  // 1 would be printed to console 
  case 2: // As there is no break after case 1, this case is also executed. 
    console.log('2'); // 2 would be printed to the console. 
    break; // break -> Switch statement is exited 
  default: 
    console.log('No true condition, default'); 
 } 
` 

### تنفيذ حالات متعددة:

كما تسمح `switch` لنفس كتلة التعليمات البرمجية يتم تنفيذها بواسطة حالات متعددة. يمكن القيام بذلك عن طريق إضافة `case :` واحدة أو أكثر `case :` الكلمات الأساسية قبل كتلة التعليمات البرمجية.

على سبيل المثال:

 `switch (day) { 
  case 4: 
  case 5: 
    console.log('it is nearly the weekend'); 
    break; 
  case 0: 
  case 6: 
    console.log('it is the weekend'); 
    break; 
  default: 
    console.log('Looking forward to the Weekend'); 
 } 
` 

في المقتطف أعلاه:

*   إذا كان `day` هو `4` أو `5` (الخميس أو الجمعة) ، فسيتم طباعة `it is nearly the weekend` إلى وحدة التحكم حيث يتم تنفيذ الحالة الأولى.
*   إذا كان `day` هو `0` أو `6` ، (السبت أو الأحد) ، سيتم طباعة `it is the weekend` إلى وحدة التحكم كما يتم تنفيذ الحالة الثانية.
*   إذا كان `day` هو أي قيمة أخرى ، فستتم طباعة `Looking forward to the Weekend` إلى وحدة التحكم ، حيث يتم تنفيذ الحالة الافتراضية.

### معلومات اكثر:

[وثائق MDN للتبديل](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)