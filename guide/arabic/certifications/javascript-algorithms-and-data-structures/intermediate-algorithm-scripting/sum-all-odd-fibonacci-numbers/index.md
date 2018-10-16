---
title: Sum All Odd Fibonacci Numbers
localeTitle: Sum All Odd Fibonacci Numbers
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

ستحتاج إلى جمع جميع أرقام **فيبوناتشي** ثم التحقق من الأرقام الفردية. بمجرد الحصول على تلك الغريب ثم ستضيف لهم جميعا. يجب أن يكون الرقم الأخير هو الرقم المعطى كمعلمة إذا كان في الواقع رقم إيقاف فيبوناتشي.

#### روابط ذات صلة

*   [رقم فيبوناتشي](https://en.wikipedia.org/wiki/Fibonacci_number)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

للحصول على العدد التالي من السلسلة ، تحتاج إلى إضافة الرقم الحالي إلى السلسلة السابقة والذي سيعطيك الخيار التالي.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

لمعرفة ما إذا كان الرقم هو حتى كل ما عليك التحقق منه هو إذا كان `number % 2 == 0` .

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

عندما تحصل على الغريب القادم ، لا تنس أن تضيفه إلى متغير عالمي يمكن إرجاعه في النهاية. `result += currNumber;` سوف تفعل الخدعة.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function sumFibs(num) { 
    var prevNumber = 0; 
    var currNumber = 1; 
    var result = 0; 
    while (currNumber <= num) { 
        if (currNumber % 2 !== 0) { 
            result += currNumber; 
        } 
 
        currNumber += prevNumber; 
        prevNumber = currNumber - prevNumber; 
    } 
 
    return result; 
 } 
 
 // test here 
 sumFibs(4); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnV/0)

### شرح الشفرة:

*   إنشاء متغير للاحتفاظ بسجل للأرقام الحالية والسابقة بالإضافة إلى النتيجة التي سيتم إرجاعها.
*   استخدم حلقة while للتأكد من أننا لا نتجاوز الرقم المعطى كمعلمة.
*   نستخدم المعامل modulo للتحقق مما إذا كان الرقم الحالي فرديًا أو حتى. إذا كان موجودًا ، فقم بإضافته إلى النتيجة.
*   أكمل دائرة فيبوناتشي بالتناوب للحصول على الرقم التالي وقيم التبادل بعد.
*   العودة النتيجة.

#### روابط ذات صلة

*   شبيبة أثناء حلقة

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function sumFibs(num) { 
    // Perform checks for the validity of the input 
    if (num < 0) return -1; 
    if (num === 0 || num === 1) return 1; 
 
    // Create an array of fib numbers till num 
    const arrFib = [1, 1]; 
    let nextFib = 0; 
 
    // We put the new Fibonacci numbers to the front so we 
    // don't need to calculate the length of the array on each 
    // iteration 
    while((nextFib = arrFib[0] + arrFib[1]) <= num) { 
        arrFib.unshift(nextFib); 
    } 
 
    // Sum only the odd numbers and return the value 
    return arrFib.reduce((acc, curr) => { 
        return acc + curr * (curr % 2); 
    }); 
 } 
 
 // test here 
 sumFibs(4); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/@kr3at0/SumAllOddFibonacciNumbers)

### شرح الشفرة:

*   إنشاء مجموعة من أرقام فيبوناتشي حتى **الأسطوانات** .
*   استخدم `reduce()` طريقة للعثور على مجموع أعضاء الصفيف الفردية.
*   أعد المبلغ.

#### روابط ذات صلة

*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [شبيبة لشرح الحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS Array Prototype Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.