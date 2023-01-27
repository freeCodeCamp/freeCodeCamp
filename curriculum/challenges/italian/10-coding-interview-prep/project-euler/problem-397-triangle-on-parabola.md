---
id: 5900f4f91000cf542c51000c
title: 'Problema 397: Triangolo su parabola'
challengeType: 1
forumTopicId: 302062
dashedName: problem-397-triangle-on-parabola
---

# --description--

Sulla parabola $y = \frac{x^2}{k}$, sono scelti tre punti $A(a, \frac{a^2}{k})$, $B(b, \frac{b^2}{k})$ e $C(c, \frac{c^2}{k})$.

Sia $F(K, X)$ il numero di quartetti di numeri interi $(k, a, b, c)$ tali che almeno uno degli angoli del triangolo $ABC$ sia di 45°, con $1 ≤ k ≤ K$ e $-X ≤ a &lt; b &lt; c ≤ X$.

Per esempio, $F(1, 10) = 41$ e $F(10, 100) = 12\\,492$.

Trova $F({10}^6, {10}^9)$.

# --hints--

`triangleOnParabola()` dovrebbe restituire `141630459461893730`.

```js
assert.strictEqual(triangleOnParabola(), 141630459461893730);
```

# --seed--

## --seed-contents--

```js
function triangleOnParabola() {

  return true;
}

triangleOnParabola();
```

# --solutions--

```js
// solution required
```
