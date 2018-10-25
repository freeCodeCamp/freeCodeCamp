---
title: Comparison with the Strict Inequality Operator
localeTitle: Comparación con el operador de desigualdad estricta
---
## Comparación con el operador de desigualdad estricta

### Explicación del problema:

· _Agregue el `strict inequality operator` a la instrucción `if` para que la función devuelva "No igual" cuando `val` no sea estrictamente igual a `17` ._

#### Sugerencia 1

El operador de desigualdad estricta ( `!==` ) devolverá `true` si el primer valor no es igual al segundo teniendo en cuenta el tipo de valor.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

**¡Solución por delante!**

## Solución de código básico:

```javascript
function testStrictNotEqual(val) { 
  if (val !== 17) { 
    return "Not equal"; 
  } 
  return "Equal"; 
 } 
 
 // Change this value to test 
 testStrictNotEqual(10); 
```

### Explicación del código

La función primero evalúa `if` la condición `(val !== 17)` evalúa como `true` considerando tanto el valor como el tipo de valor. Si lo hace, devuelve la instrucción entre las llaves ("No es igual"). Si no lo hace, devuelve la siguiente declaración de `return` fuera de ellos ("Igual").

### Recursos

*   ["No identidad / desigualdad estricta (! ==)" - _Referencia de JavaScript de MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Non-identity_strict_inequality_(!))