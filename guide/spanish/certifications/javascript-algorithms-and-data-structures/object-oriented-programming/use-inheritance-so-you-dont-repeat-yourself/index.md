---
title: Use Inheritance So You Don't Repeat Yourself
localeTitle: Usa la herencia para que no te repitas
---
## Usa la herencia para que no te repitas

### Solución

Elimine el método "comer" de Cat.prototype y Bear.prototype y agréguelo al Animal.prototype.

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