---
id: a3bfc1673c0526e06d3ac698
title: 质数求和
challengeType: 5
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

质数（<dfn>prime number</dfn>）是大于 1 且仅可以被 1 和自己整除的数。 比如，2 就是一个质数，因为它只可以被 1 和 2（它本身）整除。 相反，4 不是质数，因为它可以被 1, 2 和 4 整除。

请完成 `sumPrimes` 方法，使其返回小于等于传入参数数字的所有质数之和。

# --hints--

`sumPrimes(10)` 应返回一个数字。

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` 应返回 17。

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` 应返回 73156。

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
