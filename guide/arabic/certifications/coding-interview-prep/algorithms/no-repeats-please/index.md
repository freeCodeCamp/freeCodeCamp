---
title: No Repeats Please
localeTitle: لا يتكرر من فضلك
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

تتطلب هذه المهمة أن نرجع عدد التبديلات الإجمالية للسلسلة المقدمة التي لا تحتوي على أحرف متتالية متكررة. من المفترض أن تكون كل الحروف في السلسلة المقدمة فريدة. على سبيل المثال ، يجب أن يعود `aab` 2 لأنه يحتوي على 6 تباديل كلي ( `aab` ، `aab` ، `aba` ، `aba` ، `baa` ، `baa` ) ، ولكن 2 منهم فقط ( `aba` و `aba` ) ليس لديهم نفس الحرف (في هذه الحالة `a` ) التكرار.

لتحقيق ذلك ، سيتعين علينا النظر في كل تبديل محتمل لسلسلة. هناك عدة طرق للقيام بذلك. هناك سؤال مشترك للمقابلة هو بناء دالة تجمع كل تباديل السلسلة. هناك العديد من البرامج التعليمية المتاحة على الإنترنت حول كيفية القيام بذلك.

#### الأساليب المحتملة المستخدمة كحل

##### طريقة متكررة

هذه المهمة يمكن أن تكون شاقة حتى بعد مشاهدة البرنامج التعليمي. لكتابة حل تكراري ، ستحتاج إلى إرسال كل استخدام جديد للمدخلات الدالة الثلاثة:

1.  سلسلة جديدة (أو مصفوفة أحرف) قيد الإنشاء.
2.  موضع في السلسلة الجديدة سيتم ملؤه بعد ذلك.
3.  لم يتم بعد استخدام فكرة عن الأحرف (المواضع الأكثر تحديدًا) من السلسلة الأصلية.

سيبدو الرمز الزائف شيئًا كالتالي:

 `var str = ???; 
 permAlone(current position in original string, characters used already in original string, created string) { 
  if (current string is finished) { 
    print current string; 
  } else { 
    for (var i = 0; i < str.length; i++) { 
      if (str[i] has not been used) { 
        put str[i] into the current position of new string; 
        mark str[i] as used; 
        permAlone(current position in original string, characters used already in original string, created string); 
        remove str[i] as used because another branch in the tree for i + 1 will likely use it; 
      } 
    } 
  } 
 } 
 permAlone(0, nothing used yet, empty new string (or array the same size as str)); 
` 

طريقة أخرى للتفكير في هذه المشكلة هي البدء من مساحة فارغة. قدم أول حرف إلى الفضاء. ستحتوي هذه المساحة الآن على التقسيم الفرعي الأول. فيما يلي رسم بياني يوضح الفكرة:

![رسم بياني](//discourse-user-assets.s3.amazonaws.com/original/2X/6/69896bacc8bd3b2e347beb4b304a7f97caa6d9ab.png)

##### طريقة غير متكررة

 `// An approach to introduce a new character to a permutation 
 var ch = '?'; 
 var source = ['?', '?', '?'];     // Current sub-permutation 
 var temp, dest = []; 
 
 for (var i = 0; i <= source.length; ++i) { 
  temp = source.slice(0);         // Copy the array 
  temp.splice(i, 0, ch);          // Insert the new character 
  dest.push(temp);                // Store the new sub-permutation 
 } 
` 

ويمكن بعد ذلك العثور على كل تقليب بطريقة غير متكررة بإدراج ما سبق في دالة تأخذ مصفوفة مصدر وإرجاع مصفوفة وجهة. لكل حرف من سلسلة الإدخال ، قم بتمرير ذلك الحرف ، بالإضافة إلى الصفيف الذي تم إرجاعه من المكالمة السابقة للدالة.

طريقة لتصور هذا هو النظر في الشجرة التي تبدأ بالحرف الأول من السلسلة:

![شجرة التقابل](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8187f2b06cdc02cf62286c18ce15bfcdc99bc68c.png)

#### روابط ذات صلة

*   [التباديل](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)
*   [خوارزمية الكومة](https://en.wikipedia.org/wiki/Heap%27s_algorithm)
*   شبيبة ريجكس الموارد
*   [كائن JS String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

*   أسهل طريقة هي استخدام خوارزمية كومة الذاكرة المؤقتة للحصول على قائمة متكررة بكافة التباديل.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

*   بمجرد الحصول على القائمة ، قم فقط بإنشاء تعبير عادي لالتقاط الأحرف المتكررة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

*   ستحتاج إلى الحصول على التباديل كمصفوفة من السلاسل المترابطة بدلاً من الأحرف المنفصلة.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function permAlone(str) { 
 
  // Create a regex to match repeated consecutive characters. 
  var regex = /(.)\1+/g; 
 
  // Split the string into an array of characters. 
  var arr = str.split(''); 
  var permutations = <a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>]; 
  var tmp; 
 
  // Return 0 if str contains same character. 
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0; 
 
  // Function to swap variables' content. 
  function swap(index1, index2) { 
    tmp = arr[index1]; 
    arr[index1] = arr[index2]; 
    arr[index2] = tmp; 
  } 
 
  // Generate arrays of permutations using the algorithm. 
  function generate(int) { 
    if (int === 1) { 
      // Make sure to join the characters as we create  the permutation arrays 
      permutations.push(arr.join('')); 
    } else { 
      for (var i = 0; i != int; ++i) { 
        generate(int - 1); 
        swap(int % 2 ? 0 : i, int - 1); 
      } 
    } 
  } 
 
  generate(arr.length); 
 
  // Filter the array of repeated permutations. 
  var filtered = permutations.filter(function(string) { 
    return !string.match(regex); 
  }); 
 
  // Return how many have no repetitions. 
  return filtered.length; 
 } 
 
 // Test here. 
 permAlone('aab'); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLop/0)

### شرح الشفرة:

*   يحتوي **regex** على التعبير العادي لمطابقة الأحرف المتتالية المتكررة.
*   يتم تقسيم **str** السلسلة إلى صفيف من الأحرف ، **arr** .
*   يتم إرجاع 0 إذا كان **str** يحتوي على نفس الأحرف.
*   يتم استخدام `swap()` الدالة `swap()` لغرض تبديل محتويات محتويات اثنين من المتغير.
*   تستخدم الكتلة التالية من التعليمات البرمجية خوارزمية كومة الذاكرة المؤقتة لإنشاء صفائف من التباديل في **التباديل** .
*   **وتصفيتها** مرشحات **التباديل** متغير لتشمل التباديل غير المتكررة فقط.
*   يُرجع `filtered.length` عدد التباديل الإجمالي للسلسلة المقدمة التي لا تحتوي على أحرف متتالية متكررة.

#### روابط ذات صلة

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS String Prototype Match](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [شبيبة صفيف النموذج](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)
*   [شبيبة لشرح الحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JS Array Prototype Filter](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.