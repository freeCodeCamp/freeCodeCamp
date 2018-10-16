---
title: Set Default Parameters for Your Functions
localeTitle: Establecer parámetros predeterminados para sus funciones
---
## Establecer parámetros predeterminados para sus funciones

: _bandera_ triangular en la _publicación: recuerda usar Lectura-Búsqueda-Preguntar si te atascas. Intente emparejar el programa: bustos_ en\_silhouette: y escriba su propio código: lápiz:

### : checkered\_flag: Explicación del problema:

```javascript
const increment = (function() { 
  "use strict"; 
  return function increment(number, value) { 
    return number + value; 
  }; 
 })(); 
 console.log(increment(5, 2)); // returns 7 
 console.log(increment(5)); // returns NaN 
```

Estaremos modificando la función de incremento para que el parámetro del **número** se incremente en 1 de forma predeterminada, estableciendo el **valor** en 1 si no se pasa un valor para el **valor** a la función de incremento.

### : speech\_balloon: Sugerencia: 1

Identifiquemos dónde está el **valor** del parámetro en la función JS

intenta resolver el problema ahora

### : speech\_balloon: Sugerencia: 2

Establecer el **valor** igual a algo para que sea ese valor por defecto

intenta resolver el problema ahora

### ¡Alerta de spoiler!

![alerón](http://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

¡Solución por delante!

## : principiante: Solución de código básico:

```javascript
const increment = (function() { 
  "use strict"; 
  return function increment(number, value = 1) { 
    return number + value; 
  }; 
 })(); 
 console.log(increment(5, 2)); // returns 7 
 console.log(increment(5)); // returns NaN 
```

: cohete: [Ejecutar código](https://repl.it/@RyanPisuena/PleasingFumblingThings)

## Explicación del Código

*   Esta sección es bastante sencilla. Pasar esta sección estableciendo el parámetro de **valor** igual a 1. Cuando la función se encuentra con casos de prueba donde **el valor** no se ha pasado nada, entonces **el valor** será asignado uno por defecto.

Enlaces relevantes:

[Parámetros por defecto de Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

# : Portapapeles: NOTAS DE CONTRIBUCIONES:

*   : advertencia: NO agregue soluciones que sean similares a las soluciones existentes. Si cree que es similar pero mejor, intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: Básica, Intermedia y Avanzada. :semáforo:
*   Agregue su nombre de usuario solo si ha agregado algún contenido principal relevante. (: advertencia: NO elimine ningún nombre de usuario existente)

Vea: point\_right: [Wiki Challenge Solution Template](https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-template-guide/14272) para referencia.