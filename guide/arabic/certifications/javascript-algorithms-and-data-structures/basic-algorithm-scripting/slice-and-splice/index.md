---
title: Slice and Splice
localeTitle: شريحة و لصق
---
## شريحة و لصق

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

نحتاج إلى نسخ كل عنصر من المصفوفة الأولى إلى المصفوفة الثانية بدءًا من الفهرس n. علينا أيضا أن نتأكد من أن المصفوفات الأصلية ليست متحولة. بمعنى ، لا يمكننا إجراء أي تغييرات على المصفوفات الأصلية.

#### روابط ذات صلة

*   [str.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
*   [str.splice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

قم بإنشاء نسخة من المصفوفة الثانية داخل الدالة. سيضمن ذلك عدم تحوّل الصفيف الأصلي. يمكن القيام بذلك عن طريق استخدام عملية الشريحة في الصفيف الثاني ، وتعيينه إلى متغير.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

قم بالالتفاف عبر كافة العناصر في الصفيف الأول. لكل عنصر في الصفيف الأول لصقه في المصفوفة المنسوخة في الفهرس المعطى كوسيطة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

زيادة المؤشر بعد إجراء لصق.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](https://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function frankenSplice(arr1, arr2, n) { 
  // It's alive. It's alive! 
  let localArray = arr2.slice(); 
  for (let i = 0; i < arr1.length; i++) { 
    localArray.splice(n, 0, arr1[i]); 
    n++; 
  } 
  return localArray; 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU)

### شرح الشفرة:

*   هدفنا هو أخذ جميع العناصر من `arr1` وإدخالها في `arr2` بدءًا من وضع الفهرس `n` . في نفس الوقت يجب علينا أن ensurethat لا `arr` أو `arr2` تم تحور.
    
*   باستخدام الدالة `slice()` يمكننا إنشاء نسخة طبق الأصل من `arr2` بدقة وتعيين نتيجة العملية إلى متغير ، `localArray` .
    
*   والآن بعد أن أصبح لدينا مجموعة يمكننا التحور عليها ، يمكننا التكرار من خلال كل عنصر في الصفيف الأول. لكل عنصر في الصفيف الأول يمكننا استخدام الدالة `splice()` لإدراج العنصر في فهرس `n` من `localArray` .
    
*   نحن زيادة مؤشر `n` تلو الآخر. سيضمن هذا أن كل عنصر من `arr1` يتم إدخاله في `localArray` في موضع الفهرس الصحيح.
    
*   وأخيرًا ، نعود إلى `localArray` الوظيفة.
    

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.