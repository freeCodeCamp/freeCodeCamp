---
title: Multiple Identical Options in Switch Statements
localeTitle: خيارات متعددة مماثلة في بيانات التبديل
---
## خيارات متعددة مماثلة في بيانات التبديل

### شرح المشكلة

_إذا تم حذف بيان الفاصل من حالة عبارة التبديل ، يتم تنفيذ العبارة (الحالات) التالية إلى أن تتم مصادفة فاصل. إذا كان لديك مدخلات متعددة بنفس المخرجات ، فيمكنك تمثيلها في بيان تبديل مثل هذا:_

 `switch(val) { 
  case 1: 
  case 2: 
  case 3: 
    result = "1, 2, or 3"; 
    break; 
  case 4: 
    result = "4 alone"; 
 } 
` 

_الحالات 1 و 2 و 3 ستنتج نفس النتيجة._

_اكتب عبارة تبديل لتعيين الإجابة للنطاقات التالية:_ `1-3` - "منخفض"  
`4-6` - "منتصف"  
`7-9` - "عالية"

_ملحوظة: ستحتاج إلى بيان حالة لكل رقم في النطاق._

## تنبيه المفسد!

**الحل في المستقبل!**

## حل الرمز:

 `function sequentialSizes(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch(val) { 
    case 1: 
    case 2: 
    case 3: 
      return "Low"; 
      break; 
    case 4: 
    case 5: 
    case 6: 
      return "Mid"; 
      break; 
    case 7: 
    case 8: 
    case 9: 
      return "High"; 
      break; 
  } 
  // Only change code above this line 
  return answer; 
 } 
 // Change this value to test 
 sequentialSizes(1); 
` 

## حل رمز بديل:

 `function sequentialSizes(val) { 
  var answer = ""; 
  // Only change code below this line 
  switch(val){ 
    case 1: case 2: case 3: 
      answer = "Low"; 
      break; 
    case 4: case 5: case 6: 
      answer = "Mid"; 
      break; 
    case 7: case 8: case 9: 
      answer = "High"; 
  } 
  // Only change code above this line 
  return answer; 
 } 
 // Change this value to test 
 sequentialSizes(1); 
` 

تشغيل الكود في [repl.it.](https://repl.it/@AdrianSkar/Basic-JS-Multiple-opts-in-switch)

### تفسير الشفرة

نظرًا لأن لديك بالفعل متغيرًا مسمى `answer` المحددة وتقوم الدالة بإرجاعه ، فيمكنك فقط تعديل قيمته على كل مجموعة من عبارات الحالة لتتوافق مع متطلبات التمرين.

### مصادر

*   ["التبديل: طرق للحالة متعددة المعايير" - _مرجع Javascript لـ MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)