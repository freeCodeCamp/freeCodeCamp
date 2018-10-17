---
title: Algoritmo Confirma La Terminacin
localeTitle: خوارزمية تؤكد اكتمالها
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a081f3fa5316b7d400a5e518bb0620eef64caa08.jpg)

### التفسير:

الوظيفة ببساطة عملية منطقية. من الضروري إرجاع true إذا انتهت الوسيطة الأولى بالوسيطة الثانية. هذا يعني أنه على سبيل المثال `confirmEnding('Bastian', 'n');` المشكلة `confirmEnding('Bastian', 'n');` ، يجب أن تعود حقيقية.

## فكرة: 1

نلقي نظرة على كيفية عمل `substr()` . يجب أن تحاول الحصول على آخر X حرفًا.

## فكرة: 2

للحصول على آخر X حرف يجب عليك استخدام length () وتحويله إلى رقم سالب.

## فكرة: 3

تأكد من أن لديك الصيغة الصحيحة وأنك تستخدم `===` للمقارنة.

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل أدناه!**

## حل الرمز:

 `function confirmEnding(str, target) { 
  return str.substr(-target.length) === target; 
 } 
` 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": صاروخ:") [تشغيل الكود](https://repl.it/CLjU/18)

## شرح الكود:

نستخدم subtring () مع القيمة السالبة التي تعيد طول الهدف. يمكننا استخدام -1 للحصول على الحرف الأخير ولكن إذا كان طول الهدف أكبر من واحد فعليًا فإن الدالة ستعيد المعلومات غير الصحيحة. ثم نعيد قيمة تعبيرها البُولياني.

> **ملاحظة:** الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة **محتوى ذي صلة** إلى المقالة. (يرجى عدم إزالة أي اسم موجود).