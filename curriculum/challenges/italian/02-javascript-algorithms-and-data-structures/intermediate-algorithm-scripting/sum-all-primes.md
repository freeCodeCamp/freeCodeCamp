---
id: a3bfc1673c0526e06d3ac698
title: Sommare tutti i numeri primi
challengeType: 1
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

Un <dfn>numero primo</dfn> è un numero intero maggiore di 1 con esattamente due divisori: 1 e se stesso. Ad esempio, 2 è un numero primo perché è divisibile solo per 1 e per 2. Al contrario, 4 non è primo in quanto è divisibile per 1, 2 e 4.

Riscrivi `sumPrimes` in modo che restituisca la somma di tutti i numeri primi che sono inferiori o uguali a num.

# --hints--

`sumPrimes(10)` dovrebbe restituire un numero.

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` dovrebbe restituire 17.

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` dovrebbe restituire 73156.

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
