---
title: Use Inheritance So You Don't Repeat Yourself
localeTitle: Use a herança para que você não se repita
---
## Use a herança para que você não se repita

### Solução

Remova o método "eat" do Cat.prototype e Bear.prototype e adicione-o ao Animal.prototype.

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