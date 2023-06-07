---
id: 5900f4f21000cf542c510005
title: 'Problema 390: Triangoli con lati di lunghezze non razionali e area di valore intero'
challengeType: 1
forumTopicId: 302055
dashedName: problem-390-triangles-with-non-rational-sides-and-integral-area
---

# --description--

Considera il triangolo con lati $\sqrt{5}$, $\sqrt{65}$ e $\sqrt{68}$. Possiamo vedere che questo triangolo ha area 9.

$S(n)$ è la somma delle aree dei triangoli con lati $\sqrt{1 + b^2}$, $\sqrt{1 + c^2}$ e $\sqrt{b^2 + c^2}$ (per $b$ e $c$ numeri interi positivi) che hanno un'area di valore intero non superiore a $n$.

Il triangolo esempio ha $b = 2$ e $c = 8$.

$S({10}^6) = 18\\,018\\,206$.

Trova $S({10}^{10})$.

# --hints--

`nonRationalSidesAndIntegralArea()` dovrebbe restituire `2919133642971`.

```js
assert.strictEqual(nonRationalSidesAndIntegralArea(), 2919133642971);
```

# --seed--

## --seed-contents--

```js
function nonRationalSidesAndIntegralArea() {

  return true;
}

nonRationalSidesAndIntegralArea();
```

# --solutions--

```js
// solution required
```
