---
title: Missing Letters
localeTitle: حروف ناقصة
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

سوف تقوم بإنشاء برنامج سيعثر على الحرف المفقود من سلسلة وإعادته. إذا لم يكن هناك حرف مفقود ، يجب أن يقوم البرنامج بإرجاع غير محدد. لا توجد حالياً حالة اختبار للسلسلة المفقودة لأكثر من حرف واحد ، ولكن إذا كان هناك حرف ، فسيتم استخدام العودية. أيضا ، يتم دائمًا توفير الأحرف بالترتيب ، لذلك لا توجد حاجة لفرزها.

#### روابط ذات صلة

*   [كائن عالمي السلسلة](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [JS String Prototype CharCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

ستحتاج إلى التحويل من رمز إلى رمز ASCII باستخدام الطريقتين المقدمتين في الوصف.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

سيكون عليك التحقق من الاختلاف في كود ASCII كما هي بالترتيب. استخدام الرسم البياني سيكون مفيدا للغاية.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

ستحتاج إلى معرفة مكان الرسالة المفقودة ، مع التعامل مع الحالة التي لا يوجد بها حرف مفقود لأنه يحتاج إلى قيمة إرجاع محددة.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function fearNotLetter(str) { 
 
  for(var i = 0; i < str.length; i++) { 
    /* code of current character */ 
    var code = str.charCodeAt(i); 
 
    /* if code of current character is not equal to first character + no of iteration 
    hence character has been escaped */ 
    if (code !== str.charCodeAt(0) + i) { 
 
      /* if current character has escaped one character find previous char and return */ 
      return String.fromCharCode(code - 1); 
    } 
  } 
  return undefined; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnD/0)

### شرح الشفرة:

*   تستفيد هذه الحلول من حلقة `for` .
*   يتم تخزين **رمز** الحرف المصادفة في **التعليمات البرمجية** .
*   يتم التحقق إذا كان رمز الحرف الحالي هو الحرف المتوقع (لا يتم تخطي أي حرف) باستخدام `code of current character = code of first character + number of iterations` منطقي `code of current character = code of first character + number of iterations` .
*   إذا كان الحرف مفقودًا ، يتم العثور على الحرف المفقود ويتم إرجاع السلسلة النهائية.
*   يتم إرجاع `undefined` إذا لم يكن هناك حرف مفقود في السلسلة.

#### روابط ذات صلة

*   [شبيبة لشرح الحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   طول سلسلة

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `// Adding this solution for the sake of avoiding using 'for' and 'while' loops. 
 // See the explanation for reference as to why. It's worth the effort. 
 
 function fearNotLetter(str) { 
  var compare = str.charCodeAt(0), missing; 
 
  str.split('').map(function(letter,index) { 
    if (str.charCodeAt(index) == compare) { 
      ++compare; 
    } else { 
      missing = String.fromCharCode(compare); 
    } 
  }); 
 
  return missing; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnE/0)

### شرح الشفرة:

*   أولاً ، نحدد المتغيرات لتخزين رمز الحرف للحرف الأول في السلسلة ، ولتخزين أي أحرف مفقودة قد نجدها.
*   ننتقل السلسلة إلى مجموعة من أجل تعيين من خلال ذلك بدلا من استخدام `for` و `while` الحلقات.
*   بينما `map` خلال رموز الأحرف الخاصة بالحروف ، نذهب إلى المقارنة مع تلك التي يجب أن تكون في هذا الموقف.
*   إذا تطابق الحرف الحالي ، فإننا ننقل متغير المقارنة إلى موضعه التالي حتى يمكننا المقارنة في الدورة التالية.
*   إذا لم يكن الأمر كذلك ، سيتم تعيين الحرف المفقود إلى المتغير `missing` ، والذي سيتم إرجاعه بعد الانتهاء من الخريطة.
*   إذا لم تكن هناك أحرف مفقودة ، `undefined` .

#### روابط ذات صلة

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS Array Prototype Map](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") حل رمز متقدم مبسط:

 `function fearNotLetter(str) { 
  for (let i = 1; i < str.length; ++i) { 
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) { 
      return String.fromCharCode(str.charCodeAt(i - 1) + 1); 
    } 
  } 
 } 
` 

### شرح الشفرة:

*   حلقة فوق السلسلة
*   تحقق مما إذا كان الاختلاف في رموز char بين الأحرف المتجاورة في السلسلة أكثر من 1 (جدول ASCII chack)
*   إرجاع الحرف المفقود (1+ من حيث تم اكتشاف الفجوة)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function fearNotLetter(str) { 
  var allChars = ''; 
  var notChars = new RegExp('[^'+str+']','g'); 
 
  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++) 
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i); 
 
  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnG/0)

### شرح الشفرة:

*   يتم إنشاء سلسلة جديدة **allChars** .
*   قم بإنشاء التعبير العادي **notChars** الذي يحدد كل شيء باستثناء **str** .
*   يتم استخدام حلقة `for` لإضافة كافة الأحرف في النطاق إلى كافة **Chars** .
*   يتم استخدام `match()` لإلغاء تجريد الأحرف **str** من السلسلة التي تم إنشاؤها حديثًا ويتم إرجاعها.
*   إذا لم تكن هناك أحرف مفقودة ، `undefined` .

#### روابط ذات صلة

*   شبيبة ريجكس الموارد
*   [JS Ternary](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)
*   [JS String Prototype Match](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)
*   [شبيبة صفيف النموذج](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.