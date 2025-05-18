---
id: 6821ebdf237de8297eaee793
title: "JavaScript Challenge 17: Unorder of Operations"
challengeType: 28
dashedName: javascript-challenge-17
---

# --description--

Given an array of integers and an array of string operators, apply the operations to the numbers sequentially from left-to-right. Repeat the operations as needed until all numbers are used. Return the final result.

For example, given `[1, 2, 3, 4, 5]` and `['+', '*']`, return the result of evaluating `1 + 2 * 3 + 4 * 5` from left-to-right ignoring standard order of operations.

- Valid operators are `+`, `-`, `*`, `/`, and `%`.

# --hints--

`evaluate([5, 6, 7, 8, 9], ['+', '-'])` should return `3`

```js
assert.equal(evaluate([5, 6, 7, 8, 9], ['+', '-']), 3);
```

`evaluate([17, 61, 40, 24, 38, 14], ['+', '%'])` should return `38`

```js
assert.equal(evaluate([17, 61, 40, 24, 38, 14], ['+', '%']), 38);
```

`evaluate([20, 2, 4, 24, 12, 3], ['*', '/'])` should return `60`

```js
assert.equal(evaluate([20, 2, 4, 24, 12, 3], ['*', '/']), 60);
```

`evaluate([11, 4, 10, 17, 2], ['*', '*', '%'])` should return `30`

```js
assert.equal(evaluate([11, 4, 10, 17, 2], ['*', '*', '%']), 30);
```

`evaluate([33, 11, 29, 13], ['/', '-'])` should return `-2`

```js
assert.equal(evaluate([33, 11, 29, 13], ['/', '-']), -2);
```

# --seed--

## --seed-contents--

```js
function evaluate(numbers, operators) {

  return numbers;
}
```

# --solutions--

```js
function doMath(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return a % b;
  }
}

function evaluate(numbers, operators) { 
  let total = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const operator = operators[(i - 1) % operators.length];
    total = doMath(total, numbers[i], operator);
  }

  return total;
}
```
