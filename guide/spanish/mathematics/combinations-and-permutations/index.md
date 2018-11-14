---
title: Combinations and Permutations
localeTitle: Combinaciones y permutaciones
---
## Combinaciones y permutaciones

Digamos que tienes 9 personas compitiendo para ubicarse entre los tres primeros de un torneo de golf. ¿Cuántas posibilidades diferentes hay para los tres primeros en el torneo? Bueno, si elegimos el primer lugar primero, tenemos 9 personas para elegir. Después de eso, tendríamos 8 para elegir para el segundo lugar, y 7 para el tercer lugar. Para calcular el total, simplemente tenemos que multiplicarlos juntos:

9x8x7 = 505

Este es un ejemplo de una permutación. Una permutación es el número de diferentes posibilidades ordenadas que pueden ocurrir en una situación dada. Una permutación puede ser con o sin repetición, al igual que una combinación. Si decimos que hay una permutación para n cosas con r posibilidades, las fórmulas serán:

\##### **con repetición:** n ^ r

\##### **Sin Repetición:** n! / (nr)!

Volviendo al problema en la parte superior, ¿qué pasaría si estuvieran sentados en tres sillas idénticas en lugar de tener clasificaciones? Este es un ejemplo de una combinación. En una combinación, el orden no importa. Por lo tanto, cada permutación de la misma combinación debe ser eliminada. Esto crea dos fórmulas más:

\##### **con repetición:** (r + n-1)! / (r! (n-1)!)

\##### **Sin Repetición:** n! / (r! (nr)!)

### Fuentes

"Combinaciones y permutaciones". Math is Fun, www.mathsisfun.com/combinatorics/combinations-permutations.html.

[Ayuda a nuestra comunidad a expandir este artículo](https://github.com/freecodecamp/guides/tree/master/src/pages/mathematics/combinations-and-permutations/index.md) .

[Esta guía rápida de estilo ayudará a asegurar que su solicitud de extracción sea aceptada](https://github.com/freecodecamp/guides/blob/master/README.md) .

#### Más información: