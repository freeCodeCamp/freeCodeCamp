---
title: Set Default Parameters for Your Functions
localeTitle: تعيين المعلمات الافتراضية لوظائفك
---
## تعيين المعلمات الافتراضية لوظائفك

: _علم_ ثلاثي على _المشاركة: تذكر استخدام Read-Search-Ask إذا واجهتك مشكلة. حاول إقران البرنامج:_ busts in\_silhouette: واكتب رمزك الخاص: قلم رصاص:

### : checkered\_flag: مشكلة التفسير:

 `const increment = (function() { 
  "use strict"; 
  return function increment(number, value) { 
    return number + value; 
  }; 
 })(); 
 console.log(increment(5, 2)); // returns 7 
 console.log(increment(5)); // returns NaN 
` 

سنقوم بتعديل دالة الزيادة بحيث يتم زيادة معلمة **الرقم** بمقدار 1 بشكل افتراضي ، عن طريق تعيين **القيمة** إلى 1 إذا لم يتم تمرير **قيمة للقيمة** إلى دالة الزيادة.

### : speech\_balloon: تلميح: 1

دعونا تحديد مكان **قيمة** المعلمة في وظيفة JS

حاول أن تحل المشكلة الآن

### : speech\_balloon: تلميح: 2

تعيين **قيمة** مساوية لشيء بحيث تكون هذه القيمة بشكل افتراضي

حاول أن تحل المشكلة الآن

### تنبيه المفسد!

![المفسد](http://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

الحل في المستقبل!

## : مبتدئ: حل الرمز الأساسي:

 `const increment = (function() { 
  "use strict"; 
  return function increment(number, value = 1) { 
    return number + value; 
  }; 
 })(); 
 console.log(increment(5, 2)); // returns 7 
 console.log(increment(5)); // returns NaN 
` 

: صاروخ: [تشغيل التعليمات البرمجية](https://repl.it/@RyanPisuena/PleasingFumblingThings)

## شرح الشفرة

*   هذا القسم بسيط جدا. تمرير هذا القسم عن طريق تعيين المعلمة **قيمة** تساوي 1. عندما تأتي وظيفة في حالات الاختبار حيث لم يتم تمرير **قيمة** أي شيء، ثم سيتم تعيين **قيمة** واحدة بشكل افتراضي.

روابط ذات صلة:

[معاملات جافا سكريبت الافتراضية](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

# : الحافظة: ملاحظات للمساهمات:

*   : تحذير: لا تقم بإضافة حلول مشابهة لأي حلول موجودة. إذا كنت تعتقد أنها مشابهة ولكن أفضل ، فحاول دمج (أو استبدال) الحل المشابه الموجود.
*   أضف شرحًا لحلك.
*   تصنيف الحل في واحدة من الفئات التالية - الأساسي والمتوسط ​​والمتقدم. : traffic\_light:
*   الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة أي محتويات رئيسية ذات صلة. (: تحذير: لا تقم بإزالة أي أسماء مستخدمين موجودة)

انظر: point\_right: [Wiki Challenge Solution Template](https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-template-guide/14272) كمرجع.