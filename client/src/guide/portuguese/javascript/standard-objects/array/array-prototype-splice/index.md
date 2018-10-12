---
title: Array.prototype.splice
localeTitle: Array.prototype.splice
---
## Array.prototype.splice

O método splice é semelhante ao [Array.prototype.slice](https://guide.freecodecamp.org/javascript/standard-objects/array/array-prototype-slice) , mas ao contrário de `slice()` ele transforma o array em que é chamado. Ele também difere porque pode ser usado para adicionar valores a uma matriz e removê-los.

### Parâmetros

`splice()` pode levar um ou mais

#### emenda (início)

Se apenas um parâmetro for incluído, a `splice(start)` removerá todos os elementos da matriz do `start` ao final da matriz.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(2); 
 // exampleArray is now ['first', 'second']; 
```

Se o `start` for negativo, contará de trás para frente a partir do final do array.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(-1); 
 // exampleArray is now ['first', 'second', 'third']; 
```

#### emenda (iniciar, excluirContagem)

Se um segundo parâmetro for incluído, então `splice(start, deleteCount)` removerá os elementos `deleteCount` da matriz, começando com `start` .

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 2); 
 // exampleArray is now ['first', 'fourth']; 
```

#### junção (start, deleteCount, newElement1, newElement2,….)

Se mais de dois parâmetros forem incluídos, os parâmetros adicionais serão novos elementos adicionados à matriz. A localização desses elementos adicionados será iniciada no `start` .

Elementos podem ser adicionados sem remover nenhum elemento passando `0` como o segundo parâmetro.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 0, 'new 1', 'new 2'); 
 // exampleArray is now ['first', 'new 1', 'new 2', 'second', 'third', 'fourth'] 
```

Elementos também podem ser substituídos.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 2, 'new second', 'new third'); 
 // exampleArray is now ['first', 'new second', 'new third', 'fourth'] 
```

### Valor de retorno

Além de alterar a matriz em que ele é chamado, `splice()` também retorna uma matriz contendo os valores removidos. Esta é uma maneira de cortar um array em dois arrays diferentes.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 let newArray = exampleArray.splice(1, 2); 
 // exampleArray is now ['first', 'fourth'] 
 // newArray is ['second', 'third'] 
```

#### Mais Informações:

[MDN - Array.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)