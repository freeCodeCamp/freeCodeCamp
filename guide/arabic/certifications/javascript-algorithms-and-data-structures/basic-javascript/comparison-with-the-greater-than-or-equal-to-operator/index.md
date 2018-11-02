---
title: Comparison with the Greater Than Or Equal To Operator
localeTitle: مقارنة مع أكبر من أو يساوي المشغل
---
## مقارنة مع أكبر من أو يساوي المشغل

*   `>=` (أكبر من أو يساوي) هو عامل منطقي يقوم بإرجاع الحالة الحقيقية ، القيمة الموجودة على اليسار هي **نفسها أو أعلى** من القيمة الموجودة على اليمين.

## الحل الأساسي

 `function testGreaterOrEqual(val) { 
  if (val >= 20) 
    return "20 or Over"; 
 
  if (val >= 10) 
    return "10 or Over"; 
 
  return "Less than 10"; 
 } 
`