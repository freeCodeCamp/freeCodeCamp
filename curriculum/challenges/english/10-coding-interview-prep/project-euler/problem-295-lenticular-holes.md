---
id: 5900f4931000cf542c50ffa6
title: 'Problem 295: Lenticular holes'
challengeType: 5
forumTopicId: 301947
dashedName: problem-295-lenticular-holes
---

# --description--

We call the convex area enclosed by two circles a lenticular hole if:

The centres of both circles are on lattice points.

The two circles intersect at two distinct lattice points.

The interior of the convex area enclosed by both circles does not contain any lattice points.

Consider the circles: C0: x2+y2=25 C1: (x+4)2+(y-4)2=1 C2: (x-12)2+(y-4)2=65

The circles C0, C1 and C2 are drawn in the picture below.

C0 and C1 form a lenticular hole, as well as C0 and C2.

We call an ordered pair of positive real numbers (r1, r2) a lenticular pair if there exist two circles with radii r1 and r2 that form a lenticular hole. We can verify that (1, 5) and (5, √65) are the lenticular pairs of the example above.

Let L(N) be the number of distinct lenticular pairs (r1, r2) for which 0 &lt; r1 ≤ r2 ≤ N. We can verify that L(10) = 30 and L(100) = 3442.

Find L(100 000).

# --hints--

`euler295()` should return 4884650818.

```js
assert.strictEqual(euler295(), 4884650818);
```

# --seed--

## --seed-contents--

```js
function euler295() {

  return true;
}

euler295();
```

# --solutions--

```js
// solution required
```
