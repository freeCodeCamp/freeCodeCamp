---
title: Cash Register
localeTitle: ماكينة تسجيل المدفوعات النقدية
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

*   يجب عليك إنشاء برنامج يقوم بإرجاع كائن يحتوي على مفتاح `status` ومفتاح `change` . قيمة `status` هي سلسلة `INSUFFICIENT_FUNDS` أو `CLOSED` أو `OPEN` ، وقيمة `change` هي صفيف ثنائي الأبعاد من التغيير المستحق.

#### روابط ذات صلة

*   هياكل البيانات هيكل

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

*   فمن الأسهل عندما تعرف كم من المال في السجل الخاص بك مسبقا. لهذا فمن المستحسن أن يكون لديك وظيفة لتعيين هذه المعلومات إلى متغير. ثم يمكنك معرفة ما إذا كان لديك ما يكفي من المال لإتمام المعاملة وإرجاع التغيير ، أو إذا كان يجب عليك إغلاق السجل.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

*   هذه المشكلة أسهل عندما تعرف قيمة كل فاتورة أو عملة تعمل معها ، وليس مجرد مجموع كل منها في السجل. على سبيل المثال ، من المفيد أن تعرف أن النيكل يستحق 0.05 ، إلى جانب حقيقة أن لديك نيكل بقيمة 2.05 دولار في سجل النقدية.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

*   سيكون عليك الحصول على أكبر قدر من التغيير من نوع واحد من الفاتورة أو العملة قبل الانتقال إلى التالي ، من قيمة أكبر إلى أقل. استمر حتى تحسب كل التغير المستحق.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") حل رمز المبتدئين:

 `// Create an array of objects which hold the denominations and their values 
 var denom = [ 
  { name: 'ONE HUNDRED', val: 100.00}, 
  { name: 'TWENTY', val: 20.00}, 
  { name: 'TEN', val: 10.00}, 
  { name: 'FIVE', val: 5.00}, 
  { name: 'ONE', val: 1.00}, 
  { name: 'QUARTER', val: 0.25}, 
  { name: 'DIME', val: 0.10}, 
  { name: 'NICKEL', val: 0.05}, 
  { name: 'PENNY', val: 0.01} 
 ]; 
 
 function checkCashRegister(price, cash, cid) { 
  var output = { status: null, change: [] }; 
  var change = cash - price; 
 
  // Transform CID array into drawer object 
  var register = cid.reduce(function(acc, curr) { 
    acc.total += curr[1]; 
    acc[curr[0]] = curr[1]; 
    return acc; 
  }, { total: 0 }); 
 
  // Handle exact change 
  if (register.total === change) { 
    output.status = 'CLOSED'; 
    output.change = cid; 
    return output; 
  } 
 
  // Handle obvious insufficient funds 
  if (register.total < change) { 
    output.status = 'INSUFFICIENT_FUNDS'; 
    return output; 
  } 
 
  // Loop through the denomination array 
  var change_arr = denom.reduce(function(acc, curr) { 
    var value = 0; 
    // While there is still money of this type in the drawer 
    // And while the denomination is larger than the change remaining 
    while (register[curr.name] > 0 && change >= curr.val) { 
      change -= curr.val; 
      register[curr.name] -= curr.val; 
      value += curr.val; 
 
      // Round change to the nearest hundreth deals with precision errors 
      change = Math.round(change * 100) / 100; 
    } 
    // Add this denomination to the output only if any was used. 
    if (value > 0) { 
        acc.push([ curr.name, value ]); 
    } 
    return acc; // Return the current change_arr 
  }, []); // Initial value of empty array for reduce 
 
  // If there are no elements in change_arr or we have leftover change, return 
  // the string "Insufficient Funds" 
  if (change_arr.length < 1 || change > 0) { 
    output.status = 'INSUFFICIENT_FUNDS'; 
    return output; 
  } 
 
  // Here is your change, ma'am. 
  output.status = 'OPEN'; 
  output.change = change_arr; 
  return output; 
 } 
 
 // test here 
 checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]); 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/@scissorsneedfoo/cash-register-example)

### شرح الشفرة:

أولاً ، قم بإنشاء صفيف من الكائنات بقيمة كل فئة من الفواتير أو العملة ، مع كائن الإخراج مع مفاتيح الحالة والتغيير. بعد ذلك ، قم بتحويل مصفوفة CID إلى كائن درج. ثم ، التعامل مع شروط التغيير الدقيق والأموال غير كافية. قم `denom` من خلال مجموعة الصفيف وقم بتحديث التغيير والقيم بينما لا يزال هناك نقود من كل نوع في الدرج وبينما تكون التسمية أكبر من التغيير المتبقي. إضافة هذه التسمية إلى تراكم `change_arr` إذا تم استخدام أي من هذا النوع. بعد الحلقة ، يكون `change_arr` عبارة عن مصفوفة ثنائية الأبعاد من التغيير المستحق ، تم فرزه من أعلى إلى أدنى فئة. إذا لم تكن هناك عناصر في `change_arr` أو كنت لا تزال مدينًا بالتغيير ، `INSUFFICIENT_FUNDS` كائن المخرجات إلى حالة `INSUFFICIENT_FUNDS` . أخيرا يمكنك إعطاء التغيير الصحيح. إرجاع كائن الإخراج مع حالة `OPEN` و `change_arr` كقيمة التغيير.

#### روابط ذات صلة

*   [شبيبة صفيف التقليل](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [شبيبة تقليل سهلة](http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687)
*   [شبيبة الحلقات](http://forum.freecodecamp.com/t/javascript-loops/14681)
*   [JS Array Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ": الحافظة:") ملاحظات للمساهمات:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها **_مشابهة ولكن أفضل_** ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - **الأساسي** **والمتوسط** **والمتقدم** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ": traffic_light:")
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي **محتويات رئيسية ذات صلة** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":تحذير:") **_لا_** _تزيل أي أسماء مستخدمين حالية_ )

> نرى ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.