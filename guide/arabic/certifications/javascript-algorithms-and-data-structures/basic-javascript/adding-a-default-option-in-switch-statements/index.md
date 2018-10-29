---
title: Adding a Default Option in Switch Statements
localeTitle: إضافة خيار افتراضي في تبديل البيانات
---
# إضافة خيار افتراضي في تبديل البيانات

*   تؤدي إضافة خيار افتراضي إلى التأكد من أنه في حالة عدم تطابق المتغير الخاص بك مع أي من الخيارات ، فسيتم استخدام الإعداد الافتراضي.

## حل:

 `function switchOfStuff(val) { 
  var answer = ""; 
 
  switch(val){ 
    case 'a': answer = 'apple'; 
    break; 
    case 'b': answer = 'bird'; 
    break; 
    case 'c': answer = 'cat'; 
    break; 
    default: answer = 'stuff'; 
  } 
 
  return answer; 
 } 
`