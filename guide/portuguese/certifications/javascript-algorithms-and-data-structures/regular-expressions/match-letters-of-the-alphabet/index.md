---
title: Match Letters of the Alphabet
localeTitle: Correspondência de letras do alfabeto
---
## Correspondência de letras do alfabeto

Nesse desafio, você é solicitado a combinar todas as letras do alfabeto em uma determinada string. Você não apenas está combinando / pesquisando esses caracteres, mas também é solicitado a extraí-los.

### Sugestão 1:

Lembre-se de que você é solicitado a extrair as letras da string - isso não pode ser feito com o método .test () porque retorna True ou False. Nesse caso, precisamos extrair o resultado real da string usando o método .match ().

### Dica 2:

Você está usando o sinalizador de caso de caractere do método match () com colchetes? Por exemplo, regExp = / \[ae\] / vs regExp = / ae /. O que isso nos permite fazer é procurar na string por qualquer caractere correspondente a \[a, b, c,… e\] usando a notação abreviada / \[ae\] /.

### Alerta de spoiler: Solução à frente

## Solução

```javascript
let quoteSample = "The quick brown fox jumps over the lazy dog."; 
 let alphabetRegex = /[az]/ig; // Change this line 
 let result = quoteSample.match(alphabetRegex); // Change this line 

```