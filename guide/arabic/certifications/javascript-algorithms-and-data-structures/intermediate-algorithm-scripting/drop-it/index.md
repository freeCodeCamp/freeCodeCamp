---
title: Drop it
localeTitle: أسقطها
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/2/236dcca68bf55be37bf7cbb9646f6e0156b4a3c3.png)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

بشكل أساسي بينما الوسيطة الثانية غير صحيحة ، يجب عليك إزالة العنصر الأول من يسار الصفيف الذي تم تمريره كوسيطة أولى.

#### روابط ذات صلة

*   [كائن الحجج](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.shift ()](http://forum.freecodecamp.com/t/javascript-array-prototype-shift/14301)
*   [Array.slice ()](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

يمكنك استخدام `Array.prototype.shift()` أو التصفية التي يجب أن تكون أكثر دراية لحل هذه المشكلة في بضعة أسطر من التعليمات البرمجية.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

يُرجع مفتاح Shift العنصر الذي تمت إزالته والذي لا نحتاجه حقًا ، فكل ما نحتاجه هو الصفيف المعدَّل المتبقي.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

إذا كنت لا تزال غير قادر على معرفة كيفية حلها مع التحول ، ثم حاول حلها مع مرشح ، والتحقق من كيفية عمل مرشح ، إذا كنت على دراية به ، ثم يمكنك جعل رمز مع التحول.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function dropElements(arr, func) { 
  // drop them elements. 
  var times = arr.length; 
  for (var i = 0; i < times; i++) { 
    if (func(arr[0])) { 
      break; 
    } else { 
      arr.shift(); 
    } 
  } 
  return arr; 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLna/0)

### شرح الشفرة:

*   قم بإنشاء حلقة للتحقق من كل عنصر.
*   ثم تحقق من الوظيفة المقدمة إذا كانت صحيحة ثم توقف ، وإلا قم بإزالة هذا العنصر.
*   العودة الصفيف.

#### روابط ذات صلة

*   [للحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   [المزيد عن الحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function dropElements(arr, func) { 
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length); 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnc/0)

### شرح الشفرة:

*   استخدم الدالة `findIndex()` للعثور على فهرس العنصر الذي يمرر الشرط
*   شريحة المصفوفة من فهرس وجدت حتى النهاية
*   هناك حالة حافة واحدة! إذا لم يتم استيفاء الشرط ضد أي من العناصر 'findIndex' سيعود `-1` الذي يفسد الإدخال إلى `slice()` . في هذه الحالة ، استخدم عامل تشغيل شرطي بسيط لإرجاع `false` بدلاً من `-1` . والمشغل الثلاثي (؟ ![:slight_smile:](https://forum.freecodecamp.com/images/emoji/emoji_one/slight_smile.png?v=3 ": slight_smile:") إرجاع فهرس العثور على العناصر المطلوبة عندما يكون الشرط `true` ، وطول المصفوفة بطريقة أخرى بحيث تكون قيمة الإرجاع عبارة عن مصفوفة فارغة كما هو موضح.

#### روابط ذات صلة

*   [findIndex ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
*   [مشغل شرطي](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function dropElements(arr, func) { 
  while(arr.length > 0 && !func(arr[0])) { 
    arr.shift(); 
  } 
  return arr; 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnf/0)

### شرح الشفرة

*   استخدم حلقة `Array.prototype.shift()` مع `Array.prototype.shift()` لمتابعة التدقيق وإسقاط العنصر الأول من الصفيف حتى ترجع الدالة true. كما أنه يتأكد من أن المصفوفة ليست فارغة أولاً لتجنب حلقات لا نهائية.
*   أعد الصفيف الذي تمت تصفيته.

#### روابط ذات صلة

*   [في حين حلقات](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.