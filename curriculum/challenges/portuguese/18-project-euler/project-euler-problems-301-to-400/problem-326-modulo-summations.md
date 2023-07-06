---
id: 5900f4b21000cf542c50ffc5
title: 'Problema 326: Somas de módulos'
challengeType: 1
forumTopicId: 301983
dashedName: problem-326-modulo-summations
---

# --description--

Considere $a_n$ como sendo uma sequência recursivamente definida por: $a_1 = 1$, $\displaystyle a_n = \left(\sum_{k = 1}^{n - 1} k \times a_k\right)\bmod n$.

Portanto, os primeiros 10 elementos de $a_n$ são: 1, 1, 0, 3, 0, 3, 5, 4, 1, 9.

Considere $f(N, M)$ como representando o número de pares $(p, q)$, de modo que:

$$ 1 \le p \le q \le N \\; \text{e} \\; \left(\sum_{i = p}^q a_i\right)\bmod M = 0$$

Pode-se ver que $f(10, 10) = 4$ com os pares (3,3), (5,5), (7,9) e (9,10).

Você também é informado de que $f({10}^4, {10}^3) = 97.158$.

Encontre $f({10}^{12}, {10}^6)$.

# --hints--

`moduloSummations()` deve retornar `1966666166408794400`.

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
