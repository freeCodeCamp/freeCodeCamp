---
id: a3bfc1673c0526e06d3ac698
title: Сума всіх простих чисел
challengeType: 1
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

<dfn>Просте число</dfn> – це ціле число, яке більше за 1 та має два дільники: 1 і саме число. Наприклад, 2 є простим числом, оскільки воно ділиться лише на 1 і 2. І навпаки, 4 не є простим числом, оскільки воно ділиться на 1, 2 і 4.

Перепишіть `sumPrimes` таким чином, щоб поверталася сума всіх простих чисел, які менші або дорівнюють num.

# --hints--

`sumPrimes(10)` має повертати число.

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` має повертати 17.

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` має повертати 73156.

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
