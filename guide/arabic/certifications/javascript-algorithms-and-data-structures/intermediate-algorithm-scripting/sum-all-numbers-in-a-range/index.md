---
title: Sum All Numbers in a Range
localeTitle: مجموع كل الأرقام في المدى
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

تحتاج إلى إنشاء برنامج من شأنه أن يأخذ مجموعة من رقمين ليسا بالضرورة في ترتيب ، ثم يضيف ليس فقط تلك الأرقام ولكن أي أرقام بينهما. على سبيل المثال ، ستكون \[3،1\] هي نفس `1+2+3` وليس `3+1` فقط

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

استخدم `Math.max()` للبحث عن الحد الأقصى لقيمة رقمين.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

استخدم `Math.min()` للبحث عن القيمة الدنيا من رقمين.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

تذكر أنه يجب إضافة جميع الأرقام بينهما حتى يتطلب ذلك طريقة للحصول على هذه الأرقام.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function sumAll(arr) { 
    var max = Math.max(arr[0], arr[1]); 
    var min = Math.min(arr[0], arr[1]); 
    var temp = 0; 
    for (var i=min; i <= max; i++){ 
        temp += i; 
    } 
  return(temp); 
 } 
 
 sumAll([1, 4]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLm6/0)

### شرح الشفرة:

*   قم أولاً بإنشاء متغير لتخزين العدد الأقصى بين اثنين.
*   نفس الشيء كما كان من قبل لأصغر رقم.
*   نقوم بإنشاء متغير مؤقت لإضافة الأرقام.

نظرًا لأن الأرقام قد لا تكون دائمًا في الترتيب ، فإن استخدام `max()` و `min()` سيساعد في التنظيم.

#### روابط ذات صلة

*   [Math.max ()](http://forum.freecodecamp.com/t/javascript-math-max/14682)
*   [Math.min ()](http://forum.freecodecamp.com/t/javascript-math-min/14684)
*   [للحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function sumAll(arr) { 
  // Buckle up everything to one! 
 
  // Using ES6 arrow function (one-liner) 
  var sortedArr = arr.sort((a,b) => ab); 
  var firstNum = arr[0]; 
  var lastNum = arr[1]; 
  // Using Arithmetic Progression summing formula 
 
  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2; 
  return sum; 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLm7/0)

### شرح الشفرة:

*   أولاً ، نقوم بإنشاء متغير يسمى `sortedArr` الذي يقوم `sortedArr` من الأقل إلى أعلى قيمة.
*   `firstNum` يساوي الرقم الأول و `lastNum` يساوي الرقم الثاني.
*   بعد ذلك ، باستخدام صيغة التلخيص الحسابي ، سنترك `sum` متساوياً `(lastNum - firstNum + 1) * (firstNum + lastNum) / 2` .
*   وأخيرًا ، نرجع `sum` .

السطر `var sortedArr = arr.sort((a,b) => ab);` هو على الارجح ما سيكون عليك المزيد من الارتباك. سيكون هذا هو نفس إنشاء دالة تقوم بإرجاع `ab` `sort()` وهي الطريقة القياسية لفرز الأرقام من الأصغر إلى الأكبر. وبدلاً من استخدام وظيفة السهم أو الدهون ، يمكننا القيام بكل ذلك في سطر واحد مما يسمح لنا بالكتابة أقل.

#### روابط ذات صلة

*   [Array.sort ()](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)
*   [صيغة التلخيص الحسابي](https://en.wikipedia.org/wiki/Arithmetic_progression#Sum)
*   [وظيفة السهم ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function sumAll(arr) { 
    var sum = 0; 
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){ 
        sum += i; 
    } 
  return sum; 
 } 
 
 sumAll([1, 4]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLm8/0)

### شرح الشفرة:

*   إنشاء مبلغ متغير لتخزين مجموع العناصر.
*   بدء التكرار للحلقة من عنصر min في صفيف معين والتوقف عند وصوله إلى عنصر max.
*   يسمح استخدام عامل التوزيع (… arr) بتمرير الصفيف الفعلي إلى الوظيفة بدلاً من العناصر الفردية.

#### روابط ذات صلة

*   [انتشار المشغل](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
*   [باستخدام Spread Operator في Math.max ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.