---
description: 'Disallow iterating over an array with a for-in loop.'
---

> 🛑 This file is source code, not the primary documentation location! 🛑
>
> See **https://typescript-eslint.io/rules/no-for-in-array** for documentation.

A for-in loop (`for (var i in o)`) iterates over the properties of an Object.
While it is legal to use for-in loops with array types, it is not common.
for-in will iterate over the indices of the array as strings, omitting any "holes" in
the array.

## Examples

<!--tabs-->

### ❌ Incorrect

```js
declare const array: string[];

for (const i in array) {
  console.log(array[i]);
}

for (const i in array) {
  console.log(i, array[i]);
}
```

### ✅ Correct

```js
declare const array: string[];

for (const value of array) {
  console.log(value);
}

for (let i = 0; i < array.length; i += 1) {
  console.log(i, array[i]);
}

array.forEach((value, i) => {
  console.log(i, value);
})

for (const [i, value] of array.entries()) {
  console.log(i, value);
}
```

## When Not To Use It

If you want to iterate through a loop using the indices in an array as strings, you can turn off this rule.
