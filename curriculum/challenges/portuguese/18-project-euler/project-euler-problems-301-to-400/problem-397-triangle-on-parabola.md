---
id: 5900f4f91000cf542c51000c
title: 'Problema 397: Triângulo na parábola'
challengeType: 1
forumTopicId: 302062
dashedName: problem-397-triangle-on-parabola
---

# --description--

Na parábola $y = \frac{x^2}{k}$, três pontos $A(a, \frac{a^2}{k})$, $B(b, \frac{b^2}{k})$ e $C(c, \frac{c^2}{k})$ são escolhidos.

Considere que $F(K, X)$ é o número de quadras de inteiros $(k, a, b, c)$, de tal forma que pelo menos um ângulo do triângulo $ABC$ é 45°, com $1 ≤ k ≤ K$ e $-X ≤ a &lt; b &lt; c ≤ X$.

Por exemplo, $F(1, 10) = 41$ e $F(10, 100) = 12.492$.

Encontre $F({10}^6, {10}^9)$.

# --hints--

`triangleOnParabola()` deve retornar `141630459461893730`.

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
