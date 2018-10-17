---
title: Remember to Set the Constructor Property when Changing the Prototype
localeTitle: Lembre-se de definir a propriedade do construtor ao alterar o protótipo
---
## Lembre-se de definir a propriedade do construtor ao alterar o protótipo

*   Lembre-se de definir a propriedade do construtor quando você definir um protótipo para um novo objeto.

# Solução

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