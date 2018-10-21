---
title: Understand the Constructor Property
localeTitle: فهم خاصية منشئ
---
## فهم خاصية منشئ

### طريقة

ببساطة إنهاء وظيفة مثل ذلك المثال المعطى. استخدم عبارة `if-statement` لاختبار ما إذا كان `candidate` `Dog` أم لا.

### حل

 `function Dog(name) { 
  this.name = name; 
 } 
 
 // Add your code below this line 
 function joinDogFraternity(candidate) { 
  if(candidate.constructor === Dog) { 
    return true; 
  } 
  else { 
    return false; 
  } 
 } 
`