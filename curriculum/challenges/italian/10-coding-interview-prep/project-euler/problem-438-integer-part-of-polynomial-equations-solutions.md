---
id: 5900f5231000cf542c510034
title: 'Problema 438: Parte intera delle soluzioni dell''equazione polinomiale'
challengeType: 1
forumTopicId: 302109
dashedName: problem-438-integer-part-of-polynomial-equations-solutions
---

# --description--

Per un $n$-pla di interi $t = (a_1, \ldots, a_n)$, siano $(x_1, \ldots, x_n)$ le soluzioni dell'equazione polinomiale $x^n + a_1x^{n - 1} + a_2x^{n - 2} + \ldots + a_{n - 1}x + a_n = 0$.

Considera le due seguenti condizioni:

- $x_1, \ldots, x_n$ sono tutti reali.
- Se $x_1, ..., x_n$ sono ordinati, $⌊x_i⌋ = i$ per $1 ≤ i ≤ n$. ($⌊·⌋:$ funzione floor.)

Per $n = 4$, ci sono 12 $n$-ple di interi che soddisfano entrambe le condizioni.

Definiamo $S(t)$ come la somma dei valori assoluti degli interi in $t$.

Per $n = 4$ possiamo verificare che $\sum S(t) = 2087$ per tutte le $n$-ple $t$ che soddisfano entrambe le condizioni.

Trova $\sum S(t)$ per $n = 7$.

# --hints--

`polynomialIntegerPart()` dovrebbe restituire `2046409616809`.

```js
assert.strictEqual(polynomialIntegerPart(), 2046409616809);
```

# --seed--

## --seed-contents--

```js
function polynomialIntegerPart() {

  return true;
}

polynomialIntegerPart();
```

# --solutions--

```js
// solution required
```
