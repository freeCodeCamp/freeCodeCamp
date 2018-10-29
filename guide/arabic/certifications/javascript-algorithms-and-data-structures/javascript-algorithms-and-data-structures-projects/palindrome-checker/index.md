---
title: Palindrome Checker
localeTitle: Palindrome المدقق
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/c/ca86619bb0ec05531dbb02be3c0b7b8383e67f01.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

هدفنا لحل هذه المشكلة هو ترتيب السلسلة التي يتم تمريرها والتحقق مما إذا كانت في الواقع متناظرة.

*   إذا لم تكن متأكداً مما هو متناظر ، فكلمة أو عبارة هي عندما تنقض تعويذ نفس الشيء للأمام أو للخلف. مثال بسيط هو `mom` ، عند عكس الحروف ، فإنها تنطق نفس الشيء! مثال آخر لالمتطابق هو `race car` . عندما نأخذ أي شيء ليس حرفًا ، يصبح `racecar` هو نفس الهجاء للأمام أو إلى الوراء!

بمجرد أن نحدد ما إذا كانت متناظرة أو لا نريد إرجاعها إما `true` أو `false` استنادًا إلى النتائج التي توصلنا إليها.

#### روابط ذات صلة

*   [String.prototype.replace](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)
*   [String.prototype.toLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

يمكن استخدام التعبيرات العادية ، `RegEx` ، لإزالة الأحرف غير المرغوب فيها من السلسلة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

و `Array.prototype.split` و `Array.prototype.join` الأساليب يمكن أن تكون ذات فائدة هنا. `For` `while` الحلقات هي بديل آخر ، أو لماذا لا حتى `map` !

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

يمكن استخدام `String.prototype.toLowerCase` لإنشاء سلسلة صغيرة.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `    function palindrome(str) { 
      return str.replace(/[\W_]/g, '').toLowerCase() === 
             str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join(''); 
    } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/2)

### شرح الشفرة:

*   نبدأ باستخدام التعبيرات العادية لاستبدال أي مساحة بيضاء أو أحرف غير أبجدية رقمية بدون أي شيء (أو `null` ) ، والتي تزيلها بشكل أساسي من السلسلة.
    
*   نحن المقبل _سلسلة ل_ `.toLowerCase()` لإزالة أي حروف ل `A` هو حرف مختلفة من `a` . لم تطالبنا المشكلة بالقلق من التأكد من أن حالة الأحرف متطابقة ، فقط التهجئة.
    
*   خطوتنا التالية هي أن نأخذ السلسلة و `.split()` ، `.reverse()` و ، وأخيرا `.join()` مرة أخرى معا.
    
*   الخطوة الأخيرة هي التحقق من أن السلسلة هي نفسها إلى الأمام والخلف وإرجاع النتيجة!
    

#### روابط ذات صلة

*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.prototype.reverse](http://forum.freecodecamp.com/t/javascript-array-prototype-reverse/14300)
*   [Array.prototype.join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `    function palindrome(str) { 
      str = str.toLowerCase().replace(/[\W_]/g, ''); 
      for(var i = 0, len = str.length - 1; i < len/2; i++) { 
        if(str[i] !== str[len-i]) { 
          return false; 
        } 
      } 
      return true; 
    } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/3)

### شرح الشفرة:

*   نبدأ باستخدام نفس الأساليب لاستبدال الحروف التي لا نريدها في السلسلة باستخدام تعبيرات `RegEx` العادية ، ثم جعل السلسلة الخاصة بنا صغيرة.
    
*   بعد ذلك قمنا بإعداد حلقة `for` ونعلن عن فهرس `i` لتتبع الحلقة. وضعناها لدينا تسلسل هروب إلى عندما `i` أكبر من طول السلسلة مقسوما على اثنين، الذي يحكي حلقة لوقف بعد منتصف الطريق من السلسلة. وأخيرًا ، `i` على الزيادة بعد كل حلقة.
    
*   داخل كل حلقة نريد التحقق من أن الحرف في العنصر `[i]` يساوي الحرف في طول السلسلة ناقص i ، `[str.length - i]` . في كل حلقة ، يتحرك العنصر الذي يتم فحصه على جانبي السلسلة بالقرب من المركز حتى نتحقق من جميع الأحرف. إذا لم تتطابق الحروف في أي لحظة ، فإننا نرجع `false` . إذا اكتملت الحلقة بنجاح ، فهذا يعني أن لدينا متناظرًا ، وبالتالي نعود إلى `true` !
    

#### روابط ذات صلة

*   رجإكس

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود (الأكثر أداء):

 `    //this solution performs at minimum 7x better, at maximum infinitely better. 
    //read the explanation for the reason why. I just failed this in an interview. 
    function palindrome(str) { 
      //assign a front and a back pointer 
      let front = 0 
      let back = str.length - 1 
 
      //back and front pointers won't always meet in the middle, so use (back > front) 
      while (back > front) { 
        //increments front pointer if current character doesn't meet criteria 
        if ( str[front].match(/[\W_]/) ) { 
          front++ 
          continue 
        } 
        //decrements back pointer if current character doesn't meet criteria 
        if ( str[back].match(/[\W_]/) ) { 
          back-- 
          continue 
        } 
        //finally does the comparison on the current character 
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false 
        front++ 
        back-- 
      } 
 
      //if the whole string has been compared without returning false, it's a palindrome! 
      return true 
 
    } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/4)

### شرح الشفرة:

*   أعطيت هذه المشكلة في مقابلة (المفسد: لم أكن قد استأجرت ![:frowning:](https://forum.freecodecamp.com/images/emoji/emoji_one/frowning.png?v=3 ":عابس:") ) سرعان ما وصلت إلى الحل الأساسي ، وأخبرني القائم بالمقابلة أن أجعله أفضل. سيستغرق الأمر خوارزمية طويلة للغاية إذا اجتاز الكتاب المقدس كسلسلة. كان يريد أن يكون لحظة.
    
*   تعمل الحلول البسيطة بشكل سيء جدًا على السلاسل الطويلة لأنها تعمل على السلسلة بأكملها عدة مرات (toLowerCase () ، الاستبدال () ، split () ، reverse () ، join ()) قبل مقارنة السلسلة **بأكملها** مرتين.
    
*   جمال هذا الحل هو أنه لا **يحتاج** أبدا إلى قراءة السلسلة بأكملها ، ولو مرة واحدة ، لمعرفة أنها ليست متناظرة. لماذا تقرأ السلسلة الكاملة إذا كنت تستطيع أن تقول أنها ليست مجرد متناظرة بمجرد النظر إلى خطابين؟
    
*   يستخدم حلقة while بدلاً من حلقة for كأفضل ممارسة - لأننا نستخدم متغيرين ، أحدهما يبدأ من بداية السلسلة ، ويبدأ الآخر في نهاية السلسلة.
    

#### روابط ذات صلة

*   [التعقيد Cyclomatic](https://en.wikipedia.org/wiki/Cyclomatic_complexity)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.