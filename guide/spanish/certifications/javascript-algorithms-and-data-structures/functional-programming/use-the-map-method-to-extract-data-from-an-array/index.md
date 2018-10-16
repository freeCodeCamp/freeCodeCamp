---
title: Use the map Method to Extract Data from an Array
localeTitle: Utilice el método de mapa para extraer datos de una matriz
---
## Utilice el método de mapa para extraer datos de una matriz

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

array.prototype.map toma una función como entrada y devuelve una matriz. La matriz devuelta incluye elementos que son procesados ​​por la función. Esta función toma elementos individuales como entrada.

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución de código intermedio:

```javascript
  rating = watchList.map( (item) => ({"title":item["Title"], "rating":item["imdbRating"]}) ); 
```

\### Código Explicación: Usando la notación ES6, cada elemento de la matriz se procesa para extraer el título y la calificación. Se necesitan paréntesis para devolver un objeto.

#### Enlaces relevantes

*   [Funciones de flecha](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)