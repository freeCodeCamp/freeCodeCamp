---
title: Escaping Literal Quotes in Strings
localeTitle: Escapando citações literais em cordas
---
## Escapando citações literais em cordas

*   Quando você precisa usar um caractere especial, como `"` dentro de uma string, você precisa escapar usando `\` .
*   Se você usar aspas duplas `"` para a string, aspas simples `'` na string não precisam ser escapadas.
*   Se você usar aspas simples `'` para a string, aspas duplas `"` na string não precisam ser escapadas.

## Solução

```javascript
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
 var otherStr = 'I am a \'single quoted\' string inside \'single quotes\'.'; 
 var noEscapeSingle = "There is no need to 'escape' the single quotes."; 
 var noEscapeDouble = 'There is no need to "escape" the double quotes.'; 

```