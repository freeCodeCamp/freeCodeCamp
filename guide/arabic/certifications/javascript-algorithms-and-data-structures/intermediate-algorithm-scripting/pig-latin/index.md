---
title: Pig Latin
localeTitle: خنزير اللاتينية
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

تحتاج إلى إنشاء برنامج من الإنجليزية إلى الخنزير اللاتينية. خنزير لاتيني يأخذ أول ساكن ساكن (أو ساكن الكتلة) لكلمة إنجليزية ، ينقلها إلى نهاية الكلمة ويضيف لاحقاً "أي". إذا كانت الكلمة تبدأ بحرف متحرك ، فما عليك سوى إضافة "way" إلى النهاية. قد لا يكون الأمر واضحًا ، لكنك بحاجة إلى إزالة جميع الحروف الساكنة حتى حرف العلة الأول في حالة عدم بدء الكلمة بحرف متحرك.

#### روابط ذات صلة

*   [خنزير اللاتينية](http://en.wikipedia.org/wiki/Pig_Latin)
*   [JS String Prototype Match](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

ربما تريد استخدام التعبيرات العادية. هذا سيسمح لك بتحويل الكلمات بسهولة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

إذا كان الحرف الأول حرفًا متحركًا ، فخذ الكلمة بأكملها وأضف "طريقًا" في النهاية. خلاف ذلك يأتي الجزء صعب ، واتخاذ ساكن (ق) قبل حرف العلة الأول وتحريكه إلى النهاية وإضافة "ay". قد يكون هذا أمرًا مربكًا ، ولكنه ليس مجرد الحرف الساكن الأول ، بل كلهم ​​قبل الحرف الأول.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

سوف تحتاج إلى استخدام كل ما تعرفه عن التلاعب بالسلسلة للحصول على الجزء الأخير بشكل صحيح. ومع ذلك ، يمكن القيام به مع `substr` وحده.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function translatePigLatin(str) { 
  // Create variables to be used 
  var pigLatin = ''; 
  var regex = /[aeiou]/gi; 
 
  // Check if the first character is a vowel 
  if (str[0].match(regex)) { 
    pigLatin = str + 'way'; 
 
  } else if(str.match(regex) === null) { 
    // Check if the string contains only consonants 
    pigLatin = str + 'ay'; 
  } else { 
 
    // Find how many consonants before the first vowel. 
    var vowelIndice = str.indexOf(str.match(regex)[0]); 
 
    // Take the string from the first vowel to the last char 
    // then add the consonants that were previously omitted and add the ending. 
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay'; 
  } 
 
  return pigLatin; 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLmt/0)

### شرح الشفرة:

*   جعل سلسلة فارغة لعقد كلمة الخنزير اللاتينية.
*   قم بتعيين التعبير العادي المناسب للمتغير.
*   إذا كان الحرف الأول حرفًا متحركًا ، فما عليك سوى إضافة **طريقة** إلى نهاية السلسلة وإعادتها.
*   إذا لم يكن الحرف الأول حرفًا متحركًا:
    *   العثور على عدد من الحروف الساكنة قبل الحرف الأول مع مساعدة من `indexOf()` ، `match()` و regex.
    *   بدء سلسلة خنزير اللاتينية مع أول حرف علة حتى النهاية.
    *   أضف الحروف قبل حرف العلة الأول لنهاية السلسلة.
    *   `substr()` يستخدم للتلاعب بالسلسلة هنا.
    *   أضف **ay** إلى نهاية السلسلة وأعدها.

#### روابط ذات صلة

*   شبيبة ريجكس الموارد
*   [JS String Prototype IndexOf](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [JS String Prototype Substr](http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function translatePigLatin(str) { 
  function check(obj) { 
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj; 
  } 
 
  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay'); 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLmw/0)

### شرح الشفرة:

*   هذا هو نهج تفسيري وكذلك تعاودي لهذه المشكلة.
*   `check()` هي وظيفة تقوم بفحص الحرف الأول من السلسلة ليكون في صفيف حروف العلة ، `['a','i','u','e','o']` .
*   في حالة الحروف الساكنة ، فإن `check()` يستدعي نفسه على الحروف التالية حتى يعثر على الحرف الأول.
*   سيعود المؤشر إلى أي شيء يجد أنه آخر حرف مبدئي ، أي أن Schmidtsville سيكون 3.
*   بعد ذلك ، يتم رفع الحروف إلى أن تتم إزالة هذا الفهرس من السلسلة وتتصل مع نفس الجزء من السلسلة التي تمت إزالتها أو **w** وفقا لذلك ، ثم **ay ay** بغض النظر.

#### روابط ذات صلة

*   [JS String Prototype CharAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932)
*   [JS String Prototype Concat](http://forum.freecodecamp.com/t/javascript-string-prototype-concat/15935)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function translatePigLatin(str) { 
    var strArr = []; 
    var tmpChar; 
 
    // check if the char is consonant using RegEx 
    function isConsonant(char) { 
        return !/[aeiou]/.test(char); 
    } 
 
    // return initial str + "way" if it starts with vowel 
    // if not - convert str to array 
    if (!isConsonant(str.charAt(0))) 
        return str + "way"; 
    else 
        strArr = str.split(""); 
 
    // push all consonats to the end of the array 
    while (isConsonant(strArr[0])) { 
        tmpChar = strArr.shift(); 
        strArr.push(tmpChar); 
    } 
 // convert array to string and concatenate "ay" at the end 
 return strArr.join("")+"ay"; 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLmv/0)

### شرح الشفرة:

*   يتم استخدام `isConsonant()` للتحقق ما إذا كان الحرف حرف ساكن.
*   إذا كان الحرف الأول حرفًا متحركًا ، فأضف **طريقًا** إلى نهاية السلسلة وأعده.
*   إذا لم يكن الحرف الأول حرفًا متحركًا:
    *   تقسيم السلسلة إلى صفيف باستخدام `split()` .
    *   دفع جميع الحروف الساكنة إلى نهاية مجموعة مع مساعدة من `shift()` `push()` .
    *   تحويل مجموعة إلى سلسلة باستخدام `join()` وإضافة **ay** إلى نهاية السلسلة. أعده.

#### روابط ذات صلة

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS Array Prototype Shift](http://forum.freecodecamp.com/t/javascript-array-prototype-shift/14301)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [شبيبة صفيف النموذج](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

### ![:trophy:](https://forum.freecodecamp.com/images/emoji/emoji_one/trophy.png?v=3 ":غنيمة:") ائتمانات:

إذا وجدت هذه الصفحة مفيدة ، يمكنك أن تقول شكرا للمساهمين من خلال نسخ ولصق السطر التالي في الدردشة الرئيسية:

**`Thanks @Rafase282 @sabahang @aganita @Hallaathrad for your help with Algorithm: Pig Latin`**

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.