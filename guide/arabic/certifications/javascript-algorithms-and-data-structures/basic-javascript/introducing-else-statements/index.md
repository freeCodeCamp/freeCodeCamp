---
title: Introducing Else statements
localeTitle: إدخال بيانات أخرى
---
## إدخال بيانات أخرى

### شرح المشكلة:

· _ضم البيانات `if` في عبارة واحدة `if/else` ._

#### تلميح 1

عند إرجاع العبارة `if` الجملة `false` ، يتم تنفيذ / تقييم التعليمة البرمجية التالية (مثل `return` ، أو `if` `else` عبارات أخرى).

> _حاول أن تحل المشكلة الآن_

#### تلميح 2

في بعض الأحيان ، `if` الممكن استبدال عبارات ( `condition` ) بـ `else {code to execute instead}` عبارات (في جوهرها ، فإنك تخبر وظيفتك أن تفعل _"y"_ إذا لم تستطع _"x"_ بدلاً من تحديد _"x"_ عدة مرات).

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

**الحل في المستقبل!**

## حل الرمز الأساسي:

 `function testElse(val) { 
  var result = ""; 
  // Only change code below this line 
 
  if (val > 5) { 
    result = "Bigger than 5"; 
  } 
 
  else { 
    result = "5 or smaller"; 
  } 
 
  // Only change code above this line 
  return result; 
 } 
 
 // Change this value to test 
 testElse(4); 
` 

[تشغيل الكود في repl.it](https://repl.it/@AdrianSkar/Introducing-else-statements)

### تفسير الشفرة

تقوم الدالة أولاً بتقييم `if` تقييم الحالة `val > 5` إلى `true` . إذا لم يحدث ذلك ، فإنه ينفذ العبارة التالية ( `else { return "5 or smaller";})` .

### مصادر

*   ["if… else" - _MDN JavaScript reference_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)