---
title: Match Single Character with Multiple Possibilities
localeTitle: Corresponder personagem único com várias possibilidades
---
## Corresponder personagem único com várias possibilidades

### Extrair

Usando o método match (), você pode extrair partes de uma string que corresponda à sua expressão regular. Neste desafio, você está extraindo as vogais "a, e, i, o, u" de uma string fornecida.

### Sugestão 1:

Você está tentando usar o método test ()? Lembre-se que este método só retorna True ou False - precisamos extrair as vogais da string.

### Dica 2:

Você já tentou usar a correspondência de caso de caractere '\[\]' sem vírgulas? ou seja, \[abcd\] vs \[a, b, c, d\]

### Alerta de Spoiler - Solução à frente!

## Solução

```javascript
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it."; 
 let vowelRegex = /[aeiou]/ig; // Change this line 
 let result = quoteSample.match(vowelRegex); // Change this line 

```