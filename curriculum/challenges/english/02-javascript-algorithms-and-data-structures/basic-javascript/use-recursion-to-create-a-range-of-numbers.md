---
id: 5cc0bd7a49b71cb96132e54c
title: Use Recursion to Create a Range of Numbers
challengeType: 1
forumTopicId: 301180
dashedName: use-recursion-to-create-a-range-of-numbers
---

# --description--

Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.

# --instructions--

We have defined a function named `rangeOfNumbers` with two parameters. The function should return an array of integers which begins with a number represented by the `startNum` parameter and ends with a number represented by the `endNum` parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both `startNum` and `endNum` are the same.

# --hints--

Your function should return an array.

```js
assert(Array.isArray(rangeOfNumbers(5, 10)));
```

Your code should not use any loop syntax (`for` or `while` or higher order functions such as `forEach`, `map`, `filter`, or `reduce`).

```js
assert(
  !__helpers
    .removeJSComments(code)
    .match(/for|while|forEach|map|filter|reduce/g)
);
```

`rangeOfNumbers` should use recursion (call itself) to solve this challenge.

```js
assert(
  __helpers
    .removeJSComments(rangeOfNumbers.toString())
    .match(/rangeOfNumbers\s*\(.+\)/)
);
```

`rangeOfNumbers(1, 5)` should return `[1, 2, 3, 4, 5]`.

```js
assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
```

`rangeOfNumbers(6, 9)` should return `[6, 7, 8, 9]`.

```js
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

`rangeOfNumbers(4, 4)` should return `[4]`.

```js
assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

# --seed--

## --seed-contents--

```js
function rangeOfNumbers(startNum, endNum) {
  return [];
};
```

# --solutions--

```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```
