---
title: Use conditional logic with If statements
localeTitle: استخدم المنطق الشرطي مع عبارات If
---
## استخدم المنطق الشرطي مع عبارات If

### شرح المشكلة:

_قم بإنشاء جملة `if` داخل الدالة لإرجاع `"Yes, that was true"` إذا كانت المعلمة `wasThatTrue` `true` وإرجاع `"No, that was false"` وإلا._

#### تلميح 1

ستقوم عبارة `if` الخاص بك بتقييم ما إذا كان `(condition)` الخاص بك `true` أم `false` ويتم تنفيذه (إذا تم تقييمه إلى `true` ) فإن `{statement}` الإعلان عنه بعده مباشرة.

> _حاول أن تحل المشكلة الآن_

#### تلميح 2

في حالة تقييم `(condition)` الخاص بك إلى `false` ، فلن يتم تنفيذ `{statement}` وستعرض الدالة بيان `return` التالي.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

**الحل في المستقبل!**

## حل الرمز الأساسي:

 `// Setup 
 function trueOrFalse(wasThatTrue) { 
 
  // Only change code below this line. 
 
  if (wasThatTrue) 
   { 
    return "Yes, that was true"; 
    } 
  return "No, that was false"; 
 
  // Only change code above this line. 
 } 
` 

### تفسير الشفرة

تقوم الدالة أولاً بتقييم `if` تقييم الحالة `(wasThatTrue)` إلى `true` . إذا كان الأمر كذلك ، يقوم ir بإرجاع العبارة بين الأقواس المتعرجة. إذا لم يكن الأمر كذلك ، فسيعرض بيان `return` التالي خارجها.

### مصادر

*   ["Boolean" - مسرد مصطلحات MDN](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
    
*   ["if… else" - MDN JavaScript reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)