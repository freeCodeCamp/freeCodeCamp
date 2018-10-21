---
title: Array isArray
localeTitle: Array isArray
---
O método `Array.isArray()` retorna `true` se um objeto for um array, `false` se não for.

## Sintaxe
```
Array.isArray(obj) 
```

### Parâmetros

**obj** O objeto a ser verificado.

[Ligação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) | [Link do MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff848265%28v=vs.94%29.aspx)

## Exemplos
```
// all following calls return true 
 Array.isArray([]); 
 Array.isArray([1]); 
 Array.isArray(new Array()); 
 // Little known fact: Array.prototype itself is an array: 
 Array.isArray(Array.prototype); 
 
 // all following calls return false 
 Array.isArray(); 
 Array.isArray({}); 
 Array.isArray(null); 
 Array.isArray(undefined); 
 Array.isArray(17); 
 Array.isArray('Array'); 
 Array.isArray(true); 
 Array.isArray(false); 
 Array.isArray({ __proto__: Array.prototype }); 

```