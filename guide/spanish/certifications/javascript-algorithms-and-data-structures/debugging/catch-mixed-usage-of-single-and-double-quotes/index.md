---
title: Catch Mixed Usage of Single and Double Quotes
localeTitle: Uso mixto de capturas de comillas simples y dobles
---
## Uso mixto de capturas de comillas simples y dobles

*   Recuerde si elige usar comillas simples o dobles, simplemente agregando un `\` antes de que el carácter permita que el carácter encaje en la cadena sin cerrar las comillas simples o dobles.
*   Los casos de prueba solo se pasarán utilizando comillas dobles.

## Solución:

```javascript
//Solution1: 
 let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>"; 
 console.log(innerHtml); 

```