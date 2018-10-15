---
title: Remember to Set the Constructor Property when Changing the Prototype
localeTitle: Не забудьте установить свойство конструктора при смене прототипа
---
## Не забудьте установить свойство конструктора при смене прототипа

*   Не забудьте определить свойство конструктора при установке прототипа на новый объект.

# Решение

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