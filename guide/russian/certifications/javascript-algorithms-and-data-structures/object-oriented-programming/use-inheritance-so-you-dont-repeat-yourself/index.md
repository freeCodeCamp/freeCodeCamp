---
title: Use Inheritance So You Don't Repeat Yourself
localeTitle: Используйте Наследование, чтобы вы не повторяли себя
---
## Используйте Наследование, чтобы вы не повторяли себя

### Решение

Удалите метод «eat» из Cat.prototype и Bear.prototype и добавьте его в Animal.prototype.

```javascript
function Cat(name) { 
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

```