---
title: Practice comparing different values
localeTitle: Practicar comparando valores diferentes.
---
## Practicar comparando valores diferentes.

### Explicación del problema:

· _Modifique la función de modo que devuelva "Igual" solo cuando los valores sean **estrictamente** iguales._

#### Sugerencia 1

Recuerde de los últimos ejercicios que, a _diferencia del operador de igualdad, que intenta convertir ambos valores en comparación con un tipo común, el operador de igualdad estricta no realiza una conversión de tipo._ [1](#cite1)

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

**¡Solución por delante!**

## Solución de código básico:

```javascript
// Setup 
 function compareEquality(a, b) { 
    if (a === b) { // Change this line 
        return  "Equal"; 
    } 
    return  "Not Equal"; 
 } 
 
 // Change this value to test 
 compareEquality(10, "10"); 
```

### Explicación del código

La función primero evalúa `if` la condición `(a === b)` evalúa como `true` considerando tanto el tipo como el valor. Si lo hace, devuelve la instrucción entre las llaves ("Igual"). Si no lo hace, devuelve la siguiente declaración de `return` fuera de ellos ("No es igual").

### Fuentes

1 . ["JavaScript Básico: Comparación con el Operador de Igualdad Estricta", lección de la FCC en _Algoritmos de Javascript y Certificación de Estructuras de Datos_](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)

### Recursos

*   ["Usando los operadores de igualdad" - _Referencia de JavaScript MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators)