---
title: Repeat a String Repeat a String
localeTitle: كرر سلسلة يكرر سلسلة
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

البرنامج بسيط جداً ، وعلينا أن نأخذ متغيراً ونعيد هذا المتغير إلى تكرار قدر معين من المرات. لا حاجة لإضافة مساحة أو أي شيء ، فقط استمر في تكرارها في سلسلة واحدة.

#### روابط ذات صلة

*   [كائن السلسلة العالمية](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

لا يمكنك تحرير السلاسل ، ستحتاج إلى إنشاء متغير لتخزين السلسلة الجديدة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

قم بإنشاء حلقة لتكرار الكود عدة مرات حسب الحاجة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

جعل المتغير إنشاء تخزين القيمة الحالية وإلحاق الكلمة إليها.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function repeatStringNumTimes(str, num) { 
  var accumulatedStr = ''; 
 
  while (num > 0) { 
    accumulatedStr += str; 
    num--; 
  } 
 
  return accumulatedStr; 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/19)

### شرح الشفرة:

*   قم بإنشاء متغير سلسلة فارغ لتخزين الكلمة المكررة.
*   استخدم حلقة while (أثناء) أو للحلقة لتكرار التعليمة البرمجية عدة مرات حسب الحاجة وفقًا لعدد `num`
*   ثم يجب علينا فقط إضافة السلسلة إلى المتغير الذي تم إنشاؤه في الخطوة الأولى ، وزيادة أو تقليل عدد `num` اعتمادًا على كيفية تعيين الحلقة.
*   في نهاية الحلقة ، قم بإرجاع المتغير للكلمة المكررة.

#### روابط ذات صلة

*   شبيبة أثناء حلقة
*   [شبيبة لشرح الحلقات](https://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function repeatStringNumTimes(str, num) { 
  if(num < 0) 
    return ""; 
  if(num === 1) 
    return str; 
  else 
    return str + repeatStringNumTimes(str, num - 1); 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/21)

### شرح الشفرة:

*   يستخدم هذا الحل العودية.
*   نتحقق مما إذا كانت قيمة `num` سالبة وترجع سلسلة فارغة إذا كانت صحيحة.
*   ثم نتحقق مما إذا كان يساوي 1 وفي هذه الحالة نقوم بإرجاع السلسلة نفسها.
*   إن لم يكن، ونضيف إلى سلسلة لدعوة من وظيفتنا مع `num` التي انخفضت بنسبة 1، الأمر الذي سيزيد من آخر `str` وآخر .. حتى في نهاية المطاف `num` هي 1. وتعود تلك العملية برمتها.

#### روابط ذات صلة

*   [وظائف - Recursion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function repeatStringNumTimes(str, num) { 
  return num > 0 ? str.repeat(num) : ''; 
 } 
 
 repeatStringNumTimes("abc", 3); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/85)

### شرح الشفرة:

*   هذا الحل يأخذ نهج إعلاني.
*   وهو مماثل للحل الثالث ، باستثناء أنه يستخدم نموذج المشغل الثلاثي لبيان `if` .

#### روابط ذات صلة

*   [JS Ternary](https://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.