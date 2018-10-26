---
title: Introducing Else statements
localeTitle: Introduciendo declaraciones Else
---
## Introduciendo declaraciones Else

### Explicación del problema:

· _Combina las sentencias `if` en una sola sentencia `if/else` ._

#### Sugerencia 1

Cuando la primera instrucción `if` devuelve `false` el siguiente fragmento de código se ejecuta / evalúa (como `return` , `if` o `else` ).

> _intenta resolver el problema ahora_

#### Sugerencia 2

A veces `if` ( `condition` ) declaraciones pueden ser reemplazados por `else {code to execute instead}` declaraciones (en esencia está diciendo a su función para hacer _"y"_ si no se puede hacer _"x"_ en lugar de especificar _"x"_ varias veces).

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

**¡Solución por delante!**

## Solución de código básico:

```javascript
function testElse(val) { 
  var result = ""; 
  // Only change code below this line 
 
  if (val > 5) { 
    result = "Bigger than 5"; 
  } 
 
  else { 
    result = "5 or smaller"; 
  } 
 
  // Only change code above this line 
  return result; 
 } 
 
 // Change this value to test 
 testElse(4); 
```

· [Ejecutar código en repl.it](https://repl.it/@AdrianSkar/Introducing-else-statements)

### Explicación del código

La función primero evalúa `if` la condición `val > 5` evalúa como `true` . Si no lo hace, ejecuta la siguiente instrucción ( `else { return "5 or smaller";})` .

### Recursos

*   ["if ... else" - _referencia de JavaScript MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)