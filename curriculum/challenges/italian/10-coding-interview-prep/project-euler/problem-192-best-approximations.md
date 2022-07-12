---
id: 5900f42c1000cf542c50ff3f
title: 'Problema 192: Migliori approssimazioni'
challengeType: 1
forumTopicId: 301830
dashedName: problem-192-best-approximations
---

# --description--

Sia $x$ sia un numero reale.

Una migliore approssimazione a $x$ per limite del denominatore $d$ è un numero razionale $\frac{r}{s}$ in forma ridotta, con $s ≤ d$, tale che qualsiasi numero razionale più vicino a $x$ rispetto a $\frac{r}{s}$ abbia un denominatore più grande di $d$:

$$|\frac{p}{q} - x| &lt; |\frac{r}{s} - x| ⇒ q > d$$

Ad esempio, la migliore approssimazione a $\sqrt{13}$ per limite del denominatore $20$ è $\frac{18}{5}$ e la migliore approssimazione a $\sqrt{13}$ per limite del denominatore $30$ è $\frac{101}{28}$.

Trova la somma di tutti i denominatori delle migliori approssimazioni a $\sqrt{n}$ per limite del denominatore ${10}^{12}$, dove $n$ non è un quadrato perfetto e $1 &lt; n ≤ 100000$.

# --hints--

`bestApproximations()` dovrebbe restituire `57060635927998344`.

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
