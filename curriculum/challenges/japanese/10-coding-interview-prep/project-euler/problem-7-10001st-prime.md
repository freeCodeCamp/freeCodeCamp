---
id: 5900f3731000cf542c50fe86
title: '問題 7: 10001 番目の素数'
challengeType: 1
forumTopicId: 302182
dashedName: problem-7-10001st-prime
---

# --description--

最初の 6 つの素数、すなわち 2, 3, 5, 7, 11, 13 を並べると、6 番目の素数が 13 であることが分かります。

`n` 番目の素数を求めなさい。

# --hints--

`nthPrime(6)` は数値を返す必要があります。

```js
assert(typeof nthPrime(6) === 'number');
```

`nthPrime(6)` は 13 を返す必要があります。

```js
assert.strictEqual(nthPrime(6), 13);
```

`nthPrime(10)` は 29 を返す必要があります。

```js
assert.strictEqual(nthPrime(10), 29);
```

`nthPrime(100)` は 541 を返す必要があります。

```js
assert.strictEqual(nthPrime(100), 541);
```

`nthPrime(1000)` は 7919 を返す必要があります。

```js
assert.strictEqual(nthPrime(1000), 7919);
```

`nthPrime(10001)` は 104743 を返す必要があります。

```js
assert.strictEqual(nthPrime(10001), 104743);
```

# --seed--

## --seed-contents--

```js
function nthPrime(n) {

  return true;
}

nthPrime(10001);
```

# --solutions--

```js
const nthPrime = n => {
  let pN = 2;
  let step = 0;
  while (step < n) {
    let isPrime = true;
    let rootN = Math.sqrt(pN);
    for (let i = 2; i <= rootN; i++) {
      if (!(pN % i)) {
        isPrime = false;
        break;
      }
    }
    isPrime ? step++ : '';
    pN++;
  }
  return pN - 1;
}
```
