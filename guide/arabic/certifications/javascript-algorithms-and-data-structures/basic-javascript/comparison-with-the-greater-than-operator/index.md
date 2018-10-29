---
title: Comparison with the Greater Than Operator
localeTitle: مقارنة مع أكبر من المشغل
---
## مقارنة مع أكبر من المشغل

`>` (أكبر من) هو عامل منطقي يقوم بإرجاع الحالة الحقيقية ، حيث تكون القيمة الموجودة على اليسار أعلى من القيمة الموجودة على اليمين.

## الحل الأساسي

 `function testGreaterThan(val) { 
  if (val > 100) 
    return "Over 100"; 
 
  if (val > 10) 
    return "Over 10"; 
 
  return "10 or Under"; 
 } 
`