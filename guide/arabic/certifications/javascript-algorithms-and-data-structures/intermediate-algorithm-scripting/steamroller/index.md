---
title: Steamroller
localeTitle: أجاز
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

تبدو هذه المشكلة بسيطة ولكن عليك التأكد من تسطيح أي صفيف ، بغض النظر عن المستوى الذي يضيف صعوبة في المشكلة.

#### روابط ذات صلة

*   [Array.isArray ()](http://forum.freecodecamp.com/t/javascript-array-isarray/14284)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

تحتاج إلى التحقق مما إذا كان العنصر عبارة عن مصفوفة أم لا.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

إذا كنت تتعامل مع مصفوفة ، فإنك تحتاج إلى تسطيحها عن طريق الحصول على القيمة داخل الصفيف. وهذا يعني أنه إذا كان لديك [\[4\]\] ، فبدلاً من العودة \[4\] ، يجب عليك العودة. 4. إذا حصلت على \[\[\[4\]\]\] ، فستحتاج إلى نفس الشيء ، فأنت تريد الرقم 4. يمكنك الوصول إليه باستخدام arr \[index1\] \[index2\] للذهاب إلى مستوى أعمق.](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:")

> _حاول أن تحل المشكلة الآن_

## ! \[: speech\_balloon: تلميح: 3

سوف تحتاج بالتأكيد إلى العودية أو طريقة أخرى لتجاوز صفيفتين من المستوى لجعل الشفرة مرنة وغير مشفرة للأجوبة المطلوبة. إستمتع!

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function steamrollArray(arr) { 
  var flattenedArray = []; 
 
  // Create function that adds an element if it is not an array. 
  // If it is an array, then loops through it and uses recursion on that array. 
  var flatten = function(arg) { 
    if (!Array.isArray(arg)) { 
      flattenedArray.push(arg); 
    } else { 
      for (var a in arg) { 
        flatten(arg[a]); 
      } 
    } 
  }; 
 
  // Call the function for each element in the array 
  arr.forEach(flatten); 
  return flattenedArray; 
 } 
 
 // test here 
 steamrollArray([1, [2], [3, [[4]]]]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnh/0)

### شرح الشفرة:

*   إنشاء متغير جديد للحفاظ على صفائف بالارض.
*   قم بإنشاء دالة تضيف عناصر غير صفيف إلى المتغير الجديد ، وبالنسبة إلى تلك المصفوفة ، فإنها تتكرر من خلالها للحصول على العنصر.
*   يفعل ذلك باستخدام العودية ، إذا كان العنصر عبارة عن صفيف ثم استدعاء الدالة مرة أخرى مع طبقة من الصفيف أعمق للتحقق مما إذا كان صفيف أم لا. إذا لم يكن ثم دفع هذا العنصر غير الصفيف للمتغير الذي يتم إرجاعه. خلاف ذلك ، استمر في التعمق.
*   استدعاء الدالة ، في المرة الأولى التي سيتم تمريرها دائماً صفيف ، لذلك تقع دائماً في فرع isArray
*   أعد الصفيف مسطح.

#### روابط ذات صلة

*   [Array.push ()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [Array.forEach ()](http://forum.freecodecamp.com/t/javascript-array-prototype-foreach/14290)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function steamrollArray(arr) { 
  let flat = [].concat(...arr); 
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat; 
 } 
 
 flattenArray([1, [2], [3, [[4]]]]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLni/0)

### شرح الشفرة:

*   استخدم عامل النشر لسَلسَلة كل عنصر من عناصر `arr` مع صفيف فارغ
*   استخدم أسلوب `Array.some()` لمعرفة ما إذا كان الصفيف الجديد يحتوي على صفيف لا يزال
*   إذا كان كذلك ، استخدم استدعاء العودية ، قم `steamrollArray` مرة أخرى ، مروراً في المصفوفة الجديدة لتكرار العملية على المصفوفات المتداخلة بعمق
*   إذا لم يتم ذلك ، أعد الصفيف مسطح

#### روابط ذات صلة

*   [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
*   [Array.concat](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [انتشار المشغل](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
*   [مشغل ثالث ( `condition ? a : b` )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function steamrollArray(arr) { 
  return arr.toString() 
    .replace(',,', ',')       // "1,2,,3" => "1,2,3" 
    .split(',')               // ['1','2','3'] 
    .map(function(v) { 
      if (v == '[object Object]') { // bring back empty objects 
        return {}; 
      } else if (isNaN(v)) {        // if not a number (string) 
        return v; 
      } else { 
        return parseInt(v);         // if a number in a string, convert it 
      } 
    }); 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CpDy/4)

### شرح الشفرة:

*   أولاً ، نحول المصفوفة إلى سلسلة ، والتي ستمنحنا سلسلة من الأرقام مفصولة بفاصلة ، فاصلة مزدوجة إذا كان هناك مصفوفة فارغة ونص كائن حرفي إذا كان هناك كائن ، يمكننا إصلاحه لاحقًا في بيان if الخاص بنا .
*   نستبدل الفاصلة المزدوجة بواحد ، ثم نقسمها إلى صفيف.
*   الخريطة من خلال الصفيف وإصلاح قيم الكائن وتحويل أرقام السلسلة إلى أرقام منتظمة.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.