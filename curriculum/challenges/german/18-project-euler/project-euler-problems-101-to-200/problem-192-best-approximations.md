---
id: 5900f42c1000cf542c50ff3f
title: 'Problem 192: Beste Annäherungen'
challengeType: 1
forumTopicId: 301830
dashedName: problem-192-best-approximations
---

# --description--

$x$ sollte eine reelle Zahl sein.

Eine beste Annäherung an $x$ für die Nennergrenze $d$ ist eine rationale Zahl $\frac{r}{s}$ in reduzierter Form, mit $s ≤ d$, sodass jede rationale Zahl, die näher an $x$ liegt als $\frac{r}{s}$, einen Nenner größer als $d$ hat:

$$|\frac{p}{q} - x| &lt; |\frac{r}{s} - x| ⇒ q > d$$

Zum Beispiel, die beste Annäherung an $\sqrt{13}$ für die Nennergrenze $20$ ist $\frac{18}{5}$ und die beste Annäherung an $\sqrt{13}$ für die Nennergrenze $30$ ist $\frac{101}{28}$.

Finde die Summe aller Nenner der besten Näherungen an $\sqrt{n}$ für die Nennergrenze ${10}^{12}$, wobei $n$ kein perfektes Quadrat ist und $1 &lt; n ≤ 100000$.

# --hints--

`bestApproximations()` sollte `57060635927998344` zurückgeben.

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
