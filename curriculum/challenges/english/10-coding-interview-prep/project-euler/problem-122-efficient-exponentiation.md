---
id: 5900f3e61000cf542c50fef9
title: 'Problem 122: Efficient exponentiation'
challengeType: 5
forumTopicId: 301749
dashedName: problem-122-efficient-exponentiation
---

# --description--

The most naive way of computing n15 requires fourteen multiplications:

n × n × ... × n = n15

But using a "binary" method you can compute it in six multiplications:

n × n = n2n2 × n2 = n4n4 × n4 = n8n8 × n4 = n12n12 × n2 = n14n14 × n = n15

However it is yet possible to compute it in only five multiplications:

n × n = n2n2 × n = n3n3 × n3 = n6n6 × n6 = n12n12 × n3 = n15

We shall define m(k) to be the minimum number of multiplications to compute nk; for example m(15) = 5.

For 1 ≤ k ≤ 200, find ∑ m(k).

# --hints--

`euler122()` should return 1582.

```js
assert.strictEqual(euler122(), 1582);
```

# --seed--

## --seed-contents--

```js
function euler122() {

  return true;
}

euler122();
```

# --solutions--

```js
// solution required
```
