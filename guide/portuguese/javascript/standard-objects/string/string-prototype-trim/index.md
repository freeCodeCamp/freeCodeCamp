---
title: String.prototype.trim
localeTitle: String.prototype.trim
---
## String.prototype.trim

A função `trim()` remove qualquer caractere de espaço em branco do início e do final de uma determinada string. Não modifica a string original; ele gera um novo.

Exemplos:

```js
"  Hello, campers. I have spaces on both ends!  ".trim(); 
 // output is "Hello, campers. I have spaces on both ends!" 
```

`trim()` não apenas remove caracteres de espaço; ele remove qualquer caractere de espaço em branco, como guias, quebra de linha, espaços sem quebra, etc.

Isso é útil, por exemplo, quando você deseja processar uma entrada de texto de um usuário e pode ter enviado uma string com espaços no final que talvez não queira.

#### Mais Informações:

*   [String.prototype.trim () no MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)