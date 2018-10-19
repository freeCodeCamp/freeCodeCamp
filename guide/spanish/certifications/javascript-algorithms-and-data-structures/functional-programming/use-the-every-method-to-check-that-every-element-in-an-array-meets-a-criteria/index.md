---
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
localeTitle: Use cada método para verificar que cada elemento de una matriz cumple con los criterios
---
## Use cada método para verificar que cada elemento de una matriz cumple con los criterios

### Explicación del problema:

Use `every` método dentro de la función `checkPositive` para verificar si cada elemento en `arr` es positivo. La función debe devolver un valor booleano.

#### Enlaces relevantes:

*   [Array.prototype.every ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

### Insinuación

No olvides `return` .

## Solución

```javascript
function checkPositive(arr) { 
  // Add your code below this line 
 
  return arr.every(val => val > 0); 
  // Add your code above this line 
 } 
 checkPositive([1, 2, 3, -4, 5]); 
```

## Solución alternativa

```javascript
function checkPositive(arr) { 
  // Add your code below this line 
    return arr.every(function(value) { 
        return value > 0; 
    }); 
  // Add your code above this line 
 } 
 checkPositive([1, 2, 3, -4, 5]); 

```