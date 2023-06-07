---
id: 5900f4b21000cf542c50ffc5
title: 'Problem 326: Modulo-Summen'
challengeType: 1
forumTopicId: 301983
dashedName: problem-326-modulo-summations
---

# --description--

Lasse $a_n$ eine Folge sein, die rekursiv definiert ist durch: $a_1 = 1$, $\displaystyle a_n = \left(\sum_{k = 1}^{n - 1} k \times a_k\right)\bmod n$.

Die ersten 10 Elemente von $a_n$ sind also: 1, 1, 0, 3, 0, 3, 5, 4, 1, 9.

Lasse $f(N, M)$ die Anzahl der Paare $(p, q)$ sein, für die gilt:

$$ 1 \le p \le q \le N \\; \text{and} \\; \left(\sum_{i = p}^q a_i\right)\bmod M = 0$$

Es zeigt sich, dass $f(10, 10) = 4$ mit den Paaren (3,3), (5,5), (7,9) und (9,10).

Außerdem ist gegeben, dass $f({10}^4, {10}^3) = 97\\,158$.

Finde $f({10}^{12}, {10}^6)$.

# --hints--

`moduloSummations()` sollte `1966666166408794400` zurückgeben.

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
