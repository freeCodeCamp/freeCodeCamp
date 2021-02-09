---
id: 5900f5001000cf542c510013
title: 'Problem 403: Lattice points enclosed by parabola and line'
challengeType: 5
forumTopicId: 302071
dashedName: problem-403-lattice-points-enclosed-by-parabola-and-line
---

# --description--

For integers a and b, we define D(a, b) as the domain enclosed by the parabola y = x2 and the line y = a·x + b:D(a, b) = { (x, y) | x2 ≤ y ≤ a·x + b }.

L(a, b) is defined as the number of lattice points contained in D(a, b). For example, L(1, 2) = 8 and L(2, -1) = 1.

We also define S(N) as the sum of L(a, b) for all the pairs (a, b) such that the area of D(a, b) is a rational number and |a|,|b| ≤ N. We can verify that S(5) = 344 and S(100) = 26709528.

Find S(1012). Give your answer mod 108.

# --hints--

`euler403()` should return 18224771.

```js
assert.strictEqual(euler403(), 18224771);
```

# --seed--

## --seed-contents--

```js
function euler403() {

  return true;
}

euler403();
```

# --solutions--

```js
// solution required
```
