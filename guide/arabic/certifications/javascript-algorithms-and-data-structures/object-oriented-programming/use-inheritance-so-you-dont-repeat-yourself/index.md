---
title: Use Inheritance So You Don't Repeat Yourself
localeTitle: استخدام الوراثة حتى لا تكرر نفسك
---
## استخدام الوراثة حتى لا تكرر نفسك

### حل

قم بإزالة طريقة "تناول الطعام" من Cat.prototype و Bear.prototype وأضفها إلى Animal.prototype.

 `function Cat(name) { 
  this.name = name; 
 }; 
 
 Cat.prototype = { 
  constructor: Cat 
 }; 
 
 function Bear(name) { 
  this.name = name; 
 }; 
 
 Bear.prototype = { 
  constructor: Bear 
 }; 
 
 function Animal() { }; 
 
 Animal.prototype = { 
  constructor: Animal, 
  eat: function() { 
    console.log("nom nom nom"); 
  } 
 }; 
`