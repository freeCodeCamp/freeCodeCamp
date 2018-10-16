---
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
localeTitle: Use la notación de corchete para encontrar el carácter Nth-to-Last en una cadena
---
## Use la notación de corchete para encontrar el carácter Nth-to-Last en una cadena

Recuerde que la posición de cualquier carácter, es la **longitud de la cadena, menos uno, menos el número de caracteres después de ella** . Por ejemplo, si está tratando de encontrar el tercer a último carácter de la siguiente cadena:
```
var str = "Programming"; 
 var secondToLastChar = str[str.length - 2]; // This is 'i' 
```

Como puede ver, hay un carácter adicional después de 'n' (y eso es 'g').