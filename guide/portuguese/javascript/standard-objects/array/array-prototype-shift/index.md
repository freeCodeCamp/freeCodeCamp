---
title: Array.prototype.shift
localeTitle: Array.prototype.shift
---
O método de matriz JavaScript `.shift()` removerá o primeiro elemento de uma matriz e retornará esse valor. Isso também irá alterar o comprimento da matriz

**Sintaxe**

```javascript
  var array = [1, 2, 3, 4]; 
  array.shift(); 
```

## Descrição

`.shift()` irá remover o elemento no índice 0 da matriz na qual ele é chamado. Em seguida, ele retorna o valor removido e desloca todos os elementos restantes por 1 valor de índice.

`.shift()` retornará `undefined` se a matriz em que é chamado não contiver elementos.

## Exemplos

**Mudando o primeiro valor de um array**

```javascript
  var array = [1, 2, 3, 4, 5]; 
  console.log(array); 
  // Console will output 1, 2, 3, 4, 5 
 
  array.shift(); 
  // If we console.log(array.shift()); the console would output 1. 
 
  console.log(array); 
  /* Console will output 2, 3, 4, 5 and 
  the variable array now contains the set [2, 3, 4, 5] where 
  each element has been moved down 1 index value. */ 
```

Fonte: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)