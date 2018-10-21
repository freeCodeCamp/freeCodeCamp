---
title: Comparison with the strict equality operator
localeTitle: مقارنة مع مشغل المساواة الصارمة
---
## مقارنة مع مشغل المساواة الصارمة

### شرح المشكلة:

· _استخدم عامل المساواة الصارم في العبارة `if` لذلك ستعود الدالة "Equal" عندما يكون `val` تساوي تمامًا `7` ._

#### تلميح 1

تذكر من التمرين الأخير أن _المساواة تختلف عن الواجب ( `=` ) ، الذي يعين القيمة على يمين المشغل إلى متغير في اليسار._ [1](#cite1)

> _حاول أن تحل المشكلة الآن_
> 
> #### تلميح 2
> 
> _على عكس مشغل المساواة ، والذي يحاول تحويل كلتا القيمتين مقارنة بالنوع الشائع ، فإن مشغل المساواة الصارم لا يقوم بتحويل نوع._ [2](#cite2) _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

**الحل في المستقبل!**

## حل الرمز الأساسي:

 `// Setup 
 function testStrict(val) { 
  if (val === 7) { // Change this line 
    return "Equal"; 
  } 
  return "Not equal"; 
 } 
 
 // Change this value to test 
 testStrict(10); 
` 

### تفسير الشفرة

تقوم الدالة أولاً بتقييم `if` الشرط `(val === 7)` تقييمه إلى `true` . إذا كان كذلك ، فإنها ترجع العبارة بين الأقواس المتعرجة ("مساواة"). إذا لم يكن الأمر كذلك ، فإنه يُرجع بيان `return` التالي خارجها ("لا يساوي").

### مصادر

1 . ["جافا سكريبت الأساسية: مقارنة مع مشغل المساواة" ، درس لجنة الاتصالات الفدرالية في _خوارزميات جافا سكريبت وهيكلة البيانات_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

2 . ["جافا سكريبت الأساسي: مقارنة مع مشغل المساواة الصارمة" ، درس لجنة الاتصالات الفيدرالية في _خوارزميات جافا سكريبت وشهادات البيانات_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)

### مصادر

*   ["if… else" - _MDN JavaScript reference_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)
    
*   [كوندوف ، الكسندر. "فهم JS: الإكراه". _Hackernoon_](https://hackernoon.com/understanding-js-coercion-ff5684475bfc) ، Accessed 15 Sep. 2018
    
*   ["مشغِّلو المقارنات" - _مرجع جافا سكريبت MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)