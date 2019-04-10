---
title: Largest prime factor
localeTitle: أكبر عامل رئيسي
---
## المشكلة 3: أكبر عامل رئيسي

### طريقة:

*   للعثور على أكبر عامل رئيسي لرقم ، نبدأ من أصغر عامل رئيسي 2 ونقسم العدد معه.
*   إذا كانت البقية تساوي 0 ، فهذا يعني أن الرقم قابل للقسمة على هذا الرقم الأساسي ، فنحن نحتفظ بالعدد حسب نفس العدد الأولي حتى يصبح هذا الرقم غير قابل للقسمة على هذا الرقم الأولي.
*   بعد ذلك ، نثني على العامل الأول بنسبة 1 ونكرر هذه العملية حتى يصبح الرقم 1.

### حل:

 `function largestPrimeFactor(number) { 
  let prime = 2, max = 1; 
  while (prime <= number){ 
    if (number % prime == 0) { 
      max = prime; 
      number = number/prime; 
    } 
    else prime++; //Only increment the prime number if the number isn't divisible by it 
  } 
  return max; 
 } 
` 

*   [تشغيل الكود](https://repl.it/@ezioda004/Problem-3-Largest-prime-factor)

### مصادر:

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Prime_number)