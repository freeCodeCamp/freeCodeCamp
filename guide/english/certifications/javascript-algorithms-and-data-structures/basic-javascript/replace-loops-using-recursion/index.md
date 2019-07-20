---
title: Replace Loops using Recursion
---

# Replace Loops using Recursion

### Hint 1:

When `n <= 0` `sum(arr, n)` returns `arr[0]`.

### Hint 2:

When `n` is larger than 0 `sum(arr, n)` returns `sum(arr, n - 1) + arr[n]`

## Basic code solution:

<details><summary>(Click to reveal)</summary>

```js
function sum(arr, n) {
  if (n <= 0) {
    return arr[0];
  } else {
    return sum(arr, n - 1) + arr[n];
  }
}

```

</details>

### Code explanation

The `if` statement checks to see if `sum` is evaluating the base case, `n <= 0`, or not.  If it is, then `sum` returns the answer, `arr[0]` - the sum of elements from 0 to 0 inclusive.  Otherwise it recurses by evaluating a simpler function call, `sum(arr, n - 1)`.  Once that returns it adds a single array element, `arr[n]`, to it and returns that sum.

### Resources

- [Recursive Functions - *MDN JavaScript reference*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)
