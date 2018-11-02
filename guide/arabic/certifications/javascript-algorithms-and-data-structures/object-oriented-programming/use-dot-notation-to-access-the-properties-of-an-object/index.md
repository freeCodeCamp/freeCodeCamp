---
title: Use Dot Notation to Access the Properties of an Object
localeTitle: استخدم Dot Notation للوصول إلى خصائص كائن
---
## استخدم Dot Notation للوصول إلى خصائص كائن

### طريقة:

ستقوم التعليمة البرمجية التالية ببساطة طباعة `property1` من كائن `obj` .

 `let obj = { 
  property1 = 1, 
  property2 = 2 
 }; 
 
 console.log(obj.property1); 
` 

باتباع هذا المنطق ، استخدم عملية `console.log` لطباعة كل من `property1` و `property2` على الشاشة.

### حل:

 `let dog = { 
  name: "Spot", 
  numLegs: 4 
 }; 
 // Add your code below this line 
 console.log(dog.name); 
 console.log(dog.numLegs); 
`