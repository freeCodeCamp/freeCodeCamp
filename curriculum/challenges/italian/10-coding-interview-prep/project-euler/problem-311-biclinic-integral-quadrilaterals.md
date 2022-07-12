---
id: 5900f4a31000cf542c50ffb6
title: 'Problem 311: quadrilateri interi biclinici'
challengeType: 1
forumTopicId: 301967
dashedName: problem-311-biclinic-integral-quadrilaterals
---

# --description--

$ABCD$ è un quadrilatero convesso con lati di lunghezza intera con $1 ≤ AB &lt; BC &lt; CD &lt; AD$.

$BD$ ha una lunghezza intera. $O$è il punto centrale di $BD$. $AO$ ha lunghezza intera.

Chiamiamo $ABCD$ un quadrilatero intero biclinico se $AO = CO ≤ BO = DO$.

Per esempio, il seguente quadrilatero è un quadrilatero intero biclinico: $AB = 19$, $BC = 29$, $CD = 37$, $AD = 43$, $BD = 48$ e $AO = CO = 23$.

<img class="img-responsive center-block" alt="quadrilatero ABCD, con il punto O, punto a metà di BD" src="https://cdn.freecodecamp.org/curriculum/project-euler/biclinic-integral-quadrilaterals.gif" style="background-color: white; padding: 10px;" />

Sia $B(N)$ il numero di quadrilateri interi biclinici $ABCD$ distinti che soddisfano ${AB}^2 + {BC}^2 + {CD}^2 + {AD}^2 ≤ N$. Possiamo verificare che $B(10\\,000) = 49$ e che $B(1\\,000\\,000) = 38239$.

Trova $B(10\\,000\\,000\\,000)$.

# --hints--

`biclinicIntegralQuadrilaterals()` dovrebbe restituire `2466018557`.

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
