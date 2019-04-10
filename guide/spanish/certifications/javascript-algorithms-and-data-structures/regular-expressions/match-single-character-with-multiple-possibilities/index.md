---
title: Match Single Character with Multiple Possibilities
localeTitle: Coincidir con un solo personaje con múltiples posibilidades
---
## Coincidir con un solo personaje con múltiples posibilidades

### Extraer

Usando el método match (), puedes extraer partes de una cadena que coinciden con tu expresión regular. En este desafío, estás extrayendo las vocales "a, e, i, o, u" de una cadena provista.

### Sugerencia 1:

¿Estás intentando usar el método test ()? Recuerde que este método solo devuelve Verdadero o Falso: necesitamos extraer las vocales de la cadena.

### Sugerencia 2:

¿Has intentado usar la combinación de mayúsculas y minúsculas con el carácter '\[\]' sin comas? ie \[abcd\] vs \[a, b, c, d\]

### Alerta de Spoiler - ¡Solución por delante!

## Solución

```javascript
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it."; 
 let vowelRegex = /[aeiou]/ig; // Change this line 
 let result = quoteSample.match(vowelRegex); // Change this line 

```