---
title: Sorted Union
localeTitle: الاتحاد الفرز
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

يجب أن يقوم البرنامج بإرجاع صفيف جديد من القيم الفريدة من صفيفين أصليين بالترتيب الذي تظهر به. لذلك لا يوجد فرز مطلوب ، ولا ينبغي أن يكون هناك أي تكرارات.

#### روابط ذات صلة

*   [JS الحجج](http://forum.freecodecamp.com/t/javascript-arguments/14283)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

نظرًا لعدم وجود أي فكرة عن عدد المعلمات التي تم تمريرها ، سيكون من الأفضل إجراء التكرار عبر **الوسيطات** قبل التكرار خلال المصفوفات.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

ليس من الضروري استخدام الحلقات. يمكنك استخدام الوظائف مثل `map()` أو `reduce()` أو غيرها إذا كنت تريد.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

سيكون عليك التحقق مما إذا كانت القيمة الحالية موجودة بالفعل على الصفيف الذي سيتم إرجاعه لكل قيمة.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function uniteUnique(arr1, arr2, arr3) { 
  // Creates an empty array to store our final result. 
  var finalArray = []; 
 
  // Loop through the arguments object to truly made the program work with two or more arrays 
  // instead of 3. 
  for (var i = 0; i < arguments.length; i++) { 
    var arrayArguments = arguments[i]; 
 
    // Loops through the array at hand 
    for (var j = 0; j < arrayArguments.length; j++) { 
      var indexValue = arrayArguments[j]; 
 
      // Checks if the value is already on the final array. 
      if (finalArray.indexOf(indexValue) < 0) { 
        finalArray.push(indexValue); 
      } 
    } 
  } 
 
  return finalArray; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnM/0)

### شرح الشفرة:

*   إنشاء صفيف فارغ **finalResult** لتخزين النتيجة النهائية.
*   التكرار من خلال كائن **الوسائط** في الحلقة الخارجية وتخزينها في **arrayArguments** .
*   يتم استخدام الحلقة الداخلية للتكرار من خلال عناصر الصفيف الفردية.
*   إذا لم يكن العنصر موجودًا بالفعل في **finalArray** ، **فأضفه** .
*   عودة **finalArray** .

#### روابط ذات صلة

*   [شبيبة لشرح الحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JS String Prototype IndexOf](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## بديلة حل رمز الأساسية

 `function uniteUnique(arr) { 
  var args = [...arguments]; 
  var result = []; 
  for(var i = 0; i < args.length; i++) { 
    for(var j = 0; j < args[i].length; j++) { 
       if(!result.includes(args[i][j])) { 
        result.push(args[i][j]); 
      } 
    } 
  } 
  return result; 
 } 
 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
` 

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function uniteUnique(arr1, arr2, arr3) { 
 var newArr; 
 //Convert the arguments object into an array 
  var args = Array.prototype.slice.call(arguments); 
  //Use reduce function to flatten the array 
  newArr = args.reduce(function(arrA,arrB){ 
  //Apply filter to remove the duplicate elements in the array 
    return arrA.concat(arrB.filter(function(i){ 
      return arrA.indexOf(i) === -1; 
    })); 
  }); 
 
   return newArr; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnO/0)

### شرح الشفرة:

*   يتم تحويل كائن **الوسائط** إلى صفيف باستخدام `slice()` .
*   يتم استخدام دالة `reduce()` لتسوية الصفيف ، لكل عنصر موجود في المصفوفة (أو المصفوفات المتداخلة) ، قم باستخلاص عناصرها إلى مصفوفة أحادية البعد.
*   بعد تسوية الصفيف ، يتم استخدام `filter()` لإزالة العناصر المكررة من **newArr** .

#### روابط ذات صلة

*   [JS Array Prototype Slice](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)
*   [JS Array Prototype Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [JS Array Prototype Concat](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [JS Array Prototype Filter](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function uniteUnique() { 
  var concatArr = []; 
  var i = 0; 
  while (arguments[i]){ 
    concatArr = concatArr.concat(arguments[i]); i++; 
  } 
  uniqueArray = concatArr.filter(function(item, pos) { 
    return concatArr.indexOf(item) == pos; 
  }); 
  return uniqueArray; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnN/0)

### شرح الشفرة:

*   يمكن أن يتغير عدد الوسيطات ديناميكيًا ، لذلك لا نحتاج إلى إزعاج توفير `uniteUnique()` على الإطلاق.
*   نستخدم حلقة `while` لسَلسَلة جميع الوسيطات في صفيف واحد يسمى **concatArr** .
*   نحن نستخدم `filter()` لإزالة العناصر المتكررة عن طريق التحقق من فهرس كل عنصر وإزالة نفس العناصر بمواضع مختلفة.
*   سيتم الحفاظ على الطلب هنا.

#### روابط ذات صلة

*   شبيبة بينما حلقة

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") البديل رمز الحل باستخدام ES2015

 `//jshint esversion:6 
 
 function uniteUnique(...arrays) { 
 
  //make an array out of the given arrays and flatten it (using the spread operator) 
  const flatArray = [].concat(...arrays); 
 
  // create a Set which clears any duplicates since it's a regulat set and not a multiset 
  return [...new Set(flatArray)]; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CcWk/0)

### شرح الشفرة:

*   نستخدم أولاً `concat()` مع صفيف فارغ `<a href='http://exploringjs.com/es6/ch_maps-sets.html#_set' target='_blank' rel='nofollow'>]` كنقطة بداية و عامل الانتشار `...` لإنشاء صفيف خارج كائن الوسيطات وتسويته في نفس الوقت
*   ثم نستخدم كائن ES2015 **Set** الجديد لتخزين القيم الفريدة فقط
*   (لمعرفة المزيد عن مجموعات ، اقرأ \[هنا\]

#### روابط ذات صلة

*   [Array.prototype.concat](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [الحجج](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
*   [جلس](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.