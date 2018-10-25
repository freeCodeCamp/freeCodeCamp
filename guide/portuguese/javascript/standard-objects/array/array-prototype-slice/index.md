---
title: Array.prototype.slice
localeTitle: Array.prototype.slice
---
O método de matriz JavaScript `.slice()` retornará um novo objeto de matriz que será um segmento (uma fatia) da matriz original. O array original não é modificado.

**Sintaxe**

```javascript
  array.slice() 
  arr.slice(startIndex) 
  arr.slice(startIndex, endIndex) 
```

## Parâmetros

*   **startIndex** O índice baseado em zero onde a fatia deve começar. Se o valor for omitido, começará em 0.
    
*   **endIndex** A fatia terminará **antes** deste índice baseado em zero. Um índice negativo é usado para compensar a partir do final da matriz. Se o valor for omitido, o segmento dividirá o final da matriz.
    

## Exemplos

```javascript
  var array = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
 
  var everything = array.slice() 
  // everything = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
 
  var kitchen = array.slice(2, 4) 
  // kitchen = ['cup', 'sandwich'] 
 
  var random = array.slice(4) 
  // random = ['bag', 'phone', 'cactus'] 
 
  var noPlants = array.slice(0, -1) 
  // noPlats = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone'] 
 
  // array will still equal ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
```

#### Mais Informações:

Fonte: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)