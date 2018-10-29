---
title: Remember to Set the Constructor Property when Changing the Prototype
localeTitle: Recuerde establecer la propiedad del constructor al cambiar el prototipo
---
## Recuerde establecer la propiedad del constructor al cambiar el prototipo

*   Recuerde definir la propiedad del constructor cuando configure un prototipo en un nuevo objeto.

# Solución

```javascript
Dog.prototype = { 
 
  constructor: Dog, // Solution 
 
  numLegs: 2, 
  eat: function() { 
    console.log("nom nom nom"); 
  }, 
  describe: function() { 
    console.log("My name is " + this.name); 
  } 
 }; 

```