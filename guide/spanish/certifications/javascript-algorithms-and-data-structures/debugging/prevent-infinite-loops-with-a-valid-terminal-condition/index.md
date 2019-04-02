---
title: Prevent Infinite Loops with a Valid Terminal Condition
localeTitle: Prevenga los bucles infinitos con una condición de terminal válida
---
## Prevenga los bucles infinitos con una condición de terminal válida

*   Para evitar un bucle infinito, la `while-condition` debe alcanzar una condición terminal para salir del bucle.
*   Entonces, el error en este desafío ocurre debido a la condición - `i != 4` - en el bucle for.
*   Si echas un vistazo más de cerca al código:

```javascript
function myFunc() { 
  for (let i = 1; i != 4; i += 2) { 
    console.log("Still going!"); 
  } 
 } 
```

*   Verá que `i` se inicializa primero como 1 y después de cada iteración del bucle, `i` se incrementa en 2.
*   Usando esta lógica, después de la primera iteración - `i = 3` y la segunda iteración `i = 5` , la condición `i != 4` nunca se cumplirá y se producirá un bucle infinito.

## Solución:

```javascript
function myFunc() { 
  for (let i = 1; i <= 4; i += 2) { 
    console.log("Still going!"); 
  } 
 } 

```