---
id: 5900f4e41000cf542c50fff5
title: 'Problem 375: Minimum of subsequences'
challengeType: 5
forumTopicId: 302037
dashedName: problem-375-minimum-of-subsequences
---

# --description--

Let Sn be an integer sequence produced with the following pseudo-random number generator:

S0

=

290797

Sn+1

=

Sn2 mod 50515093

Let A(i, j) be the minimum of the numbers Si, Si+1, ... , Sj for i ≤ j. Let M(N) = ΣA(i, j) for 1 ≤ i ≤ j ≤ N. We can verify that M(10) = 432256955 and M(10 000) = 3264567774119.

Find M(2 000 000 000).

# --hints--

`euler375()` should return 7435327983715286000.

```js
assert.strictEqual(euler375(), 7435327983715286000);
```

# --seed--

## --seed-contents--

```js
function euler375() {

  return true;
}

euler375();
```

# --solutions--

```js
// solution required
```
