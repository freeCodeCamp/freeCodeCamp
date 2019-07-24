---
title: Typed Arrays
---
# Typed Arrays

---
## Problem Explanation
- In this challenge, first we need to create a buffer of 64 bytes. We can use `ArrayBuffer()` constructor.
- After creating a buffer we need to create an Int32Array, for that we can use `Int32Array()` constructor.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
//Create a buffer of 64 bytes
var buffer = new ArrayBuffer(64);

//Make 32-bit int typed array with the above buffer
var i32View = new Int32Array(buffer);
```

#### Relevant Links
- [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [TypedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)

</details>