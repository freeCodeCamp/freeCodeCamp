---
title: Returning Boolean Values from Functions
localeTitle: إرجاع القيم المنطقية من الدالات
---
## إرجاع القيم المنطقية من الدالات

بدلاً من استخدام كتلة if / else لمقارنة المتغير ، يمكننا القيام بذلك مباشرةً داخل بيان الإرجاع مع مشغل المقارنة والشفرة الثانوية.

### شرح المشكلة

_فيكس وظيفة هو `isLess` من إزالة العبارة `if...else` ._

 `// Fix this code 
  if (a < b) { 
    return true; 
  } else { 
    return false; 
  } 
` 

#### تلميح 1

كما هو الحال مع [التمرين السابق ،](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch) أنت على وشك تغيير كيفية إرجاع الدالة للقيمة الصحيحة ، مما يعني أنك لست مضطرًا لإعادة استخدام أو تعديل هذا الرمز ولكن لاستبداله.

> _حاول أن تحل المشكلة الآن_

#### تلميح 2

من أجل العودة `true` أو `false` لا تحتاج بيانين ولا تستخدم `if` منها. [عامل المقارنة](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) الصحيح هو كل ما تحتاجه.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

**الحل في المستقبل!**

## حل الرمز:

 `function isLess(a, b) { 
  // Fix this code 
  return a <= b; 
 } 
 // Change these values to test 
 isLess(10, 15); 
` 

تشغيل الكود في [repl.it.](https://repl.it/@AdrianSkar/Basic-Js-Returning-boolean-from-function)

### مصادر

*   ["عامل تشغيل أقل من أو مساوي (<=)" - _مرجع Javascript الخاص بـ MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_or_equal_operator_(%3C))