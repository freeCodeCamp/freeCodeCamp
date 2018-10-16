---
title: Comparison with the Less Than Or Equal To Operator
localeTitle: مقارنة مع أقل من أو يساوي المشغل
---
## مقارنة مع أقل من أو يساوي المشغل

**`<=`** (أقل من أو يساوي) هو عامل تشغيل منطقي يقوم بإرجاع الحالة الحقيقية إلى أن القيمة الموجودة على اليسار هي **نفسها أو أقل** من القيمة الموجودة على اليمين.

## الحل الأساسي

 `function testLessOrEqual(val) { 
  if (val <= 12) 
    return "Smaller Than or Equal to 12"; 
 
  if (val <= 24) 
    return "Smaller Than or Equal to 24"; 
 
  return "More Than 24"; 
 } 
`