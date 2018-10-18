---
title: Stand in Line
localeTitle: قف على الصف
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

في علوم الكمبيوتر ، _قائمة الانتظار_ هي **بنية بيانات** مجردة حيث يتم حفظ العناصر بالترتيب. يمكن إضافة عناصر جديدة في الجزء الخلفي من **قائمة الانتظار** ويتم أخذ العناصر القديمة من أمام **قائمة الانتظار** .

اكتب دالة `nextInLine` والتي تأخذ صفيف ( **arr** ) ورقم ( **item** ) كوسيطة. أضف الرقم إلى نهاية الصفيف ، ثم أزل أول عنصر في الصفيف. يجب أن تقوم الدالة `nextInLine` بإرجاع العنصر الذي تمت إزالته.

*   تغيير الرمز أدناه `//Your Code here` `//Change this line` .
*   تأكد من أنك تقوم بتحرير داخل وظيفة `nextInLine` .
*   استخدم وظيفة مصفوفة تعلمتها لإضافة **العنصر** إلى نهاية صفيف **arr** .
*   استخدم وظيفة مصفوفة تعلمتها لإزالة العنصر الأول من صفيف **arr** .
*   إرجاع العنصر إزالتها.

#### روابط ذات صلة

*   [تحدي: التعامل مع صفائف بدفع ()](http://www.freecodecamp.com/challenges/manipulate-arrays-with-push)
*   [تحدي: التعامل مع صفائف مع shift ()](http://www.freecodecamp.com/challenges/manipulate-arrays-with-shift)
*   [التحدي: تمرير القيم إلى دالات مع الوسيطات](http://www.freecodecamp.com/challenges/passing-values-to-functions-with-arguments)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

تضيف طريقة `push()` عنصرًا إلى نهاية صفيف.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

تقوم طريقة `shift()` بإزالة العنصر الأول من المصفوفة. كما تقوم بإرجاع العنصر الذي تمت إزالته.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

وظيفة `nextInLine` يستخدم **آر** **والبند.** هذه هي ما ستستخدمه الاختبارات لتمرير عناصر الصفيف التي سيختبرونها. انها تسمح للوظيفة لتكون قابلة لإعادة الاستخدام. لا تجزئ أي من الاختبارات داخل الوظيفة.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function nextInLine(arr, item) { 
  // Your code here 
  arr.push(item); 
  var removed = arr.shift(); 
  return removed;  // Change this line 
 } 
` 

### شرح الشفرة:

*   دفع **البند** في نهاية **arr** .
*   استدعاء الأسلوب `shift()` على **arr** للحصول على العنصر الأول وتخزينها في **إزالتها** .
*   العودة **إزالتها** .

**مثال تشغيل**

*   اختبار `nextInLine([2,1]);` أشواط.
*   يتم `nextInLine` الدالة `nextInLine` . **arr** يصبح \[2\]. يصبح **البند** 1.
*   `arr.push(item);` يدفع 1 إلى \[2\]. إذن **صار arr** الآن \[2،1\].
*   `var removed = arr.shift();` يزيل العنصر الأول. إذن **arr** هو الآن \[1\]. تمت إزالة 2 ويتم تخزينها في **إزالتها** .
*   `return removed;` 2 يتم إرجاعها.

**_ملاحظة_** : أنت لا تحتاج فعليًا إلى **إزالة** المتغير. يمكن إرجاع العنصر الذي تمت إزالته مباشرةً باستخدام `return arr.shift();` .