---
title: Find More Than the First Match
localeTitle: Encuentra más que el primer partido
---
## Encuentra más que el primer partido

Si tiene varias apariciones de su expresión regular dentro de una cadena, puede obtener la función `match()` para detectarlas todas. ¡Simplemente etiqueta a lo largo de la bandera `g` al final de tu expresión regular! Eso es lo que estás haciendo en este desafío.

## Sugerencia 1:

Cambie la expresión regular para que detecte la palabra "twinkle".

## Sugerencia 2:

Puede agregar varias etiquetas a una expresión regular! Por ejemplo, una expresión regular que detecta múltiples apariciones y las detecta independientemente del caso, puede estructurarse como `gi` o `ig` .

## Alerta de Spoiler - ¡Solución por delante!

## Solución

```javascript
let twinkleStar = "Twinkle, twinkle, little star"; 
 let starRegex = /twinkle/gi; 
 let result = twinkleStar.match(starRegex); 

```