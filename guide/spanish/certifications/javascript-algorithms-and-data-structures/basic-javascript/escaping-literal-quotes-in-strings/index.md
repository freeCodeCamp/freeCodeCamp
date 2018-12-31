---
title: Escaping Literal Quotes in Strings
localeTitle: Escapar de citas literales en cuerdas
---
## Escapar de citas literales en cuerdas

*   Cuando necesite usar un carácter especial como `"` dentro de una cadena, debe escapar de ella usando `\` .
*   Si usa comillas dobles `"` para la cadena, las comillas simples `'` en la cadena no necesitan escaparse.
*   Si usa comillas simples `'` para la cadena, las comillas dobles `"` en la cadena no necesitan escaparse.

## Solución

```javascript
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
 var otherStr = 'I am a \'single quoted\' string inside \'single quotes\'.'; 
 var noEscapeSingle = "There is no need to 'escape' the single quotes."; 
 var noEscapeDouble = 'There is no need to "escape" the double quotes.'; 

```