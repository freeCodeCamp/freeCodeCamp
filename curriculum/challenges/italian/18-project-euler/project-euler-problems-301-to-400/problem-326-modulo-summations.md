---
id: 5900f4b21000cf542c50ffc5
title: 'Problema 326: sommatoria dei moduli'
challengeType: 1
forumTopicId: 301983
dashedName: problem-326-modulo-summations
---

# --description--

Sia $a_n$ una sequenza definita ricorsivamente da: $a_1 = 1$, $\displaystyle a_n = \left(\sum_{k = 1}^{n - 1} k \times a_k\right)\bmod n$.

Quindi i primi 10 elementi di $a_n$ sono: 1, 1, 0, 3, 0, 3, 5, 4, 1, 9.

Lascia che $f(N, M)$ rappresenti il numero di coppie $(p, q)$ tali che:

$$ 1 \le p \le q \le N \\; \text{and} \\; \left(\sum_{i = p}^q a_i\right)\bmod M = 0$$

Si può vedere che $f(10, 10) = 4$ con le coppie (3,3), (5,5), (7,9) e (9,10).

Ti viene anche dato che $f({10}^4, {10}^3) = 97\\,158$.

Trova $f({10}^{12}, {10}^6)$.

# --hints--

`moduloSummations()` dovrebbe restituire `1966666166408794400`.

```js
assert.strictEqual(moduloSummations(), 1966666166408794400);
```

# --seed--

## --seed-contents--

```js
function moduloSummations() {

  return true;
}

moduloSummations();
```

# --solutions--

```js
// solution required
```
