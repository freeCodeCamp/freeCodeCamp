---
title: Record Collection
localeTitle: جمع السجلات
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") تذكر استخدام **`Read-Search-Ask`** إذا واجهتك مشكلة. حاول إقران البرنامج ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") واكتب الكود الخاص بك ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":قلم:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":العلم متقلب:") شرح المشكلة:

يتم منحك كائن JSON يمثل (جزء صغير من) مجموعة السجلات الخاصة بك. يتم تحديد كل ألبوم بواسطة رقم تعريف فريد وله العديد من الخصائص. ليست جميع الألبومات تحتوي على معلومات كاملة.

اكتب الدالة التي تأخذ **هوية** ، خاصية ( **دعم** ) ، **وقيمة** .

**للمعرف** المحدد في **المجموعة** :

إذا كانت **القيمة** غير فارغة ( **value! == ""** ) ، فقم بتحديث أو تعيين **قيمة** **prop** .

إذا كان **البروب** **"مسارات"** وكانت **القيمة** غير فارغة ، فتحقق مما إذا كان العنصر المحدد في الصفيف له خاصية "المسارات". إذا كان للعنصر خاصية "المسارات" ، فاضغط **القيمة** على نهاية صفيف "المسارات". إذا كان العنصر لا يحتوي على **الخاصية** ، قم بإنشاء زوج الخاصية والقيمة.

إذا كانت **القيمة** فارغة ، **فاحذفها** .

قم دائمًا بإرجاع كائن المجموعة بالكامل.

*   تغيير الرمز أدناه `// Only change code below this line` وحتى \\ `// Alter values below to test your code` .
*   لاحظ أن تقوم بتحرير داخل وظيفة `updateRecords` .
*   بالنسبة لمعلمة **المعرّف** المحددة ، والمرتبطة بكائن **المجموعة** :
    *   إذا كانت معلمة **value** ليست سلسلة فارغة ، قم بتحديث (أو تعيين) معلمة **value** لمعلمة **prop** .
    *   إذا كانت معلمة **prop** تساوي `"tracks"` ولا تكون **القيمة** سلسلة فارغة ، فاضغط **القيمة** على نهاية صفيف **المسارات** .
    *   إذا كانت **القيمة** هي سلسلة فارغة، حذف تلك **دعامة** من الكائن.
*   وأخيراً ، قم بإرجاع كائن **المجموعة** .

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 1

استخدم عبارة `else if` للتحقق من الخطوات المطلوبة.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 2

الخطوة الثانية المذكورة في التعليمات يجب أن تكون الأولى في حياتك `else if` البيان.

> _حاول أن تحل المشكلة الآن_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") تلميح: 3

للوصول إلى قيمة مفتاح في هذا الكائن ، ستستخدم `collection[id][prop]` .

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل في المستقبل!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":مبتدئ:") الحل الأساسي للكود:

 `function updateRecords(id, prop, value) { 
  if (prop === "tracks" && value !== "") { 
   if(collection[id][prop]) { 
    collection[id][prop].push(value); 
   } 
   else { 
    collection[id][prop]=[value]; 
   } 
  } else if (value !== "") { 
    collection[id][prop] = value; 
  } else { 
    delete collection[id][prop]; 
  } 
 
  return collection; 
 } 
` 

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":صاروخ:") [تشغيل الكود](https://repl.it/C2AZ/0)

### شرح الشفرة:

*   يتحقق أولاً إذا كان **prop** يساوي **المسارات** وإذا لم تكن **القيمة** سلسلة فارغة. في حالة مرور كلا الاختبارين ، يتم دفع **القيمة** إلى صفيف **المسارات** .
*   إذا لم يتم التحقق من هذا الفحص الأول ، فإنه يتحقق فقط إذا لم تكن **القيمة** سلسلة فارغة. في حالة اجتياز هذا الاختبار ، تتم إضافة مفتاح جديد ( **دعم** ) وقيمة ( **قيمة** ) إلى الكائن ، أو يتم تحديث مفتاح موجود إذا كان **prop** موجودًا بالفعل.
*   إذا فشلت كلتا الشيكات (بمعنى أن **القيمة** يجب أن تكون سلسلة فارغة) ، عندئذٍ تتم إزالة المفتاح ( **prop** ) من الكائن.

**مثال تشغيل**

*   `updateRecords(5439, "artist", "ABBA");` أشواط.
*   **prop** يساوي "الفنان" ، وليس "المسارات" ، لذلك الجزء الأول من `else if` فشل البيان.
*   **القيمة** ليست سلسلة فارغة ، لذلك الجزء الثاني من آخر إذا تم تمرير العبارة.
*   `artist: "ABBA"` تتم إضافة `artist: "ABBA"` إلى `id` `5439` .

### مصادر:

*   [تحدي fcc: الوصول إلى خصائص الكائنات مع تدرج قوس](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation/)
*   [تحدي fcc: إضافة خصائص جديدة إلى كائن JavaScript](http://www.freecodecamp.com/challenges/add-new-properties-to-a-javascript-object)
*   [تحدي fCC: حذف الخصائص من كائن JavaScript](http://www.freecodecamp.com/challenges/delete-properties-from-a-javascript-object)
*   [تحدي fCC: الوصول إلى الكائنات المتداخلة](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects/)
*   ["Array.prototype.push ()" - _مرجع JavaScript الخاص بـ MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   ["delete operator" - _MDN JavaScript reference_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)