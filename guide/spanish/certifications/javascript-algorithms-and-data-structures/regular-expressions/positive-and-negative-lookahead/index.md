---
title: Positive and Negative Lookahead
localeTitle: Lookahead positivo y negativo
---
## Lookahead positivo y negativo

*   Recuerde usar 2 `lookaheads` para verificar los patrones en la cadena. El primer `lookahead` es muy similar al dado en el ejemplo - '(? = \\ W {3,6})' - solo el `lower-number` 3 es demasiado bajo para nuestros casos de prueba, y un `upper-number` es completamente anómalo. Este primer `lookahead` solo se usa para encontrar una cadena que consiste en una cierta cantidad de caracteres. Se debe usar un segundo `lookahead` para verificar valores numéricos consecutivos al final de la cadena.
    
*   El segundo `lookahead` también es similar al dado en el ejemplo - `(?=\D*\d)` - sin embargo, esta expresión también debe modificarse para pasar todos los casos de prueba. Recuerde especificar la cantidad exacta de números que desea que aparezcan al final de la cadena.
    

## Solución:

```javascript
let sampleWord = "astronaut"; 
 let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; 
 let result = pwRegex.test(sampleWord); 

```