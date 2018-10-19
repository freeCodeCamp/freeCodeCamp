---
title: Rest Parameters
localeTitle: Parámetros de descanso
---
## Parámetros de descanso

En ES6, la sintaxis del resto de parámetros `...` permite reunir un número indefinido de argumentos en una matriz.

A pesar de que tienen el mismo aspecto, hace lo opuesto al operador de propagación, que toma todos los elementos de un iterable y los difunde en sus valores individuales.

### Sintaxis

```js
function myFunc(...args) { 
  console.log(args); 
 } 
 
 myFunc( 1, 2, 3, 4, 5);       // [1,2,3,4,5] 
```

Puede prefijar el último parámetro de una función con `...` cuando quiera hacer algo con los parámetros iniciales y luego tratar todos los parámetros restantes de manera diferente.

```js
function convertCurrency(rate, fee, ...amounts) { 
  return amounts.map(amount => (amount * rate) + fee); 
 } 
 
 convertCurrency(0.89, 2.5, 100, 250, 75, 150, 300); // [ 91.5, 225, 69.25, 136, 269.5 ] 
```

El `...` permite reunir el resto de los argumentos, si hay alguno, en una matriz.

### La diferencia entre los parámetros de reposo y el objeto de argumentos.

`arguments` es un objeto similar a una matriz, disponible dentro de las funciones, que contiene los argumentos pasados ​​a esas funciones. Se llama "como una matriz" porque no tiene todos los métodos integrados de una matriz, como `.forEach()` y `.map()` .

Los demás parámetros son una matriz, con todos los métodos de matriz incluidos.