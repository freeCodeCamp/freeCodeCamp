---
id: 5900f42c1000cf542c50ff3f
title: 'Problema 192: Melhores aproximações'
challengeType: 1
forumTopicId: 301830
dashedName: problem-192-best-approximations
---

# --description--

Considere $x$ um número real.

Uma melhor aproximação de $x$ para o denominador vinculado a $d$ é um número racional $\frac{r}{s}$ na forma reduzida, com $s ≤ d$, tal que qualquer número racional que esteja mais próximo de $x$ do que $\frac{r}{s}$ tenha um denominador maior que $d$:

$$|\frac{p}{q} - x| &lt; |\frac{r}{s} - x| ⇒ q > d$$

Por exemplo, a melhor aproximação de $\sqrt{13}$ do denominador vinculado $20$ é $\frac{18}{5}$ e a melhor aproximação de $\sqrt{13}$ do denominador vinculado $30$ é $\frac{101}{28}$.

Encontre a soma de todos os denominadores das melhores aproximações de $\sqrt{n}$ para o denominador vinculado ${10}^{12}$, onde $n$ não é um quadrado perfeito e $1 &lt; n ≤ 100000$.

# --hints--

`bestApproximations()` deve retornar `57060635927998344`.

```js
assert.strictEqual(bestApproximations(), 57060635927998344);
```

# --seed--

## --seed-contents--

```js
function bestApproximations() {

  return true;
}

bestApproximations();
```

# --solutions--

```js
// solution required
```
