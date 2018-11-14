---
title: Use Bracket Notation to Find the Last Character in a String
localeTitle: Use a notação de suporte para localizar o último caractere em uma string
---
## Use a notação de suporte para localizar o último caractere em uma string

Considere a seguinte string:
```
var str = "Coding"; 
```

Esta string tem um comprimento de 6 caracteres, então se você usar .length na string, ela dará a você 6. Mas lembre-se que o primeiro caractere está na posição zero-th. O segundo personagem está na primeira posição. O terceiro personagem está na segunda posição.

Continue em frente e, eventualmente, você verá que o sexto caractere (que, com base na string acima, é 'g') está na quinta posição. É por isso que você obtém o último caractere de uma string, com:
```
var lastChar = str[str.length - 1]; // This is 6 - 1, which is 5 
```

Isso será 'g'.