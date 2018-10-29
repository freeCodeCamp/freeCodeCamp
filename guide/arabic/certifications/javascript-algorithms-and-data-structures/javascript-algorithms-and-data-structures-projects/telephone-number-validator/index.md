---
title: Telephone Number Validator
localeTitle: مدقق رقم الهاتف
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

المهمة ليست صعبة الفهم ، وتنفيذها هو الجزء الأصعب. لديك للتحقق من صحة رقم هاتف في الولايات المتحدة. هذا يعني أن هناك كمية معينة من الأرقام المطلوبة ، بينما لا تحتاج إلى وضع رمز البلد ، ستظل بحاجة إلى رمز المنطقة واستخدام أحد التنسيقات القليلة المسموح بها.

#### روابط ذات صلة

*   [التعبير العادي](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
*   [regexpal.com](http://regexpal.com/)
*   [regex101.com/](https://regex101.com/#javascript)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

لا توجد طريقة حول ذلك ، سوف تحتاج إلى فرشاة مهارات التعبيرات العادية الخاصة بك.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

حاول استخدام موقع من القائمة السابقة لاختبار التعبير المعتاد أثناء قيامك بإنشائه.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

ابدأ بمحاولة الحصول عليها للتحقق من صحة كل تنسيق من المثال ، كل سطر يجب أن يأخذ سطرًا جديدًا ، بمجرد تحديدهم جميعًا ، ثم إضافة أمثلة لا يجب تحديدها والتأكد من عدم تحديدها.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function telephoneCheck(str) { 
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/; 
   return regex.test(str); 
 } 
 telephoneCheck("555-555-5555"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLo9/0)

### شرح الشفرة:

*   `^` يدل على بداية السلسلة.
*   `(1\s?)?` يسمح "1" أو "1" إذا كان هناك واحد.
*   `\d{n}` يتحقق من عدد n من الأرقام بالضبط ، لذلك يتحقق `\d{3}` ثلاثة أرقام.
*   `x|y` بالتحقق إما x OR y لذا `(\(\d{3}\)|\d{3})` يتحقق من ثلاثة أرقام محاطة بأقواس أو ثلاثة أرقام من تلقاء نفسها بدون أقواس.
*   `[\s\-]?` يتحقق من المساحات أو الشرطات بين مجموعات الأرقام.
*   `$` يدل على نهاية السلسلة. في هذه الحالة ، يتم استخدام بداية `^` ونهاية السلسلة `$` في التعبير العادي لمنعه من مطابقة أي سلسلة أطول قد تحتوي على رقم هاتف صالح (على سبيل المثال. "s 555 555 5555 3").
*   وأخيرًا ، نستخدم `regex.test(str)` لاختبار ما إذا كانت السلسلة تلتزم بالتعبير العادي أم أنها ترجع إلى `true` أو `false` .

#### روابط ذات صلة

*   [Regex.test ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
    
*   [دليل التعبير العادي](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
    

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function telephoneCheck(str) { 
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/; 
  return re.test(str); 
 } 
 telephoneCheck("555-555-5555"); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLoa/0)

### شرح الشفرة:

هذا مثال على حل شامل وشامل للغاية للتحقق من صحة جانب العميل لأرقام الهواتف الأمريكية. في مثل هذه الحالات ، قد يكون من الأفضل بكثير ومن الأسهل تنفيذ هذه المكتبة [libphonenumber](https://github.com/googlei18n/libphonenumber) .

#### روابط ذات صلة

*   [Regex.test ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
*   [libphonenumber](https://github.com/googlei18n/libphonenumber)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.