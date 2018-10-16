---
title: Combine an Array into a String Using the join Method
localeTitle: Combine uma matriz em uma seqüência de caracteres usando o método de associação
---
## Combine uma matriz em uma seqüência de caracteres usando o método de associação

### Explicação do Problema

Use o método `join` (entre outros) dentro da função `sentensify` para fazer uma sentença a partir das palavras na string `str` . A função deve retornar uma string. Por exemplo, "Eu-como-Star-Wars" seria convertido para "Eu gosto de Star Wars". Para este desafio, não use o método `replace` .

#### Links Relevantes:

*   [Array.prototype.join ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
*   [String.prototype.split ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
*   [Expressões regulares](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### Dica1

Você pode precisar converter a string para um array primeiro.

### Dica2

Você pode precisar usar expressões regulares para dividir a string.

### Solução:

```javascript
function sentensify(str) { 
  // Add your code below this line 
  return str.split(/\W/).join(' '); 
  // Add your code above this line 
 } 
 sentensify("May-the-force-be-with-you"); 

```