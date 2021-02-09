---
id: 5900f3ee1000cf542c50ff00
title: 'Problem 130: Composites with prime repunit property'
challengeType: 5
forumTopicId: 301758
dashedName: problem-130-composites-with-prime-repunit-property
---

# --description--

A number consisting entirely of ones is called a repunit. We shall define R(k) to be a repunit of length k; for example, R(6) = 111111.

Given that n is a positive integer and GCD(n, 10) = 1, it can be shown that there always exists a value, k, for which R(k) is divisible by n, and let A(n) be the least such value of k; for example, A(7) = 6 and A(41) = 5.

You are given that for all primes, p > 5, that p − 1 is divisible by A(p). For example, when p = 41, A(41) = 5, and 40 is divisible by 5.

However, there are rare composite values for which this is also true; the first five examples being 91, 259, 451, 481, and 703.

Find the sum of the first twenty-five composite values of n for whichGCD(n, 10) = 1 and n − 1 is divisible by A(n).

# --hints--

`euler130()` should return 149253.

```js
assert.strictEqual(euler130(), 149253);
```

# --seed--

## --seed-contents--

```js
function euler130() {

  return true;
}

euler130();
```

# --solutions--

```js
// solution required
```
