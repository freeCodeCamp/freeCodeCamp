---
title: Caesars Cipher
localeTitle: قيصر تشفير
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

*   تحتاج إلى كتابة وظيفة ، والتي سوف تأخذ سلسلة مشفرة مع _تشفير قيصر_ كمعلمة ويفك شفرة.
*   الطريقة المستخدمة هنا هي ROT13 حيث يتم تحويل قيمة الرسالة إلى 13 مكانًا. على سبيل المثال "أ" ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") "N" ، "T" ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") 'G'.
*   يجب أن تقوم بتحويله إلى 13 موضعًا ، مثل "N" ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") 'ا'.

#### روابط ذات صلة

*   [String.prototype.charCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

استخدم _String.charCodeAt ()_ لتحويل الأحرف الإنجليزية إلى ASCII.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

استخدم _String.fromCharCode ()_ لتحويل ASCII إلى الأحرف الإنجليزية.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

ترك أي شيء لا يأتي بين AZ كما هو.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `    function rot13(str) { 
      // Split str into a character array 
      return str.split('') 
      // Iterate over each character in the array 
        .map.call(str, function(char) { 
          // Convert char to a character code 
          x = char.charCodeAt(0); 
          // Checks if character lies between AZ 
          if (x < 65 || x > 90) { 
            return String.fromCharCode(x);  // Return un-converted character 
          } 
          //N = ASCII 78, if the character code is less than 78, shift forward 13 places 
          else if (x < 78) { 
            return String.fromCharCode(x + 13); 
          } 
          // Otherwise shift the character 13 places backward 
          return String.fromCharCode(x - 13); 
        }).join('');  // Rejoin the array into a string 
    } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/38)

### شرح الشفرة:

*   يتم `nstr` متغير سلسلة وتهيئته لتخزين السلسلة التي تم فك ترميزها.
*   يتم استخدام الحلقة for حلقة عبر كل حرف من سلسلة الإدخال.
*   إذا لم يتم أحرف كبيرة الطابع الحروف الهجائية الإنجليزية (أي لا تكمن أسكي في الفترة ما بين 65 و 91)، ونحن سوف ترك الأمر كما هو، و [يستمر](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) مع التكرار التالي.
*   إذا كانت الأبجدية الإنجليزية كبيرة ، فسنطرح 13 من كود ascii.
*   إذا كان رمز ascii أقل من 78 ، فسيخرج من النطاق عند طرحه 13 ، لذا سنضيف 26 (عدد الحروف بالأحرف الانجليزية) حتى بعد A سوف تعود إلى Z. على سبيل المثال M (77) ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") 77-13 = 64 (ليست الأبجدية الإنجليزية) +26 = 90 ![:left_right_arrow:](https://forum.freecodecamp.com/images/emoji/emoji_one/left_right_arrow.png?v=3 ": left_right_arrow:") Z (90).

#### روابط ذات صلة

*   [Array.prototype.map](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)
*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.prototype.join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `    // Solution with Regular expression and Array of ASCII character codes 
    function rot13(str) { 
      var rotCharArray = []; 
      var regEx = /[AZ]/ ; 
      str = str.split(""); 
      for (var x in str) { 
        if (regEx.test(str[x])) { 
          // A more general approach 
          // possible because of modular arithmetic 
          // and cyclic nature of rot13 transform 
          rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65); 
        } else { 
          rotCharArray.push(str[x].charCodeAt()); 
        } 
      } 
      str = String.fromCharCode.apply(String, rotCharArray); 
      return str; 
    } 
 
    // Change the inputs below to test 
    rot13("LBH QVQ VG!"); 
