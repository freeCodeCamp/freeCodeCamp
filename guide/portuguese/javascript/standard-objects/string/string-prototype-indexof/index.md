---
title: String.prototype.indexOf
localeTitle: String.prototype.indexOf
---
## String.prototype.indexOf

O método `indexOf()` retorna o primeiro índice no qual um determinado elemento pode ser encontrado na matriz. Se o elemento não estiver presente, retornará -1.

**Sintaxe**

```javascript
str.indexOf(searchValue[, fromIndex]) 
```

### Parâmetros

*   **searchValue Substring** para o qual você está procurando. Se estiver vazio ( `''` ) e não `fromIndex` parâmetro `fromIndex` , isso retornará 0.
    
*   **fromIndex** Opcional. O índice no qual você deseja iniciar a pesquisa. Se o valor `fromIndex` for maior ou igual ao tamanho da string, a string não será pesquisada e o método retornará -1. Se o `searchValue` for uma string vazia ( `''` ) e o `fromIndex` for menor que o tamanho da string, ele retornará o `fromIndex` ; caso contrário, retornará o tamanho da string. (Um número negativo será tratado como se não houvesse argumento).
    

### Descrição

O método `indexOf()` verifica a string da esquerda para a direita. O índice do primeiro caractere é 0; o índice do último caractere é `string.length - 1` . O método verifica cada substring em relação a `searchValue` usando igualdade estrita ( `===` ), o que significa que esse método faz `searchValue` entre maiúsculas e minúsculas. Depois de encontrar uma substring que retorna `true` , retorna o índice de seu primeiro caractere.

### Exemplos

```javascript
'Blue Whale'.indexOf('Blue');     // returns  0 
 'Blue Whale'.indexOf('Blute');    // returns -1 
 'Blue Whale'.indexOf('Whale', 0); // returns  5 
 'Blue Whale'.indexOf('Whale', 5); // returns  5 
 'Blue Whale'.indexOf('Whale', 7); // returns -1 
 'Blue Whale'.indexOf('');         // returns  0 
 'Blue Whale'.indexOf('', 9);      // returns  9 
 'Blue Whale'.indexOf('', 10);     // returns 10 
 'Blue Whale'.indexOf('', 11);     // returns 10 
 'Blue Whale'.indexOf('blue');     // returns -1 
```

### Mais Informações:

*   Documentação do [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) : [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
*   Documentação da [MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-string-javascript) : [MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-string-javascript)