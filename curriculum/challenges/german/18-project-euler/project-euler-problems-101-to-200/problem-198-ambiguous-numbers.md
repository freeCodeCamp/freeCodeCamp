---
id: 5900f4331000cf542c50ff45
title: 'Problem 198: Zweideutige Zahlen'
challengeType: 1
forumTopicId: 301836
dashedName: problem-198-ambiguous-numbers
---

# --description--

Eine beste Annäherung an eine reelle Zahl $x$ für die Nennergrenze $d$ ist eine rationale Zahl $\frac{r}{s}$ (in reduzierter Form) mit $s ≤ d$, so dass jede rationale Zahl $\frac{p}{q}$, die näher an $x$ than $\frac{r}{s}$ liegt, $q > d$ hat.

Normalerweise ist die beste Annäherung an eine reelle Zahl für alle Nennergrenzen eindeutig bestimmt. Es gibt jedoch einige Ausnahmen, z.B. hat $\frac{9}{40}$ die zwei besten Annäherungen $\frac{1}{4}$ und $\frac{1}{5}$ für die Nennergrenze $6$. Wir nennen eine reelle Zahl $x$ zweideutig, wenn es mindestens eine Nennergrenze gibt, für die $x$ zwei beste Annährungen besitzt. Es ist klar, dass eine mehrdeutige Zahl notwendigerweise rational ist.

Wie viele mehrdeutige Zahlen $x = \frac{p}{q}$, $0 &lt; x &lt; \frac{1}{100}$ gibt es, dessen Nenner $q$ ${10}^8$ nicht überschreitet?

# --hints--

`ambiguousNumbers()` sollte `52374425` zurückgeben.

```js
assert.strictEqual(ambiguousNumbers(), 52374425);
```

# --seed--

## --seed-contents--

```js
function ambiguousNumbers() {

  return true;
}

ambiguousNumbers();
```

# --solutions--

```js
// solution required
```
