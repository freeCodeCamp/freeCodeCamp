---
title: Ignore Case While Matching
localeTitle: تجاهل حالة أثناء المطابقة
---
## تجاهل حالة أثناء المطابقة

عند إنشاء تعبير عادي ، قد ترغب في مطابقة أجزاء من سلسلة متشابهة في التهجئة ، ولكنها مختلفة في الحالة. للقيام بذلك ، يمكنك إضافة علامة `i` إلى نهاية regex. في هذا التحدي ، أنت تفعل ذلك بالضبط.

## تلميح 1:

قم بتعديل regex بحيث يكشف "freeCodeCamp" و "FREECODECAMP" و "FrEeCoDeCaMp". ربما باستخدام العلم `i` قد يساعد؟

## تنبيه المفسد - الحل إلى الأمام!

## حل

 `let myString = "freeCodeCamp"; 
 let fccRegex = /freeCodeCamp/i; 
 let result = fccRegex.test(myString); 
`