---
title: Count Backwards With a For Loop
localeTitle: Conte para trás com um loop for
---
## Conte para trás com um loop for

Aqui está o exemplo:

```javascript
// Example 
 var ourArray = []; 
 
 for (var i = 10; i > 0; i -= 2) { 
  ourArray.push(i); 
 } 
 
 // Setup 
 var myArray = []; 
 
 // Only change code below this line. 
```

#### DICA: 1

*   criar um novo loop para myArray

#### DICA: 2

*   começar do primeiro número ímpar um pouco antes de 9

# AVISO DE SPOILER: SOLUÇÃO À FRENTE

```javascript
var ourArray = []; 
 
 for (var i = 10; i > 0; i -= 2) { 
  ourArray.push(i); 
 } 
 
 // Setup 
 var myArray = []; 
 
 // Only change code below this line. 
 for (var i = 9; i > 0; i-=2){ 
  myArray.push(i) 
 } 

```