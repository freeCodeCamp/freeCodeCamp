---
title: Search and Replace
localeTitle: بحث واستبدال
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

ستقوم بإنشاء برنامج يأخذ جملة ، ثم يبحث عن كلمة فيه ويستبدلها بواحدة جديدة مع الحفاظ على الأحرف الكبيرة إذا كان هناك واحد.

#### روابط ذات صلة

*   [كائن عالمي السلسلة](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [JS String Prototype Replace](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

*   العثور على مؤشر حيث `before` في السلسلة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

*   تحقق من حالة الرسالة الأولى.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

*   سلاسل غير قابلة للتغيير ، ستحتاج إلى حفظ التعديلات على متغير آخر ، حتى إذا كان يجب إعادة استخدام نفس واحدة فقط لجعلها تبدو وكأنها التغييرات التي تم إجراؤها باستخدام هذا المتغير فقط.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function myReplace(str, before, after) { 
  // Find index where before is on string 
  var index = str.indexOf(before); 
  // Check to see if the first letter is uppercase or not 
  if (str[index] === str[index].toUpperCase()) { 
    // Change the after word to be capitalized before we use it. 
    after = after.charAt(0).toUpperCase() + after.slice(1); 
  } 
  // Now replace the original str with the edited one. 
  str = str.replace(before, after); 
 
  return str; 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLmo/0)

### شرح الشفرة:

*   استخدم `indexOf()` للبحث عن موقع من **قبل** في السلسلة.
*   إذا تمت كتابة الحرف الأول من **قبل** ، فغيّر الحرف الأول **بعد** الحرف الكبير.
*   استبدال **قبل** في السلسلة مع **بعد** .
*   إرجاع السلسلة الجديدة.

#### روابط ذات صلة

*   [JS String Prototype IndexOf](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [JS String Prototype ToUpperCase](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950)
*   [JS String Prototype CharAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932)
*   [JS String Prototype Slice](http://forum.freecodecamp.com/t/javascript-string-prototype-slice/15943)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function myReplace(str, before, after) { 
 //Create a regular expression object 
  var re = new RegExp(before,"gi"); 
 //Check whether the first letter is uppercase or not 
  if(/[AZ]/.test(before[0])){ 
  //Change the word to be capitalized 
    after = after.charAt(0).toUpperCase()+after.slice(1); 
     } 
     //Replace the original word with new one 
  var  newStr =  str.replace(re,after); 
 
 return newStr; 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLmp/0)

### شرح الشفرة:

*   في هذا الحل ، يتم استخدام التعبير العادي `[AZ]` للتحقق مما إذا كان الحرف كبيرًا أم لا.
*   إنشاء كائن تعبير عادي جديد ، **إعادة** .
*   إذا تمت كتابة الحرف الأول من **قبل** ، فغيّر الحرف الأول **بعد** الحرف الكبير.
*   استبدال **قبل** مع **بعد** في السلسلة.
*   إرجاع السلسلة الجديدة.

#### روابط ذات صلة

*   شبيبة ريجكس الموارد

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function myReplace(str, before, after) { 
 
    // create a function that will change the casing of any number of letter in parameter "target" 
    // matching parameter "source" 
    function applyCasing(source, target) { 
        // split the source and target strings to array of letters 
        var targetArr = target.split(""); 
        var sourceArr = source.split(""); 
        // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array 
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){ 
            // find out the casing of every letter from sourceArr using regular expression 
            // if sourceArr[i] is upper case then convert targetArr[i] to upper case 
            if (/[AZ]/.test(sourceArr[i])) { 
                targetArr[i] = targetArr[i].toUpperCase(); 
            } 
            // if sourceArr[i] is not upper case then convert targetArr[i] to lower case 
            else targetArr[i] = targetArr[i].toLowerCase(); 
        } 
        // join modified targetArr to string and return 
        return (targetArr.join("")); 
    } 
 
    // replace "before" with "after" with "before"-casing 
    return str.replace(before, applyCasing(before, after)); 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLmq/0)

### شرح الشفرة:

*   يتم تمرير كل من **قبل** **وبعد** كوسيطة `applyCasing()` .
*   يتم استخدام الوظيفة `applyCasing()` لتغيير حالة الأحرف المعنية في **targetArr** أي ، **بعد ذلك** وفقًا للحروف في **sourceArr** ، أي من **قبل** .
*   يستخدم `replace()` ليحل محل **قبل** مع **بعد** ، الذي غلافه هو نفسه كما كان من **قبل** .

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") البديل المتقدم للحل Code:

 `// Add new method to the String object, not overriding it if one exists already 
 String.prototype.capitalize =  String.prototype.capitalize || 
    function() { 
        return this[0].toUpperCase() + this.slice(1); 
    }; 
 
 const Util = (function () { 
 // Create utility module to hold helper functions 
    function textCase(str, tCase) { 
        // Depending if the tCase argument is passed we either set the case of the 
        // given string or we get it. 
        // Those functions can be expanded for other text cases. 
 
        if(tCase) { 
            return setCase(str, tCase); 
        } else { 
            return getCase(str); 
        } 
 
        function setCase(str, tCase) { 
            switch(tCase) { 
                case "uppercase": return str.toUpperCase(); 
                case "lowercase": return str.toLowerCase(); 
                case "capitalized": return str.capitalize(); 
                default: return str; 
            } 
        } 
 
        function getCase(str) { 
            if (str === str.toUpperCase()) { return "uppercase"; } 
            if (str === str.toLowerCase()) { return "lowercase"; } 
            if (str === str.capitalize()) { return "capitalized"; } 
            return "normal"; 
        } 
    } 
 
    return { 
        textCase 
    }; 
 })(); 
 
 function myReplace(str, before, after) { 
    const { textCase } = Util; 
    const regex = new RegExp(before, 'gi'); 
    const replacingStr = textCase(after, textCase(before)); 
 
    return str.replace(regex, replacingStr); 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/@kr3at0/SearchAndReplace)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") حل رمز متقدم البديل 2:

 `function myReplace(str, before, after) { 
  const myArr = str.split(' '); 
  const [wordToReplace] = myArr.filter(item => item === before); 
  return  wordToReplace[0].toUpperCase() !== wordToReplace[0] 
  ? myArr.map(item => item === before ? after : item).join(' ') 
  : myArr.map(item => item === before? after[0].toUpperCase() + after.slice(1) : item).join(' '); 
 } 
 
 // test: 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
` 

#### روابط ذات صلة

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [شبيبة لشرح الحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [شبيبة الرياضيات مين](http://forum.freecodecamp.com/t/javascript-math-min/14684)
*   طول سلسلة
*   [JS String Prototype ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [شبيبة صفيف النموذج](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.