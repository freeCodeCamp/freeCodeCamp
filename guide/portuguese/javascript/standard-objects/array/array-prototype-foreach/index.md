---
title: Array.prototype.forEach
localeTitle: Array.prototype.forEach
---
## Array.prototype.forEach

O método array 'forEach' é usado para percorrer cada item de uma matriz. O método é chamado no objeto array e recebe uma função que é chamada em cada item da matriz.

```javascript
var arr = [1, 2, 3, 4, 5]; 
 
 arr.forEach(number => console.log(number * 2)); 
 
 // 2 
 // 4 
 // 6 
 // 8 
 // 10 
```

A função de retorno de chamada também pode ter um segundo parâmetro de um índice, caso você precise referenciar o índice do item atual na matriz.

```javascript
var arr = [1, 2, 3, 4, 5]; 
 
 arr.forEach((number, i) => console.log(`${number} is at index ${i}`)); 
 
 // '1 is at index 0' 
 // '2 is at index 1' 
 // '3 is at index 2' 
 // '4 is at index 3' 
 // '5 is at index 4' 
```

#### Mais Informações:

[Artigo do MDN em Array.prototype.forEach ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)