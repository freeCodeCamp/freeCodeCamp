---
title: Comparisons with the && (logical AND) operator
localeTitle: مقارنات مع عامل التشغيل && (المنطقية AND)
---
## مقارنات مع عامل التشغيل && (المنطقية AND)

### شرح المشكلة:

· قم _بدمج البيانين إذا كانا في بيان واحد والذي سيعود `"Yes"` إذا كان `val` أقل من أو يساوي `50` وأكبر من أو يساوي `25` . خلاف ذلك ، سيعود `"No"` ._

#### تلميح 1

عامل التشغيل المنطقي AND ( `&&` ) يقارن كلا عبارات وإرجاع `true` فقط إذا كان كلاهما صحيحًا أو يمكن تحويله إلى true (صواب).

> _حاول أن تحل المشكلة الآن_

#### تلميح 2

تذكر أن هذا التأثير لا يمكن أن يتحقق أيضا من أن تعشش `if` البيانات.

> _حاول أن تحل المشكلة الآن_

## تنبيه المفسد!

**الحل في المستقبل!**

## حل الرمز الأساسي:

 `function testLogicalAnd(val) { 
  // Only change code below this line 
 
  if (val <= 50 && val >= 25) { 
      return "Yes"; 
  } 
 
  // Only change code above this line 
  return "No"; 
 } 
 
 // Change this value to test 
 testLogicalAnd(10); 
` 

[تشغيل الكود في repl.it](https://repl.it/@AdrianSkar/Basic-JS-Comparison-with-the-and-operator)

### تفسير الشفرة

وظيفة بتقييم أولا `if` شرط `val <= 50` تقييمها إلى `true` تحويل `val` لعدد إذا لزم الأمر، ثم يفعل نفس الشيء مع `val >=25` بسبب AND (المنطقي `&&` ) المشغل. إذا كان كلاهما العودة true ، يتم تنفيذ العبارة `return "Yes"` .

### مصادر

*   ["العوامل المنطقية" - _مرجع جافا سكريبت MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)