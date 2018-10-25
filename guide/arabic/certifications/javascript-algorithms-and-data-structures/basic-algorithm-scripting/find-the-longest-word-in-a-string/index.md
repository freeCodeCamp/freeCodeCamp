---
title: Find the Longest Word in a String
localeTitle: ابحث عن أطول كلمة في سلسلة
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

عليك أن تذهب من خلال كل كلمة وتعرف على أي واحدة منها هي الأطول ولا ترجع إلى الكلمة ، بل كم عدد الأحرف التي تملكها.

#### روابط ذات صلة

*   [طول السلسلة JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

يجب عليك تقسيم السلسلة إلى مجموعة من الكلمات.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

ستحتاج إلى إيجاد طريقة لتتبع عالميًا بأكبر قدر ممكن من الطول الحالي.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

تذكر كيفية الحصول على طول العناصر على المصفوفة؟ `Array[index].length` . `Array[index].length` .

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function findLongestWordLength(str) { 
  var words = str.split(' '); 
  var maxLength = 0; 
 
  for (var i = 0; i < words.length; i++) { 
    if (words[i].length > maxLength) { 
      maxLength = words[i].length; 
    } 
  } 
 
  return maxLength; 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/5)

### شرح الشفرة:

خذ السلسلة وتحويلها إلى مجموعة من الكلمات. قم بتعريف متغير لتتبع الحد الأقصى للطول والحلقة من 0 إلى طول صفيف الكلمات.

ثم تحقق من أطول كلمة بمقارنة الكلمة الحالية بالكلمة السابقة وتخزين أطول كلمة جديدة. في نهاية الحلقة فقط قم بإرجاع قيمة العدد للمتغير maxLength.

#### روابط ذات صلة

*   [JS Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

**باستخدام `.reduce()`**

 `function findLongestWordLength(s) { 
  return s.split(' ') 
    .reduce(function(x, y) { 
      return Math.max(x, y.length) 
    }, 0); 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/6)

### شرح الشفرة:

لمزيد من المعلومات حول `reduce` [انقر هنا.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

إذا كنت تتساءل عن `0` بعد وظيفة رد الاتصال ، فسيتم استخدامه لإعطاء قيمة أولية لـ `x` ، حتى يعرف `Math.max` أين تبدأ.

#### روابط ذات صلة

*   [شبيبة الحد](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [شبيبة تقليل سهلة](http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687)
*   [JS Math Max](http://forum.freecodecamp.com/t/javascript-math-max/14682.md)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

**باستخدام التكرار**

 `function findLongestWordLength(str) { 
 
  //split the string into individual words 
  //(important!!, you'll see why later) 
  str = str.split(" "); 
 
  //str only has 1 element left that is the longest element, 
  //return the length of that element 
  if(str.length == 1){ 
    return str[0].length; 
  } 
 
  //if the first element's length is greater than the second element's (or equal) 
  //remove the second element and recursively call the function) 
  if(str[0].length >= str[1].length){ 
    str.splice(1,1); 
    return findLongestWordLength(str.join(" ")); 
  } 
 
  //if the second element's length is greater thant the first element's start 
  //call the function past the first element 
  if(str[0].length <= str[1].length){ 
    // from the first element to the last element inclusive. 
    return findLongestWordLength(str.slice(1,str.length).join(" ")); 
  } 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/7)

### شرح الشفرة:

يقسم السطر الأول السلسلة إلى كلمات فردية. ثم نتحقق مما إذا كان `str` يحتوي على عنصر واحد فقط ، فهذا هو العنصر الأطول ونقوم بإعادته. إذا كان طول العنصر الأول أكبر من العنصر الثاني (أو يساوي) ، فسنقوم بإزالة العنصر الثاني ثم `findLongestWord` استدعاء الدالة `findLongestWord` بشكل متكرر. ومع ذلك ، إذا كان طول العنصر الثاني أكبر من بداية العنصر الأول ، فسنستدعي الدالة بعد العنصر الأول.

#### روابط ذات صلة

*   [وظائف JS](https://www.youtube.com/watch?v=R8SjM4DKK80)
*   [أساسيات إعادة التدوير](https://www.youtube.com/watch?v=k7-N8R0-KY4)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.