---
title: Array.prototype.pop
localeTitle: Array.prototype.pop
---
# Array.prototype.pop

O método `pop()` remove o último elemento e altera o tamanho de uma matriz.

**Sintaxe**

```js
    arr.pop() 
```

**Valor de retorno**

*   O elemento removido da matriz; indefinido se a matriz estiver vazia.

## Descrição

O método `pop()` remove o último elemento de uma matriz e retorna esse valor para o chamador.

Se você chamar `pop()` em um array vazio, ele retornará indefinido.

## Exemplos

```js
let array = [1, 2, 3, 4]; 
 array.pop(); // removes 4 
 console.log(array); // [1, 2, 3] 
 
 [].pop() // undefined 
```

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)