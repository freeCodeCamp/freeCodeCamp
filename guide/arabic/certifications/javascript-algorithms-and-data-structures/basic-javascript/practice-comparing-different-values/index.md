---
title: Practice comparing different values
localeTitle: ممارسة مقارنة قيم مختلفة
---
## ممارسة مقارنة قيم مختلفة

### شرح المشكلة:

_تعديل الوظيفة بحيث ترجع "المساواة" فقط عندما تكون القيم متساوية **تماما** ._

#### تلميح 1

تذكر من التدريبات الأخيرة أنه _بخلاف مشغل المساواة ، الذي يحاول تحويل كلتا القيمتين مقارنة بالنوع الشائع ، فإن مشغل المساواة الصارم لا يقوم بتحويل نوع._ [1](#cite1)

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

**الحل في المستقبل!**

## حل الرمز الأساسي:

 `// Setup 
 function compareEquality(a, b) { 
    if (a === b) { // Change this line 
        return  "Equal"; 
    } 
    return  "Not Equal"; 
 } 
 
 // Change this value to test 
 compareEquality(10, "10"); 
` 

### تفسير الشفرة

تقوم الدالة أولاً بتقييم `if` الشرط `(a === b)` تقييمه إلى الحالة `true` نظرًا إلى كل من النوع والقيمة. إذا كان كذلك ، فإنها ترجع العبارة بين الأقواس المتعرجة ("مساواة"). إذا لم يكن الأمر كذلك ، فإنه يُرجع بيان `return` التالي خارجها ("لا يساوي").

### مصادر

1 . ["جافا سكريبت الأساسي: مقارنة مع مشغل المساواة الصارمة" ، درس لجنة الاتصالات الفيدرالية في _خوارزميات جافا سكريبت وشهادات البيانات_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)

### مصادر

*   ["استخدام عوامل التشغيل _المتساوية_ " - _مرجع JavaScript الخاص بـ MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators)