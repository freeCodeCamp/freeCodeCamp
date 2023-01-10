---
id: 5900f4621000cf542c50ff74
title: 'Problema 245: Corresiliência'
challengeType: 1
forumTopicId: 301892
dashedName: problem-245-coresilience
---

# --description--

Chamaremos uma fração que não pode ser anulada de uma fração resiliente.

Além disso, definiremos a resiliência de um denominador, $R(d)$, como a razão entre suas frações adequadas que são resilientes; por exemplo, $R(12) = \frac{4}{11}$.

A resiliência de um número $d > 1$ é então $\frac{φ(d)}{d − 1}$, onde $φ$ é a função totiente de Euler.

Também definiremos a corresiliência de um número $n > 1$ como $C(n) = \frac{n − φ(n)}{n − 1}$.

A corresiliência de um número primo $p$ é $C(p) = \frac{1}{p − 1}$.

Encontre a soma de todos os números inteiros compostos $1 &lt; n ≤ 2 × {10}^{11}$, para os quais $C(n)$ é uma fração unitária.

# --hints--

`coresilience()` deve retornar `288084712410001`.

```js
assert.strictEqual(coresilience(), 288084712410001);
```

# --seed--

## --seed-contents--

```js
function coresilience() {

  return true;
}

coresilience();
```

# --solutions--

```js
// solution required
```
