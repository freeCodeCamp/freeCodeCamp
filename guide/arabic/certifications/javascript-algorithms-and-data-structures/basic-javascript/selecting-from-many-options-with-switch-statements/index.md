---
title: Selecting from Many Options with Switch Statements
localeTitle: اختيار من العديد من الخيارات مع تبديل البيانات
---
## اختيار من العديد من الخيارات مع تبديل البيانات

_إذا كان لديك العديد من الخيارات للاختيار من بينها ، فاستخدم عبارة `switch` . يختبر بيان `switch` قيمة ويمكن أن يحتوي على العديد من عبارات `case` التي تحدد القيم المحتملة المختلفة. يتم تنفيذ البيانات من قيمة `case` الأولى المتطابقة حتى تتم مواجهة `break` ._

_في ما يلي مثال pseudocode:_

 `  switch(num) { 
    case value1: 
      statement1; 
      break; 
    case value2: 
      statement2; 
      break; 
    ... 
    case valueN: 
      statementN; 
      break; 
  } 
` 

### أكثر قليلا من الشرح

يقوم بيان التبديل أولاً بتقييم التعبير الخاص به. ثم يبحث عن جملة `case` الأولى التي يتم تقييم التعبير لها بنفس القيمة الناتجة عن تعبير الإدخال (باستخدام [المقارنة الصارمة](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) ، ( `===` ) وينقل التحكم إلى ذلك البند ، تنفيذ العبارات المرتبطة. (إذا كانت هناك حالات متعددة تتطابق القيمة المقدمة ، يتم تحديد الحالة الأولى المطابقة ، حتى إذا كانت الحالات لا تساوي بعضها البعض.)

إذا لم يتم العثور على فقرة `case` مطابقة ، يبحث البرنامج عن جملة `default` اختيارية ، وإذا تم العثور عليه ، ينقل التحكّم إلى هذا البند ، وينفذ البيانات المرتبطة. إذا لم يتم العثور على جملة `default` ، يتابع البرنامج التنفيذ في البيان التالي لنهاية `switch` . حسب الاصطلاح ، فإن الجملة `default` هي الجملة الأخيرة ، ولكنها لا تحتاج إلى أن تكون كذلك.

يضمن بيان `break` الاختياري المرتبط بكل ملصق حالة أن البرنامج يخرج من المفتاح بمجرد تنفيذ البيان المطابق ومواصلة التنفيذ في البيان التالي للتبديل. إذا تم حذف `break` ، يستمر البرنامج في التنفيذ في العبارة التالية في عبارة `switch` . [1](#cite1)

### شرح المشكلة:

_اكتب عبارة التبديل التي تختبر `val` `answer` عن الشروط التالية:_

*   `1` - "ألفا" ،
*   `2` - "beta" ،
*   `3` - "جاما" ،
*   `4` - "دلتا".

## تلميح 1

تذكر أن قيم `case` يتم اختبارها بالمساواة الصارمة ( `===` ).

> حاول حل المشكلة الآن!

## تلميح 2

لا تشاهد _"الشروط التالية"_ كقائمة مرتبة كما تبدو في العرض التوضيحي freeCodeCamp الأصلي ، ولكن كقيم وعبارات ، كما هو موضح هنا

> حاول حل المشكلة الآن!

## تنبيه المفسد!

### هل أنت متأكد تماما ما تريد نظرة؟ ...

## حل الرمز الأساسي

 `function caseInSwitch(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch(val) { 
    case 1: 
      return "alpha"; 
      break; 
    case 2: 
      return "beta"; 
      break; 
    case 3: 
      return "gamma"; 
      break; 
    case 4: 
      return "delta"; 
      break; 
  } 
 
  // Only change code above this line 
  return answer; 
 } 
 
 // Change this value to test 
 caseInSwitch(1); 
` 

### شرح الشفرة

من الشائع تجاهل أن قيم `case` يتم اختبارها بالمساواة الصارمة مع أي حاجة للتعبير الآخر ، مثل: `case === value`

## حل رمز بديل:

 `function caseInSwitch(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch (val){ 
    case 1: 
      answer="alpha"; 
      break; 
    case 2: 
      answer="beta"; 
      break; 
    case 3: 
      answer="gamma"; 
      break; 
    case 4: 
      answer="delta"; 
      break; 
  } 
  // Only change code above this line 
  return answer; 
 } 
 // Change this value to test 
 caseInSwitch(1); 
` 

تشغيل الكود في [repl.it.](https://repl.it/@AdrianSkar/Basic-JS-Switch-statements)

### تفسير الشفرة

نظرًا لأن لديك بالفعل متغيرًا محددًا في بداية الدالة المسمى `answer` ، ويتم تعريفه على أنه آخر كشف للإرجاع ، فيمكنك تعيين قيم جديدة له لكل حالة وسيقوم بإرجاع الإجابة المتوقعة استنادًا إلى القيمة التي تمررها إلى الوظيفة.

### مصادر

1 . [وصف "switch" - _مرجع JavaScript الخاص بـ MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#Description) .