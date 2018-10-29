---
title: Falsy Bouncer
localeTitle: فلسى الحارس
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/5/55dedad40d9f3f662c70d1eac4effc00c7d26bd9.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

قم بإزالة كافة قيم [الفالسة](https://guide.freecodecamp.org/javascript/falsy-values/) من صفيف.

#### روابط ذات صلة

*   [القيم الفارسية](https://guide.freecodecamp.org/javascript/falsy-values/)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

Falsy هو شيء يتم تقييمه لـ FALSE. لا يوجد سوى ستة قيم خالية في جافا سكريبت: غير معرفة ، و null ، و NaN ، و 0 ، و "" (سلسلة فارغة) ، و false بالطبع.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

نحتاج إلى التأكد من أن لدينا جميع القيم المزيفة لمقارنتها ، يمكننا أن نعرفها ، ربما مع وظيفة تحتوي على جميع القيم الخاطئة ...

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

ثم نحتاج إلى إضافة `filter()` مع وظيفة قيم الفالس ...

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function bouncer(arr) { 
  return arr.filter(Boolean); 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/32)

### شرح الشفرة:

يتوقع أسلوب `Array.prototype.filter` دالة تقوم بإرجاع قيمة `Boolean` تأخذ وسيطة واحدة وترجع `true` لقيمة [صواب](http://forum.freecodecamp.com/t/javascript-truthy-value/15975) أو `false` لقيمة [فلسي](https://guide.freecodecamp.org/javascript/falsy-values/) . ومن ثم فإننا نمر بالوظيفة `Boolean` المدمجة.

#### روابط ذات صلة

*   [منطقية](http://forum.freecodecamp.com/t/javascript-boolean/14311)
*   [Truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975)
*   [Array.prototype.filter ()](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:trophy:](https://forum.freecodecamp.com/images/emoji/emoji_one/trophy.png?v=3 ":غنيمة:") ائتمانات:

إذا وجدت هذه الصفحة مفيدة ، فيمكنك تقديم الشكر من خلال نسخها ولصقها في الدردشة الرئيسية:

**`Thanks @renelis @abhisekp @Rafase282 for your help with Algorithm: Falsy Bouncer`**

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.