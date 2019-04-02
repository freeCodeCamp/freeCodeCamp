---
title: Remove Elements from an Array Using slice Instead of splice
localeTitle: Eliminar elementos de una matriz usando una división en lugar de empalme
---
## Eliminar elementos de una matriz usando una división en lugar de empalme

*   La diferencia entre el método de división y división es que el método de división no muta la matriz original, sino que devuelve una nueva.
*   El método de división toma 2 dos argumentos para que los índices comiencen y terminen la división (el final no es inclusivo).
*   Si no desea mutar la matriz original, puede usar el método de división.

## Solución

```javascript
function nonMutatingSplice(cities) { 
  // Add your code below this line 
 
  return cities.slice(0, 3); 
 
  // Add your code above this line 
 } 
 var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"]; 
 nonMutatingSplice(inputCities); 

```