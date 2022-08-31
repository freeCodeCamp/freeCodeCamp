---
id: a3bfc1673c0526e06d3ac698
title: Summiere alle Primzahlen
challengeType: 1
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

Eine <dfn>Primzahl</dfn> ist eine ganze Zahl größer als 1 mit genau zwei Divisoren: 1 und sich selbst. Zum Beispiel ist 2 eine Primzahl, weil sie nur durch 1 und 2 teilbar ist. Im Gegensatz dazu ist 4 keine Primzahl, da sie durch 1, 2 und 4 teilbar ist.

Schreibe `sumPrimes` neu, so dass es die Summe aller Primzahlen zurückgibt, die kleiner oder gleich Null sind.

# --hints--

`sumPrimes(10)` sollte eine Zahl zurückgeben.

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` sollte 17 zurückgeben.

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` sollte 73156 zurückgeben.

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
