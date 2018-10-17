---
title: Find the Symmetric Difference
localeTitle: العثور على الفرق متماثل
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام [**`Read-Search-Ask`**](https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/) إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

الاختلاف المتماثل (المشار إليه عادة بـ Δ) من مجموعتين هو مجموعة العناصر الموجودة في أي من المجموعتين ، ولكن ليس في كليهما.

على سبيل المثال ، يجب أن ينتج `sym([1, 2, 3], [5, 2, 1, 4])` `[3, 4, 5]` .

بعد التعريف المذكور أعلاه ، يمكن التعبير عن الفرق المتماثل من ثلاث مجموعات _A_ و _B_ و _C_ كـ `(A &Delta; B) &Delta; C` .

#### روابط ذات صلة

*   [فرق متماثل - ويكيبيديا](https://en.wikipedia.org/wiki/Symmetric_difference)
*   [فرق متماثل - يوتيوب](https://www.youtube.com/watch?v=PxffSUQRkG4)

[](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

 [## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

كائن _الوسائط_ هو كائن _Array_ -like الذي يرث الخاصية `Array.length` فقط. تنظر بالتالي تحويلها إلى _صفيف_ الفعلي.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

Deem كتابة دالة مساعد تقوم بإرجاع الفرق المتماثل من صفيفين في كل مكالمة بدلاً من محاولة الاختلاف بين كل المجموعات في وقت واحد.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

قم بتطبيق وظيفة المساعد على صفيف الوسيطات الذي تم إنشاؤه ، مما يقلل عناصره بشكل متكرر بشكل متكرر لتشكيل الناتج المتوقع.

**ملحوظة** في حالة وجود _عدد فردي من المجموعات_ ، سيشمل الفرق المتماثل عناصر متطابقة موجودة في جميع المجموعات المحددة. على سبيل المثال؛

 `A = {1, 2, 3} 
 B = {2, 3, 4} 
 C = {3, 4, 5} 
 
 (A &Intersection; B) &Intersection; C = {1, 4} &Intersection {3, 4, 5} 
 A &Intersection; B = {1, 3, 5} 
` 

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![:warning:](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif ":تحذير:")

**الحل قبل**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `    function sym() { 
      var args = []; 
      for (var i = 0; i < arguments.length; i++) { 
        args.push(arguments[i]); 
      } 
 
      function symDiff(arrayOne, arrayTwo) { 
        var result = []; 
 
        arrayOne.forEach(function(item) { 
          if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) { 
            result.push(item); 
          } 
        }); 
 
        arrayTwo.forEach(function(item) { 
          if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) { 
            result.push(item); 
          } 
        }); 
 
        return result; 
      } 
 
      // Apply reduce method to args array, using the symDiff function 
      return args.reduce(symDiff); 
    } 
`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 

 [![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:")](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) [تشغيل الكود](https://repl.it/C4II/0)

### شرح الشفرة:

*   يتم استخدام `push()` لكسر كائن _الحجج_ إلى صفيف ، _args_ .
*   `symDiff` الدالة `symDiff` على الفرق المتماثل بين مجموعتين. يتم استخدامه كدالة رد اتصال من أجل طريقة `reduce()` تسمى على _arg_ .
*   `arrayOne.forEach()` العناصر التي _ينتج عنها_ والتي توجد فقط في _arrayOne_ بالإضافة إلى أنها ليست جزءًا من _النتيجة_ .
*   `arrayTwo.forEach()` العناصر التي _ينتج عنها_ والتي توجد فقط في _arrayTwo_ بالإضافة إلى أنها ليست جزءًا من _النتيجة_ .
*   يتم إرجاع _النتيجة_ ، وهو الفرق المتناظر. يعمل هذا الحل لأي عدد من المجموعات.

#### روابط ذات صلة

*   [جافا سكريبت ل](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for)
*   [JavaScript Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JavaScript Array.prototype.push ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   [JavaScript Array.prototype.forEach ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
*   [JavaScript Array.prototype.indexOf ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `    function sym() { 
 
      // Convert the argument object into a proper array 
      var args = Array.prototype.slice.call(arguments); 
 
      // Return the symmetric difference of 2 arrays 
      var getDiff = function(arr1, arr2) { 
 
        // Returns items in arr1 that don't exist in arr2 
        function filterFunction(arr1, arr2) { 
          return arr1.filter(function(item) { 
            return arr2.indexOf(item) === -1; 
          }); 
        } 
 
        // Run filter function on each array against the other 
        return filterFunction(arr1, arr2) 
          .concat(filterFunction(arr2, arr1)); 
      }; 
 
      // Reduce all arguments getting the difference of them 
      var summary = args.reduce(getDiff, []); 
 
      // Run filter function to get the unique values 
      var unique = summary.filter(function(elem, index, self) { 
        return index === self.indexOf(elem); 
        }); 
      return unique; 
    } 
 
    // test here 
    sym([1, 2, 3], [5, 2, 1, 4]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLoc/0)

### شرح الشفرة:

*   يتم استخدام أسلوب `slice()` لكسر كائن _الوسائط_ إلى صفيف ، _args_ .
*   `getDiff` الدالة `getDiff` على الفرق المتماثل بين مجموعتين ، _arr1_ و _arr2_ . يتم استخدامه كدالة رد اتصال من أجل طريقة `reduce()` تسمى على _arg_ .
*   إرجاع `filterFunction()` الأول العناصر في _arr1_ غير موجودة في _arr2_ .
*   يتم تشغيل `filterFunction()` التالي `filterFunction()` على كل مصفوفة مقابل الآخر للتحقق من معكوس الشيك الأول للتفرد وسَلسَقه.
*   _ملخص_ يتكون من الحجج المخفضة.
*   يتم استخدام `filter()` في _الملخص_ للاحتفاظ بالقيم _الفريدة فقط_ ويتم إرجاع _الفريدة_ .

#### روابط ذات صلة

*   [JavaScript Array.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
*   [JavaScript Array.prototype.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
*   [JavaScript Array.prototype.concat ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `    function sym() { 
      let argv = Array.from(arguments).reduce(diffArray); 
      return argv.filter((element, index, array) => index === array.indexOf(element));//remove duplicates 
    } 
 
    function diffArray(arr1, arr2) { 
      return arr1 
        .filter(element => !arr2.includes(element)) 
        .concat(arr2.filter(element => !arr1.includes(element))); 
    } 
 
    // test here 
    sym([1, 2, 3], [5, 2, 1, 4]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/@ashenm/Symmetric-Difference)

### شرح الشفرة:

*   تقوم الدالة الرئيسية _sym ()_ بإنشاء مصفوفة من _الوسيطات_ وتقليل عناصرها باستخدام الدالة المساعد _diffArray ()_ إلى صفيف واحد.
    
*   ترجع الدالة _diffArray ()_ الاختلاف المتماثل بين صفيفين عن طريق انتقاء عناصر فريدة في صفائف معلمات ؛ _arr1_ و _arr2_ .
    

#### روابط ذات صلة

*   [JavaScript Array.from ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
*   [JavaScript Array.prototype.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.