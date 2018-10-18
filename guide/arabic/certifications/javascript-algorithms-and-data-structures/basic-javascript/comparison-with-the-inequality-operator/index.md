---
title: Comparison with the Inequality Operator
localeTitle: مقارنة مع مشغل عدم المساواة
---
## مقارنة مع مشغل عدم المساواة

*   `!=` (Inequality) هو عامل تشغيل منطقي يقوم بإرجاع الحالة true ، تختلف القيمة الموجودة على اليسار عن القيمة الموجودة على اليمين.
*   يعتبر عامل عدم المساواة `7` و `"7"` نفس الشيء لأنه لا يقارن نوع المتغير.

## الحل الأساسي

 `function testNotEqual(val) { 
  if (val != 99) 
    return "Not Equal"; 
 
  return "Equal"; 
 } 
`