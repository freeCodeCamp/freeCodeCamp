---
title: Word Blanks
localeTitle: كلمة الفراغات
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

سوف نستخدم الآن معرفتنا بالسلاسل لبناء لعبة كلمات نمط **Mad Libs التي نسميها** "Word Blanks". ستقوم بإنشاء جملة نمط "Fill in the Blanks" (اختياريًا مرحًا) "Fill in the Blanks".

ستحتاج إلى استخدام معاملات السلسلة لإنشاء سلسلة جديدة ، **نتيجة** ، باستخدام المتغيرات المتوفرة: **myNoun** و **myAdjective** و **myVerb** و **myAdverb** .

ستحتاج أيضًا إلى استخدام سلاسل إضافية ، والتي لن تتغير ، ويجب أن تكون بين جميع الكلمات المقدمة. يجب أن يكون الإخراج جملة كاملة.

لقد قدمنا ​​إطارًا لاختبار نتائجك بكلمات مختلفة. ستقوم الاختبارات بتشغيل وظيفتك مع العديد من المدخلات المختلفة للتأكد من ظهور جميع الكلمات المقدمة في الإخراج ، بالإضافة إلى سلاسل إضافية.

*   تغيير الرمز أدناه `//Your Code here` `//Change this line` .
*   لاحظ أن تقوم بتحرير داخل الكلمة `wordBlanks()` .
*   سيكون لديك أساسا إنشاء جملة مع متغيرات السلسلة المقدمة.

#### روابط ذات صلة

*   [جنون ليبس](https://en.wikipedia.org/wiki/Mad_Libs)
*   [التحدي: بناء سلاسل مع المتغيرات](http://www.freecodecamp.com/challenges/constructing-strings-with-variables)
*   [تحدي: سلاسل متسلسلة مع Plus Operator](http://www.freecodecamp.com/challenges/concatenating-strings-with-plus-operator)
*   [تحدي: سلاسل متسلسلة مع Plus Equals Operator](http://www.freecodecamp.com/challenges/concatenating-strings-with-the-plus-equals-operator)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

`+` يمكن استخدامها _لسَلسَلة_ السلاسل.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

مثلما يمكنك سلسلة السلاسل بالتسلسل ، يمكنك تعيينها إلى متغير موجود بدلاً من واحدة جديدة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

`+=` سيسمح لك باستخدام متغير موجود ، نوع سلسلة في هذه الحالة. تذكر أن تضيف حروفك **غير** الموجودة بين كل متغير.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) { 
    var result = ""; 
    // Your code below this line 
    result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+"."; 
 
    // Your code above this line 
  return result; 
 } 
 
 // Change the words here to test your function 
 wordBlanks("dog", "big", "ran", "quickly"); 
` 

**مثال تشغيل**

*   اختبار `wordBlanks("dog", "big", "ran", "quickly");` أشواط.
*   يتم اعلان **النتيجة** المتغيرة بسلسلة فارغة `""` .
*   وسيتم تغيير **النتيجة** مع سلسلة جديدة تتألف من سلاسل متسلسلة "كلب" ، "كبير" ، "ركض" ، "بسرعة" من خلال المتغيرات **myNoun** ، **myAdjective** ، **myVerb** ، **myAdverb** على التوالي ؛ يتم تغيير الترتيب وإضافة مسافة بيضاء.
*   يتم إرجاع **النتيجة** .

### شرح الشفرة:

*   استخدم **النتيجة** لسَلسَلة المتغيرات المحددة.
*   كلمات منفصلة مع المسافات البيضاء والكلمات المناسبة لتشكيل الجملة كاملة.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.