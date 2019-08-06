---
title: Match a Literal String with Different Possibilities
localeTitle: Unir una cadena literal con diferentes posibilidades
---
## Unir una cadena literal con diferentes posibilidades

Supongamos que desea hacer coincidir muchas palabras diferentes con su expresión regular; usando el `|` símbolo, que se hace posible. En este desafío, ¡estás usando ese símbolo para identificar cuatro mascotas diferentes escondidas dentro de las cuerdas!

## Sugerencia 1:

Dentro de la cadena literal, coloque los nombres de las mascotas, cada uno separado por el `|` símbolo.

## Alerta de Spoiler - ¡Solución por delante!

## Solución:

```js
let petString = "James has a pet cat."; 
 let petRegex = /dog|cat|bird|fish/; 
 let result = petRegex.test(petString); 

```