` 

### شرح الشفرة:

*   يتم إنشاء مصفوفة فارغة في متغير يسمى `rotCharArray` لتخزين رموز الأحرف.
*   يخزن المتغير `regEx` تعبيرًا عاديًا لجميع الأحرف الكبيرة من الألف إلى الياء.
*   نحن `str` إلى صفيف أحرف ثم نستخدم حلقة for loop من خلال كل حرف في الصفيف.
*   باستخدام عبارة if ، نختبر لمعرفة ما إذا كانت السلسلة تحتوي فقط على أحرف كبيرة من A إلى Z.
*   إذا كانت القيمة true ، فإننا نستخدم الدالة `charCodeAt()` والتحويل rot13 لإرجاع القيمة الصحيحة ، وإلا فإننا نرجع القيمة الأولية.
*   ثم نقوم بإرجاع السلسلة برموز الأحرف من متغير `rotCharArray` .

### شرح الخوارزمية:

 `ALPHA    KEY BASE             ROTATED    ROT13 
 ------------------------------------------------------------- 
 [A]     65  <=>   0 + 13  =>  13 % 26  <=>  13 + 65 = 78 [N] 
 [B]     66  <=>   1 + 13  =>  14 % 26  <=>  14 + 65 = 79 [O] 
 [C]     67  <=>   2 + 13  =>  15 % 26  <=>  15 + 65 = 80 [P] 
 [D]     68  <=>   3 + 13  =>  16 % 26  <=>  16 + 65 = 81 [Q] 
 [E]     69  <=>   4 + 13  =>  17 % 26  <=>  17 + 65 = 82 [R] 
 [F]     70  <=>   5 + 13  =>  18 % 26  <=>  18 + 65 = 83 [S] 
 [G]     71  <=>   6 + 13  =>  19 % 26  <=>  19 + 65 = 84 [T] 
 [H]     72  <=>   7 + 13  =>  20 % 26  <=>  20 + 65 = 85 [U] 
 [I]     73  <=>   8 + 13  =>  21 % 26  <=>  21 + 65 = 86 [V] 
 [J]     74  <=>   9 + 13  =>  22 % 26  <=>  22 + 65 = 87 [W] 
 [K]     75  <=>  10 + 13  =>  23 % 26  <=>  23 + 65 = 88 [X] 
 [L]     76  <=>  11 + 13  =>  24 % 26  <=>  24 + 65 = 89 [Y] 
 [M]     77  <=>  12 + 13  =>  25 % 26  <=>  25 + 65 = 90 [Z] 
 [N]     78  <=>  13 + 13  =>  26 % 26  <=>   0 + 65 = 65 [A] 
 [O]     79  <=>  14 + 13  =>  27 % 26  <=>   1 + 65 = 66 [B] 
 [P]     80  <=>  15 + 13  =>  28 % 26  <=>   2 + 65 = 67 [C] 
 [Q]     81  <=>  16 + 13  =>  29 % 26  <=>   3 + 65 = 68 [D] 
 [R]     82  <=>  17 + 13  =>  30 % 26  <=>   4 + 65 = 69 [E] 
 [S]     83  <=>  18 + 13  =>  31 % 26  <=>   5 + 65 = 70 [F] 
 [T]     84  <=>  19 + 13  =>  32 % 26  <=>   6 + 65 = 71 [G] 
 [U]     85  <=>  20 + 13  =>  33 % 26  <=>   7 + 65 = 72 [H] 
 [V]     86  <=>  21 + 13  =>  34 % 26  <=>   8 + 65 = 73 [I] 
 [W]     87  <=>  22 + 13  =>  35 % 26  <=>   9 + 65 = 74 [J] 
 [X]     88  <=>  23 + 13  =>  36 % 26  <=>  10 + 65 = 75 [K] 
 [Y]     89  <=>  24 + 13  =>  37 % 26  <=>  11 + 65 = 76 [L] 
 [Z]     90  <=>  25 + 13  =>  38 % 26  <=>  12 + 65 = 77 [M] 
` 

#### روابط ذات صلة

*   [Function.apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
*   [رجإكس](https://forum.freecodecamp.com/t/regular-expressions-resources/15931)
*   [Regex.test](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/39)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function rot13(str) { // LBH QVQ VG! 
  return str.replace(/[AZ]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65)); 
 } 
` 

