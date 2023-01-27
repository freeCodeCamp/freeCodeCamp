---
id: 5900f4a31000cf542c50ffb6
title: 'Problem 311: Biclinic Integral Quadrilaterals'
challengeType: 1
forumTopicId: 301967
dashedName: problem-311-biclinic-integral-quadrilaterals
---

# --description--

$ABCD$ is a convex, integer sided quadrilateral with $1 ≤ AB &lt; BC &lt; CD &lt; AD$.

$BD$ has integer length. $O$ is the midpoint of $BD$. $AO$ has integer length.

We'll call $ABCD$ a biclinic integral quadrilateral if $AO = CO ≤ BO = DO$.

For example, the following quadrilateral is a biclinic integral quadrilateral: $AB = 19$, $BC = 29$, $CD = 37$, $AD = 43$, $BD = 48$ and $AO = CO = 23$.

<img class="img-responsive center-block" alt="quadrilateral ABCD, with point O, an midpoint of BD" src="https://cdn.freecodecamp.org/curriculum/project-euler/biclinic-integral-quadrilaterals.gif" style="background-color: white; padding: 10px;" />

Let $B(N)$ be the number of distinct biclinic integral quadrilaterals $ABCD$ that satisfy ${AB}^2 + {BC}^2 + {CD}^2 + {AD}^2 ≤ N$. We can verify that $B(10\\,000) = 49$ and $B(1\\,000\\,000) = 38239$.

Find $B(10\\,000\\,000\\,000)$.

# --hints--

`biclinicIntegralQuadrilaterals()` should return `2466018557`.

```js
assert.strictEqual(biclinicIntegralQuadrilaterals(), 2466018557);
```

# --seed--

## --seed-contents--

```js
function biclinicIntegralQuadrilaterals() {

  return true;
}

biclinicIntegralQuadrilaterals();
```

# --solutions--

```js
// solution required
```
