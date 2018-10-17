---
title: Reto De Algoritmo Bu
localeTitle: خوارزمية التحدي بو
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/3/3c8584a085a0deaea66b3400e6321eeadab552a2.jpg)

### شرح المشكلة:

*   هذا البرنامج بسيط للغاية ، فالخدعة هي فهم أنه boolaneo بدائي. يتلقى البرنامج معلمة حقيقية أو خاطئة.

## فكرة: 1

*   يجب عليك التحقق من أن نوع المعلمة المستلمة هو boolaneo.

## فكرة: 2

*   للتحقق من نوع المعلمة ، يمكنك استخدام `typeof`

## فكرة: 3

*   لأنه يجب عليك إظهار true أو false ، يمكنك استخدام عبارة if أو ببساطة إرجاع العبارة التي قد تستخدمها في العبارة if.

## تنبيه المفسد!

![علامة تحذير](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**الحل أدناه!**

## حل الرمز:

 `function booWho(bool) { 
  return typeof bool === 'boolean'; 
 } 
 
 // realizamos el test 
 booWho(null); 
` 

![:rocket:](/images/emoji/emoji_one/rocket.png?v=2 ": صاروخ:") [في REPL!](https://repl.it/CLnK/0)

# شرح الكود:

نستخدم عامل التشغيل `typeof` للتحقق مما إذا كان المتغير boolanea. إذا كان الأمر كذلك ، فسوف يعود `true` . بخلاف ذلك ، سيتم عرض نوع آخر `falso` .

> **ملاحظة:** الرجاء إضافة اسم المستخدم الخاص بك فقط إذا قمت بإضافة **محتوى ذي صلة** إلى المقالة. (يرجى عدم إزالة أي اسم موجود).