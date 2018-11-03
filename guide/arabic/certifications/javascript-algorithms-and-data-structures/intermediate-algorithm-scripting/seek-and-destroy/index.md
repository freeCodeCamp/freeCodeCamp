---
title: Seek and Destroy
localeTitle: تسعى وتدمر
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

هذه المشكلة صعبة بعض الشيء لأنك يجب أن تتعرف على الحجج ، حيث سيكون عليك العمل مع اثنين **أو أكثر** ولكن على النص الذي ترونه فقط. كثير من الناس ترميز هذا البرنامج لثلاث حجج. ستقوم بإزالة أي رقم من الوسيطة الأولى وهو نفس أي وسيطة أخرى.

#### روابط ذات صلة

*   [كائن الحجج](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.filter ()](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

تحتاج إلى العمل مع `arguments` كما لو كانت مجموعة منتظمة. أفضل طريقة هي تحويله إلى واحد.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

تحتاج إلى التصفية ، وهذا يعني أيضًا أنك تحتاج إلى إنشاء وظيفة رد اتصال. يمكنك استخدام أساليب مختلفة مثل: `indexOf()` ، `includes()` . إذا كنت بحاجة إلى طريقة أخرى ، فقد يكون `reduce()` أيضًا مفيدًا ؛ استمر في قراءة هذه المستندات!

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

لتحويل `arguments` إلى مصفوفة استخدم هذا الرمز `var args = Array.prototype.slice.call(arguments);`

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function destroyer(arr) { 
  var args = Array.prototype.slice.call(arguments); 
 
  for (var i = 0; i < arr.length; i++) { 
    for (var j = 0; j < args.length; j++) { 
      if (arr[i] === args[j]) { 
        delete arr[i]; 
      } 
    } 
  } 
  return arr.filter(Boolean); 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/95)

### شرح الشفرة:

1.  إنشاء صفيف من `arguments` باستخدام `Array.prototype.slice.call()` وتخزينها في `args` متغير. سنستخدم هذا للتحقق من `arr` .
    
2.  بدء الأساسية `for` حلقة لتكرار خلال `arr` . عش آخر `for` حلقة داخل أولا، وتغيير عدد صحيح متغير `j` وصول إلى وسائط. سيتم تكرار هذه الحلقة الثانية من خلال `args` .
    
    *   ضمن الحلقة الثانية إنشاء بيان `if` ، بالتحقق بدقة `===` أن الحالي val `arr[i]` يساوي `args[j]` .
        
    *   إذا كانت القيمة في المؤشر الحالي _تساوي_ في كل من المصفوفات، استخدم `delete` لإزالته من `arr` .
        
3.  خارج الحلقات المتداخلة: قم بإرجاع الصفيف المعدل باستخدام الكائن `Boolean` كمرشح لأي قيمة `null` تم إنشاؤها بواسطة عامل `delete` .
    

#### روابط ذات صلة

*   \[الحجج
*   [Array.filter ()](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)
*   [حذف](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
*   [منطقية](http://forum.freecodecamp.com/t/javascript-boolean/14311)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function destroyer(arr) { 
  var args = Array.from(arguments).slice(1); 
  return arr.filter(function(val) { 
    return !args.includes(val); 
  }); 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/Ck2m/0)

### شرح الشفرة:

1.  قم بتعريف متغير يسمى `args` وتعيينه يساوي كائن `Array` جديد `from()` `arguments` تم تمريرها إلى الدالة. على السطر نفسه أو التالي ، استخدم الطريقة `slice()` على `args` بدءًا من الفهرس الثاني ، 1. وهذا يفصل الوسيطات المستخدمة في التصفية في `args` الخاص من `args` .
    
2.  عودة مجموعة تصفيتها، وذلك باستخدام `includes()` في وظيفة رد الاتصال للتحقق مما إذا `val` _ليس_ في `args` . إرجاع `true` للحفاظ على القيمة في الصفيف الأصلي أو `false` لإزالته.
    

#### روابط ذات صلة

*   [الحجج](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.slice ()](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)
*   [Array.includes ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

## الحل المتقدم للكود:

 `const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i)); 
` 

### شرح الشفرة:

*   كود باستخدام صيغة ES6 لتعريف وظيفة باستخدام وظائف السهم.
*   استخدام عامل انتشار لاسترداد الحجج.
*   إرجاع الصف المفلتر ، باستخدام `includes()` .

#### روابط ذات صلة

*   [انتشار المشغل](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.