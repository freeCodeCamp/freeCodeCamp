---
title: Comparison with the Equality Operator
localeTitle: مقارنة مع مشغل المساواة
---
## مقارنة مع مشغل المساواة

### شرح المشكلة:

_أضف عامل المساواة إلى الخط المحدد بحيث تقوم الدالة بإرجاع "Equal" عندما يكون `val` مساويًا لـ 12._

#### تلميح 1

تذكر أن _المساواة تختلف عن الواجب ( `=` ) ، الذي يعين القيمة على يمين المشغل إلى متغير في اليسار._ [1](#cite1)

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

**الحل في المستقبل!**

## حل الرمز الأساسي:

 `function testEqual(val) { 
  if (val == 12) { // Change this line 
    return "Equal"; 
  } 
  return "Not equal"; 
 } 
 // Change this value to test 
 testEqual(10); 
` 

[تشغيل الكود في repl.it](https://repl.it/@AdrianSkar/Basic-JS-Equality-operator)

### تفسير الشفرة

تقوم الدالة أولاً بتقييم `if` تقييم الحالة `(val == 12)` إلى `true` . إذا كان كذلك ، فإنها ترجع العبارة بين الأقواس المتعرجة ("مساواة"). إذا لم يكن الأمر كذلك ، فإنه يُرجع بيان `return` التالي خارجها ("لا يساوي").

### مصادر

1 . ["جافا سكريبت الأساسية: مقارنة مع مشغل المساواة" ، درس لجنة الاتصالات الفدرالية في _خوارزميات جافا سكريبت وهيكلة البيانات_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

### مصادر

*   ["مشغل المساواة" - _مرجع جافا سكريبت MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_())