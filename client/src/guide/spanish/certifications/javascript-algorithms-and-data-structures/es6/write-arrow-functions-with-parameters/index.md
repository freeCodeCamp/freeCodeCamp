---
title: Write Arrow Functions with Parameters
localeTitle: Escribir funciones de flecha con parámetros
---
## Escribir funciones de flecha con parámetros

Aquí hay un [recurso genial sobre funciones anónimas en JavaScript](http://helephant.com/2008/08/23/javascript-anonymous-functions/) , en caso de que todavía se esté preguntando qué son y cuál es su función.

Ahora, tienes la tarea de poner parámetros dentro de las funciones de flecha.

## Sugerencia 1:

Deshazte de la palabra clave de `function` . Ponga el operador de flecha.

## Sugerencia 2:

Asegúrate de cambiar la `var` a una `const` .

## Advertencia de Spoiler - ¡Solución por delante!

## Solución:

```javascript
const myConcat = (arr1, arr2) => { 
  "use strict"; 
  return arr1.concat(arr2); 
 }; 
 // test your code 
 console.log(myConcat([1, 2], [3, 4, 5])); 

```