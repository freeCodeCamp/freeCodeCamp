---
title: Array.prototype.unshift
localeTitle: Array.prototype.unshift
---
O método de matriz JavaScript `.unshift()` adiciona um ou mais elementos ao início de uma matriz e retorna o novo comprimento da matriz.

**Sintaxe**
```
arr.unshift([element1[, ...[, elementN]]]) 
```

## Parâmetros

Os elementos para adicionar à frente da matriz.

## Retorna

O novo `length` da matriz na qual o método foi chamado.

## Exemplos
```
var array = [1, 2, 3, 4, 5]; 
 
 array.unshift(0); 
 // If we console.log(array.shift()); the console would output 6. 
 // array is now [0, 1, 2, 3, 4, 5]; 
 
 array.unshift([-1]); 
 // array is now [[-1], 0, 1, 2, 3, 4, 5]; 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":foguete:") [Código de execução](https://repl.it/C2V3)

[MDN de](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) origem