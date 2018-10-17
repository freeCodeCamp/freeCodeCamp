---
title: Mutations
localeTitle: الطفرات
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

*   إرجاع true إذا احتوت السلسلة في العنصر الأول من المصفوفة على كافة أحرف السلسلة في العنصر الثاني من المصفوفة.

#### روابط ذات صلة

*   [String.indexOf ()](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

*   إذا كان كل شيء صغيرًا ، فسيكون من الأسهل مقارنته.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

*   قد يكون من السهل التعامل مع سلاسلنا إذا كانت صفائف الأحرف.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

*   حلقة قد تساعد. استخدم `indexOf()` للتحقق مما إذا كان حرف الكلمة الثانية موجودًا على الأول.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

**إجرائي**

 `function mutation(arr) { 
  var test = arr[1].toLowerCase(); 
  var target = arr[0].toLowerCase(); 
  for (var i=0;i<test.length;i++) { 
    if (target.indexOf(test[i]) < 0) 
      return false; 
  } 
  return true; 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/30)

### شرح الشفرة:

أولاً ، نصنع السمتين في المصفوفة الصغيرة. `test` سيعقد ما نبحث عنه في `target` .  
ثم نتعقب من خلال شخصيات الاختبار الخاصة بنا وإذا لم يتم العثور على أي منها `return false` .

إذا تم العثور عليهم _جميعًا_ ، ستنتهي الحلقة دون إرجاع أي شيء `return true` إلى `return true` .

#### روابط ذات صلة

*   [String.toLowerCase ()](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [للحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

**إعلاني**

 `function mutation(arr) { 
  return arr[1].toLowerCase() 
    .split('') 
    .every(function(letter) { 
      return arr[0].toLowerCase() 
        .indexOf(letter) != -1; 
    }); 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/31)

### شرح الشفرة:

اسحب السلسلة الثانية ، صغيرة وتحويلها إلى صفيف. ثم تأكد من أن _كل_ واحد من _أحرفه_ هو جزء من السلسلة الأولى الأقل تدقيقًا.

`Every` سيعطي أساسا لكم حرفا حرفا للمقارنة، وهو ما كنا نفعله باستخدام `indexOf` على السلسلة الأولى. سوف تعطيك `indexOf` -1 إذا كان `letter` الحالي مفقودًا. نتحقق من أن لا يكون الأمر كذلك ، لأنه إذا حدث هذا مرة واحدة فسيكون `every` خطأ.

#### روابط ذات صلة

*   [Array.split ()](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.every ()](http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.