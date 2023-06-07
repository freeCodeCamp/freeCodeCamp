---
id: 5900f5231000cf542c510035
title: 'Problema 439: Somma della somma dei divisori'
challengeType: 1
forumTopicId: 302110
dashedName: problem-439-sum-of-sum-of-divisors
---

# --description--

Sia $d(k)$ la somma di tutti i divisori di $k$.

Definiamo la funzione $S(N) = \sum_{i = 1}^N \sum_{j = 1}^N d(i \times j)$.

Per esempio, $S(3) = d(1) + d(2) + d(3) + d(2) + d(4) + d(6) + d(3) + d(6) + d(6) + d(9) = 59$.

Ti viene dato che $S({10}^3) = 563\\,576\\,517\\,282$ e $S({10}^5)\bmod {10}^9 = 215\\,766\\,508$.

Trova $S({10}^{11})\bmod {10}^9$.

# --hints--

`sumOfSumOfDivisors()` dovrebbe restituire `968697378`.

```js
assert.strictEqual(sumOfSumOfDivisors(), 968697378);
```

# --seed--

## --seed-contents--

```js
function sumOfSumOfDivisors() {

  return true;
}

sumOfSumOfDivisors();
```

# --solutions--

```js
// solution required
```
