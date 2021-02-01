---
id: 5900f5231000cf542c510034
title: 'Problem 438: Integer part of polynomial equation''s solutions'
challengeType: 5
forumTopicId: 302109
dashedName: problem-438-integer-part-of-polynomial-equations-solutions
---

# --description--

For an n-tuple of integers t = (a1, ..., an), let (x1, ..., xn) be the solutions of the polynomial equation xn + a1xn-1 + a2xn-2 + ... + an-1x + an = 0.

Consider the following two conditions: x1, ..., xn are all real. If x1, ..., xn are sorted, ⌊xi⌋ = i for 1 ≤ i ≤ n. (⌊·⌋: floor function.)

In the case of n = 4, there are 12 n-tuples of integers which satisfy both conditions. We define S(t) as the sum of the absolute values of the integers in t. For n = 4 we can verify that ∑S(t) = 2087 for all n-tuples t which satisfy both conditions.

Find ∑S(t) for n = 7.

# --hints--

`euler438()` should return 2046409616809.

```js
assert.strictEqual(euler438(), 2046409616809);
```

# --seed--

## --seed-contents--

```js
function euler438() {

  return true;
}

euler438();
```

# --solutions--

```js
// solution required
```
