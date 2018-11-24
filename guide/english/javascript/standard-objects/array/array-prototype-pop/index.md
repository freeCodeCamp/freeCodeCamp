---
title: Array.prototype.pop
---

# Array.prototype.pop

The `pop()` method removes the last element from and changes the length of an array.

**Syntax**
```js
    arr.pop()
```

**Return value**
- The removed element from the array; undefined if the array is empty.

## Description

The `pop()` method removes the last element from an array and returns that value to the caller. 

If you call `pop()` on an empty array, it returns undefined.

## Examples

```js
let array = [1, 2, 3, 4];
array.pop(); // removes 4
console.log(array); // [1, 2, 3]

[].pop() // undefined
```
#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop' target='_blank' rel='nofollow'>MDN</a>
