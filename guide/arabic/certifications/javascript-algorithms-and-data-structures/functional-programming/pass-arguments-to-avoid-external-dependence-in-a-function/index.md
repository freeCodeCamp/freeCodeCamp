---
title: Pass Arguments to Avoid External Dependence in a Function
localeTitle: تمرير الحجج لتجنب الاعتماد الخارجي في وظيفة
---
## تمرير الحجج لتجنب الاعتماد الخارجي في وظيفة

## تلميح: 1

حاول تمرير الوسيطة للعمل وإرجاع قيمة زيادة هذه الوسيطة.

**الحل في المستقبل!**

## الحل الأساسي للكود:

 `// the global variable 
 var fixedValue = 4; 
 
 // Add your code below this line 
 function incrementer (value) { 
  return value + 1; 
 
  // Add your code above this line 
 } 
 
 var newValue = incrementer(fixedValue); // Should equal 5 
 console.log(fixedValue); // Should print 4 
` 

### طريقة

سيوفر هذا الرمز نفس النتيجة `fixedValue` الأخير ، فقط هذه المرة `fixedValue` قيمة `fixedValue` إلى الدالة كمعلمة.