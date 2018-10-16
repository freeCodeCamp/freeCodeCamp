---
title: Ignore Case While Matching
localeTitle: Ignorar caso mientras coinciden
---
## Ignorar caso mientras coinciden

Al crear una expresión regular, es posible que desee hacer coincidir partes de la cadena que tienen la misma ortografía, pero diferentes en el caso. Para hacer esto, agregue la bandera `i` al final de la expresión regular. En este desafío, estás haciendo precisamente eso.

## Sugerencia 1:

Modifique la expresión regular para que detecte "freeCodeCamp", "FREECODECAMP" y "FrEeCoDeCaMp". Tal vez el uso de la bandera `i` podría ayudar?

## Alerta de Spoiler - ¡Solución por delante!

## Solución

```javascript
let myString = "freeCodeCamp"; 
 let fccRegex = /freeCodeCamp/i; 
 let result = fccRegex.test(myString); 

```