---
title: Arguments Optional
localeTitle: الحجج اختياري
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/f/ff2fd8ffa014eea28587a8ef4933340d3dcc4b09.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

## ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

يمكن أن يكون الأمر معقدًا جدًا لفهم ما يجب فعله. هناك دائمًا العديد من الطرق لفعل شيء ما عند الترميز ولكن بغض النظر عن الخوارزمية المستخدمة ، يجب علينا إنشاء برنامج يقوم بما يلي:

*   لديه لإضافة رقمين تمريرها كمعلمات وإرجاع المبلغ.
*   لديها لمعرفة ما اذا كان أي من الأرقام هي الأرقام الفعلية، وإلا العودة **غير محدد** ووقف البرنامج هناك.
*   عليها أن تتحقق مما إذا كان لديها وسيطة واحدة أو اثنتين تم تمريرهما. أكثر يتم تجاهلها.
*   إذا كان يحتوي على وسيطة واحدة فقط ، فيجب عليه إرجاع دالة تستخدم هذا الرقم وتتوقع دالة أخرى ، ثم إضافتها.

### روابط ذات صلة

*   [المصفوفات](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
*   [نوع من](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [كائن الحجج](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

في كل مرة تتعامل فيها مع حجة ، عليك أن تتحقق مما إذا كانت رقمًا أم لا. لهذه الوظيفة التي تعالج هذه المهمة سيوفر لك رمز المتكررة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

عند العمل على الحالة التي يحتاج فيها إلى إرجاع الدالة ، فمن الحكمة أن تتحقق مما إذا كانت الحجة الأولى والوحيدة رقمًا مرة أخرى وتربط الشفرة في ذلك.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

في حالة تمرير وسيطة واحدة فقط ، لا تقلق بشأن كيفية تحريك الإدخال للوسيط الثاني ، فقط قم بتعيين تعريف الوظيفة بشكل صحيح وستعمل الأشياء على النحو الذي ينبغي عليه.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `    function addTogether() { 
      // Function to check if a number is actually a number 
      // and return undefined otherwise. 
      var checkNum = function(num) { 
        if (typeof num !== 'number') { 
          return undefined; 
        } else 
          return num; 
      }; 
 
      // Check if we have two parameters, check if they are numbers 
      // handle the case where one is not 
      // returns the addition. 
      if (arguments.length > 1) { 
        var a = checkNum(arguments[0]); 
        var b = checkNum(arguments[1]); 
        if (a === undefined || b === undefined) { 
          return undefined; 
        } else { 
          return a + b; 
        } 
      } else { 
        // If only one parameter was found, returns a new function that expects two 
        // Store first argument before entering the new function scope 
        var c = arguments[0]; 
 
        // Check the number again, must be outside the function to about returning an object 
        // instead of undefined. 
        if (checkNum(c)) { 
          // Return function that expect a second argument. 
          return function(arg2) { 
            // Check for non-numbers 
            if (c === undefined || checkNum(arg2) === undefined) { 
              return undefined; 
            } else { 
              // if numbers then add them. 
              return c + arg2; 
            } 
          }; 
        } 
      } 
    } 
 
    // test here 
    addTogether(2,3); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnz/0)

### شرح الشفرة:

*   أولاً ، أقوم بإنشاء دالة لغرض وحيد هو التحقق مما إذا كان الرقم في الواقع رقمًا وإرجاع غير معروف إذا لم يكن. ويستخدم **typeof** للتحقق.
*   تحقق مما إذا كان لدينا **معلمتان** ، إذا كان الأمر كذلك ، فتحقق مما إذا كانت أرقامًا أو لا تستخدم الدالة **checkNum التي** قمت بإنشائها.
*   إذا لم تكن **غير محددة ، فأضفها** وأعد الإضافة. إذا كان أي منهم غير محدد ثم إرجاع غير محدد.
*   في حالة وجود وسيطة واحدة فقط ، فإننا نعيد دالة جديدة تتوقع معلمتين. ولهذا نقوم بتخزين الحجة الأولى قبل الدخول في نطاق جديد لتجنب استبدال حججنا.
*   لا نزال داخل الجزء الأكبر الآخر ، نحتاج إلى التحقق من الحجة التي قمنا بحفظها ، إذا كان الرقم رقمًا ، فسنعيد الدالة التي تتوقع حجة ثانية.
*   الآن داخل الدالة التي نعود إليها ، علينا التحقق من الأرقام غير مرة أخرى كما في البداية باستخدام **checkNum** إذا لم يتم **تحديدها** ثم إرجاعها ، وإلا إذا **أضافتها** الأرقام وأعد الإضافة.

#### روابط ذات صلة

*   [نوع من](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [كائن الحجج](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `    function addTogether() { 
      var args = new Array(arguments.length); 
      //Storing the arguments in an array 
      for(var i = 0; i < args.length; ++i) { 
          args[i] = arguments[i]; 
        } 
     //Check for the arguments length 
     if(args.length == 2){ 
        //If there are two arguments,check for the type of both arguments 
        //Use typeof to check the type of the argument(both should be numbers) 
        if(typeof args[0] !== 'number' || typeof args[1] !=='number' ){ 
          return undefined; 
          } 
        return args[0]+args[1]; 
       } 
     //When only one argument is provided 
     if(args.length == 1){ 
         a= args[0]; 
         //Check the  argument using typeof 
        if(typeof a!=='number'){ 
            return undefined; 
          } 
        else{ 
           //Making use of closures 
           return function(b){ 
           //Checking the second argument 
             if(typeof b !=='number'){ 
               return undefined; 
               } 
             else 
               return a+b; 
              }; 
          } 
        } 
    } 
 
    // test here 
    addTogether(2,3); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLoA/0)

### شرح الشفرة:

*   أولاً تخزين الوسائط في صفيف عن طريق إنشاء صفيف باستخدام أسلوب منشئ.
*   يضيف كل وسيطة إلى الصفيف الجديد.
*   ثم تحقق من طول الصفيف الجديد حيث نحتاج إلى معرفة ما إذا كان لدينا ما يكفي أو لا.
*   تحقق من نوع الوسيطات باستخدام `typeof` حيث يجب أن يكون كلاهما أرقامًا.
*   لا يتم إرجاع الإعادة إذا كان أي منها ليس رقماً ، أو إرجاع مجموعها إذا كانت كذلك.
*   إذا لم يكن هناك سوى وسيطة واحدة ، ما زلنا نتحقق من النوع بعد تخزينه في متغير جديد وإرجاع دالة جديدة أو غير محددة.

#### روابط ذات صلة

*   [نوع من](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
*   [كائن الحجج](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `    //jshint esversion: 6 
    function addTogether() { 
      var args = Array.from(arguments); 
      return args.some(n => typeof n !== 'number') ? 
        undefined: 
        args.length > 1 ? 
          args.reduce((acc, n) => acc += n, 0): 
          (n) => typeof n === "number" ? 
            n + args[0]: 
            undefined; 
    } 
 
    // test here 
    addTogether(2,3); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLoB/0)

### شرح الشفرة:

*   أولا أنا من خلال تكرار الحجج والتحقق من الحجج التي ليست عددا وترجع غير محددة
*   إذا لم يكن الأمر كذلك فأنا أتأكد مما إذا كان طول الوسيطات أعلى من 1 ، إذا كنت أجمع الحجج باستخدام Array.prototype.reduce
*   أقوم بإرجاع دالة تتحقق مما إذا كانت الوسيطة التي تم تمريرها عبارة عن رقم وجمعها ، إذا لم يتم إرجاعها

#### روابط ذات صلة

*   [Array.prototype.reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [Array.prototype.some](http://forum.freecodecamp.com/t/javascript-array-prototype-some/14304)
*   [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

> **ملاحظة:** الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** إلى صفحة wiki. (الرجاء عدم إزالة أي أسماء مستخدمين حالية.)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.