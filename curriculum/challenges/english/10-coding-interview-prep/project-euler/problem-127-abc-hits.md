---
id: 5900f3ec1000cf542c50fefe
title: 'Problem 127: abc-hits'
challengeType: 5
forumTopicId: 301754
dashedName: problem-127-abc-hits
---

# --description--

The radical of n, rad(n), is the product of distinct prime factors of n. For example, 504 = 23 × 32 × 7, so rad(504) = 2 × 3 × 7 = 42.

We shall define the triplet of positive integers (a, b, c) to be an abc-hit if:

GCD(a, b) = GCD(a, c) = GCD(b, c) = 1

a &lt; b

a + b = c

rad(abc) &lt; c

For example, (5, 27, 32) is an abc-hit, because:

GCD(5, 27) = GCD(5, 32) = GCD(27, 32) = 1

5 &lt; 27

5 + 27 = 32

rad(4320) = 30 &lt; 32

It turns out that abc-hits are quite rare and there are only thirty-one abc-hits for c &lt; 1000, with ∑c = 12523.

Find ∑c for c &lt; 120000.

# --hints--

`euler127()` should return 18407904.

```js
assert.strictEqual(euler127(), 18407904);
```

# --seed--

## --seed-contents--

```js
function euler127() {

  return true;
}

euler127();
```

# --solutions--

```js
// solution required
```
