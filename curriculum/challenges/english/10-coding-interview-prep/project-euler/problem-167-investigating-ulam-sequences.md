---
id: 5900f4141000cf542c50ff26
title: 'Problem 167: Investigating Ulam sequences'
challengeType: 5
forumTopicId: 301801
dashedName: problem-167-investigating-ulam-sequences
---

# --description--

For two positive integers a and b, the Ulam sequence U(a,b) is defined by U(a,b)1 = a, U(a,b)2 = b and for k > 2,

U(a,b)k is the smallest integer greater than U(a,b)(k-1) which can be written in exactly one way as the sum of two distinct previous members of U(a,b).

For example, the sequence U(1,2) begins with

1, 2, 3 = 1 + 2, 4 = 1 + 3, 6 = 2 + 4, 8 = 2 + 6, 11 = 3 + 8;

5 does not belong to it because 5 = 1 + 4 = 2 + 3 has two representations as the sum of two previous members, likewise 7 = 1 + 6 = 3 + 4.

Find ∑U(2,2n+1)k for 2 ≤ n ≤10, where k = 1011.

# --hints--

`euler167()` should return 3916160068885.

```js
assert.strictEqual(euler167(), 3916160068885);
```

# --seed--

## --seed-contents--

```js
function euler167() {

  return true;
}

euler167();
```

# --solutions--

```js
// solution required
```
