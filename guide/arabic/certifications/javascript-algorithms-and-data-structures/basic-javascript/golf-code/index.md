---
title: Golf Code
localeTitle: كود الجولف
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

في لعبة الجولف كل حفرة لها قيمة **اسمية** تعني متوسط ​​عدد **ضربات** لاعب الجولف من المتوقع أن تغرق الكرة في حفرة لاستكمال اللعب. اعتمادا على مدى أعلى أو أقل من **السعر الأصلي** **السكتات الدماغية** الخاصة بك، وهناك لقب آخر.

سيتم تمرير الدالة **قدم المساواة** **والسكتات الدماغية** الحجج. يجب عليك إرجاع السلسلة الصحيحة وفقًا لهذا الجدول الذي يسرد الحدود بترتيب الأولوية؛ أعلى (أعلى) إلى أسفل (أدنى):

السكتات الدماغية إرجاع  
: --------- | : -------------  
1 | "حفرة واحدة!"  
<= par - 2 | "نسر"  
par - 1 | "بيردي"  
par | "الاسمية"  
par + 1 | "شبح"  
par + 2 | "بوجيه مزدوج" > = par + 3 | "اذهب للمنزل!"

سوف يكون **الاسمية** **والسكتات الدماغية** دومًا رقمية وإيجابية.

*   تغيير الرمز أدناه `// Only change code below this line` وما فوق `// Only change code above this line` .
*   تأكد من أنك تقوم بتحرير داخل وظيفة `golfScore` .
*   سيكون عليك جعل الدالة تقوم بإرجاع نفس السلسلة بالضبط كما هو موضح في الجدول ، بناءً على قيمة المعلمات **par** **والحدود** التي يتم تمريرها إلى وظيفتك.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

`+number -number` يمكن استخدامه لزيادة أو تقليل معلمة في حالتك.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

يمكنك استخدام `if / else if` سلاسل لإرجاع قيم مختلفة في سيناريوهات مختلفة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

تحكم في تدفق الدالة بناءً على ترتيب الجداول للأولوية - أعلى (أعلى) إلى أسفل (أدنى) لإرجاع قيم السلسلة المطابقة.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function golfScore(par, strokes) { 
  // Only change code below this line 
  if (strokes == 1){ 
    return "Hole-in-one!"; 
  } else if (strokes <= par -2){ 
    return "Eagle"; 
  } else if (strokes == par -1) { 
    return "Birdie"; 
  } else if (strokes == par) { 
    return "Par"; 
  } else if (strokes == par +1) { 
    return "Bogey"; 
  } else if (strokes == par +2) { 
    return "Double Bogey"; 
  } else { 
    return "Go Home!"; 
  } 
  // Only change code above this line 
 } 
 // Change these values to test 
 golfScore(5, 4); 
` 

### شرح الشفرة:

*   مقارنة **قدم المساواة** المعلمات **والسكتات الدماغية** لإرجاع القيم السلسلة المناسبة.
*   `if / else if` تم استخدام سلسلة للتحكم في التدفق.
*   السلسلة "Go Home!" يتم إرجاعها لكل حالة تكون فيها **الحدود** أكبر من أو تساوي **par + 3** .

## حل رمز بديل:

 `var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]; 
 function golfScore(par, strokes) { 
  // Only change code below this line 
  if (strokes == 1){ 
    return names[0]; 
  } 
  else if (strokes <= par-2){ 
    return names[1]; 
  } 
  else if (strokes == par -1){ 
    return names[2]; 
  } 
  else if (strokes == par){ 
    return names[3]; 
  } 
  else if (strokes == par +1){ 
    return names[4]; 
  } 
  else if (strokes == par +2){ 
    return names[5]; 
  } 
  else {return names[6];} 
  // Only change code above this line 
 } 
 
 // Change these values to test 
 golfScore(5, 4); 
` 

· تشغيل في [repl.it](https://repl.it/@AdrianSkar/Basic-JS-Golf-code)

\## شرح الكود نظرًا لأن لدينا بالفعل صفيفًا محددًا في `names` المتغيرات ، فيمكننا الاستفادة منه واستخدامه في عبارات الإرجاع باستخدام الفهارس (على سبيل المثال: `names[0] is the first one` ). بهذه الطريقة ، إذا احتجت في أي وقت إلى تغيير نتيجة معينة فلن تحتاج إلى البحث عنها داخل الوظيفة ، فستكون في البداية ، في الصفيف الخاص بك.

### مصادر

*   [جولف](https://en.wikipedia.org/wiki/Golf)
*   [التحدي: تسلسل إذا كانت البيانات الأخرى](http://www.freecodecamp.com/challenges/chaining-if-else-statements)
*   [التحدي: مقارنة مع أكبر من المساواة إلى المشغل](http://www.freecodecamp.com/challenges/comparison-with-the-greater-than-equal-to-operator)
*   [التحدي: مقارنة مع أقل من المساواة في المشغل](http://www.freecodecamp.com/challenges/comparison-with-the-less-than-equal-to-operator)
*   ["Array" - _مرجع JavaScript الخاص بـ MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)