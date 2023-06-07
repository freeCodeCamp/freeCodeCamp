---
id: 5900f4331000cf542c50ff45
title: 'Problema 198: Numeri Ambigui'
challengeType: 1
forumTopicId: 301836
dashedName: problem-198-ambiguous-numbers
---

# --description--

Una migliore approssimazione a un numero reale $x$ con il limite del denominatore $d$ è un numero razionale $\frac{r}{s}$ (in forma semplificata) con $s ≤ d$, in modo che qualsiasi numero razionale $\frac{p}{q}$ che è più vicino a $x$ di $\frac{r}{s}$ abbia $q > d$.

Di solito la migliore approssimazione a un numero reale è determinata univocamente per tutti i limiti del denominatore. Vi sono tuttavia alcune eccezioni, ad es. $\frac{9}{40}$ ha le due migliori approssimazioni $\frac{1}{4}$ e $\frac{1}{5}$ per il limite del denominatore $6$. Chiameremo un numero reale $x$ ambiguo se c'è almeno un limite del denominatore per il quale $x$ possiede due migliori approssimazioni. Chiaramente, un numero ambiguo è necessariamente razionale.

Quanti numeri ambigui $x = \frac{p}{q}$, $0 &lt; x &lt; \frac{1}{100}$, ci sono il cui denominatore $q$ non supera ${10}^8$?

# --hints--

`ambiguousNumbers()` dovrebbe restituire `52374425`.

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
