---
title: Spinal Tap Case
localeTitle: حنفية شبكية
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

قم بتحويل السلسلة المعطاة إلى جملة صغيرة بالكلمات المرتبطة بشُرط.

#### روابط ذات صلة

*   [كائن عالمي السلسلة](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   شبيبة ريجكس الموارد
*   [JS String Prototype Replace](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)
*   [JS String Prototype ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

قم بتكوين تعبير عادي لكل المساحات البيضاء والشرطات السفلية.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

سيكون عليك أيضًا جعل كل شيء صغيرًا.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

الجزء الصعب هو الحصول على جزء التعبير العادي للعمل ، بمجرد القيام بذلك ، ثم مجرد تحويل الأحرف الكبيرة إلى أحرف صغيرة واستبدال المسافات مع الشرطات السفلية باستخدام `replace()` .

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function spinalCase(str) { 
  // Create a variable for the white space and underscores. 
  var regex = /\s+|_+/g; 
 
  // Replace low-upper case to low-space-uppercase 
  str = str.replace(/([az])([AZ])/g, '$1 $2'); 
 
  // Replace space and underscore with - 
  return str.replace(regex, '-').toLowerCase(); 
 } 
 
 // test here 
 spinalCase('This Is Spinal Tap'); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnS/0)

### شرح الشفرة:

*   يحتوي **regex** على التعبير العادي `/\s+|_+/g` ، والذي سيحدد كل المسافات البيضاء والشرطات السفلية.
*   يضع `replace()` الأول `replace()` مسافة قبل أي أحرف كبيرة تمت مصادفتها في **str** السلسلة بحيث يمكن استبدال المسافات بشُرط في وقت لاحق.
*   أثناء استعادة السلسلة ، `replace()` آخر `replace()` المسافات والشرطات السفلية باستخدام الشرطات باستخدام **regex** .

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function spinalCase(str) { 
  // Replace low-upper case to low-space-uppercase 
  str = str.replace(/([az])([AZ])/g, '$1 $2'); 
  // Split on whitespace and underscores and join with dash 
  return str.toLowerCase().split(/(?:_| )+/) .join('-'); 
 } 
 
 // test here 
 spinalCase('This Is Spinal Tap'); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnT/0)

### شرح الشفرة:

*   على غرار الحل الأول ، يضع `replace()` الأول `replace()` مسافة قبل أي أحرف كبيرة تمت رؤيتها في **str** السلسلة بحيث يمكن استبدال المسافات بشُرط في وقت لاحق.
*   بدلاً من استخدام `replace()` هنا لاستبدال whitespace والشرطات السفلية مع الشرطات ، يتم `split()` السلسلة `split()` على التعبير العادي `/(?:_| )+/` و `join()` `-` على `-` .

#### روابط ذات صلة

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [شبيبة صفيف النموذج](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function spinalCase(str) { 
  // "It's such a fine line between stupid, and clever." 
  // --David St. Hubbins 
 
  return str.split(/\s|_|(?=[AZ])/).join('-').toLowerCase() 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/EUZV)

### شرح الشفرة:

*   تقسيم السلسلة في أحد الشروط التالية (تم _تحويلها إلى صفيف_ )
    *   تم العثور على حرف مسافة بيضاء \[ `\s` \]
    *   تم اكتشاف حرف الشرطة السفلية \[ `_` \]
    *   أو متبوعاً بحرف كبير \[ `(?=[AZ])` \]
*   الانضمام إلى الصفيف باستخدام واصلة ( `-` )
*   أحرف صغيرة السلسلة الناتجة بأكملها

#### روابط ذات صلة

*   [سلسلة # انقسام](http://devdocs.io/javascript/global_objects/string/split)
*   [التعبير العادي](http://devdocs.io/javascript/global_objects/regexp)
*   [Arrray # الانضمام](http://devdocs.io/javascript/global_objects/array/join)
*   [سلسلة # toLowerCase](http://devdocs.io/javascript/global_objects/string/tolowercase)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.