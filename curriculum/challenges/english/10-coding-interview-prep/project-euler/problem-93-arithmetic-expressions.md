---
id: 5900f3ca1000cf542c50fedc
title: 'Problem 93: Arithmetic expressions'
challengeType: 5
forumTopicId: 302210
dashedName: problem-93-arithmetic-expressions
---

# --description--

By using each of the digits from the set, {1, 2, 3, 4}, exactly once, and making use of the four arithmetic operations (+, −, \*, /) and brackets/parentheses, it is possible to form different positive integer targets.

For example,

<div style='margin-left: 4em;'>
  8 = (4 * (1 + 3)) / 2<br>
  14 = 4 * (3 + 1 / 2)<br>
  19 = 4 * (2 + 3) − 1<br>
  36 = 3 * 4 * (2 + 1)
</div>

Note that concatenations of the digits, like 12 + 34, are not allowed.

Using the set, {1, 2, 3, 4}, it is possible to obtain thirty-one different target numbers of which 36 is the maximum, and each of the numbers 1 to 28 can be obtained before encountering the first non-expressible number.

Find the set of four distinct digits, `a` &lt; `b` &lt; `c` &lt; `d`, for which the longest set of consecutive positive integers, 1 to `n`, can be obtained, giving your answer as a string: `abcd`.

# --hints--

`arithmeticExpressions()` should return a number.

```js
assert(typeof arithmeticExpressions() === 'number');
```

`arithmeticExpressions()` should return 1258.

```js
assert.strictEqual(arithmeticExpressions(), 1258);
```

# --seed--

## --seed-contents--

```js
function arithmeticExpressions() {

  return true;
}

arithmeticExpressions();
```

# --solutions--

```js
// solution required
```
