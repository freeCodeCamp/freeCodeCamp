---
title: Smallest Common Multiple
localeTitle: أصغر مشترك متعددة
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

أصغر المتغيرات الشائعة بين رقمين هي أصغر عدد يمكن أن يقسمه كلا الرقمين. يمكن تمديد هذا المفهوم إلى أكثر من رقمين أيضًا.

يمكننا أن نبدأ أولاً بمجرد العثور على أصغر مشترك متعدد بين رقمين. بسذاجة ، يمكنك البدء في كتابة العديد من كل رقم حتى تكتب متعددة موجودة من كلا الرقمين.

مثال على ذلك هو الأرقام `3` و `4` . مضاعفات `3` هي `3, 6, 9, 12, 15, 18, ...` ومضاعفات `4` هي `4, 8, 12, 16, 20, ...` أول رقم صغير نصل إليه في كل من القائمتين هو `12` وهذا هو أصغر عدد مضاعف مشترك بين `3` و `4` .

يمكن أن تكون هذه المشكلة مربكة لأن معظم الأشخاص يبحثون عن أصغر مضاعفات مشتركة للأرقام فقط ولكنهم ينسون **نطاق** الكلمات الرئيسية. ومع ذلك ، فهذا يعني أنه إذا تم إعطاؤك `[1,5]` ، فيجب عليك التحقق من أصغر المضاعفات المشتركة لجميع الأرقام `[1,2,3,4,5]` التي يتم تقسيمها بالتساوي من قبل جميعهم.

#### روابط ذات صلة

*   [أقل (أصغر) مشترك متعدد](https://en.wikipedia.org/wiki/Least_common_multiple)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

قم بإنشاء مصفوفة تحتوي على كافة الأرقام المفقودة من المصفوفة الأصلية لتسهيل التحقق عند الحاجة إلى البحث عن تقسيم حتى.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

يمكنك استخدام عامل التشغيل المتبقي ( `%` ) للتحقق مما إذا كان التذكير بالقسم هو 0 ، مما يعني أنه قابل للقسمة بالتساوي.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

إذا قمت بفرز المصفوفة من الأكبر إلى الأصغر ، يمكنك استخدام أول رقمين كأول فحص لأصغر تعدد مشترك. ويرجع ذلك إلى أنه من المرجح أن تكون أصغر سلسلة مشتركة من الأرقام الأقل.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function smallestCommons(arr) { 
  // Sort array from greater to lowest 
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014) 
  arr.sort(function(a, b) { 
    return b - a; 
  }); 
 
  // Create new array and add all values from greater to smaller from the 
  // original array. 
  var newArr = []; 
  for (var i = arr[0]; i >= arr[1]; i--) { 
    newArr.push(i); 
  } 
 
  // Variables needed declared outside the loops. 
  var quot = 0; 
  var loop = 1; 
  var n; 
 
  // Run code while n is not the same as the array length. 
  do { 
    quot = newArr[0] * loop * newArr[1]; 
    for (n = 2; n < newArr.length; n++) { 
      if (quot % newArr[n] !== 0) { 
        break; 
      } 
    } 
 
    loop++; 
  } while (n !== newArr.length); 
 
  return quot; 
 } 
 
 // test here 
 smallestCommons([1,5]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLn2/0)

### شرح الشفرة:

*   نظرًا لاحتمال وجود أصغر قاسم مشترك بين أكبر رقمين ، فمن المنطقي التحقق من هذه الأرقام أولاً ، لذا قم بفرز الصفيف.
*   أنشئ مصفوفة جديدة لفرز جميع الأرقام ، `newArr` .
*   استخدام الهابطة `for` حلقة ( `var i = arr[0]; i >= arr[1]; i--` ) لإضافة الأرقام من أكبر إلى أصغر في مجموعة جديدة.
*   قم بتعريف المتغيرات للحاصل حتى نتمكن من الوصول إليها خارج الحلقة:
    *   الحاصل الذي سيكون أصغر تعدد مشترك لدينا ( `quot` )
    *   رقم الحلقة الذي نتحقق منه ( `loop` )
    *   فهرس مجموعة الأرقام ( `n` )
