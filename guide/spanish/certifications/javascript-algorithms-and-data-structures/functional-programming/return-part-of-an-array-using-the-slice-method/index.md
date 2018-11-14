---
title: Return Part of an Array Using the slice Method
localeTitle: Devolver parte de una matriz utilizando el método de corte
---
## Devolver parte de una matriz utilizando el método de corte

### Explicación del problema

Utilice el método de división en la función sliceArray para devolver parte de la matriz anim, dados los índices beginSlice y endSlice proporcionados. La función debe devolver una matriz.

### Método

La función se puede escribir simplemente escribiendo una línea de código: una declaración de devolución. Al igual que en el ejemplo dado, corte la matriz que la función toma como parámetro utilizando los parámetros `beginSlice` y `endSlice` como parámetros para el método `slice()` . Recuerda la estructura del método `slice()` :

```javascript
var arr = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]; 
 arr.slice([index-to-begin-slice] , [index-to-end-slice]); 
```

### Solución

```javascript
function sliceArray(anim, beginSlice, endSlice) { 
  // Add your code below this line 
  return anim.slice(beginSlice, endSlice); 
  // Add your code above this line 
 } 
 var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]; 
 sliceArray(inputAnim, 1, 3); 
```

#### Enlaces relevantes:

*   [Array.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)