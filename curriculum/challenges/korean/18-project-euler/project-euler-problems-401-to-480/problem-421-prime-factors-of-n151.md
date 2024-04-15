---
id: 5900f5131000cf542c510024
title: 'Problem 421: Prime factors of n^15+1'
challengeType: 1
forumTopicId: 302091
dashedName: problem-421-prime-factors-of-n151
---

# --description--

Numbers of the form $n^{15} + 1$ are composite for every integer $n > 1$.

For positive integers $n$ and $m$ let $s(n, m)$ be defined as the sum of the distinct prime factors of $n^{15} + 1$ not exceeding $m$.

E.g. $2^{15} + 1 = 3 × 3 × 11 × 331$.

So $s(2, 10) = 3$ and $s(2, 1000) = 3 + 11 + 331 = 345$.

Also ${10}^{15} + 1 = 7 × 11 × 13 × 211 × 241 × 2161 × 9091$.

So $s(10, 100) = 31$ and $s(10, 1000) = 483$.

Find $\sum s(n, {10}^8)$ for $1 ≤ n ≤ {10}^{11}$.

# --hints--

`primeFactorsOfN15Plus1()` should return `2304215802083466200`.

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
