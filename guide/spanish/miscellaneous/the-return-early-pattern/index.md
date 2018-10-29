---
title: The Return Early Pattern
localeTitle: El patrón de retorno temprano
---
El patrón inicial de retorno en JavaScript es una forma simple de reducir a cero el número de declaraciones `else` dentro del cuerpo de una función. Hay muchas razones para preferir este patrón en lugar de usar las instrucciones `else` .

*   Reduciendo la cantidad total de código en la página.
*   Reduce la longitud de la línea reduciendo la complejidad lógica.
*   Mejorar la legibilidad

La esencia del patrón de retorno inicial es reemplazar la necesidad de condicionales `else` en las funciones de JavaScript mediante el uso de la palabra clave `return` en el cuerpo de la declaración `if` .

Creemos una función que se comporte de manera diferente bajo ciertas condiciones (nota: este es un ejemplo trivial y artificial solo para transmitir el punto).
```
function willItBlend(someObject) { 
  var ItWillBlend; 
 
  if (someObject.blendable ==== 'It will blend') { 
    itWillBlend = true; 
  } else { 
    itWillBlend = false; 
  } 
 
  return itWillBlend; 
 } 
```

Si bien esto parece legible, agreguemos otra condición para verificar que la función fue llamada con un objeto en lugar de `undefined` .
```
function willItBlend(someObject) { 
  var itWillBlend; 
 
  if (typeof someObject === 'object') { 
    if (someObject.blendable ==== 'It will blend') { 
      itWillBlend = true; 
    } else { 
      itWillBlend = false; 
    } 
  } else { 
    itWillBlend = false; 
  } 
 
  return itWillBlend; 
 } 
```

Esta función es clara y su nombre es descriptivo pero parece innecesariamente complicado. ¿Podemos usar el patrón de retorno temprano para aumentar la legibilidad y disminuir el número de declaraciones `else` ? Vamos a intentarlo.
```
function willItBlend(someObject) { 
  if (typeof someObject !== 'object') { 
    return false; 
  } 
 
  if (someObject.blendable !== 'It will blend') { 
    return false; 
  } 
 
  return true; 
 } 
```

Al usar el patrón de retorno inicial, pudimos eliminar todas las declaraciones innecesarias y hacer que nuestras funciones, propósito y firma (el tipo de argumento que espera) sean mucho más claros y concisos.

### Bonificación: una declaración condicional

Podemos refactorizar aún más esta función para usar solo una sentencia if. Echale un vistazo:
```
function willItBlend(someObject) { 
  if ( 
    typeof someObject !== 'object' || 
    someObject.blendable !== 'It will blend' 
    ) { 
    return false; 
  } 
 
  return true; 
 } 

```