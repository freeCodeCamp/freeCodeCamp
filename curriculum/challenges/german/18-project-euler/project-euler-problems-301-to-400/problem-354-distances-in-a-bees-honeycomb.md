---
id: 5900f4cf1000cf542c50ffe1
title: 'Problem 354: Entfernungen in einer Bienenwabe'
challengeType: 1
forumTopicId: 302014
dashedName: problem-354-distances-in-a-bees-honeycomb
---

# --description--

Consider a honey bee's honeycomb where each cell is a perfect regular hexagon with side length 1.

<img class="img-responsive center-block" alt="Bienenwabe mit sechseckigen Seiten der Länge 1" src="https://cdn.freecodecamp.org/curriculum/project-euler/distances-in-a-bees-honeycomb.png" style="background-color: white; padding: 10px;" />

Eine bestimmte Zelle wird von der Bienenkönigin bewohnt. Für eine positive reelle Zahl $L$ zähle $B(L)$ die Zellen, die $L$ von der Bienenkönigin entfernt sind (alle Abstände werden von Mitte zu Mitte gemessen); man kann davon ausgehen, dass die Wabe groß genug ist, um jeden beliebigen Abstand zu berücksichtigen.

For example, $B(\sqrt{3}) = 6$, $B(\sqrt{21}) = 12$ and $B(111\\,111\\,111) = 54$.

Find the number of $L ≤ 5 \times {10}^{11}$ such that $B(L) = 450$.

# --hints--

`distancesInHoneycomb()` should return `58065134`.

```js
assert.strictEqual(distancesInHoneycomb(), 58065134);
```

# --seed--

## --seed-contents--

```js
function distancesInHoneycomb() {

  return true;
}

distancesInHoneycomb();
```

# --solutions--

```js
// solution required
```
