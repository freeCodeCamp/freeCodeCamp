---
title: Count Backwards With a For Loop
localeTitle: Contar hacia atrás con un bucle for
---
## Contar hacia atrás con un bucle for

Aquí está el ejemplo:

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

#### SUGERENCIA: 1

*   crear un nuevo for for loop para myArray

#### SUGERENCIA: 2

*   comienza desde el primer número impar justo antes del 9

# ADVERTENCIA DE SPOILER: SOLUCIÓN A CONTINUACIÓN

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