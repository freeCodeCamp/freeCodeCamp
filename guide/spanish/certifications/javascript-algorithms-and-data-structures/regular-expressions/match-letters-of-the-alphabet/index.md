---
title: Match Letters of the Alphabet
localeTitle: Combina las letras del alfabeto
---
## Combina las letras del alfabeto

En este desafío, se le pide que coincida con todas las letras del alfabeto dentro de una cadena dada. No solo estás comparando / buscando estos caracteres, sino que te piden que los extraigas.

### Sugerencia 1:

Recuerde que se le pide que extraiga las letras de la cadena; esto no se puede hacer con el método .test () porque devuelve Verdadero o Falso. En este caso, necesitamos extraer el resultado real de la cadena usando el método .match ().

### Sugerencia 2:

¿Está utilizando la marca de mayúsculas y minúsculas del método del método match () entre paréntesis? por ejemplo, regExp = / \[ae\] / vs regExp = / ae /. Lo que esto nos permite hacer es buscar en la cadena los caracteres que coincidan con \[a, b, c, ... e\] usando la notación abreviada / \[ae\] /.

### Alerta de Spoiler: Solución por delante

## Solución

```javascript
let quoteSample = "The quick brown fox jumps over the lazy dog."; 
 let alphabetRegex = /[az]/ig; // Change this line 
 let result = quoteSample.match(alphabetRegex); // Change this line 

```