---
title: Use Bracket Notation to Find the Nth-to-Last Character in a String
localeTitle: Use a notação de suporte para localizar o caractere N-para-último em uma seqüência de caracteres
---
## Use a notação de suporte para localizar o caractere N-para-último em uma seqüência de caracteres

Lembre-se de que a posição de qualquer caractere é o **comprimento da string, menos um, menos o número de caracteres depois dela** . Por exemplo, se você estiver tentando encontrar o terceiro ao último caractere da seguinte cadeia:
```
var str = "Programming"; 
 var secondToLastChar = str[str.length - 2]; // This is 'i' 
```

Como você pode ver, há um caractere extra depois de 'n' (e isso é 'g').