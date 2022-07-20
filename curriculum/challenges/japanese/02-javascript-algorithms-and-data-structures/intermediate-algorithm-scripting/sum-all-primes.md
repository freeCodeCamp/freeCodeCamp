---
id: a3bfc1673c0526e06d3ac698
title: すべての素数を合計する
challengeType: 1
forumTopicId: 16085
dashedName: sum-all-primes
---

# --description--

<dfn>素数</dfn>とは、1 より大きい整数で、約数として 1 とそれ自体の 2 つのみを持つものです。 たとえば、2 は 1 と 2 でしか割り切れないので素数です。 一方、4 は 1、2、4 で割り切れるので素数ではありません。

num 以下のすべての素数の合計を返すように `sumPrimes` を書き換えてください。

# --hints--

`sumPrimes(10)` は数値を返す必要があります。

```js
assert.deepEqual(typeof sumPrimes(10), 'number');
```

`sumPrimes(10)` は 17 を返す必要があります。

```js
assert.deepEqual(sumPrimes(10), 17);
```

`sumPrimes(977)` は 73156 を返す必要があります。

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
