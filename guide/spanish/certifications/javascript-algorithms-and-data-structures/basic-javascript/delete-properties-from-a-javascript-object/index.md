---
title: Delete Properties from a JavaScript Object
localeTitle: Eliminar propiedades de un objeto de JavaScript
---
## Eliminar propiedades de un objeto de JavaScript

### SUGERENCIA: 1

*   cambia las propiedades de myDog usando notación de puntos

# ADVERTENCIA DE SPOILER: SOLUCIÓN A CONTINUACIÓN

```javascript
var ourDog = { 
  "name": "Camper", 
  "legs": 4, 
  "tails": 1, 
  "friends": ["everything!"], 
  "bark": "bow-wow" 
 }; 
 
 delete ourDog.bark; 
 
 // Setup 
 var myDog = { 
  "name": "Happy Coder", 
  "legs": 4, 
  "tails": 1, 
  "friends": ["freeCodeCamp Campers"], 
  "bark": "woof" 
 }; 
 
 // Only change code below this line. 
 delete myDog.tails; 

```