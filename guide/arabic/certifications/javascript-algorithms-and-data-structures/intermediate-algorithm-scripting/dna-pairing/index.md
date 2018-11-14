---
title: Dna Pairing
localeTitle: دنا الاقتران
---
![الحمض النووي](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2798a83aaaa34ec2b18f4b8ec122b76c264a9d67.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

*   ستحصل على تسلسل حبلا الدنا وتحتاج إلى الحصول على الزوج وإعادتها كمجموعة ثنائية الأبعاد من أزواج القاعدة. ضع في اعتبارك أن السلاسل المتوفرة يجب أن تكون أولاً دائمًا.
    
*   طريقة أخرى لتفسير المشكلة: هناك أربعة أحرف محتملة موجودة في DNA: "A" و "T" و "G" و "C". يتم الجمع بين "A" و "T" معًا ، ويتم دائمًا إقران "G" و "C" معًا.  
    تقدم لك هذه المشكلة إدخالاً ، على سبيل المثال "ATCGA". كل من هذه الشخصيات الخمسة يفتقدون أزواجهم.  
    على سبيل المثال ، يجب أن يتم إقران الحرف الأول "A" مع "T" لإعطاء عنصر الصفيف \["A"، "T"\].  
    يجب إقران الحرف الثاني "T" مع "A" لإعطاء عنصر الصفيف \["T" ، "A"\].  
    عدد العناصر في الإخراج النهائي يساوي عدد الأحرف في الإدخال.
    

لا تتضمن هذه المشكلة إعادة ترتيب الإدخال في تركيبات أو تباينات مختلفة.

#### روابط ذات صلة

*   [Array.push ()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [String.split ()](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

*   هناك نوعان من حالة القاعدة ، AT و CG ، هذه تذهب في الاتجاهين. يمكنك استخدام التعبير العادي ، إذا كانت بيانات أي شيء يمكن أن تفكر به.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

*   أود أن أوصي باستخدام التبديل ، لأنه يجعل الأمور أكثر سلاسة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

*   يجب أن تكون النتيجة صفيفًا من المصفوفات ، لذا ضع ذلك في الاعتبار عند دفع الأشياء.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `    function pairElement(str) { 
      // Return each strand as an array of two elements, the original and the pair. 
      var paired = []; 
 
      // Function to check with strand to pair. 
      var search = function(char) { 
        switch (char) { 
          case 'A': 
            paired.push(['A', 'T']); 
            break; 
          case 'T': 
            paired.push(['T', 'A']); 
            break; 
          case 'C': 
            paired.push(['C', 'G']); 
            break; 
          case 'G': 
            paired.push(['G', 'C']); 
            break; 
        } 
      }; 
 
      // Loops through the input and pair. 
      for (var i = 0; i < str.length; i++) { 
        search(str[i]); 
      } 
 
      return paired; 
    } 
 
    // test here 
    pairElement("GCG"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLmz/0)

### شرح الشفرة:

*   البرنامج بسيط للغاية ، أفضل حل قد توصلت إليه هو استخدام مفتاح لالتقاط جميع العناصر الأربعة الممكنة. استخدام إذا كانت العبارات تأخذ الكثير من التعليمات البرمجية. يمكنك أيضًا استخدام التعبيرات العادية.
*   نظرًا لأننا مضطرون إلى الأصل والزوج ، قررت اتخاذ جميع الحالات الأربع بدلاً من القاعدة الثانية.
*   قم بإنشاء مصفوفة فارغة واستخدم وظيفة `search` لدفع القيم الصحيحة إلى المصفوفة وإعادتها.

#### روابط ذات صلة

*   [تبديل العبارات](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `    function pairElement(str) { 
    //create object for pair lookup 
    var pairs = { 
      "A": "T", 
      "T": "A", 
      "C": "G", 
      "G": "C" 
    } 
    //split string into array of characters 
    var arr = str.split(""); 
    //map character to array of character and matching pair 
    return arr.map(x => [x,pairs[x]]); 
  } 
 
  //test here 
  pairElement("GCG"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/repls/ThoroughSphericalComputeranimation)

## شرح الشفرة:

*   قم أولاً بتعريف كائن بكل الاحتمالات الزوجية ، وهذا يتيح لنا العثور بسهولة على المفتاح أو القيمة.
*   تقسيم `str` في صفيف أحرف حتى نتمكن من استخدام كل حرف للعثور على زوجها.
*   استخدم وظيفة الخريطة لتعيين كل حرف في الصفيف إلى مصفوفة ذات الحرف والزوج المطابق ، مما يؤدي إلى إنشاء مصفوفة ثنائية الأبعاد.

#### روابط ذات صلة

*   [Array.prototype.map ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
*   [موصلات الملكية](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
*   [وظائف السهم](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.