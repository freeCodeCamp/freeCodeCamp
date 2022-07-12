---
id: a3bfc1673c0526e06d3ac698
title: Suma todos los números primos
challengeType: 1
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

Un <dfn>número primo</dfn> es un número entero mayor que 1 con sólo dos divisores: 1 y el propio número. Por ejemplo, 2 es un número primo porque sólo es divisible entre 1 y 2. Por el contrario, 4 no es primo ya que es divisible entre 1, 2 y 4.

Reescribe `sumPrimes` para que devuelva la suma de todos los números primos que sean menores o iguales a num.

# --hints--

`sumPrimes(10)` debe devolver un número.

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` debe devolver 17.

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` debe devolver 73156.

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
function eratosthenesArray(n) {
    var primes = [];
    if (n > 2) {
        var half = n>>1;
        var sieve = Array(half);
        for (var i = 1, limit = Math.sqrt(n)>>1; i <= limit; i++) {
            if (!sieve[i]) {
                for (var step = 2*i+1, j = (step*step)>>1; j < half; j+=step) {
                    sieve[j] = true;
                }
            }
        }
        primes.push(2);
        for (var p = 1; p < half; p++) {
            if (!sieve[p]) primes.push(2*p+1);
        }
    }
    return primes;
}

function sumPrimes(num) {
  return eratosthenesArray(num+1).reduce(function(a,b) {return a+b;}, 0);
}

sumPrimes(10);
```
