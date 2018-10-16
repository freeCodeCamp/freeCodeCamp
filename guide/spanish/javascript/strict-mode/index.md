---
title: Strict Mode
localeTitle: Modo estricto
---
El modo estricto se introdujo en ECMAScript 5 que le permite colocar un programa o una función en un contexto operativo "estricto". Este contexto estricto evita que se tomen ciertas acciones y lanza más excepciones.

El modo estricto hace varios cambios a la semántica normal de JavaScript.

*   Primero, el modo estricto elimina algunos errores silenciosos de JavaScript cambiándolos para lanzar errores.
*   En segundo lugar, el modo estricto corrige los errores que dificultan que los motores de JavaScript realicen optimizaciones: el código del modo estricto a veces puede ejecutarse más rápido que el código idéntico que no es el modo estricto.
*   En tercer lugar, el modo estricto prohíbe la definición de sintaxis en futuras versiones de ECMAScript.

El código de modo estricto y el código de modo no estricto pueden coexistir en un mismo script.

```javascript
// Non-strict code... 
 
 (function(){ 
    "use strict"; 
 
    // Define your library strictly... 
 })(); 
 
 // Non-strict code... 
```

## Invocando modo estricto

El modo estricto se aplica a _scripts completos_ o a _funciones individuales_ .

**Modo estricto para scripts.**

```javascript
// Whole-script strict mode syntax 
 
 "use strict"; 
 var v = "Hi!  I'm a strict mode script!"; 
```

**Modo estricto para funciones.**

```javascript
function strict(){ 
    // Function-level strict mode syntax 
 
    'use strict'; 
    function nested() { return "And so am I!"; } 
    return "Hi!  I'm a strict mode function!  " + nested(); 
 } 
 
 function notStrict() { return "I'm not strict."; } 
```

**Básicamente, le ayuda a cometer menos errores, al detectar cosas que podrían provocar roturas que no se detectan normalmente (modo no estricto).**

_Para más información [visita](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode) esta [página de MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode) ._