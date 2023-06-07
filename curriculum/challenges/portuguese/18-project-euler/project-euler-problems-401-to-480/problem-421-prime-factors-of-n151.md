---
id: 5900f5131000cf542c510024
title: 'Problema 421: Fatores primos de n^15+1'
challengeType: 1
forumTopicId: 302091
dashedName: problem-421-prime-factors-of-n151
---

# --description--

Números no formato $n^{15} + 1$ são compostos para cada número inteiro $n > 1$.

Para números inteiros positivos $n$ e $m$, considere $s(n, m)$ como a soma dos fatores primos distintos de $n^{15} + 1$ não superior a $m$.

Ex: $2^{15} + 1 = 3 × 3 × 11 × 331$.

So $s(2, 10) = 3$ e $s(2, 1000) = 3 + 11 + 331 = 345$.

E também ${10}^{15} + 1 = 7 × 11 × 13 × 211 × 241 × 2161 × 9091$.

Assim, $s(10, 100) = 31$ e $s(10, 1000) = 483$.

Encontre a $\sum s(n, {10}^8)$ para $1 ≤ n ≤ {10}^{11}$.

# --hints--

`primeFactorsOfN15Plus1()` deve retornar `2304215802083466200`.

```js
assert.strictEqual(primeFactorsOfN15Plus1(), 2304215802083466200);
```

# --seed--

## --seed-contents--

```js
function primeFactorsOfN15Plus1() {

  return true;
}

primeFactorsOfN15Plus1();
```

# --solutions--

```js
// solution required
```
