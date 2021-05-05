---
id: 5900f4691000cf542c50ff7b
title: 'Problem 252: Convex Holes'
challengeType: 5
forumTopicId: 301900
dashedName: problem-252-convex-holes
---

# --description--

Given a set of points on a plane, we define a convex hole to be a convex polygon having as vertices any of the given points and not containing any of the given points in its interior (in addition to the vertices, other given points may lie on the perimeter of the polygon).

As an example, the image below shows a set of twenty points and a few such convex holes. The convex hole shown as a red heptagon has an area equal to 1049694.5 square units, which is the highest possible area for a convex hole on the given set of points.

For our example, we used the first 20 points (T2k−1, T2k), for k = 1,2,…,20, produced with the pseudo-random number generator:

S0 = 290797 Sn+1 = Sn2 mod 50515093 Tn = ( Sn mod 2000 ) − 1000

i.e. (527, 144), (−488, 732), (−454, −947), …

What is the maximum area for a convex hole on the set containing the first 500 points in the pseudo-random sequence? Specify your answer including one digit after the decimal point.

# --hints--

`euler252()` should return 104924.

```js
assert.strictEqual(euler252(), 104924);
```

# --seed--

## --seed-contents--

```js
function euler252() {

  return true;
}

euler252();
```

# --solutions--

```js
// solution required
```
