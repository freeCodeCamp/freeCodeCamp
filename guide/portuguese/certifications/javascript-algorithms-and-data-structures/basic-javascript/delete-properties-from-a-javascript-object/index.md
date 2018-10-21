---
title: Delete Properties from a JavaScript Object
localeTitle: Excluir propriedades de um objeto JavaScript
---
## Excluir propriedades de um objeto JavaScript

### DICA: 1

*   alterar as propriedades do myDog usando notação de ponto

# AVISO DE SPOILER: SOLUÇÃO À FRENTE

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