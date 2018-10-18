---
title: Return Part of an Array Using the slice Method
localeTitle: Retornar parte de uma matriz usando o método de fatia
---
## Retornar parte de uma matriz usando o método de fatia

### Explicação do Problema

Use o método de fatia na função sliceArray para retornar parte do array anim dado os índices beginSlice e endSlice fornecidos. A função deve retornar uma matriz.

### Método

A função pode ser escrita simplesmente escrevendo uma linha de código - uma declaração de retorno. Assim como no exemplo dado, corte a matriz que a função usa como parâmetro usando os parâmetros `beginSlice` e `endSlice` como parâmetros para o método `slice()` . Lembre-se da estrutura do método `slice()` :

```javascript
var arr = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]; 
 arr.slice([index-to-begin-slice] , [index-to-end-slice]); 
```

### Solução

```javascript
function sliceArray(anim, beginSlice, endSlice) { 
  // Add your code below this line 
  return anim.slice(beginSlice, endSlice); 
  // Add your code above this line 
 } 
 var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]; 
 sliceArray(inputAnim, 1, 3); 
```

#### Links Relevantes:

*   [Array.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)