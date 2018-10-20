---
title: Extract Matches
localeTitle: Extraer fósforos
---
## Extraer fósforos

Usando el método `match()` , puedes extraer partes de una cadena que coinciden con tu expresión regular. En este desafío, está extrayendo la palabra "codificación" de la cadena provista.

## Sugerencia 1:

Cambie su expresión regular para detectar la palabra "codificación".

## Sugerencia 2:

¿Llamaste al método `match()` en la cadena?

## Alerta de Spoiler - ¡Solución por delante!

## Solución:

```javascript
let extractStr = "Extract the word 'coding' from this string."; 
 let codingRegex = /coding/; 
 let result = extractStr.match(codingRegex); 

```