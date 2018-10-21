---
title: Comparisons with the && (logical AND) operator
localeTitle: Comparaciones con el operador && (AND lógico)
---
## Comparaciones con el operador && (AND lógico)

### Explicación del problema:

· _Combine las dos declaraciones if en una declaración que devolverá `"Yes"` si `val` es menor o igual a `50` y mayor o igual a `25` . De lo contrario, devolverá `"No"` ._

#### Sugerencia 1

El operador lógico AND ( `&&` ) compara ambas afirmaciones y devuelve `true` solo si ambos son verdaderos o se pueden convertir en verdaderos (truey).

> _intenta resolver el problema ahora_

#### Sugerencia 2

Recuerde que este efecto puede también lograrse mediante la anidación `if` las declaraciones.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

**¡Solución por delante!**

## Solución de código básico:

```javascript
function testLogicalAnd(val) { 
  // Only change code below this line 
 
  if (val <= 50 && val >= 25) { 
      return "Yes"; 
  } 
 
  // Only change code above this line 
  return "No"; 
 } 
 
 // Change this value to test 
 testLogicalAnd(10); 
```

· [Ejecutar código en repl.it](https://repl.it/@AdrianSkar/Basic-JS-Comparison-with-the-and-operator)

### Explicación del código

La función primero evalúa `if` la condición `val <= 50` evalúa como `true` conversión de `val` en un número si es necesario, luego hace lo mismo con `val >=25` debido al operador lógico AND ( `&&` ); Si ambos devuelven verdadero, se ejecuta la instrucción de `return "Yes"` .

### Recursos

*   ["Operadores lógicos" - _Referencia de JavaScript MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)