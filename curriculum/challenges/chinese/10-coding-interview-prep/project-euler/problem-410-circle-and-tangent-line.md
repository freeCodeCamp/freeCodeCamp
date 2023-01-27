---
id: 5900f5071000cf542c510018
title: 'Problem 410: Circle and tangent line'
challengeType: 1
forumTopicId: 302079
dashedName: problem-410-circle-and-tangent-line
---

# --description--

Let $C$ be the circle with radius $r$, $x^2 + y^2 = r^2$. We choose two points $P(a, b)$ and $Q(-a, c)$ so that the line passing through $P$ and $Q$ is tangent to $C$.

For example, the quadruplet $(r, a, b, c) = (2, 6, 2, -7)$ satisfies this property.

Let $F(R, X)$ be the number of the integer quadruplets $(r, a, b, c)$ with this property, and with $0 &lt; r ≤ R$ and $0 &lt; a ≤ X$.

We can verify that $F(1, 5) = 10$, $F(2, 10) = 52$ and $F(10, 100) = 3384$.

Find $F({10}^8, {10}^9) + F({10}^9, {10}^8)$.

# --hints--

`circleAndTangentLine()` should return `799999783589946600`.

```js
assert.strictEqual(circleAndTangentLine(), 799999783589946600);
```

# --seed--

## --seed-contents--

```js
function circleAndTangentLine() {

  return true;
}

circleAndTangentLine();
```

# --solutions--

```js
// solution required
```
