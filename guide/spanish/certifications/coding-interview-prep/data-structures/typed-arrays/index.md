---
title: Typed Arrays
localeTitle: Matrices mecanografiadas
---
## Matrices mecanografiadas

### Método:

*   En este desafío, primero necesitamos crear un buffer de 64 bytes. Podemos usar el constructor `ArrayBuffer()` .
*   Después de crear un búfer necesitamos crear un Int32Array, para eso podemos usar el constructor `Int32Array()` .

### Solución:

```js
//Create a buffer of 64 bytes 
 var buffer = new ArrayBuffer(64); 
 
 //Make 32-bit int typed array with the above buffer 
 var i32View = new Int32Array(buffer); 
```

### Referencias:

*   [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
*   [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)