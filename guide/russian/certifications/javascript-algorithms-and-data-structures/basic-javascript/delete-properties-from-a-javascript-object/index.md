---
title: Delete Properties from a JavaScript Object
localeTitle: Удаление свойств из объекта JavaScript
---
## Удаление свойств из объекта JavaScript

### ПОДСКАЗКА: 1

*   измените свойства myDog с помощью точечной нотации

# ПРЕДУПРЕЖДЕНИЕ SPOILER: РЕШЕНИЕ ВПЕРЕДИ

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