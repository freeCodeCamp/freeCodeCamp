---
title: Number isFinite
localeTitle: الرقم هو
---
# الرقم هو

## وصف

يتحقق الأسلوب `Number.isFinite()` إذا كانت القيمة التي تم تمريرها إليه رقم محدود. تم تقديم هذه الطريقة في ES6

## بناء الجملة

`Number.isFinite(val)`

### المعلمات

**فال** - قيمة للتحقق من التمدد

## قيمة الإرجاع

A [Boolean](https://guide.freecodecamp.org/javascript/booleans) يشير إلى ما إذا كانت القيمة عدد محدود أم لا.

## وصف

`Number.isFinite` عن الطريقة العالمية [isFinite ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite) ، ولا يقوم بتحويل القيمة التي تم اختبارها إلى رقم. هذا يعني أن القيمة يجب أن تكون رقمًا ومحدودًا لإرجاع true.

## أمثلة

 `Number.isFinite(Infinity)     // false 
 Number.isFinite(-Infinity)    // false 
 
 Number.isFinite(1234)         // true 
 Number.isFinite(-1.11)        // true 
 Number.isFinite(0)            // true 
 Number.isFinite(3g55)         // true 
 
 Number.isFinite('1234')       // false 
 Number.isFinite('Hi')         // false 
 Number.isFinite('2005/12/12') // false 
 
 Number.isFinite('0');         // false, would've been true with 
                              // global isFinite('0') 
 
 Number.isFinite(null);        // false, would've been true with 
                              // global isFinite(null) 
` 

#### معلومات اكثر:

[ECMA 2015 Docs](https://www.ecma-international.org/ecma-262/6.0/#sec-number.isfinite) [Number.isFinite () MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite)