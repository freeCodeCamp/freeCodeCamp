---
title: Introducing Else If statements
localeTitle: Introduciendo las instrucciones Else If
---
## Introduciendo las instrucciones Else If

Recuerda usar Read-Search-Ask si te atascas. Intenta emparejar el programa y escribe tu propio código.

\### Explicación del problema:

```javascript
function testElseIf(val) { 
  if (val > 10) { 
    return "Greater than 10"; 
  } 
 
  if (val < 5) { 
    return "Smaller than 5"; 
  } 
 
  return "Between 5 and 10"; 
 } 
 
 // Change this value to test 
 testElseIf(7); 
```

Estaremos modificando el código existente arriba para que siga el flujo de lógica que tiene una sentencia **else-if** .

\### Sugerencia: 1 `javascript if (val > 10) { return "Greater than 10"; }` Todas las declaraciones `if` y sus variantes comienzan con una declaración `if` .

> _intenta resolver el problema ahora_

\### Sugerencia: 2 `javascript else if (val < 5) { return "Smaller than 5"; }` Las declaraciones entre la instrucción `if` y la instrucción `else` en un flujo **else-if** están en el formato else-if

> _intenta resolver el problema ahora_

\### Sugerencia: 3 `javascript else { return "Between 5 and 10"; }` La última declaración en un flujo **else-if** está en el formato `else` ### ¡Alerta de spoiler! ![alerón](http://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif) ¡Solución por delante! ## Solución de código básico:

```javascript
function testElseIf(val) { 
  if (val > 10) { 
    return "Greater than 10"; 
  } 
 
  else if (val < 5) { 
    return "Smaller than 5"; 
  } 
 
  else { 
  return "Between 5 and 10"; 
  } 
 } 
 
 // Change this value to test 
 testElseIf(7); 
```

: cohete: [Ejecutar código](https://repl.it/@RyanPisuena/GoldenWorriedRuntime) ## explicación del código La estructura de un **flujo lógico else-if** es una declaración inicial `if` , una instrucción `if-else` y una instrucción `else` final.

### Recursos

*   ["if ... else" - _referencia de JavaScript MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)