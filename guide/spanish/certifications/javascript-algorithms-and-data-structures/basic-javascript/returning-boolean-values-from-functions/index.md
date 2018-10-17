---
title: Returning Boolean Values from Functions
localeTitle: Devolviendo valores booleanos desde funciones
---
## Devolviendo valores booleanos desde funciones

En lugar de usar un bloque if / else para comparar la variable, podemos hacerlo directamente dentro de la declaración de retorno con un operador de comparación y un código mínimo.

### Explicación del problema

_Arreglar la función `isLess` permite eliminar las sentencias `if...else` ._

```js
// Fix this code 
  if (a < b) { 
    return true; 
  } else { 
    return false; 
  } 
```

#### Sugerencia 1

Al igual que con el [ejercicio anterior](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/replacing-if-else-chains-with-switch) , está a punto de cambiar la forma en que la función devuelve el valor correcto, lo que significa que no tiene que reutilizar o modificar ese código sino sustituirlo.

> _intenta resolver el problema ahora_

#### Sugerencia 2

Con el fin de devolver `true` o `false` que no es necesario usar dos declaraciones ni `if` queridos. El [operador de comparación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) correcto es todo lo que necesita.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

**¡Solución por delante!**

## Solución de código:

```javascript
function isLess(a, b) { 
  // Fix this code 
  return a <= b; 
 } 
 // Change these values to test 
 isLess(10, 15); 
```

Ejecute el código en [repl.it.](https://repl.it/@AdrianSkar/Basic-Js-Returning-boolean-from-function)

### Recursos

*   ["Operador menor o igual (<=)" - _MDN Referencia de Javascript_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Less_than_or_equal_operator_(%3C))