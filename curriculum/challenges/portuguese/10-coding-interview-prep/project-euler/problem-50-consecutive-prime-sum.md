---
id: 5900f39e1000cf542c50feb1
title: 'Problema 50: Soma dos números primos consecutivos'
challengeType: 5
forumTopicId: 302161
dashedName: problem-50-consecutive-prime-sum
---

# --description--

O número primo 41 pode ser escrito como a soma de seis números primos consecutivos:

<div style='text-align: center;'>41 = 2 + 3 + 5 + 7 + 11 + 13</div>

Esta é a soma mais longa de números primos consecutivos abaixo de 100 que resultam em um número primo.

A soma mais longa de números primos consecutivos abaixo de 1000 contém 21 termos e resulta em 953.

Qual número primo, abaixo de um milhão, é o resultado da soma da maior sequência de números primos?

# --hints--

`consecutivePrimeSum(1000)` deve retornar um número.

```js
assert(typeof consecutivePrimeSum(1000) === 'number');
```

`consecutivePrimeSum(1000)` deve retornar 953.

```js
assert.strictEqual(consecutivePrimeSum(1000), 953);
```

`consecutivePrimeSum(1000000)` deve retornar 997651.

```js
assert.strictEqual(consecutivePrimeSum(1000000), 997651);
```

# --seed--

## --seed-contents--

```js
function consecutivePrimeSum(limit) {

  return true;
}

consecutivePrimeSum(1000000);
```

# --solutions--

```js
function consecutivePrimeSum(limit) {
  function isPrime(num) {
    if (num < 2) {
      return false;
    } else if (num === 2) {
      return true;
    }
    const sqrtOfNum = Math.floor(num ** 0.5);
    for (let i = 2; i <= sqrtOfNum + 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  function getPrimes(limit) {
    const primes = [];
    for (let i = 0; i <= limit; i++) {
      if (isPrime(i)) primes.push(i);
    }
    return primes;
  }

  const primes = getPrimes(limit);
  let primeSum = [...primes];
  primeSum.reduce((acc, n, i) => {
    primeSum[i] += acc;
    return acc += n;
  }, 0);

  for (let j = primeSum.length - 1; j >= 0; j--) {
    for (let i = 0; i < j; i++) {
      const sum = primeSum[j] - primeSum[i];
      if (sum > limit) break;
      if (isPrime(sum) && primes.indexOf(sum) > -1) return sum;
    }
  }
}
```
