---
title: Truncate a String
localeTitle: اقتطاع سلسلة
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

نحتاج إلى تقليل طول السلسلة أو **اقتطاعها** إذا كانت أطول من الطول الأقصى المحدد المحدد وإضافة `...` إلى النهاية. إذا لم يكن طويلاً ، فإننا نحتفظ بها كما هي.

#### روابط ذات صلة

*   [String.prototype.slice ()](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-String-Prototype-Slice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

سلاسل غير قابلة للتغيير في JavaScript لذا سنحتاج إلى متغير جديد لتخزين السلسلة المقتطعة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

ستحتاج إلى استخدام طريقة الشريحة () وتحديد مكان البدء وأين تتوقف.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

لا ننسى أنه عندما نقتسم الكلمة ، يجب علينا أيضًا حساب الطول الذي أضيفه `...`

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function truncateString(str, num) { 
  // Clear out that junk in your trunk 
  if (str.length > num && num > 3) { 
    return str.slice(0, (num - 3)) + '...'; 
  } else if (str.length > num && num <= 3) { 
    return str.slice(0, num) + '...'; 
  } else { 
    return str; 
  } 
 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/55)

### شرح الشفرة:

*   نبدأ أولاً ببيان بسيط `if` تحديد إحدى النتائج الثلاثة ...
*   إذا طول سلسلة لدينا هو أكبر من `num` نريد لاقتطاع في، ونقطة اقتطاع لدينا ثلاثة أحرف على الأقل أو أكثر في سلسلة، نعود شريحة من سلسلة لدينا تبدأ من حرف 0، وتنتهي في `num - 3` . ثم نلحق `'...'` بنهاية السلسلة.
*   ومع ذلك، إذا طول سلسلة لدينا هو أكبر من `num` ولكن `num` ضمن أول ثلاثة أحرف، ونحن لم يكن لديك لحساب النقاط على النحو حرفا. لذلك، نعود لنفس السلسلة على النحو الوارد أعلاه، مع فارق واحد: نقطة النهاية من شريحة لدينا الآن فقط `num` .
*   وأخيرًا ، إذا لم تكن أي من الحالات المذكورة أعلاه صحيحة ، فهذا يعني أن طول السلسلة أقل من عدد `num` . لذلك ، يمكننا فقط إرجاع السلسلة.

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function truncateString(str, num) { 
  if (str.length <= num) { 
    return str; 
  } else { 
    return str.slice(0, num > 3 ? num - 3 : num) + '...'; 
  } 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/54)

### شرح الشفرة:

*   أولاً ، نحتاج إلى جملة if لاختبار ما إذا كان طول السلسلة الكاملة قد تم تمريره حيث أن الوسيطة الأولى تتلاءم بالفعل ضمن حد الحجم الذي تم تمريره كوسيطة ثانية. إذا كان الأمر كذلك ، فيمكننا فقط إرجاع السلسلة التي تم تمريرها.
    
    إذا (str.length <= عدد الأسطوانات) عودة str؛
    
*   إذا فشل بيان `if` بنا أعلاه ، فإننا ننتقل إلى `else` ، حيث سنقوم بإرجاع "شريحة" من السلسلة. تقوم طريقة الشريحة باستخلاص مقطع من سلسلة وإرجاع سلسلة جديدة. هنا نعبر 0 كنقطة انطلاق لشريحة لدينا. لتحديد نقطة النهاية ، نستخدم مشغل الثلاثي: عدد `num > 3 ? num - 3 : num` . في الثلاثي لدينا، إذا `num` أكبر من 3، ونحن يجب أن عاملا في النقاط الثلاث ليبلغ الطول الإجمالي لدينا، وبالتالي نحن في نهاية شريحة لدينا في `num-3` . إذا كانت قيمة num أقل من أو تساوي 3 ، فإن الشريحة تحصل على متغير نهاية `num` . وأخيرًا ، يتم إلحاق `'...'` بنهاية السلسلة الجديدة الخاصة بنا ويتم إرجاعها.
    
    } آخر { return str.slice (0، num> 3 num - 3: num) + '…'؛ }
    
*   **ملاحظة** لفهم الكود أعلاه ، تحتاج إلى فهم كيفية عمل مشغل Ternary. وكثيرا ما يستخدم المشغل الثلاثي كاختصار لبيان `if` ويتبع هذا الشكل: `condition ? expr1 : expr2` . إذا تم تقييم `condition` إلى true ، `expr1` تُرجع عامل التشغيل قيمة `expr1` . خلاف ذلك ، تقوم بإرجاع قيمة `expr2` .
    

#### روابط ذات صلة

*   [شرطي (ثلاثي) المشغل](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
*   [String.prototype.slice ()](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-String-Prototype-Slice)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.