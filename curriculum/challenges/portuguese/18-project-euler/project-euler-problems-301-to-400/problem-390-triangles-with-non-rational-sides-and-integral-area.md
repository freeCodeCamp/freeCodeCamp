---
id: 5900f4f21000cf542c510005
title: 'Problema 390: Triângulos com lados não racionais e ângulo em números inteiros'
challengeType: 1
forumTopicId: 302055
dashedName: problem-390-triangles-with-non-rational-sides-and-integral-area
---

# --description--

Considere o triângulo com lados $\sqrt{5}$, $\sqrt{65}$ e $\sqrt{68}$. Pode-se demonstrar que a área desse triângulo é 9.

$S(n)$ é a soma das áreas de todos os triângulos com lados $\sqrt{1 + b^2}$, $\sqrt{1 + c^2}$ e $\sqrt{b^2 + c^2}$ (para números inteiros positivos $b$ e $c$) que tenham uma área em número inteiros não excedendo $n$.

O triângulo de exemplo tem $b = 2$ e $c = 8$.

$S({10}^6) = 18.018.206$.

Encontre $S({10}^{10})$.

# --hints--

`nonRationalSidesAndIntegralArea()` deve retornar `2919133642971`.

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
