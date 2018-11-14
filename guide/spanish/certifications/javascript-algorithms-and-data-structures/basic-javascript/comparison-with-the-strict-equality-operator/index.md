---
title: Comparison with the strict equality operator
localeTitle: Comparación con el operador de igualdad estricta.
---
## Comparación con el operador de igualdad estricta.

### Explicación del problema:

· _Use el operador de igualdad estricta en la instrucción `if` para que la función devuelva "Igual" cuando `val` sea ​​estrictamente igual a `7` ._

#### Sugerencia 1

Recuerde, desde el último ejercicio, que la _igualdad es diferente de la asignación ( `=` ), que asigna el valor a la derecha del operador a una variable en la izquierda._ [1](#cite1)

> _intenta resolver el problema ahora_
> 
> #### Sugerencia 2
> 
> _A diferencia del operador de igualdad, que intenta convertir ambos valores en comparación con un tipo común, el operador de igualdad estricta no realiza una conversión de tipo._ [2](#cite2) _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

**¡Solución por delante!**

## Solución de código básico:

```javascript
// Setup 
 function testStrict(val) { 
  if (val === 7) { // Change this line 
    return "Equal"; 
  } 
  return "Not equal"; 
 } 
 
 // Change this value to test 
 testStrict(10); 
```

### Explicación del código

La función primero evalúa `if` la condición `(val === 7)` evalúa como `true` . Si lo hace, devuelve la instrucción entre las llaves ("Igual"). Si no lo hace, devuelve la siguiente declaración de `return` fuera de ellos ("No es igual").

### Fuentes

1 . ["JavaScript básico: comparación con el operador de igualdad", lección de la FCC en la _certificación de algoritmos y estructuras de datos de Javascript_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

2 . ["JavaScript Básico: Comparación con el Operador de Igualdad Estricta", lección de la FCC en _Algoritmos de Javascript y Certificación de Estructuras de Datos_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)

### Recursos

*   ["if ... else" - _referencia de JavaScript MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)
    
*   [Kondov, Alexander. "Entendiendo JS: Coerción". _Hackernoon_](https://hackernoon.com/understanding-js-coercion-ff5684475bfc) , consultado el 15 de septiembre de 2018
    
*   ["Operadores de comparación" - _Referencia de JavaScript MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)