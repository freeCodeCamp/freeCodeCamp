---
title: Match Anything with Wildcard Period
localeTitle: تطابق أي شيء مع فترة أحرف البدل
---
## تطابق أي شيء مع فترة أحرف البدل

## تلميح 1:

النقطة `.` هو المفتاح في هذا التحدي.

## تلميح 2:

يجب عليك وضع النقطة على الموضع الصحيح.

## حل

 `let exampleStr = "Let's have fun with regular expressions!"; 
 let unRegex = /.un/; // Change this line 
 let result = unRegex.test(exampleStr); 
` 

## كسبلايناتيون

الفترة `.` سيكون أي حرف واحد حتى سلاسل "تشغيل" ، "الشمس" ، "متعة" و "لعبة الكلمات" لديهم نفس أون charaters.