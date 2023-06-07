---
id: 5900f3761000cf542c50fe89
title: 'Problema 10: Somma dei numeri primi'
challengeType: 1
forumTopicId: 301723
dashedName: problem-10-summation-of-primes
---

# --description--

La somma dei numeri primi sotto 10 è 2 + 3 + 5 + 7 = 17.

Trova la somma di tutti i numeri primi sotto `n`.

# --hints--

`primeSummation(17)` dovrebbe restituire un numero.

```js
assert(typeof primeSummation(17) === 'number');
```

`primeSummation(17)` dovrebbe restituire 41.

```js
assert.strictEqual(primeSummation(17), 41);
```

`primeSummation(2001)` dovrebbe ritornare 277050.

```js
assert.strictEqual(primeSummation(2001), 277050);
```

`primeSummation(140759)` dovrebbe restituire 873608362.

```js
assert.strictEqual(primeSummation(140759), 873608362);
```

`primeSummation(2000000)` dovrebbe restituire 142913828922.

```js
assert.strictEqual(primeSummation(2000000), 142913828922);
```

# --seed--

## --seed-contents--

```js
function primeSummation(n) {

  return true;
}

primeSummation(2000000);
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

function primeSummation(num) {
  const primeSeive = new PrimeSeive(num);

  let sum = 2;
  for (let i = 3; i < num; i += 2) {
    if (primeSeive.isOddPrime(i)) sum += i;
  }
  return sum;
}
```
