---
title: Where Do I Belong
localeTitle: إلى أين أنتمي
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

هذا يمكن أن يكون مشكلة صعبة لفهم. تحتاج إلى العثور على مكان في الصفيف يجب إدراج رقم بواسطة الأمر ، وإرجاع الفهرس حيث يجب أن تذهب.

#### روابط ذات صلة

*   [شبيبة صفيف الفرز](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

أول شيء يجب فعله هو ترتيب الصفيف من الأسفل إلى الأعلى ، فقط لجعل الرمز أسهل. هذا هو المكان الذي يأتي فيه النوع ، فهو يحتاج إلى وظيفة رد اتصال حتى تضطر إلى إنشائه.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

بمجرد فرز الصفيف ، قم فقط بالتحقق من الرقم الأول الأكبر وإرجاع الفهرس.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

إذا لم يكن هناك مؤشر لهذا الرقم ، فسيتعين عليك التعامل مع هذه الحالة أيضًا.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function getIndexToIns(arr, num) { 
  arr.sort(function(a, b) { 
    return a - b; 
  }); 
 
  for (var a = 0; a < arr.length; a++) { 
    if (arr[a] >= num) 
      return a; 
  } 
 
  return arr.length; 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/36)

## شرح الشفرة:

*   أولاً ، أقوم بتصنيف الصفيف باستخدام. `.sort(callbackFuntion)` حسب الأقل إلى الأعلى ، من اليسار إلى اليمين.
*   ثم أستخدم حلقة for لمقارنة العناصر الموجودة في الصفيف بدءًا من أصغرها. عندما يكون عنصر في الصفيف أكبر من الرقم الذي نقارنه ، فإننا نعيد الفهرس كعدد صحيح.

#### روابط ذات صلة

*   [parseInt ()](http://forum.freecodecamp.com/t/javascript-parseint/14686)

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function getIndexToIns(arr, num) { 
  // Find my place in this sorted array. 
  var times = arr.length; // runs the for loop once for each thing in the array 
  var count = 0; 
  for (var i=0;i<times;i++){ 
    if(num>arr[i]){count++;} } // counts how many array numbers are smaller than num 
    return count; // the above equals num's position in a sorted array 
 } 
 
 getIndexToIns([40, 60], 50); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/2547)

## شرح الشفرة:

*   أنا لا فرز مصفوفة إدخال arr
*   أقوم بحساب عد للفرز كلما كان إدخال num أكبر من رقم إدخال arr.
*   هذا الرقم يساوي ما هو موضع num في مصفوفة مرتبة.

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

بواسطة [HarinaPana](/u/harinapana)

 `function getIndexToIns(arr, num) { 
 
  arr.sort(function(a, b) { 
  return a - b; 
  }); 
 
  var i = 0; 
  while (num > arr[i]) { 
  i++; 
  } 
 
  return i; 
 } 
 
 getIndexToIns([40, 60], 50); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/4135)

## شرح الشفرة:

*   فرز مجموعة موجودة.
*   تكرار خلال مجموعة أثناء التحقق إذا _الأسطوانات_ هي الأكبر.
*   ستتوقف الحلقة عندما لا تكون _num_ أكبر من _i_ وإرجاع العنصر الأخير محددًا.

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

بواسطة [faustodc](/u/faustodc)

 `function getIndexToIns(arr, num) { 
  arr.push(num); 
  arr.sort(function(a, b){return ab}); 
  return arr.indexOf(num); 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/EB10/1)

## شرح الشفرة:

*   أولاً ، نضيف عدد `num` إلى الصفيف باستخدام `push()` الذي يضيفه كعنصر آخر في الصفيف.
*   ثم نستخدم `sort()` مع وظيفة `function(a, b){return ab}` رد الاتصال `function(a, b){return ab}` لفرز الأرقام بترتيب تصاعدي.
*   وأخيرًا ، نعيد عنوان أو فهرس `num` في الصفيف باستخدام الدالة `indexOf()` .

#### روابط ذات صلة

*   [إدفع()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [فرز()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
*   [مؤشر()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

**باستخدام `.findIndex()`**

 `function getIndexToIns(arr, num) { 
  // sort and find right index 
  var index = arr.sort((curr, next) => curr > next) 
    .findIndex((currNum)=> num <= currNum); 
  // Returns proper answer 
  return index === -1 ? arr.length : index; 
 } 
 
 getIndexToIns([40, 60], 500); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/63)

## شرح الشفرة:

*   أولاً ، قم بفرز الصفيف بترتيب تصاعدي ، ويتم ذلك حاليًا باستخدام وظائف الصفيف للحد الأدنى من المساحة.
*   بمجرد فرز المصفوفة ، نقوم مباشرة بتطبيق `.findIndex()` حيث سنقوم بمقارنة كل عنصر في المصفوفة حتى نجد `num <= currNum` حيث أن الرقم الذي نريد إدراجه هو أقل أو يساوي الرقم الحالي رقم في التكرار.
*   ثم نستخدم العمليات الثلاثية للتحقق مما إذا حصلنا على فهرس تم إرجاعه أو `-1` . نحصل فقط على `-1` عندما لم يتم العثور على المعنى يعني عندما نحصل على خطأ بالنسبة لجميع العناصر في الصفيف ، وفي هذه الحالة ، يعني ذلك أنه يجب إدراج `num` في نهاية القائمة ومن ثمَّ ، لماذا نستخدم `arr.length` .

#### روابط ذات صلة

*   [Array.findIndex ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
*   [وظائف السهم](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
*   [مشغل ثلاثي](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

بواسطة [nivrith](/u/nivrith)

 `function getIndexToIns(arr, num) { 
 
 return arr.concat(num).sort((a,b) => ab).indexOf(num); 
 
 } 
 
 getIndexToIns([1,3,4],2); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/IUJE/0)

## شرح الشفرة:

*   نستخدم تسلسل الأسلوب لاستدعاء طريقة واحدة تلو الأخرى لحل المشكلة في سطر واحد. أولاً نقوم بدمج `arr` و `num` باستدعاء طريقة arr.concat (num)
*   ثم نستخدم `sort()` مع **وظيفة سهم** الاستعادة `(a, b) => return ab` لفرز الأرقام بترتيب تصاعدي
*   وأخيرًا ، نعيد عنوان أو فهرس `num` في الصفيف باستخدام طريقة `indexOf()`

#### روابط ذات صلة

*   [طريقة تسلسل في JavaScript](https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html)
*   [CONCAT ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=example)
*   [وظائف السهم](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.