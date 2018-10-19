---
title: Add Items to an Array with push() and unshift()
localeTitle: Agregar elementos a una matriz con push () y unshift ()
---
## Agregar elementos a una matriz con push () y unshift ()

*   Al igual que en el ejemplo dado, use el método `.unshift()` en la matriz para agregar elementos al inicio de la matriz y use el método `.push()` para agregar elementos al final de la matriz.

## Solución:

```javascript
function mixedNumbers(arr) { 
  // change code below this line 
 arr.unshift('I',2,'three'); 
 arr.push(7,'VIII', 9); 
  // change code above this line 
  return arr; 
 } 
 
 // do not change code below this line 
 console.log(mixedNumbers(['IV', 5, 'six'])); 

```