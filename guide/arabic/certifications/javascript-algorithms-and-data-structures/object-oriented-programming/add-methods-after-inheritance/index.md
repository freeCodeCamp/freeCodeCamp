---
title: Add Methods After Inheritance
localeTitle: إضافة طرق بعد الوراثة
---
## إضافة طرق بعد الوراثة

### طريقة

تمامًا كما في المثال التالي ، يجب إنشاء مثيل جديد لكائن - `Dog` - ويجب تعيين `prototype` .

 `function Bird() { } 
 Bird.prototype = Object.create(Animal.prototype); 
 Bird.prototype.constructor = Bird; 
` 

ثم يجب إضافة وظيفة جديدة - `bark()` - إلى نموذج الكلب.

### حل

 `function Animal() { } 
 Animal.prototype.eat = function() { console.log("nom nom nom"); }; 
 
 function Dog() { } 
 
 // Add your code below this line 
 Dog.prototype = Object.create(Animal.prototype); 
 Dog.prototype.constructor = Dog; 
 Dog.prototype.bark = function() { 
    console.log("Woof woof!"); 
 }; 
 // Add your code above this line 
 
 let beagle = new Dog(); 
 
 beagle.eat(); // Should print "nom nom nom" 
 beagle.bark(); // Should print "Woof!" 
`