---
title: String.prototype.substring
localeTitle: String.prototype.substring
---
## String.prototype.substring

A função `substring()` _extrai_ uma seqüência de caracteres de outra string dada. Não altera a string original.

Você define a seqüência para extrair com um _índice de caracteres inicial e final_ . Esses índices são passados ​​para a função `substring()` como parâmetros. A substring é formada do caractere do índice inicial até o caractere do índice final. Ambos os índices são contados a partir do início da string, começando em `0` .

Exemplos:

```js
"Hello, campers".substring(7, 14); 
 // output is "campers" 
 
 "Hello, world".substring(0, 5); 
 // output is "Hello" 
```

Você também pode omitir o último parâmetro de índice de caractere e a seqüência de subseqüência extrairá do índice inicial até o final da string. Exemplo:

```js
"Hello, campers!".substring(7); 
 // output is "campers!" 
```

#### Mais Informações:

*   [String.prototype.substring () no MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)