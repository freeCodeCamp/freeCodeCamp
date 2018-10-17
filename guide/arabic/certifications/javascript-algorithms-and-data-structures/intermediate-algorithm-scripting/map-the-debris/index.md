---
title: Map the Debris
localeTitle: رسم خريطة الحطام
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

أول شيء تفعله هو التعرف على ما هو البرنامج من خلال معرفة ما هي الفترة المدارية بالضبط. يجب عليك إرجاع صفيف جديد يحول متوسط ​​الارتفاع للعنصر إلى فتراتها المدارية. الأجزاء التي تم العثور عليها بشكل صعب هي العثور على الصيغة ، وتطبيقها ، وبالنسبة لبعض الناس ، وتعديل الكائنات عن طريق المفتاح. ومع ذلك ، هناك شيء غير واضح للغاية هو حقيقة أن البرنامج الخاص بك يجب أن يكون قادرا على التحقق من وجود أي عدد من الكائنات في الصفيف. هذا ما تم اختباره في الجزء الثاني.

#### روابط ذات صلة

*   [المداري](https://en.wikipedia.org/wiki/Orbital_period)
*   [كائنات شبيبة](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
*   [Math.PI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
*   [JS Math Pow](http://forum.freecodecamp.com/t/javascript-math-pow/14685)
*   [Math.sqrt ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
*   [Math.round ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

الصيغة المطلوبة هي:

![](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e212370f07c55165ff69f318ee1eed24779c7532.png)

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

استخدم `Math.round()` التالي كما هو مطلوب. `Math.ceil()` استخدام `Math.ceil()` بتمرير الاختبار الأول لكنه يفشل في الاختبار الثاني.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

تعرف على كيفية إزالة وإضافة مفتاح إلى كائن JavaScript.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
  var a = 2 * Math.PI; 
  var newArr = []; 
  var getOrbPeriod = function(obj) { 
    var c = Math.pow(earthRadius + obj.avgAlt, 3); 
    var b = Math.sqrt(c / GM); 
    var orbPeriod = Math.round(a * b); 
    delete obj.avgAlt; 
    obj.orbitalPeriod = orbPeriod; 
    return obj; 
  }; 
 
  for (var elem in arr) { 
    newArr.push(getOrbPeriod(arr[elem])); 
  } 
 
  return newArr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLow/0)

### شرح الشفرة:

*   **جنرال موتورز** و **earthRadius** على حد سواء تعطى لنا.
*   لتسهيل عملية تحرير التعليمات البرمجية وقراءتها ، يتم كتابة كل جزء من المعادلة بشكل منفصل.
*   قم **بإنشاء newArr** لتخزين `orbPeriod` .
*   **أ** هو 2 مرات بي. الجزء الذي هو ثابت على النطاق العالمي بينما الباقي جزء من وظيفة.
*   إنشاء دالة ، `gerOrbPeriod()` التي ستقوم `gerOrbPeriod()` العمل المطلوب لأي مقدار من الكائنات.
*   **ج** ( **earthRadius** + **avgAlt** ) إلى المكعب.
*   **b** هي الجذر التربيعي لـ **c** مقسومة على **GM** .
*   قم **بإنشاء orbPeriod** لتخزين المنتج من **a** و **b** ، مع وظيفة `Math.round()` المطبقة على تقريب ما يصل إلى العدد `Math.round()` التالي.
*   ثم نحذف المفتاح **avgAlt** ، ونضيف المفتاح الجديد وقيمته.

#### روابط ذات صلة

*   [JS For In Loop](http://forum.freecodecamp.com/t/javascript-for-in-loop/14665)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
 
  //Looping through each key in arr object 
  for(var prop in arr) { 
    //Rounding off the orbital period value 
    var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)); 
    //deleting the avgAlt property 
    delete arr[prop].avgAlt; 
    //adding orbitalPeriod property 
    arr[prop].orbitalPeriod = orbitalPer; 
  } 
 
  return arr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLoy/0)

### شرح الشفرة:

*   **جنرال موتورز** و **earthRadius** على حد سواء تعطى لنا.
*   يتم استخدام حلقة `for..in` للتكرار خلال كل قيمة في **arr** الصفيف المحدد.
*   يحتفظ **orbitalPer** بقيمة الفترة المدارية لكل تكرار يتم حسابه باستخدام الصيغة.
*   يتم حذف المفتاح **avgAlt** ، ويتم تعيين **orbitalPer** الموجود في **arr** .

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function orbitalPeriod(arr) { 
  var GM = 398600.4418; 
  var earthRadius = 6367.4447; 
 
  // Loop through each item in the array arr 
  arr.forEach(function(item) { 
    // Calculate the Orbital period value 
    var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)); 
    //Delete the avgAlt property 
    delete item.avgAlt; 
    //Add orbitalPeriod property 
    item.orbitalPeriod = tmp; 
  }); 
  return arr; 
 } 
 
 // test here 
 orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLoz/0)

### شرح الشفرة:

*   **جنرال موتورز** و **earthRadius** على حد سواء تعطى لنا.
*   يتم استخدام أسلوب `forEach()` لتنفيذ الوظيفة مرة واحدة لكل عنصر ( **عنصر** ) في **arr** .
*   يحتفظ **tmp** بقيمة الفترة المدارية لكل عنصر محسوب باستخدام الصيغة.
*   يتم حذف المفتاح **avgAlt** ، ويتم تعيين الفترة المدارية ( **tmp** ) التي تم العثور عليها إلى مفتاح **orbitalPeriod** .

#### روابط ذات صلة

*   [JS Array Prototype ForEach](http://forum.freecodecamp.com/t/javascript-array-prototype-foreach/14290)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.