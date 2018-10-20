---
title: Typed Arrays
localeTitle: 键入的数组
---
## 键入的数组

### 方法：

*   在这个挑战中，首先我们需要创建一个64字节的缓冲区。我们可以使用`ArrayBuffer()`构造函数。
*   在创建缓冲区之后，我们需要创建一个Int32Array，为此我们可以使用`Int32Array()`构造函数。

### 解：

```js
//Create a buffer of 64 bytes 
 var buffer = new ArrayBuffer(64); 
 
 //Make 32-bit int typed array with the above buffer 
 var i32View = new Int32Array(buffer); 
```

### 参考文献：

*   [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
*   [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)