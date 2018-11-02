---
title: Comparison with the Less Than Operator
localeTitle: مقارنة مع أقل من المشغل
---
## مقارنة مع أقل من المشغل

**`<`** (أقل من) هو عامل تشغيل منطقي يقوم بإرجاع الحالة الحقيقية تكون القيمة الموجودة على اليسار أقل من القيمة الموجودة على اليمين.

## الحل الأساسي

 `function testLessThan(val) { 
  if (val < 25) 
    return "Under 25"; 
 
  if (val < 55) 
    return "Under 55"; 
 
  return "55 or Over"; 
 } 
`