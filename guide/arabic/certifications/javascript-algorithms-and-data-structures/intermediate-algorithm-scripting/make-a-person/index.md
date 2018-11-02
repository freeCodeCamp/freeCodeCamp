---
title: Make a Person
localeTitle: اصنع شخصا
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

عندما بدأت البرنامج ، برزت للتو في إنشاء المهام الست المذكورة في التفاصيل. ومع ذلك ، لم يكن بهذه البساطة. إن ابتكارها كوظيفة ليس بالطريقة الصحيحة ، كان علي أن أقوم بإنشائها بطريقة مختلفة لجعلها مفتاحًا.

هناك أيضا جزء صعب لأنك تحتاج إلى ستة مفاتيح لا أكثر أو أقل ، لذلك في البداية كان لدي المتغير الذي يخزن الاسم الأصلي كمفتاح أيضا والذي كان خطأ.

أما بالنسبة لاستخدام الصفيف ، فهو اختياري ، يمكنك أيضًا إنشاء متغير جديد لإمساك السلسلة المنفصلة إذا كنت ترغب في ذلك ، ولكن من الأسهل التعامل مع الصفيف حيث أن السلاسل غير قابلة للتغيير.

اقرأ التعليمات بعناية ، فهو دائمًا تلميح جيد لتشغيل الشفرة والتحقق من نتائج الاختبار بحيث تعرف ما تتوقعه ولكن لا تثبت نفسك في ذلك. بمجرد أن تفهم ما تحتاج إلى القيام به ، فإن هذه المشكلة سهلة ومباشرة.

#### روابط ذات صلة

*   [إغلاق](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
*   [تفاصيل طراز كائن](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

استخدم **هذا** الترميز لإنشاء المفاتيح بدلاً من الدوال العادية: هذا يعني بدلاً من `var varName = function() {/*...*/}` يجب عليك استخدام `this.varName = function() {/*...*/}`

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

يحتوي البرنامج على اختبار يتحقق من عدد المفاتيح التي استخدمتها ، يجب أن يكون ستة ، ستة المذكورة في قسم التفاصيل. هذا يعني إذا كنت بحاجة إلى العمل مع المتغيرات ، وجعلها محلية وليس مفتاح: `this.fullName = firstAndLast;`

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

في كثير من الأحيان لا تعمل الشفرة بالطريقة التي تتوقعها بسبب أسماء المتغيرات الخاطئة ، تأكد من التحقق من تهجئتها بالطريقة الصحيحة. هذا يحدث لنا جميعا في مرحلة ما.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 4

إذا كنت تواجه مشاكل في كتابة أساليب `setter` ، في ما يلي نموذج لأسلوب `set` :

 `this.setFullName = function(input) { 
  // Insert your code here 
 } 
` 

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `var Person = function(firstAndLast) { 
  var fullName = firstAndLast; 
 
  this.getFirstName = function() { 
    return fullName.split(" ")[0]; 
  }; 
 
  this.getLastName = function() { 
    return fullName.split(" ")[1]; 
  }; 
 
  this.getFullName = function() { 
    return fullName; 
  }; 
 
  this.setFirstName = function(name) { 
    fullName = name + " " + fullName.split(" ")[1]; 
  }; 
 
  this.setLastName = function(name) { 
    fullName = fullName.split(" ")[0] + " " + name; 
  }; 
 
  this.setFullName = function(name) { 
    fullName = name; 
  }; 
 }; 
 
 var bob = new Person('Bob Ross'); 
 bob.getFullName(); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLov/0)

### شرح الشفرة:

*   قم بإنشاء متغير سيجعل نسخة من الاسم الكامل الذي تم تمريره كمعلمة.
*   ثم يمكننا المضي قدمًا لإنشاء الطرق الست المطلوبة وإعادة ما يُطلب منك.
*   بالنسبة للمستوطنين ، يمكننا استخدام الانقسام لتحويل الاسم بالكامل إلى مصفوفة من الأسماء الأولى والأخيرة وسَلسَلة الجزء غير المتغير من الاسم مع ما تم تمريره كمعلمة.

#### روابط ذات صلة

*   [كيفية بناء الأشياء](https://www.freecodecamp.org/challenges/build-javascript-objects)
*   [بناء الأشياء مع وظائف](https://www.freecodecamp.org/challenges/construct-javascript-objects-with-functions)
*   [قم بتعريف الكائنات كمتغيرات](https://www.freecodecamp.org/challenges/declare-javascript-variables)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.