---
title: Reverse a String
localeTitle: عكس سلسلة
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

نحتاج أن نأخذ السلسلة ونعكسها ، لذلك إذا قرأ "مرحبا" في الأصل ، سيقرأ الآن "olleh". سنحتاج إلى تقسيم السلسلة ، وبالتالي سوف نعمل مع Arrays أيضًا.

#### روابط ذات صلة

*   [str.split ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [arr.reverse ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
*   [arr.join ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

ابدأ بتجزئة السلسلة بأحرف.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

ابحث عن وظيفة مدمجة لعكس سلسلة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

لا تنسى الانضمام إلى الشخصيات مرة أخرى بعد عكسها.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function reverseString(str) { 
  return str.split('').reverse().join(''); 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU)

### شرح الشفرة:

*   هدفنا هو أخذ الإدخال ، `str` ، وإعادته في الاتجاه المعاكس. خطوتنا الأولى هي تقسيم السلسلة بالأحرف باستخدام `split('')` . لاحظ أننا لا نترك أي شيء بين علامات الاقتباس المفردة ، وهذا يخبر الدالة بتقسيم السلسلة لكل حرف.
    
*   استخدام الدالة `split()` سيحول السلسلة إلى مجموعة من الأحرف ، ضع ذلك في الاعتبار بينما نمضي قدمًا.
    
*   بعد ذلك ، نقوم _بربط_ الدالة `reverse()` ، والتي تأخذ مجموعة من الأحرف الخاصة بنا وتقوم بإرجاعها.
    
*   وأخيرًا ، فإننا `join('')` _سلسلة_ `join('')` لإعادة أحرفنا إلى سلسلة. لاحظ مرة أخرى أننا لم نترك أي مسافات في الوسيطة للانضمام ، وهذا يجعل من أن مجموعة الصفوف مرتبطة معاً بكل حرف.
    

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.