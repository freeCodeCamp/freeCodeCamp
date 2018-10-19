---
title: Multiples of 3 and 5
localeTitle: مضاعفات 3 و 5
---
## المشكلة 1: مضاعفات 3 و 5

### طريقة:

*   يمكننا العثور على ما إذا كان الرقم مقسماً على رقم آخر بمساعدة عامل تشغيل modulo `%` .
*   `num1 % num2` بارجاع `0` اذا لم يكن هناك باقى أثناء `num1/num2` .
*   بدءًا من `i = 3` نظرًا لأن هذا هو الرقم الأول الذي يتم تقسيمه على 3 أو 5 ، فإننا نتعبر حتى `number` المقدم.
*   إذا كان الرقم قابل للقسمة إما 3 أو 5 ، نضيف ذلك إلى `sum` المتغير وأخيرًا نعيده.

### حل:

 `function multiplesOf3and5(number) { 
  let sum = 0, i = 3; 
  while (i < number){ 
    if (i % 3 == 0 || i % 5 == 0) sum += i; 
    i++; 
  } 
  return sum; 
 } 
` 

*   [تشغيل الكود](https://repl.it/@ezioda004/Project-Euler-Problem-1-Multiples-of-3-and-5)

### مرجع:

*   [مشغل Modulo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_())