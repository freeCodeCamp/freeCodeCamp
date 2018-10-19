---
title: Chunky Monkey
localeTitle: قرد مكتنز
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/a/aadd6bead83ab7d79a795c326f005a89e6ad81f5.png)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

هدفنا لهذه الخوارزمية هو تقسيم `arr` (الوسيطة الأولى) إلى أجزاء أصغر من المصفوفات بالطول الموفر حسب `size` (الوسيطة الثانية). هناك 4 فحوصات خضراء (أهداف) يجب تمرير كودنا لإكمال هذه الخوارزمية:

1.  `(['a', 'b', 'c', 'd'], 2)` المتوقع أن تكون `[['a', 'b'], ['c', 'd']]` `(['a', 'b', 'c', 'd'], 2)` `[['a', 'b'], ['c', 'd']]`
2.  `([0, 1, 2, 3, 4, 5], 3)` من المتوقع أن يكون `[[0, 1, 2], [3, 4, 5]]`
3.  `([0, 1, 2, 3, 4, 5], 2)` من المتوقع أن يكون `[[0, 1], [2, 3], [4, 5]]`
4.  `([0, 1, 2, 3, 4, 5], 4)` المتوقع أن تكون `[[0, 1, 2, 3], [4, 5]]` `([0, 1, 2, 3, 4, 5], 4)` `[[0, 1, 2, 3], [4, 5]]`

#### روابط ذات صلة

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

تشير الروابط أعلاه إلى استخدام `Array.push()` ، لذلك دعنا نبدأ أولاً بإنشاء صفيف جديد لتخزين المصفوفات الأصغر سنكون قريبًا مثل هذا:

 `    var newArray = []; 
` 

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

المقبل سنقوم في حاجة الى `for loop` إلى حلقة من خلال `arr` .

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

وأخيرًا ، نحتاج إلى طريقة للقيام `Array.slice()` الفعلي ويمكننا استخدام `Array.slice()` للقيام بذلك. المفتاح إلى هذه الخوارزمية هو فهم كيفية عمل `for loop` `size` و `Array.slice()` و `Array.push()` معاً.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `    function chunkArrayInGroups(arr, size) { 
 
      var temp = []; 
      var result = []; 
 
      for (var a = 0; a < arr.length; a++) { 
        if (a % size !== size - 1) 
          temp.push(arr[a]); 
        else { 
          temp.push(arr[a]); 
          result.push(temp); 
          temp = []; 
        } 
      } 
 
      if (temp.length !== 0) 
        result.push(temp); 
      return result; 
    } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/24)

### شرح الشفرة:

*   أولاً ، نخلق صفيفين فارغين يُسمى `temp` `result` ، وسنعود في النهاية.
*   حلقات **لدينا حلقة** حتى `a` يساوي أو أكثر من طول المصفوفة في الاختبار.
*   داخل الحلقة ، `temp.push(arr[a]);` على `temp` `temp.push(arr[a]);` إذا كان الجزء المتبقي من `a / size` لا يساوي `size - 1` .
*   خلاف ذلك ، نحن ندفع إلى `temp` ، ودفع `temp` إلى متغير `result` وإعادة تعيين `temp` إلى صفيف فارغ.
*   بعد ذلك ، إذا لم يكن `temp` صفيفًا فارغًا ، فإننا نضغط على `result` .
*   وأخيرًا ، نعيد قيمة `result` .

#### روابط ذات صلة

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [للحلقات](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `    function chunkArrayInGroups(arr, size) { 
      // Break it up. 
      var arr2 = []; 
      for (var i = 0; i < arr.length; i+=size) { 
        arr2.push(arr.slice(i , i+size)); 
      } 
      return arr2; 
    } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/Cj9x/3)

### شرح الشفرة:

*   أولاً ، نخلق مصفوفة `arr2` فارغة حيث سنقوم بتخزين "قطع" لدينا.
*   تبدأ الحلقة في الصفر ، الزيادات حسب `size` كل مرة من خلال الحلقة ، وتتوقف عندما تصل إلى `arr.length` .
*   لاحظ أن هذا الحل لا حلقة عبر `arr` . بدلاً من ذلك ، نحن نستخدم الحلقة لإنشاء أرقام يمكننا استخدامها كمؤشرات لتقسيم المصفوفة في المواقع الصحيحة.
*   داخل الحلقة ، نقوم بإنشاء كل `arr.slice(i, i+size)` باستخدام `arr.slice(i, i+size)` ، وإضافة هذه القيمة إلى `arr2` مع `arr2.push()` .
*   وأخيرًا ، نعيد قيمة `arr2` .

#### روابط ذات صلة

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [للحلقات](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `    function chunkArrayInGroups(arr, size) { 
      // Break it up. 
      var newArr = []; 
      var i = 0; 
 
      while (i < arr.length) { 
        newArr.push(arr.slice(i, i+size)); 
        i += size; 
      } 
      return newArr; 
    } 
    chunkArrayInGroups(["a", "b", "c", "d"], 2); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/26)

### شرح الشفرة:

*   أولاً ، نخلق متغيرين. `newArr` هو مصفوفة فارغة `newArr` عليها. لدينا أيضًا مجموعة `i` المتغيرة إلى الصفر ، لاستخدامها في حلقة لدينا.
    
*   لدينا حلقة حلقات في حين `i` تساوي أو أكثر من طول الصفيف في الاختبار.
    
*   داخل الحلقة ، `newArr` صفيف `arr.slice(i, i+size)` باستخدام `arr.slice(i, i+size)` . لأول مرة يتدفق ، سيبدو مثل:
    
    newArr.push (arr.slice (1، 1 + 2))
    
*   بعد أن `newArr` على `newArr` ، نضيف متغير `size` إلى `i` .
    
*   وأخيرًا ، نعيد قيمة `newArr` .
    

#### روابط ذات صلة

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [في حين الحلقات](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود 2:

 `    function chunkArrayInGroups(arr, size) { 
      var newArr = []; 
      while (arr.length) { 
        newArr.push(arr.splice(0,size)); 
      } 
      return newArr; 
    } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/579)

### شرح الشفرة:

*   أولا ، نخلق متغير. `newArr` هو مصفوفة فارغة `newArr` عليها.
*   لدينا `while` حلقات حلقة حتى طول المصفوفة في اختبار لدينا ليست 0.
*   داخل الحلقة ، `newArr` صفيف `arr.splice(0, size)` باستخدام `arr.splice(0, size)` .
*   لكل تكرار من حلقة `while` ، يحذف `size` عدد العناصر من مقدمة `arr` و يدفعها `newArr` إلى `newArr` .
*   وأخيرًا ، نعيد قيمة `newArr` .

#### روابط ذات صلة

*   [Array.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [Array.splice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
*   [في حين الحلقات](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/while)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود 3:

 `    function chunkArrayInGroups(arr, size) { 
      if (arr.length <= size){ 
        return [arr]; 
      } 
      else { 
        return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size)); 
      } 
    } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLjU/579)

### شرح الشفرة:

*   يتم إرجاع الصفيف الأصغر من الحجم المتداخل.
*   لأية صف أكبر من الحجم ، يتم تقسيمه إلى قسمين. الجزء الأول متداخل ومتصل مع الجزء الثاني الذي يجعل استدعاء متكرر.

#### روابط ذات صلة

*   [العودية](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)
*   [Array.splice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.