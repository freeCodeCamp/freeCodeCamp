---
title: Match Beginning String Patterns
localeTitle: Emparejar patrones de cuerdas que comienzan
---
## Emparejar patrones de cuerdas que comienzan

## El problema

Use el carácter de intercalación en una expresión regular para encontrar "Cal" solo al principio de la cadena rickyAndCal.

### Sugerencia 1:

Trate de rodear su expresión regular en barras

```javascript
let testExp = /^test/; 
 // returns true or false depending on whether test is found in the beginning of the string 
```

### Sugerencia 2:

Intente usar el carácter '^' caret fuera de los corchetes como se ve en el ejemplo anterior

### Alerta de Spoiler - Solución por delante

## Solución

```javascript
let rickyAndCal = "Cal and Ricky both like racing."; 
 let calRegex = /^Cal/; // Change this line 
 let result = calRegex.test(rickyAndCal); 

```