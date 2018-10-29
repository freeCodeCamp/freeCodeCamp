---
title: Comparison with the Equality Operator
localeTitle: Comparación con el operador de igualdad
---
## Comparación con el operador de igualdad

### Explicación del problema:

_Agregue el operador de igualdad a la línea indicada para que la función devuelva "Igual" cuando `val` sea ​​equivalente a 12._

#### Sugerencia 1

Recuerde que la _igualdad es diferente de la asignación ( `=` ), que asigna el valor a la derecha del operador a una variable en la izquierda._ [1](#cite1)

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

**¡Solución por delante!**

## Solución de código básico:

```javascript
function testEqual(val) { 
  if (val == 12) { // Change this line 
    return "Equal"; 
  } 
  return "Not equal"; 
 } 
 // Change this value to test 
 testEqual(10); 
```

· [Ejecutar código en repl.it](https://repl.it/@AdrianSkar/Basic-JS-Equality-operator)

### Explicación del código

La función primero evalúa `if` la condición `(val == 12)` evalúa como `true` . Si lo hace, devuelve la instrucción entre las llaves ("Igual"). Si no lo hace, devuelve la siguiente declaración de `return` fuera de ellos ("No es igual").

### Fuentes

1 . ["JavaScript básico: comparación con el operador de igualdad", lección de la FCC en la _certificación de algoritmos y estructuras de datos de Javascript_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

### Recursos

*   ["Operador de igualdad" - _referencia de JavaScript MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_())