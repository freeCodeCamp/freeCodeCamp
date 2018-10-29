---
title: Everything Be True
localeTitle: كل شيء يكون حقيقة
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/d/d69c7f2d86b8902a9bc83653d95932115de47e6a.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

يحتاج البرنامج إلى التحقق مما إذا كانت الوسيطة الثانية عنصر [صواب](http://forum.freecodecamp.com/t/javascript-truthy-value/15975) ، ويجب أن يتحقق ذلك لكل كائن في الوسيطة الأولى.

#### روابط ذات صلة

*   [جافا سكريبت تروثي](http://forum.freecodecamp.com/t/javascript-truthy-value/15975)
*   [وسيطات JavaScript](http://forum.freecodecamp.com/t/javascript-arguments/14283.md)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

تذكر أن تتكرر خلال الوسيطة الأولى للتحقق من كل كائن.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

فقط إذا كان كل منهم حقيقة فسوف نعود إلى الحقيقة ، لذا تأكد من التحقق منها جميعًا.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

> _حاول أن تحل المشكلة الآن_

يمكنك استخدام وظائف الحلقات أو الاستدعاءات ، وهناك طرق متعددة لحل هذه المشكلة.

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحلول في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

**استخدام حلقة for-in & hasOwnProperty**

 `function truthCheck(collection, pre) { 
  // Create a counter to check how many are true. 
  var counter = 0; 
  // Check for each object 
  for (var c in collection) { 
    // If it is has property and value is truthy 
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) { 
      counter++; 
    } 
  } 
  // Outside the loop, check to see if we got true for all of them and return true or false 
  return counter == collection.length; 
 } 
 
 // test here 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnw/0)

### شرح الشفرة:

*   أولاً ، أقوم بإنشاء عداد للتحقق من عدد الحالات الواقعية.
*   ثم تحقق من كل كائن إذا كانت القيمة صحيحة
*   خارج الحلقة، وتحقق لمعرفة ما إذا كان المتغير العداد لديه نفس قيمة طول **جمع** وإذا كان هذا صحيحا ثم يعود **صحيحا،** وإلا، عودة **كاذبة**

#### روابط ذات صلة

*   [شبيبة الحلقات](http://forum.freecodecamp.com/t/javascript-loops/14681)
*   [Object.prototype.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

**باستخدام Array.every ()**

 `function truthCheck(collection, pre) { 
  return collection.every(function (element) { 
    return element.hasOwnProperty(pre) && Boolean(element[pre]); 
  }); 
 } 
 
 // test here 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLny/0)

### شرح الشفرة:

*   يستخدم الطريقة "every" الأصلية لاختبار ما إذا كانت جميع العناصر في الصفيف تجتاز الاختبار.
*   سوف يساعد هذا الرابط [Array.prototype.every ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

#### روابط ذات صلة

*   [JS Array.prototype.every ()](http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287)
*   [MDN Array.prototype.every ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function truthCheck(collection, pre) { 
  // Is everyone being true? 
  return collection.every(obj => obj[pre]); 
 } 
 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/E2u6/0)

### شرح الشفرة:

*   _لكل_ كائن في صفيف `collection` ، تحقق من صحة خاصية الكائن التي تم تمريرها في المعلمة `pre`
*   `Array#every` أسلوب يتحقق داخلياً إذا كانت القيمة التي يتم إرجاعها من رد الاتصال صحيحة.
*   إرجاع `true` إذا كان يمر _لكل_ كائن. خلاف ذلك ، تعود `false` .

#### روابط ذات صلة

*   [`Array#every`](http://devdocs.io/javascript/global_objects/array/every)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.