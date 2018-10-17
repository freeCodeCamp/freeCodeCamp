---
title: Sort an Array Alphabetically using the sort Method
localeTitle: Ordena una matriz alfabéticamente usando el método de clasificación
---
## Ordena una matriz alfabéticamente usando el método de clasificación

### Método

En el ejemplo dado, vemos cómo escribir una función que devolverá una nueva matriz en orden alfabético inverso.

```javascript
function reverseAlpha(arr) { 
  return arr.sort(function(a, b) { 
    return a < b; 
  }); 
 } 
 reverseAlpha(['l', 'h', 'z', 'b', 's']); 
 // Returns ['z', 's', 'l', 'h', 'b'] 
```

Usando esta lógica, simplemente realice una ingeniería inversa de la función para devolver una nueva matriz en orden alfabético.

### Solución

```javascript
function alphabeticalOrder(arr) { 
  // Add your code below this line 
  return arr.sort(function(a,b) { 
    return a > b; 
  }); 
  // Add your code above this line 
 } 
 alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); 

```