### شرح الخوارزمية:

يُعد فهم مشغّل modulo ( _الذي يُطلق عليه أحيانًا مُعامِل المعامل_ ) والذي يتم تمثيله رمزياً كـ `%` في JavaScript مفتاحًا لفهم الخوارزمية.  
هذا هو المشغل مثيرة للاهتمام والتي تظهر في أماكن مختلفة من الهندسة على سبيل المثال في التشفير.

أساسا ، تعمل على عدد ، يقسم الرقم عن طريق القاسم المعطى ويعطي ما تبقى من التقسيم.  
فمثلا،

*   `0 % 5 = 0` لأن `0 / 5 = 0` والباقي `0` .
    
*   `2 % 5 = 2` لأن `2 / 5 = 0` والباقي `2`
    
*   `4 % 5 = 4` لأن `4 / 5 = 0` والباقي `4`
    
*   `5 % 5 = 0` لأن `5 / 5 = 1` والباقي هو `0`
    
*   `7 % 5 = 2` لأن `7 / 5 = 1` والباقي `2`
    
*   `9 % 5 = 4` لأن `9 / 5 = 1` والباقي `4`
    
*   `10 % 5 = 0` لأن `10 / 5 = 2` والباقي `0`
    

ولكن يجب أن تكون قد لاحظت وجود نمط هنا.  
كما لاحظت ، يلتف مشغل modulo المدهش على قيمة LHS عندما يصل إلى مضاعفات قيمة RHS.  
على سبيل المثال في حالتنا ، عندما `LHS = 5` ، أنها ملفوفة إلى `0`  
أو  
عندما `LHS = 10` ، فإنه ملفوف إلى `0` مرة أخرى.

ومن ثم ، نرى النمط التالي في الظهور

 ` 0 ⇔ 0 
 1 ⇔ 1 
 2 ⇔ 2 
 3 ⇔ 3 
 4 ⇔ 4 
 5 ⇔ 0 
 6 ⇔ 1 
 7 ⇔ 2 
 8 ⇔ 3 
 9 ⇔ 4 
 10 ⇔ 0 
` 

ومن ثم ، نستنتج أنه باستخدام مشغل modulo ، يمكن للمرء أن يقوم بتعيين نطاق من القيم إلى نطاق بين \[ `0` إلى `DIVISOR - 1` \]. في حالتنا، نحن تعيين \[ `5 - 9` \] بين \[ `0 - 4` \] أو تعيين \[ `6 - 10` \] بين \[ `0 - 4` \].

هل فهمت حتى هذا؟

