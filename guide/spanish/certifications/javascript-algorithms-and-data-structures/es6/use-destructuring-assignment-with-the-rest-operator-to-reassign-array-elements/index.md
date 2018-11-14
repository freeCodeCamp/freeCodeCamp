---
title: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
localeTitle: Utilice la asignación de destrucción con el operador de reposo para reasignar elementos de matriz
---
## Utilice la asignación de destrucción con el operador de reposo para reasignar elementos de matriz

Recuerde que el operador resto permite números variables de argumentos. En este desafío, debes deshacerte de los dos primeros elementos de una matriz.

## Sugerencia 1:

Asigna los dos primeros elementos a dos variables aleatorias.

## Sugerencia 2:

Establezca la parte restante de la matriz en `...arr` .

\=======

## Sugerencia 1

Usa la desestructuración para crear la variable `arr` .

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
```

## Sugerencia 2

Difunde el parámetro de `list` en `arr` .

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [...arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
```

## Sugerencia 3

Excluye los dos primeros elementos de la matriz `arr` con `,,` .

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [,,...arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
```

## Alerta de Spoiler - ¡Solución por delante!

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [a, b, ...arr] = list; 
  // change code above this line 
  return arr; 
 } 

```