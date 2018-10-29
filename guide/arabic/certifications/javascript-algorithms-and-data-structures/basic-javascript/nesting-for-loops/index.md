---
title: Nesting For Loops
localeTitle: التعشيش للحلقات
---
## التعشيش للحلقات

**تذكر استخدام Read-Search-Ask إذا واجهتك مشكلة. محاولة إقران البرنامج: التمثال النصفي _في_ صورة ظلية: وكتابة الرمز الخاص بك: قلم رصاص:**

: checkered\_flag: **مشكلة التفسير:**

إذا كان لديك صفيف متعدد الأبعاد ، فيمكنك استخدام نفس المنطق الذي تستخدمه نقطة الاتصال السابقة لتكرار الحلقات من خلال الصفيف وأية صفيف فرعي.

هنا مثال:

 `var arr = [ 
  [1,2], [3,4], [5,6] 
 ]; 
 for (var i=0; i < arr.length; i++) { 
  for (var j=0; j < arr[i].length; j++) { 
    console.log(arr[i][j]); 
  } 
 } 
` 

هذا إخراج كل عنصر فرعي في `arr` واحد في كل مرة. لاحظ أنه بالنسبة للحلقة الداخلية ، فإننا نتحقق من طول arr \[i\] ، لأن arr \[i\] هو نفسه مصفوفة.

*   تعديل الدالة `multiplyAll` بحيث تضاعف متغير `product` قبل كل رقم في sub-arrays of `arr` .
*   تأكد من تداخل الثانية للحلقة داخل الأول.

**روابط ذات صلة**

*   [عش صف واحد داخل صفيف آخر](https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-javascript/nest-one-array-within-another-array)
*   [تكررت من خلال صفيف مع ل حلقة](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-through-an-array-with-a-for-loop)
*   [الوصول إلى صفائف متداخلة](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-arrays)

: speech\_balloon: تلميح: 1

تأكد من التحقق مع `length` وليس الصفيف العام.

_حاول أن تحل المشكلة الآن_

: speech\_balloon: تلميح 2

استخدم كل من `i` و `j` عند ضرب المنتج.

_حاول أن تحل المشكلة الآن_

: speech\_balloon: تلميح 3

تذكر استخدام `arr[i]` عند ضرب المصفوفات الفرعية بمتغير `product` .

_حاول أن تحل المشكلة الآن_

_تنبيه المفسد!_ ![](https://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل قبل**

: مبتدئ: **حل الرمز الأساسي:**

 `function multiplyAll(arr) { 
  var product = 1; 
  // Only change code below this line 
  for(var i=0; i < arr.length; i++){ 
    for (var j=0; j < arr[i].length; j++){ 
      product = product * arr[i][j]; 
    } 
  } 
  // Only change code above this line 
  return product; 
 } 
 
 // Modify values below to test your code 
 multiplyAll([[1,2],[3,4],[5,6,7]]); 
` 

: صاروخ: **[تشغيل التعليمات البرمجية](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops/)**

**شرح الشفرة:**

*   نتحقق من طول `arr` في `i` for loop و `arr[i]` length في الحلقة `j` for loop.
*   نضرب متغير `product` حد ذاته لأنه يساوي 1 ، ومن ثم نضربه بواسطة المصفوفات الفرعية.
*   والصفحتان الفرعيتان `arr[i]` هما `arr[i]` و `j` .

: الحافظة: **ملاحظات للمساهمات:**

*   : تحذير: **لا تقم** بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها مشابهة ولكن أفضل ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - الأساسي والمتوسط ​​والمتقدم. : traffic\_light:
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي محتويات رئيسية ذات صلة. (: تحذير: _**لا تقم**_ بإزالة أي أسماء مستخدمين موجودة)

انظر: point\_right: [Wiki Challenge Solution Template](http://forum.freecodecamp.com/t/algorithm-article-template/14272) كمرجع.