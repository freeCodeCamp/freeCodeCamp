---
title: Array.prototype.forEach
localeTitle: Array.prototype.forEach
---
## Array.prototype.forEach

El método de matriz 'forEach' se utiliza para iterar a través de cada elemento en una matriz. El método se llama en el objeto de matriz y se pasa una función que se llama en cada elemento de la matriz.

```javascript
var arr = [1, 2, 3, 4, 5]; 
 
 arr.forEach(number => console.log(number * 2)); 
 
 // 2 
 // 4 
 // 6 
 // 8 
 // 10 
```

La función de devolución de llamada también puede tomar un segundo parámetro de un índice en caso de que necesite hacer referencia al índice del elemento actual en la matriz.

```javascript
var arr = [1, 2, 3, 4, 5]; 
 
 arr.forEach((number, i) => console.log(`${number} is at index ${i}`)); 
 
 // '1 is at index 0' 
 // '2 is at index 1' 
 // '3 is at index 2' 
 // '4 is at index 3' 
 // '5 is at index 4' 
```

#### Más información:

[Artículo de MDN en Array.prototype.forEach ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)