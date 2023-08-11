---
id: 5900f4601000cf542c50ff73
title: 'Problema 243: Resiliência'
challengeType: 1
forumTopicId: 301890
dashedName: problem-243-resilience
---

# --description--

Uma fração positiva cujo numerador é menor do que o seu denominador é chamada de fração adequada.

Para qualquer denominador, $d$, haverá $d−1$ frações adequadas; por exemplo, com $d = 12$:

$$\frac{1}{12}, \frac{2}{12}, \frac{3}{12}, \frac{4}{12}, \frac{5}{12}, \frac{6}{12}, \frac{7}{12}, \frac{8}{12}, \frac{9}{12}, \frac{10}{12}, \frac{11}{12}$$

Chamaremos uma fração que não pode ser anulada de uma fração resiliente.

Além disso, definiremos a resiliência de um denominador, $R(d)$, como a razão entre suas frações adequadas que são resilientes; por exemplo, $R(12) = \frac{4}{11}$.

De fato, $d = 12$ é o menor denominador que tem uma resiliência $R(d) &lt; \frac{4}{10}$.

Encontre o menor denominador $d$, tendo uma resiliência $R(d) &lt; \frac{15.499}{94.744}$.

# --hints--

`resilience()` deve retornar `892371480`.

```js
assert.strictEqual(resilience(), 892371480);
```

# --seed--

## --seed-contents--

```js
function resilience() {

  return true;
}

resilience();
```

# --solutions--

```js
// solution required
```
