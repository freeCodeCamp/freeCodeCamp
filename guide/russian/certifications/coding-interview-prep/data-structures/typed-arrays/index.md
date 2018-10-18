---
title: Typed Arrays
localeTitle: Типизированные массивы
---
## Типизированные массивы

### Метод:

*   В этом случае сначала нам нужно создать буфер из 64 байтов. Мы можем использовать конструктор `ArrayBuffer()` .
*   После создания буфера нам нужно создать Int32Array, для этого мы можем использовать конструктор `Int32Array()` .

### Решение:

```js
//Create a buffer of 64 bytes 
 var buffer = new ArrayBuffer(64); 
 
 //Make 32-bit int typed array with the above buffer 
 var i32View = new Int32Array(buffer); 
```

### Рекомендации:

*   [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
*   [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)