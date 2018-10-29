---
title: Create a Method on an Object
localeTitle: إنشاء طريقة على كائن
---
## إنشاء طريقة على كائن

### طريقة:

يجب تهيئة وظيفة الكائنات داخل الكائن نفسه. يتم توضيح هذا في التعليمة البرمجية التالية.

 `let obj = { 
  property1 = 1, 
 
  function1: function() { 
    //Code to be exectued 
  } 
 }; 
` 

### حل:

 `let dog = { 
  name: "Spot", 
  numLegs: 4, 
  sayLegs: function() { 
    return "This dog has " + dog.numLegs + " legs."; 
  } 
 }; 
 
 dog.sayLegs(); 
`