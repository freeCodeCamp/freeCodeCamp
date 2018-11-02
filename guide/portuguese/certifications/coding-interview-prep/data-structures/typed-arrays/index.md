---
title: Typed Arrays
localeTitle: Matrizes digitadas
---
## Matrizes digitadas

### Método:

*   Neste desafio, primeiro precisamos criar um buffer de 64 bytes. Podemos usar o `ArrayBuffer()` .
*   Depois de criar um buffer, precisamos criar um Int32Array, para isso podemos usar o `Int32Array()` .

### Solução:

```js
//Create a buffer of 64 bytes 
 var buffer = new ArrayBuffer(64); 
 
 //Make 32-bit int typed array with the above buffer 
 var i32View = new Int32Array(buffer); 
```

### Referências:

*   [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
*   [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)