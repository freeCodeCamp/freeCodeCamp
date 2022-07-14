---
id: 5900f5131000cf542c510024
title: 'Problema 421: fattori primi di n^15+1'
challengeType: 1
forumTopicId: 302091
dashedName: problem-421-prime-factors-of-n151
---

# --description--

Numeri nella forma $n^{15} + 1$ sono compositi per ogni numero intero $n > 1$.

Per numeri interi positivi $n$ e $m$, sia $s(n, m)$ la somma dei distinti fattori primi di $n^{15} + 1$ non eccedenti $m$.

Ad es. $2^{15} + 1 = 3 × 3 × 11 × 331$.

Quindi $s(2, 10) = 3$ e $s(2, 1000) = 3 + 11 + 331 = 345$.

Inoltre ${10}^{15} + 1 = 7 × 11 × 13 × 211 × 241 × 2161 × 9091$.

Quindi $s(10, 100) = 31$ e $s(10, 1000) = 483$.

Trova $\sum s(n, {10}^8)$ per $1 ≤ n ≤ {10}^{11}$.

# --hints--

`primeFactorsOfN15Plus1()` dovrebbe restituire `2304215802083466200`.

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
