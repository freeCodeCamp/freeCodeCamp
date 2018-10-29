---
title: Use the filter method to extract data from an array
localeTitle: Utilice el método de filtro para extraer datos de una matriz
---
## Utilice el método de filtro para extraer datos de una matriz

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Este desafío se resuelve en 2 pasos. Primero, Array.prototype.filter se usa para filtrar la matriz de modo que quede con elementos que tienen imdbRating> 8.0. Después de eso, Array.prototype.map puede usarse para dar forma a la salida al formato deseado.

### Solución

```javascript
// Add your code below this line 
 
 var filteredList = watchList.map(function(e) { 
  return {title: e["Title"], rating: e["imdbRating"]} 
 }).filter((e) => e.rating >= 8); 
 
 console.log(filteredList); 

```