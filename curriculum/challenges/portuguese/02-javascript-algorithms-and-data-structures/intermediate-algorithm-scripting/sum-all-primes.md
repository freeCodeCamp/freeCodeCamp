---
id: a3bfc1673c0526e06d3ac698
title: Somar todos os primos
challengeType: 1
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

Um <dfn>número primo</dfn> é um número natural maior que 1 com exatamente dois divisores: 1 e ele mesmo. Por exemplo, 2 é um número primo porque só é divisível por 1 e 2. Em contrapartida, 4 não é primo, uma vez que é divisível por 1, 2 e 4.

Reescreva `sumPrimes` para que ele retorne a soma de todos os números primos que são menores ou iguais a num.

# --hints--

`sumPrimes(10)` deve retornar um número.

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` deve retornar 17.

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` deve retornar 73156.

```js
assert.deepEqual(sumPrimes(977), 73156);
```

# --seed--

## --seed-contents--

```js
function sumPrimes(num) {
  return num;
}

sumPrimes(10);
```

# --solutions--

```js
class PrimeSeive {
  constructor(num) {
    const seive = Array(Math.floor((num - 1) / 2)).fill(true);
    const upper = Math.floor((num - 1) / 2);
    const sqrtUpper = Math.floor((Math.sqrt(num) - 1) / 2);

    for (let i = 0; i <= sqrtUpper; i++) {
      if (seive[i]) {
        // Mark value in seive array
        const prime = 2 * i + 3;
        // Mark all multiples of this number as false (not prime)
        const primeSqaredIndex = 2 * i ** 2 + 6 * i + 3;
        for (let j = primeSqaredIndex; j < upper; j += prime) {
          seive[j] = false;
        }
      }
    }

    this._seive = seive;
  }

  isPrime(num) {
    return num === 2
      ? true
      : num % 2 === 0
        ? false
        : this.isOddPrime(num);
  }

  isOddPrime(num) {
    return this._seive[(num - 3) / 2];
  }
};

function sumPrimes(num) {
  const primeSeive = new PrimeSeive(num);

  let sum = 2;
  for (let i = 3; i <= num; i += 2) {
    if (primeSeive.isOddPrime(i)) sum += i;
  }
  return sum;
}

sumPrimes(10);
```
