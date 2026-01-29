---
id: 5cd9a70215d3c4e65518328f
title: Build a Countdown
challengeType: 26
dashedName: build-a-countdown
---

# --description--

In this lab, you will build a `countdown` function that takes a starting number and generates a countdown list.

When you call `countdown(n)`, it should return an array that starts at `n` and counts down by `1` until it reaches `1`.

For example:

- `countdown(5)` should return `[5, 4, 3, 2, 1]`
- `countdown(1)` should return `[1]`

If the starting number is less than `1`, there is nothing to countdown, so return an empty array:

- `countdown(0)` should return `[]`
- `countdown(-3)` should return `[]`

To complete the lab, you must build the result using recursion and you must not use loops (`for`, `while`) or array-iteration methods (`forEach`, `map`, `filter`, `reduce`). Each call should produce its own result array (don't use globals to store the countdown).

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create a function named `countdown`.
2. The `countdown` function should take a single argument `n` (a number).
3. If `n` is less than `1`, `countdown` should return an empty array.
4. Otherwise, `countdown` should return an array containing the integers from `n` down to `1` in descending order.
5. You must use recursion (the function should call itself) and must not use loops of any kind (`for`, `while`, or higher-order methods like `forEach`, `map`, `filter`, `reduce`).
6. Each recursive call should use a smaller value than the previous call (for example, `n - 1`) so the function reaches its base case.
7. The solution should not use global variables to store or cache the result array.
8. Calling `countdown` multiple times with different inputs should always return the correct, independent result.

# --hints--

You should have a function named `countdown`.

```js
assert.isFunction(countdown);
```

`countdown(-1)` should return an empty array.

```js
assert.isEmpty(countdown(-1));
```

`countdown(10)` should return `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
```

`countdown(5)` should return `[5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

Your code should not rely on any kind of loops (`for`, `while` or higher order functions such as `forEach`, `map`, `filter`, and `reduce`).

```js
assert(
  !__helpers.removeJSComments(code).match(/for|while|forEach|map|filter|reduce/g)
);
```

You should use recursion to solve this problem.

```js
assert(
  countdown.toString().match(/countdown\s*\(.+\)/)
);
```

Global variables should not be used to cache the array.

```js
countdown(1)
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function countdown(n) {
  if (n < 1) {
    return [];
  }

  return [n, ...countdown(n - 1)];
}
```
