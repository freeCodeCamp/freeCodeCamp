---
title: Sum All Primes
localeTitle: مجموع كل الأعداد
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

تفسير هذه المشكلة بسيط جدا. ستقوم بإنشاء قائمة بالأرقام الأولية إلى العدد الذي يتم إعطاؤك كمعلمة. ثم تحتاج إلى إضافتها كلها وإرجاع تلك القيمة. الجزء الصعب هو على توليد قائمة الأعداد الأولية. أقترح عليك العثور على رمز أو خوارزمية حسابية جيدة يمكنك تحويلها إلى تعليمات برمجية.

#### روابط ذات صلة

*   [الأعداد الأولية](https://en.wikipedia.org/wiki/Prime_number)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

إنشاء قائمة بجميع الأرقام بما في ذلك الرقم الذي حصلت عليه كمعلمة. سوف تكون هناك حاجة لتحديد أي الأرقام هي قمة أم لا.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

تحقق من هذا [الرابط](https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100) إذا كنت تفضل البحث عن حل للعثور على أعداد أولية ، أو حاول تعلم وتنفيذ [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) الخاص بك

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

هذه المشكلة صعبة إذا كان عليك إنشاء التعليمات البرمجية الخاصة بك للتحقق من الأعداد الأولية ، لذلك لا تشعر بالسوء إذا كان عليك استخدام رمز شخص ما لتلك البتة. في كلتا الحالتين ، فأنت على الأرجح تستخدم مصفوفة ، لذلك بمجرد إنشاء صفيف من الأعداد الأولية ، فما عليك سوى إضافتها كلها وإرجاع الرقم الذي تحصل عليه.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function sumPrimes(num) { 
  var res = 0; 
 
  // Function to get the primes up to max in an array 
  function getPrimes(max) { 
    var sieve = []; 
    var i; 
    var j; 
    var primes = []; 
    for (i = 2; i <= max; ++i) { 
      if (!sieve[i]) { 
        // i has not been marked -- it is prime 
        primes.push(i); 
        for (j = i << 1; j <= max; j += i) { 
          sieve[j] = true; 
        } 
      } 
    } 
 
    return primes; 
  } 
 
  // Add the primes 
  var primes = getPrimes(num); 
  for (var p = 0; p < primes.length; p++) { 
    res += primes[p]; 
  } 
 
  return res; 
 } 
 
 // test here 
 sumPrimes(10); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLnZ/0)

### شرح الشفرة:

*   قم بإنشاء دالة تقوم بإنشاء الأرقام من 1 إلى **num** وتحقق مما إذا كانت أولية على طول الطريق.
*   قم بتعريف المتغيرات التي ستكون مطلوبة.
*   ابدأ بـ 2 ، إذا لم يتم وضع علامة عليه وإضافته إلى مصفوفة الغربال ، فسيكون ذلك ممتازًا ونقوم بإضافته إلى الصفيف الأساسي.
*   أضف الآخرين إلى صفيف الغربال.
*   إرجاع الأعداد الأولية
*   قم بالالتفاف من خلال المصفوفة التي تم إرجاعها وأضف جميع العناصر لإرجاع القيمة النهائية.

#### روابط ذات صلة

*   [شبيبة لشرح الحلقات](https://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":دوار الشمس:") حل الشفرة المتوسطة:

 `function sumPrimes(num) { 
  // function to check if the number presented is prime 
  function isPrime(number){ 
      for (i = 2; i <= number; i++){ 
          if(number % i === 0 && number!= i){ 
          // return true if it is divisible by any number that is not itself. 
             return false; 
          } 
       } 
       // if it passes the for loops conditions it is a prime 
      return true; 
  } 
  // 1 is not a prime, so return nothing, also stops the recursive calls. 
  if (num === 1){ 
    return 0; 
  } 
  // Check if your number is not prime 
  if(isPrime(num) === false){ 
  // for non primes check the next number down from your maximum number, do not add anything to your answer 
    return sumPrimes(num - 1); 
  } 
 
  // Check if your number is prime 
  if(isPrime(num) === true){ 
  // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function. 
    return num + sumPrimes(num - 1); 
  } 
 } 
 // test here 
 sumPrimes(10); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/CLn0/0)

### شرح الشفرة:

*   الوظيفة هي `isPrime` checks إذا كان رقم معين أولي أو لا.
*   إذا كانت قيمة `num` 1 ، فإن إرجاع 0 لأن 1 ليس رقمًا أوليًا.
*   إذا لم يكن **num** رئيسًا ، فحدد الرقم التالي لأسفل من العدد الأقصى.
*   إذا كان **num** رئيسًا ، `sumPrimes` إلى الرقم التالي في التسلسل من خلال التكرار إلى دالة `sumPrimes` .

#### روابط ذات صلة

*   [وظائف - Recursion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotating_light:") الحل المتقدم للكود:

 `function sumPrimes(num) { 
  // step 1 
  let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
  // step 2 
  let onlyPrimes = arr.filter( (n) => { 
    let m = n-1; 
    while (m > 1 && m >= Math.sqrt(n)) { 
      if ((n % m) === 0) 
        return false; 
        m--; 
    } 
      return true; 
  }); 
  // step 3 
  return onlyPrimes.reduce((a,b) => a+b); 
 } 
 // test here 
 sumPrimes(977); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/DoOo/3)

### شرح الشفرة:

*   **الخطوة 1:** استخدم `Array.from()` لإنشاء تسلسل أرقام تصل إلى `num` . ادمج مع `.slice()` لشطب أول مؤشرين `[0, 1]` نظرًا لأن جميع الأعداد الأولية يجب أن تكون أكبر من 1.
*   **الخطوة 2:** تصفية جميع الأرقام خارج `arr` والتي ليست رئيسة بإخضاع كل عنصر إلى _"اختبار التقسيم التجريبي"_ الذي _"يتكون من قسمة n على كل عدد صحيح m أكبر من 1 وأقل من أو يساوي الجذر التربيعي لـ n "_ . يقوم هذا الاختبار بعرض `false` إذا كان أي رقم أقل من العنصر الذي يتم تشغيله على (m) لا ينتج عنه الباقي عندما يتم تقسيم العنصر (n) عليه. انظر الرابط أدناه للمزيد عن هذا.
*   **الخطوة 3: قم** `.reduce()` مجموع كافة العناصر المتبقية من arr باستخدام `.reduce()` .

### روابط ذات صلة

*   [اختبار شعبة التجريبية](https://en.wikipedia.org/wiki/Prime_number#Trial_division)
*   [Array.from ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Examples)
*   [Array.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.