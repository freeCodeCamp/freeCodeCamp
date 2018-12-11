---
title: Check For The Presence of an Element With indexOf()
localeTitle: Comprobar la presencia de un elemento con indexOf ()
---
## Comprobar la presencia de un elemento con indexOf ()

*   Se puede usar una `if-statement` simple para verificar si el valor devuelto por la función `indexOf()` es menor que 0.
*   Una vez que se descubre el valor, puede devolver `true` o `false` .
*   `Solution-1` demuestra cómo una simple `if-statement` puede devolver el resultado correcto.

## Solución-1:

```javascript
function quickCheck(arr, elem) { 
  if(arr.indexOf(elem)>=0) { 
    return true; 
  } 
  return false; 
 } 
 console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 
```

*   `Solution-2` demuestra cómo se puede resolver el problema usando `? : (conditional)` operador `? : (conditional)` .

## Solución-2:

```javascript
function quickCheck(arr, elem) { 
 return arr.indexOf(elem) >= 0 ? true : false; 
 } 
 console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); 

```