*   استخدم حلقة " `do` `while` للتحقق مما نحتاجه بينما `n` ليس بنفس طول الصفيف الجديد.
*   في `do` جزء، ونحن نذهب لمضاعفة الرقم الأول جدا، أضعاف عدد من الحلقات، وأضعاف الرقم الثاني ( `quot = newArr[0] * loop * newArr[1];` ).
*   سيسمح لنا الجزء `loop` بزيادة العدد الذي نتحقق منه بأكبر عدد ممكن لدينا دون الحاجة إلى تغيير الخوارزمية.
*   ندخل في حلقة `for` والتي سوف تنتقل من `n` إلى 2 `n < newArr.length` واحدة ( `loop++` ) عندما تكون أصغر من المصفوفة مع جميع الأرقام ( `n < newArr.length` ).
*   إذا لم ينقسم القسمة بالتساوي ( `quot % newArr[n] !== 0` ) ، `quot % newArr[n] !== 0` بإيقاف الحلقة ( `break;` ). إذا كان الأمر كذلك ، فقم بفحص العناصر التالية ( `n++` ) في المصفوفة حتى لا يكون حتى أو نجد إجابتنا.
*   خارج الحلقة ، قم بزيادة قيمة الحلقة ( `loop++` ).
*   في نهاية الحلقة ، ترجع حاصل القسمة ( `return quot;` ).

ملاحظة: إذا كانت مجموعة عنصرين، ثم فقط `for` حلقة لم يعتاد وقيمة الإرجاع هي نتاج الأرقام المذكورة.

#### روابط ذات صلة

*   [JS Array بروتوتايب الفرز](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)
*   [شبيبة لشرح الحلقات](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Do While Loop](http://forum.freecodecamp.com/t/javascript-do-while-loop/14662)
*   طول سلسلة

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function smallestCommons(arr) { 
    var range = []; 
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) { 
    range.push(i); 
    } 
 
    // can use reduce() in place of this block 
    var lcm = range[0]; 
    for (i = 1; i < range.length; i++) { 
    var GCD = gcd(lcm, range[i]); 
    lcm = (lcm * range[i]) / GCD; 
    } 
    return lcm; 
 
    function gcd(x, y) {    // Implements the Euclidean Algorithm 
    if (y === 0) 
        return x; 
    else 
        return gcd(y, x%y); 
    } 
 } 
 
 // test here 
 smallestCommons([1,5]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLn4/0)

### شرح الشفرة:

*   يتطلب الحل الأول ، الأساسي أكثر من 2000 حلقة لحساب `smallestCommons([1,13])` حالة اختبار `smallestCommons([1,13])` ، وأكثر من 4 ملايين حلقة لحساب `smallestCommons([1,25])` . يقوم هذا الحل بتقييم `smallestCommons([1,13])` في حوالي 20 حلقة `smallestCommons([1,25])` في 40 ، باستخدام خوارزمية أكثر كفاءة.
*   تقديم **مجموعة ومجموعة** فارغة.
*   يتم دفع جميع الأرقام بين النطاق المحدد **للنطاق** باستخدام حلقة `for` .
*   تقوم الكود التالي من الكود بتنفيذ الخوارزمية الإقليدية ، والتي تستخدم لإيجاد أصغر مضاعفات شائعة.

#### روابط ذات صلة

*   [خوارزمية Euclidean](https://en.wikipedia.org/wiki/Euclidean_algorithm)
*   [JS Math Max](http://forum.freecodecamp.com/t/javascript-math-max/14682)
*   [شبيبة الرياضيات مين](http://forum.freecodecamp.com/t/javascript-math-min/14684)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function smallestCommons(arr) { 
 
  // range 
  let min = Math.min.apply(null, arr); 
  let max = Math.max.apply(null, arr); 
 
  let smallestCommon = lcm(min, min + 1); 
 
  while(min < max) { 
    min++; 
    smallestCommon = lcm(smallestCommon, min); 
  } 
 
  return smallestCommon; 
 } 
 
 /** 
 * Calculates Greatest Common Divisor 
 * of two nubers using Euclidean algorithm 
 * https://en.wikipedia.org/wiki/Euclidean_algorithm 
 */ 
 function gcd(a, b) { 
  while (b > 0) { 
    let tmp = a; 
    a = b; 
    b = tmp % b; 
  } 
  return a; 
 } 
 
 /** 
 * Calculates Least Common Multiple 
 * for two numbers utilising GCD 
 */ 
 function lcm(a, b) { 
  return (a * b / gcd(a, b)); 
 } 
 
 
 // test here 
 smallestCommons([1,5]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/MR9P/latest)

### شرح الشفرة:

*   استخراج الحد الأدنى والحد الأقصى من **arr** المتوفرة.
*   قم بتهيئة **smallestCommon** باستخدام LCM من أول رقمين.
*   قم بالالتفاف من خلال LCM للحوسبة LCM من LCM الحالي والعدد التالي في النطاق **lcm (a، b، c) = lcm (lcm (a، b)، c)** .

#### روابط ذات صلة

*   [JS Function.prototype.apply ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.