---
id: 5900f42c1000cf542c50ff3f
title: 'Problem 192: Best Approximations'
challengeType: 5
forumTopicId: 301830
dashedName: problem-192-best-approximations
---

# --description--

Let x be a real number.

A best approximation to x for the denominator bound d is a rational number r/s in reduced form, with s ≤ d, such that any rational number which is closer to x than r/s has a denominator larger than d:

|p/q-x| &lt; |r/s-x| ⇒ q > d

For example, the best approximation to √13 for the denominator bound 20 is 18/5 and the best approximation to √13 for the denominator bound 30 is 101/28.

Find the sum of all denominators of the best approximations to √n for the denominator bound 1012, where n is not a perfect square and 1 &lt; n ≤ 100000.

# --hints--

`euler192()` should return 57060635927998344.

```js
assert.strictEqual(euler192(), 57060635927998344);
```

# --seed--

## --seed-contents--

```js
function euler192() {

  return true;
}

euler192();
```

# --solutions--

```js
// solution required
```
