---
id: a3bfc1673c0526e06d3ac698
title: Somar todos os primos
challengeType: 5
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
