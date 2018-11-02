---
title: Roman Numeral Converter
localeTitle: تحويل الأرقام الرومانية
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

ستقوم بإنشاء برنامج يقوم بتحويل عدد صحيح إلى عدد روماني.

#### روابط ذات صلة

*   [الأرقام الرومانية](http://www.mathsisfun.com/roman-numerals.html)
*   [Array.splice ()](http://forum.freecodecamp.com/t/javascript-array-prototype-splice/14307)
*   [Array.indexOf ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
*   [Array.join ()](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

إنشاء صفيفين ، واحد مع الأرقام الرومانية والآخر مع ما يعادل العشري للأشكال الجديدة سيكون مفيدا للغاية.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

إذا قمت بإضافة الأرقام إلى الصفائف التي تمر قبل تقديم الحرف الجديد ، مثل القيم لـ 4 و 9 و 40 ، فسيوفر لك الكثير من التعليمات البرمجية.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

لا يمكنك الحصول على أكثر من ثلاثة أرقام رومانية متتالية معًا.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `var convertToRoman = function(num) { 
 
  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]; 
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]; 
 
  var romanized = ''; 
 
  for (var index = 0; index < decimalValue.length; index++) { 
    while (decimalValue[index] <= num) { 
      romanized += romanNumeral[index]; 
      num -= decimalValue[index]; 
    } 
  } 
 
  return romanized; 
 } 
 
 // test here 
 convertToRoman(36); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLmf/0)

### شرح الشفرة:

*   نبدأ من خلال إنشاء صفيفين مع التحويل الافتراضي مع مؤشرات مطابقة. هذه تسمى `decimalValue` و `romanNumeral` . نحن أيضا إنشاء متغير سلسلة فارغة ، `romanized` ، والتي سوف تستضيف الرقم الروماني النهائي.
*   باستخدام حلقة for ، نقوم بالمرور من خلال `decimalValue` صفيف `decimalValue` . نستمر في التكرار حتى يتم احتواء القيمة الموجودة في `index` الحالي على `num` .
*   بعد ذلك، أضفنا رومانية وانخفاض `num` بما يعادل عشري.
*   وأخيرًا ، نعيد قيمة `romanized` .

#### روابط ذات صلة

*   [للحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   في حين الحلقات

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function convertToRoman(num) { 
 var romans = ["I", "V", "X", "L", "C", "D", "M"], 
     ints = [], 
     romanNumber = [], 
     numeral = ""; 
  while (num) { 
    ints.push(num % 10); 
    num = Math.floor(num/10); 
  } 
  for (i=0; i<ints.length; i++){ 
      units(ints[i]); 
  } 
  function units(){ 
    numeral = romans[i*2]; 
    switch(ints[i]) { 
      case 1: 
        romanNumber.push(numeral); 
        break; 
      case 2: 
        romanNumber.push(numeral.concat(numeral)); 
        break; 
      case 3: 
        romanNumber.push(numeral.concat(numeral).concat(numeral)); 
        break; 
      case 4: 
        romanNumber.push(numeral.concat(romans[(i*2)+1])); 
        break; 
      case 5: 
        romanNumber.push(romans[(i*2)+1]); 
        break; 
      case 6: 
        romanNumber.push(romans[(i*2)+1].concat(numeral)); 
        break; 
      case 7: 
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral)); 
        break; 
      case 8: 
        romanNumber.push(romans[(i*2)+1].concat(numeral).concat(numeral).concat(numeral)); 
        break; 
      case 9: 
        romanNumber.push(romans[i*2].concat(romans[(i*2)+2])); 
      } 
    } 
  return romanNumber.reverse().join("").toString(); 
 } 
 
 // test here 
 convertToRoman(97); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/C1YV)

### شرح الشفرة:

*   إنشاء مجموعة من الأرقام الرومانية ( `romans` ).
*   استخدم حلقة for لإنشاء صفيف من الأرقام ( `ints` ) في الرقم.
*   قم بالالتفاف عبر صفيف الأرقام (القاعدة 10) وكما تفعل ، قم بزيادة الرقم الروماني (الأساس 5) بمقدار 2 ( `numeral = romans[i*2]` ).
*   داخل الحلقة ، استخدم Switch Case لضغط الأرقام الرومانية الصحيحة (إلى الخلف) على هذا الصفيف.
*   عكس مجموعة الأرقام الرومانية وتحويلها إلى سلسلة.

#### روابط ذات صلة

*   [للحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   في حين الحلقات
*   [الرياضيات](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function convertToRoman(num) { 
  var romans = 
  // 10^i 10^i*5 
    ["I", "V"], // 10^0 
    ["X", "L"], // 10^1 
    ["C", "D"], // 10^2 
    ["M"]       // 10^3 
  ], 
      digits = num.toString() 
        .split('') 
        .reverse() 
        .map(function(item, index) { 
          return parseInt(item); 
        }), 
      numeral = ""; 
 
  // Loop through each digit, starting with the ones place 
  for (var i=0; i<digits.length; i++) { 
    // Make a Roman numeral that ignores 5-multiples and shortening rules 
    numeral = romans[i][0].repeat(digits[i]) + numeral; 
    // Check for a Roman numeral 5-multiple version 
    if (romans[i][1]) { 
      numeral = numeral 
        // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral 
        .replace(romans[i][0].repeat(5), romans[i][1]) 
        // Shorten occurrences of 9 * 10^i 
        .replace(romans[i][1] + romans[i][0].repeat(4), romans[i][0] + romans[i+1][0]) 
        // Shorten occurrences of 4 * 10^i 
        .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]); 
    } 
  } 
 
  return numeral; 
 } 
 
 // test here 
 convertToRoman(36); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/C1YV)

### شرح الشفرة:

*   استخدم مصفوفة ( `romans` ) لإنشاء مصفوفة تحتوي على الأرقام الرومانية لقوة معينة من 10 ، وإذا أمكن ، فإن الرقم الروماني لهذه القوة من 10 مرات 5.
*   قم بتحويل رقم الإدخال ( `num` ) إلى مصفوفة عكسية من الأرقام ( `digits` ) حتى يتسنى لنا إجراء التكرار خلال هذه الأرقام بدءًا من الموضع والصعود.
*   قم بالالتفاف من خلال كل رقم ، بدءاً بالمكان ، وإنشاء سلسلة أرقام رومانية بإضافة كل عدد روماني ذو طاقة أعلى إلى بداية سلسلة `numeral` عددًا من المرات يساوي `digit` . يتجاهل هذا السطر الأولي الأرقام الرومانية التي هي قوة 10 مرات 5 ويتجاهل أيضًا قواعد تقصير.
*   إذا كانت القدرة ذات الصلة 10 تحتوي على عدد روماني 5-متعددة ، بأرقام ، `numeral` 5-في-صف مع الأرقام الرومانية 5-متعددة ذات الصلة (أي V ، L ، أو D) وتقصير حدوث 9 \* 10 ^ i (على سبيل المثال ، VIIII إلى VIX) و 4 \* 10 ^ i (على سبيل المثال ، XXXX إلى XL). النظام مهم هنا!
*   وأخيرا ، عودة `numeral` .

#### روابط ذات صلة

*   [للحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   [.انشق، مزق()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [.عكس()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
*   [.خريطة()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [.إلى سلسلة()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
*   [parseInt ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
*   [.يحل محل()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
*   [.كرر()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.