---
id: 5900f5471000cf542c510059
title: 'Problem 474: Last digits of divisors'
challengeType: 5
forumTopicId: 302151
dashedName: problem-474-last-digits-of-divisors
---

# --description--

For a positive integer n and digits d, we define F(n, d) as the number of the divisors of n whose last digits equal d.

For example, F(84, 4) = 3. Among the divisors of 84 (1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84), three of them (4, 14, 84) have the last digit 4.

We can also verify that F(12!, 12) = 11 and F(50!, 123) = 17888.

Find F(106!, 65432) modulo (1016 + 61).

# --hints--

`euler474()` should return 9690646731515010.

```js
assert.strictEqual(euler474(), 9690646731515010);
```

# --seed--

## --seed-contents--

```js
function euler474() {

  return true;
}

euler474();
```

# --solutions--

```js
// solution required
```
