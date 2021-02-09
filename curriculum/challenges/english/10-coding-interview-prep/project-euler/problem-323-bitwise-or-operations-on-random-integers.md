---
id: 5900f4b01000cf542c50ffc2
title: 'Problem 323: Bitwise-OR operations on random integers'
challengeType: 5
forumTopicId: 301980
dashedName: problem-323-bitwise-or-operations-on-random-integers
---

# --description--

Let y0, y1, y2,... be a sequence of random unsigned 32 bit integers

(i.e. 0 ≤ yi &lt; 232, every value equally likely).

For the sequence xi the following recursion is given:x0 = 0 and

xi = xi-1| yi-1, for i > 0. ( | is the bitwise-OR operator)

It can be seen that eventually there will be an index N such that xi = 232 -1 (a bit-pattern of all ones) for all i ≥ N.

Find the expected value of N. Give your answer rounded to 10 digits after the decimal point.

# --hints--

`euler323()` should return 6.3551758451.

```js
assert.strictEqual(euler323(), 6.3551758451);
```

# --seed--

## --seed-contents--

```js
function euler323() {

  return true;
}

euler323();
```

# --solutions--

```js
// solution required
```
