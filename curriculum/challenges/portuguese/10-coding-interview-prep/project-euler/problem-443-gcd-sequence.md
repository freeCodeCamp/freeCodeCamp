---
id: 5900f5271000cf542c51003a
title: 'Problema 443: Sequencias de máximos divisores comuns'
challengeType: 1
forumTopicId: 302115
dashedName: problem-443-gcd-sequence
---

# --description--

Considere $g(n)$ como uma sequência definida assim:

$$\begin{align}   & g(4) = 13, \\\\
  & g(n) = g(n-1) + gcd(n, g(n - 1)) \text{ para } n > 4. \end{align}$$

Seus primeiros valores são:

$$\begin{array}{l}   n    & 4  & 5  & 6  & 7  & 8  & 9  & 10 & 11 & 12 & 13 & 14 & 15 & 16 & 17 & 18 & 19 & 20 & \ldots \\\\
  g(n) & 13 & 14 & 16 & 17 & 18 & 27 & 28 & 29 & 30 & 31 & 32 & 33 & 34 & 51 & 54 & 55 & 60 & \ldots \end{array}$$

Você é informado de que $g(1.000) = 2.524$ e $g(1.000.000) = 2.624.152$.

Encontre $g({10}^{15})$.

# --hints--

`gcdSequence()` deve retornar `2744233049300770`.

```js
assert.strictEqual(gcdSequence(), 2744233049300770);
```

# --seed--

## --seed-contents--

```js
function gcdSequence() {

  return true;
}

gcdSequence();
```

# --solutions--

```js
// solution required
```
