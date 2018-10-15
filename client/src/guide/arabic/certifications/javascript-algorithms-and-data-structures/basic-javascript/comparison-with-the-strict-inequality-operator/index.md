---
title: Comparison with the Strict Inequality Operator
localeTitle: مقارنة مع مشغل عدم المساواة الصارم
---
## مقارنة مع مشغل عدم المساواة الصارم

### شرح المشكلة:

· _أضف `strict inequality operator` إلى العبارة `if` بحيث ستعود الدالة "غير متساوية" عندما لا يكون `val` مساوياً تمامًا لـ `17` ._

#### تلميح 1

سيعود عامل عدم المساواة الصارم ( `!==` ) إلى `true` إذا كانت القيمة الأولى لا تساوي النوع الثاني الذي يأخذ نوع القيمة في الاعتبار.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

**الحل في المستقبل!**

## حل الرمز الأساسي:

 `function testStrictNotEqual(val) { 
  if (val !== 17) { 
    return "Not equal"; 
  } 
  return "Equal"; 
 } 
 
 // Change this value to test 
 testStrictNotEqual(10); 
` 

### تفسير الشفرة

تقوم الدالة أولاً بتقييم `if` الشرط `(val !== 17)` تقييمه إلى `true` نظرًا لنوع القيمة والقيمة. إذا كان كذلك ، فإنها ترجع العبارة بين الأقواس المتعرجة ("غير متساوية"). إذا لم يكن الأمر كذلك ، فإنه يُرجع بيان `return` التالي خارجها ("مساواة").

### مصادر

*   ["Non-identity / strict inequality (! ==)" - _MDN JavaScript reference_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Non-identity_strict_inequality_(!))