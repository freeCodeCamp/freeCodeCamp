---
title: Convert Celsius to Fahrenheit
localeTitle: تحويل مئوية إلى فهرنهايت
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

الخوارزمية للتحويل من درجة مئوية إلى فهرنهايت هي درجة الحرارة في المرات المئوي `9/5` ، زائد `32` .

يتم منحك درجة **مئوية** متغيرة تمثل درجة الحرارة بالدرجة المئوية. استخدم المتغير **fahrenheit الذي** تم تعريفه بالفعل وقم بتطبيق الخوارزمية لتعيينه درجة الحرارة المقابلة في فهرنهايت.

#### روابط ذات صلة

*   [ترتيب العمليات: PEMDAS](http://www.purplemath.com/modules/orderops.htm)
*   [ترتيب العملية: الفيديو](https://www.khanacademy.org/math/pre-algebra/order-of-operations/order_of_operations/v/order-of-operations)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

ألقِ نظرة على الشفرة. هناك منطقة ليس من المفترض أن تقوم بتحريرها. من هناك ، اسأل نفسك - ما الذي استخدم هناك لم أره من قبل؟

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

ضع في اعتبارك **ترتيب العملية** تحقق من الارتباط في قسم _الروابط_ لمزيد من المعلومات.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `    function convertToF(celsius) { 
      // Only change code below this line 
      var fahrenheit = (celsius * (9/5)) + 32; 
 
      // Only change code above this line 
      if ( typeof fahrenheit !== 'undefined' ) { 
      return fahrenheit; 
      } else { 
        return 'fahrenheit not defined'; 
      } 
    } 
 
    // Change the inputs below to test your code 
    convertToF(30); 
` 

### شرح الشفرة:

*   أعلن متغير **فهرنهايت** .
*   تأكد من اتباع الترتيب الصحيح للعمليات الحسابية باستخدام الأقواس ( `()` ) عند الحاجة.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.