---
title: Binary Agents
localeTitle: الوكلاء الثنائيين
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/7/70cf3cc5462f69c2f770ad42d0f24f240a8d8f13.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

## شرح المشكلة:

هذه المشكلة مستقيمة جدًا ، ستحصل على سلسلة تمثل جملة في الشفرة الثنائية ، وتحتاج إلى ترجمة ذلك إلى كلمات. ليس هناك طريقة مباشرة للقيام بذلك ، لذلك سيكون عليك ترجمة مرتين.

### روابط ذات صلة

*   [String.prototype.charCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

يجب عليك أولاً التحويل من **ثنائي** إلى **عشري** قبل ترجمة تلك القيم إلى أحرف.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

تكون الأمور أسهل عند التركيز على أجزاء أصغر ، وتقسيم الإدخال للتركيز على حرف واحد في ذلك الوقت.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

تأكد من أنه في كل مرة تقوم فيها برمز حرف من ثنائي إلى عشري ، يمكنك إعادة تعيين أي متغير استخدمته لتتبع تلك. أيضا لا تنس أن تحول كل شيء مرة أخرى إلى سلسلة واحدة.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `    function binaryAgent(str) { 
      biString = str.split(' '); 
      uniString = []; 
 
    /*using the radix (or base) parameter in parseInt, we can convert the binary 
      number to a decimal number while simultaneously converting to a char*/ 
 
      for(i=0;i < biString.length;i++){ 
        uniString.push(String.fromCharCode(parseInt(biString[i], 2))); 
      } 
 
      // we then simply join the string 
      return uniString.join(''); 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnm/0)

# شرح الشفرة:

*   افصل السلسلة إلى صفيف من السلاسل مفصولة بمسافة بيضاء.
*   إنشاء بعض المتغيرات التي ستكون هناك حاجة على طول الطريق ، والأسماء هي توضيحية للجزء الأكبر الذاتي.
*   يتكرر خلال كل سلسلة ثنائية في الصفيف الجديد.
*   تحويل إلى عشري باستخدام parseInt ( _binary_ ، 2) (مع المعلمة الثانية التي نخبر بها قاعدة الأرقام الموجودة لدينا حاليًا)
*   في النهاية ، نعيد الرسالة المحولة.

## روابط ذات صلة

*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [parseInt](http://forum.freecodecamp.com/t/javascript-parseint/14686)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `    function binaryAgent(str) { 
      // Separate the binary code by space. 
      str = str.split(' '); 
      var power; 
      var decValue = 0; 
      var sentence = ''; 
 
      // Check each binary number from the array. 
      for (var s = 0; s < str.length; s++) { 
        // Check each bit from binary number 
        for (var t = 0; t < str[s].length; t++) { 
          // This only takes into consideration the active ones. 
          if (str[s][t] == 1) { 
            // This is quivalent to 2 ** position 
            power = Math.pow(2, +str[s].length - t - 1); 
            decValue += power; 
 
            // Record the decimal value by adding the number to the previous one. 
          } 
        } 
 
        // After the binary number is converted to decimal, convert it to string and store 
        sentence += (String.fromCharCode(decValue)); 
 
        // Reset decimal value for next binary number. 
        decValue = 0; 
      } 
 
      return sentence; 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLno/0)

# شرح الشفرة

*   لكل من هذه السلاسل الثنائية ، تحقق من تلك السلاسل وتجاهل الأصفار.
*   بالنسبة لأولئك أو النشطين ، قم بتحويلهم إلى قيمة عشرية ، وهذا يأخذ في الاعتبار الموقف والسلطة المناسبة التي يحتاج إلى رفعها.
*   قم بتخزين الطاقة في متغير **الطاقة** عن طريق إضافتها إلى أي سابق لها على متغير **القيمة decValue** . سيقوم هذا المتغير بإضافة وإضافة القوى النشطة حتى نهاية الحلقة ثم إرجاع الرقم العشري.
*   قم بتحويل القيمة العشرية النهائية خارج الحلقة الداخلية ثم قم بتحويلها إلى ASCII وحفظها إلى **جملة** مع أي سلسلة نصية أخرى تم تحويلها وتخزينها بالفعل.
*   إعادة تعيين المتغير **decValue** لتجنب **decimals** خاطئ قبل المتابعة إلى الحلقة الخارجية.

## روابط ذات صلة

*   [Math.pow](http://forum.freecodecamp.com/t/javascript-math-pow/14685)
*   طول سلسلة
*   [رابط العنوان 3](http://example.com)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `    function binaryAgent(str) { 
      return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); })); 
    } 
 
    // test here 
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnp/0)

# شرح الشفرة

*   أولاً نستخدم `split()` لنتمكن من العمل على كل حرف كعنصر صفيف
*   ثم استخدم `map()` لمعالجة كل عنصر من ثنائي إلى عشري باستخدام `pareseInt()`
*   أخيرًا ، يمكننا استخدام `String.fromCharCode()` لتحويل كل رقم ASCII إلى الحرف المطابق
*   ومع ذلك `fromCharCode()` تتوقع سلسلة من الأرقام بدلاً من صفيف! يمكننا استخدام ES6 Spread Operator للمرور في مجموعة من الأرقام كأرقام فردية. انظر هنا لمزيد من المعلومات؛ [انتشار المشغل](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## روابط ذات صلة

*   [Array.prototype.map](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.