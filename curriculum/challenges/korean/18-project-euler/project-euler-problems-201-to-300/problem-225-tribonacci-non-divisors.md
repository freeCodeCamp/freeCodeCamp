---
id: 5900f44e1000cf542c50ff60
title: 'Problem 225: Tribonacci non-divisors'
challengeType: 1
forumTopicId: 301868
dashedName: problem-225-tribonacci-non-divisors
---

# --description--

The sequence 1, 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, 355, 653, 1201 ...

is defined by $T_1 = T_2 = T_3 = 1$ and $T_n = T_{n - 1} + T_{n - 2} + T_{n - 3}$.

It can be shown that 27 does not divide any terms of this sequence. In fact, 27 is the first odd number with this property.

Find the ${124}^{\text{th}}$ odd number that does not divide any terms of the above sequence.

# --hints--

`tribonacciNonDivisors()` should return `2009`.

```js
assert.strictEqual(tribonacciNonDivisors(), 2009);
```

# --seed--

## --seed-contents--

```js
function tribonacciNonDivisors() {

  return true;
}

tribonacciNonDivisors();
```

# --solutions--

```js
// solution required
```
