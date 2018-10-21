---
title: Array.prototype.indexOf
localeTitle: Array.prototype.indexOf
---
## Array.prototype.indexOf

O método `indexOf()` retorna o primeiro índice no qual um determinado elemento pode ser encontrado na matriz. Se o elemento não estiver presente, retornará -1.

**Sintaxe**

```javascript
  arr.indexOf(searchElement[, fromIndex]) 
```

## Parâmetros

*   Elemento **searchElement** para o qual você está procurando
    
*   **fromIndex** Opcional. O índice em que você deseja iniciar a pesquisa. Se o fromIndex for maior ou igual ao comprimento da matriz, a matriz não será pesquisada e o método retornará -1. Se o fromIndex for um número negativo, ele considerará um deslocamento do final da matriz (a matriz ainda será pesquisada a partir de lá). O valor padrão é 0, o que significa que toda a matriz é pesquisada.
    

## Descrição

O método `indexOf` usa cada elemento da matriz na ordem ascendente do índice e o verifica contra `searchElement` usando igualdade estrita ( `===` ). Depois de encontrar um elemento que retorna `true` , ele retorna seu índice.

## Exemplos

```javascript
var array = [1, 2, 4, 1, 7] 
 
 array.indexOf(1); // 0 
 array.indexOf(7); // 4 
 array.indexOf(6); // -1 
 array.indexOf('1'); // -1 
 array.indexOf('hello'); // -1 
 array.indexOf(1, 2); // 3 
 array.indexOf(1, -3); // 3 
```

### Mais Informações:

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

[Link do MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-array-javascript)