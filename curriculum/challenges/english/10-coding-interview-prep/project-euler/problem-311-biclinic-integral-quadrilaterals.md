---
id: 5900f4a31000cf542c50ffb6
title: 'Problem 311: Biclinic Integral Quadrilaterals'
challengeType: 5
forumTopicId: 301967
dashedName: problem-311-biclinic-integral-quadrilaterals
---

# --description--

ABCD is a convex, integer sided quadrilateral with 1 ≤ AB &lt; BC &lt; CD &lt; AD.

BD has integer length. O is the midpoint of BD. AO has integer length.

We'll call ABCD a biclinic integral quadrilateral if AO = CO ≤ BO = DO.

For example, the following quadrilateral is a biclinic integral quadrilateral: AB = 19, BC = 29, CD = 37, AD = 43, BD = 48 and AO = CO = 23.

Let B(N) be the number of distinct biclinic integral quadrilaterals ABCD that satisfy AB2+BC2+CD2+AD2 ≤ N. We can verify that B(10 000) = 49 and B(1 000 000) = 38239.

Find B(10 000 000 000).

# --hints--

`euler311()` should return 2466018557.

```js
assert.strictEqual(euler311(), 2466018557);
```

# --seed--

## --seed-contents--

```js
function euler311() {

  return true;
}

euler311();
```

# --solutions--

```js
// solution required
```
