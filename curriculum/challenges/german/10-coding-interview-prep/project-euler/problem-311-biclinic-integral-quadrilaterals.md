---
id: 5900f4a31000cf542c50ffb6
title: 'Problem 311: Biclinic Integral Quadrilaterals'
challengeType: 1
forumTopicId: 301967
dashedName: problem-311-biclinic-integral-quadrilaterals
---

# --description--

$ABCD$ ist ein konvexes, ganzseitiges Viereck mit $1 ≤ AB &lt; BC &lt; CD &lt; AD$.

$BD$ hat eine ganzzahlige Länge. $O$ ist der Mittelpunkt von $BD$. $AO$ hat eine ganzzahlige Länge.

Wir nennen $ABCD$ ein biclinic integral quadrilateral, wenn $AO = CO ≤ BO = DO$.

Das folgende Viereck ist zum Beispiel ein biclinic integral quadrilateral: $AB = 19$, $BC = 29$, $CD = 37$, $AD = 43$, $BD = 48$ und $AO = CO = 23$.

<img class="img-responsive center-block" alt="Viereck ABCD, mit Punkt O, einem Mittelpunkt von BD" src="https://cdn.freecodecamp.org/curriculum/project-euler/biclinic-integral-quadrilaterals.gif" style="background-color: white; padding: 10px;" />

Lasse $B(N)$ die Anzahl der verschiedenen biclinic integral quadrilateral $ABCD$ sein, die ${AB}^2 + {BC}^2 + {CD}^2 + {AD}^2 ≤ N$ erfüllen. Wir können überprüfen, dass $B(10\\,000) = 49$ und $B(1\\,000\\,000) = 38239$.

Finde $B(10\\,000\\,000\\,000)$.

# --hints--

`biclinicIntegralQuadrilaterals()` sollte `2466018557` zurückgeben.

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
