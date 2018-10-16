---
title: Return Largest Numbers in Arrays
localeTitle: أكبر عدد من المصفوفات في المصفوفة
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

سوف تحصل على صفيف يحتوي على صفائف فرعية من الأرقام وتحتاج إلى إرجاع صفيف مع أكبر رقم من كل من المصفوفات الفرعية.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

سوف تحتاج إلى تتبع الصفيف مع الإجابة وأكبر عدد من كل مجموعة فرعية.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

يمكنك العمل مع صفائف متعددة الأبعاد بواسطة `Array[Index][SubIndex]`

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

انتبه جيدًا إلى توقيت تخزين المتغيرات عند العمل مع الحلقات

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحلول في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

**(النهج الإجرائي)**

 `function largestOfFour(arr) { 
  var results = []; 
  for (var n = 0; n < arr.length; n++) { 
    var largestNumber = arr[n][0]; 
    for (var sb = 1; sb < arr[n].length; sb++) { 
      if (arr[n][sb] > largestNumber) { 
        largestNumber = arr[n][sb]; 
      } 
    } 
 
    results[n] = largestNumber; 
  } 
 
  return results; 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/734)

### شرح الشفرة:

*   قم بإنشاء متغير لتخزين _النتائج_ كصفيف.
*   قم بإنشاء حلقة خارجية للتكرار خلال الصفيف الخارجي.
*   إنشاء متغير ثاني لاحتواء أكبر عدد وتهيئة الرقم الأول. يجب أن يكون هذا خارج حلقة داخلية لذلك لن يتم إعادة تعيينه حتى نجد عددًا أكبر.
*   إنشاء حلقة داخلية قال للعمل مع المصفوفات الفرعية.
*   تحقق مما إذا كان عنصر المصفوفة الفرعية أكبر من العدد الأكبر المخزن حاليًا. إذا كان الأمر كذلك ، قم بتحديث الرقم في المتغير.
*   بعد الحلقة الداخلية ، احفظ أكبر رقم في الموضع المقابل داخل مصفوفة `results` .
*   وأخيراً أعد صفها.

#### روابط ذات صلة

*   [للحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

**(النهج التعريفي)**

 `function largestOfFour(arr) { 
  return arr.map(function(group){ 
    return group.reduce(function(prev, current) { 
      return (current > prev) ? current : prev; 
    }); 
  }); 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/733)

### شرح الشفرة:

*   نقوم بتعيين كل العناصر داخل المصفوفة الرئيسية إلى مصفوفة جديدة باستخدام `Array.prototype.map()` وإرجاع هذا المصفوفة `Array.prototype.map()` النهائية
*   داخل كل صفيف داخلي ، نقوم بتقليل محتوياته إلى قيمة واحدة باستخدام `Array.prototype.reduce()`
*   تأخذ وظيفة رد الاتصال التي تم تمريرها إلى طريقة تقليل القيمة السابقة والقيمة الحالية وتقارن القيمتين
*   إذا كانت القيمة الحالية أعلى من القيمة السابقة ، فسيتم تعيينها كقيمة سابقة جديدة للمقارنة مع العنصر التالي داخل الصفيف أو إرجاعها إلى استدعاء أسلوب الخريطة إذا كان العنصر الأخير

#### روابط ذات صلة

*   [Array.prototype.map ()](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)
*   [Array.prototype.reduce ()](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [المشغلين التابعين](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

**(النهج التعريفي)**

 `function largestOfFour(arr) { 
  return arr.map(Function.apply.bind(Math.max, null)); 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/17)

### شرح الشفرة:

TL ؛ DR: نحن نبني وظيفة رد اتصال خاص (باستخدام طريقة `Function.bind` ) ، التي تعمل تمامًا مثل `Math.max` ولكن أيضًا لديها القدرة على اتخاذ `Math.max` `Function.prototype.apply` `Math.max` ![:smiley:](https://forum.freecodecamp.com/images/emoji/emoji_one/smiley.png?v=3 ": مبتسم:")

*   نبدأ من خلال رسم الخرائط من خلال العناصر داخل المصفوفة الرئيسية. معنى كل واحدة من المصفوفات الداخلية.
*   الآن الحاجة إلى وظيفة رد اتصال للعثور على الحد الأقصى من كل مجموعة الداخلية التي تقدمها الخريطة.

لذا نريد إنشاء وظيفة تقوم بعمل `Math.max` وتقبل الإدخال كصفيف (والذي لا يتم افتراضياً عن `Math.max` ).

بعبارة أخرى ، سيكون الأمر لطيفًا وبسيطًا إذا نجح هذا بنفسه:

`Math.max([9, 43, 20, 6]); // Resulting in 43`

للأسف ، لا.

*   للقيام بعمل قبول الوسيطات في شكل مصفوفة ، توجد هذه الطريقة `Function.prototype.apply` ، ولكنها تعقّد الأشياء قليلاً _باستدعاء_ وظيفة _السياق_ .

أي `Math.max.apply(null, [9, 43, 20, 6]);` يمكن استدعاء شيء مثل أسلوب `Max.max` . ما نبحث عنه ... تقريبا.

نحن هنا نعتبر `null` _سياق سياق_ `Function.prototype.apply` حيث لا يحتاج `Math.max` إلى أي سياق.

*   بما أن `arr.map` يتوقع وظيفة رد اتصال ، وليس مجرد تعبير ، فإننا نقوم بإنشاء دالة خارج التعبير السابق باستخدام الأسلوب `Function.bind` .
    
*   منذ ، `Function.prototype.apply` هو _طريقة_ ثابتة _لكائن_ `Function` نفسه ، يمكننا الاتصال `Function.prototype.bind` على `Function.prototype.apply` ie `Function.prototype.apply.bind` .
    
*   الآن نقوم بتمرير _السياق_ للدعوة `Function.prototype.apply.bind` (في هذه الحالة نريد `Math.max` حتى نتمكن من الحصول على وظائفه).
    
*   نظرًا لأن الأسلوب `Function.prototype.apply` المضمن سيتطلب أيضًا سياقًا كوسيطة أولى ، نحتاج إلى تمريره في _سياق_ زائف.
    
    *   لذلك ، فإننا نمر `null` `Math.max` ثانية إلى `Function.prototype.apply.bind` الذي يعطي _سياقًا_ لطريقة `Math.max` .
        
    *   نظرًا لأن ، `Math.max` مستقل عن أي _سياق_ ، فإنه يتجاهل _السياق_ الزائف المعطى بواسطة استدعاء الأسلوب `Function.prototype.apply` .
        
    *   وبالتالي ، يجعل `Function.prototype.apply.bind(Math.max, null)` دالة جديدة تقبل قيم `arr.map` بمعنى المصفوفات الداخلية.
        

#### روابط ذات صلة

*   [Math.max](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
*   [Function.prototype.apply على DevDocs](http://devdocs.io/#q=js+Function+apply)
*   [Function.bind على DevDocs](http://devdocs.io/#q=js+Function+bind)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.