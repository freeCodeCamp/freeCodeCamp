---
title: Set the Child's Prototype to an Instance of the Parent
localeTitle: قم بتعيين Prototype الخاص بالطفل إلى مثيل من أصل
---
## قم بتعيين Prototype الخاص بالطفل إلى مثيل من أصل

### طريقة

لا يختلف هذا التحدي عن التحدي الأخير ، حيث يجب عليك إنشاء كائن يرث من النوع `supertype` . فقط هذه المرة سوف يرث `Dog` الفرعي نوع `Animal` الفائق. ببساطة إنشاء مثيل جديد من `Dog.prototype` مثل المثال التالي.

 `Bird.prototype = Object.create(Animal.prototype); 
` 

### حل

 `function Animal() { } 
 
 Animal.prototype = { 
  constructor: Animal, 
  eat: function() { 
    console.log("nom nom nom"); 
  } 
 }; 
 
 function Dog() { } 
 
 // Add your code below this line 
 Dog.prototype = Object.create(Animal.prototype); 
 
 let beagle = new Dog(); 
 beagle.eat();  // Should print "nom nom nom" 
`