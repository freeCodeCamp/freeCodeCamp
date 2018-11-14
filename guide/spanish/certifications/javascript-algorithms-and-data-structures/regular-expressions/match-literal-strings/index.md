---
title: Match Literal Strings
localeTitle: Unir cuerdas literales
---
## Unir cuerdas literales

Este desafío no es diferente del anterior; En este caso, sin embargo, está aprendiendo que los literales de cadena distinguen entre mayúsculas y minúsculas. Eso significa que, cuando prueba si una cadena tiene un literal, buscará el caso exacto (inferior o superior) dentro de la cadena. Aprenderás cómo encontrar literales de cuerdas, independientemente de su caso, en una próxima lección.

En este desafío, estás encontrando a Waldo ... ¡dentro de una cuerda!

## Sugerencia 1:

Cambia la línea para tener el literal de cadena correcta.

## Alerta de Spoiler - ¡Solución por delante!

## Solución:

```javascript
let waldoIsHiding = "Somewhere Waldo is hiding in this text."; 
 let waldoRegex = /Waldo/; // Change this line 
 let result = waldoRegex.test(waldoIsHiding); 

```