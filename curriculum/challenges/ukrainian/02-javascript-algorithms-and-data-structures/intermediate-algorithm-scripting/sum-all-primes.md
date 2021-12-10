---
id: a3bfc1673c0526e06d3ac698
title: Сума простих чисел
challengeType: 5
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

<dfn>Просте число</dfn> це ціле число, більше ніж 1 і має рівно два різних натуральних дільники: 1 і саме число. Наприклад, 2 - це просте число, тому що воно ділиться лише на 1 і 2. І навпаки, 4 не є простим числом, оскільки воно ділиться на 1, 2 і 4.

Переписати `sumPrimes` таким чином, щоб поверталася сума всіх простих чисел, які менше або дорівнюють num.

# --hints--

`sumPrimes(10)` потрібно повернути число.

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` потрібно повертати 17.

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` потрібно повертати 73156.

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
