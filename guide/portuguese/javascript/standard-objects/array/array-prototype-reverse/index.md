---
title: Array.prototype.reverse
localeTitle: Array.prototype.reverse
---
O método de matriz JavaScript `.reverse()` inverterá a ordem dos elementos dentro da matriz.

**Sintaxe**

```javascript
  var array = [1, 2, 3, 4, 5]; 
  array.reverse(); 
```

## Descrição

`.reverse()` inverte o índice dos elementos de um array.

## Exemplos

**Use `.reverse()` para inverter os elementos de um array**

```javascript
  var array = [1, 2, 3, 4, 5]; 
  console.log(array); 
  // Console will output 1, 2, 3, 4, 5 
 
  array.reverse(); 
 
  console.log(array); 
  /* Console will output 5, 4, 3, 2, 1 and 
  the variable array now contains the set [5, 4, 3, 2, 1] */ 
```

Fonte: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)