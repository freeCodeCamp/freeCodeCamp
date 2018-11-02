---
title: Wherefore Art Thou
localeTitle: ولهذا السبب انت الفن
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

اكتب خوارزمية تأخذ `array` للوسيطة الأولى وترجع `array` تحتوي على كل `object` الذي يطابق كل الخصائص والقيم في `Object` تم تمريره كمعلمة ثانية.

#### روابط ذات صلة

*   [للحلقات](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
*   [Array.prototype.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) [Object.keys ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

يمكنك استخدام `for` حلقة أو `Array.prototype.filter` الأسلوب.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

حاول استخدام الأسلوب `Object.prototype.hasOwnProperty` لمعرفة ما إذا كان اسم خاصية موجود في كائن (كخاصيته الخاصة).

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

تحقق من تكافؤ `Object` في `collection` مع تمرير `Object` كمعلمة ثانية إلى الدالة `whatIsInAName` .

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  // filter the collection 
  return collection.filter(function (obj) { 
    for(var i = 0; i < srcKeys.length; i++) { 
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) { 
        return false; 
      } 
    } 
    return true; 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLmh/0)

### شرح الشفرة:

*   نحن تصفية من خلال الصفيف باستخدام. `.filter()` .
*   باستخدام `for loop` سنقوم بتكرارها خلال كل عنصر في الكائن.
*   نستخدم `if statement` للتحقق مما إذا كان الكائن في المجموعة لا يحتوي على المفتاح وقيمة الخاصية لا تتطابق مع القيمة في المصدر.
*   نعود `false` إذا `if statement` المذكور أعلاه صحيحًا. خلاف ذلك ، نعود `true` ؛

#### روابط ذات صلة

*   للحلقات
*   Array.prototype.filter ()
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  return collection.filter(function (obj) { 
    return srcKeys.every(function (key) { 
      return obj.hasOwnProperty(key) && obj[key] === source[key]; 
    }); 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLmi/0)

### شرح الشفرة:

*   نقوم بالتصفية من خلال المجموعة باستخدام `.filter()` .
*   بعد ذلك ، نعرض قيمة `Boolean` `.filter()` .
*   وأخيرًا ، يتم تقليل القيمة `Boolean` يتم إرجاعها للأسلوب `.every()` .

#### روابط ذات صلة

*   Array.prototype.filter ()
*   Array.prototype.every ()
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  // filter the collection 
  return collection.filter(function (obj) { 
    return srcKeys 
      .map(function(key) { 
        return obj.hasOwnProperty(key) && obj[key] === source[key]; 
      }) 
      .reduce(function(a, b) { 
        return a && b; 
      }); 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLmj/0)

### شرح الشفرة:

*   نبدأ من خلال التصفية من خلال `collection` `Array.filter()` .
*   بعد ذلك ، نقوم بالتخطيط من خلال جميع المفاتيح ونرجع قيم Boolean استنادًا إلى شروط الاختيار: يجب أن يتواجد كل من المفتاح والقيمة المقابلة له داخل الكائن الذي نقوم بتصفيته.
*   ثم نقوم بتخفيض القيم المنطقية المعينة إلى منطقي واحد يشير إلى ما إذا كانت جميع srcKeys تمر الشروط المحددة أعلاه.
*   سيتم استخدام منطقية واحدة للتصفية خلال المجموعة.

#### روابط ذات صلة

*   Array.prototype.filter ()
*   Array.prototype.reduce ()
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.