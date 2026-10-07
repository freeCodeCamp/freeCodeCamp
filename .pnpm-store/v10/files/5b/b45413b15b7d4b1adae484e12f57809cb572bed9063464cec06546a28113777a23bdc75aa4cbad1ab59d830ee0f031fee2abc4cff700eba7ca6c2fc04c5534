---
description: 'Enforce the use of `for-of` loop over the standard `for` loop where possible.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/prefer-for-of** for documentation.

Many developers default to writing `for (let i = 0; i < ...` loops to iterate over arrays.
However, in many of those arrays, the loop iterator variable (e.g. `i`) is only used to access the respective element of the array.
In those cases, a `for-of` loop is easier to read and write.

This rule recommends a for-of loop when the loop index is only used to read from an array that is being iterated.

## Examples

<!--tabs-->

### ❌ Incorrect

```js
declare const array: string[];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

### ✅ Correct

```js
declare const array: string[];

for (const x of array) {
  console.log(x);
}

for (let i = 0; i < array.length; i++) {
  // i is used, so for-of could not be used.
  console.log(i, array[i]);
}
```

## When Not To Use It

If you transpile for browsers that do not support for-of loops, you may wish to use traditional for loops that produce more compact code.