الآن دعونا ننظر في تعيين مجموعة من `26` أرقام ، أي ما بين \[ `65 - 90` \] والتي تمثل الأحرف الكبيرة \[ **الإنجليزية** \] في [مجموعة أحرف Unicode](http://unicode-table.com/en/alphabets/) إلى مجموعة من الأرقام بين \[ `0 - 25` \].

 `[A]  65 % 26 ⇔ 13 
 [B]  66 % 26 ⇔ 14 
 [C]  67 % 26 ⇔ 15 
 [D]  68 % 26 ⇔ 16 
 [E]  69 % 26 ⇔ 17 
 [F]  70 % 26 ⇔ 18 
 [G]  71 % 26 ⇔ 19 
 [H]  72 % 26 ⇔ 20 
 [I]  73 % 26 ⇔ 21 
 [J]  74 % 26 ⇔ 22 
 [K]  75 % 26 ⇔ 23 
 [L]  76 % 26 ⇔ 24 
 [M]  77 % 26 ⇔ 25 
 [N]  78 % 26 ⇔  0 
 [O]  79 % 26 ⇔  1 
 [P]  80 % 26 ⇔  2 
 [Q]  81 % 26 ⇔  3 
 [R]  82 % 26 ⇔  4 
 [S]  83 % 26 ⇔  5 
 [T]  84 % 26 ⇔  6 
 [U]  85 % 26 ⇔  7 
 [V]  86 % 26 ⇔  8 
 [W]  87 % 26 ⇔  9 
 [X]  88 % 26 ⇔ 10 
 [Y]  89 % 26 ⇔ 11 
 [Z]  90 % 26 ⇔ 12 
` 

كما يمكنك ملاحظة ، كل رقم في نطاق \[ `65 - 90` \] يرقم إلى رقم فريد بين \[ `0 - 25` \].  
ربما لاحظت أيضًا أن كل رقم معين (على سبيل المثال `65` ) يرسم إلى رقم آخر (مثل `13` ) والذي يمكن استخدامه كقيمة تعويض (أي `65 + OFFSET` ) للحصول على ROT13 من الرقم المحدد.

على سبيل المثال `65` خريطة إلى `13` والتي يمكن أن تؤخذ كقيمة تعويض ويضاف إلى `65` لإعطاء `78` .

 `[A]  65 % 26 ⇔ 13 + 65 =  78 [N] 
 [B]  66 % 26 ⇔ 14 + 65 =  79 [O] 
 [C]  67 % 26 ⇔ 15 + 65 =  80 [P] 
 [D]  68 % 26 ⇔ 16 + 65 =  81 [Q] 
 [E]  69 % 26 ⇔ 17 + 65 =  82 [R] 
 [F]  70 % 26 ⇔ 18 + 65 =  83 [S] 
 [G]  71 % 26 ⇔ 19 + 65 =  84 [T] 
 [H]  72 % 26 ⇔ 20 + 65 =  85 [U] 
 [I]  73 % 26 ⇔ 21 + 65 =  86 [V] 
 [J]  74 % 26 ⇔ 22 + 65 =  87 [W] 
 [K]  75 % 26 ⇔ 23 + 65 =  88 [X] 
 [L]  76 % 26 ⇔ 24 + 65 =  89 [Y] 
 [M]  77 % 26 ⇔ 25 + 65 =  90 [Z] 
 [N]  78 % 26 ⇔  0 + 65 =  65 [A] 
 [O]  79 % 26 ⇔  1 + 65 =  66 [B] 
 [P]  80 % 26 ⇔  2 + 65 =  67 [C] 
 [Q]  81 % 26 ⇔  3 + 65 =  68 [D] 
 [R]  82 % 26 ⇔  4 + 65 =  69 [E] 
 [S]  83 % 26 ⇔  5 + 65 =  70 [F] 
 [T]  84 % 26 ⇔  6 + 65 =  71 [G] 
 [U]  85 % 26 ⇔  7 + 65 =  72 [H] 
 [V]  86 % 26 ⇔  8 + 65 =  73 [I] 
 [W]  87 % 26 ⇔  9 + 65 =  74 [J] 
 [X]  88 % 26 ⇔ 10 + 65 =  75 [K] 
 [Y]  89 % 26 ⇔ 11 + 65 =  76 [L] 
 [Z]  90 % 26 ⇔ 12 + 65 =  77 [M] 
` 

### شرح الشفرة:

*   تتيح لك [الدالة](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942) `String.prototype.replace` تحويل `String` استنادًا إلى بعض تطابق النمط (المحدد بواسطة تعبير عادي) ، [ووظيفة التحويل](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter) (التي يتم تطبيقها على كل من تطابقات النمط).
*   يتم استخدام بناء جملة [الدالة "السهم"](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions) لكتابة المعلمة الدالة `replace()` .
*   `L` يمثل وحدة واحدة، من كل مباراة نمط مع `/[AZ]/g` - الذي هو كل حرف كبير في الأبجدية من `A` إلى `Z` ، موجودة في السلسلة.
*   تطبق وظيفة السهم تحويل `rot13` على كل حرف كبير من الأبجدية الإنجليزية الموجودة في السلسلة المعطاة.

#### روابط ذات صلة

*   [String.prototype.replace ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملحوظة للمساهمين:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.