---
id: 5900f3b11000cf542c50fec4
title: '問題 69: トーティエント関数の最大値'
challengeType: 1
forumTopicId: 302181
dashedName: problem-69-totient-maximum
---

# --description--

オイラーのトーティエント関数 ${\phi}(n)$ (別名: ファイ関数) は、`n` と互いに素な `n` 未満の数の個数を求めるために使用されます。 例えば 1, 2, 4, 5, 7, 8 はすべて 9 未満で、かつ 9 と互いに素なので、${\phi}(9) = 6$ と表されます。

<div style='margin-left: 4em;'>

| $n$ | $\text{互いに素な数}$ | $\displaystyle{\phi}(n)$ | $\displaystyle\frac{n}{{\phi}(n)}$ |
| --- | ------------------------- | ------------------------ | ---------------------------------- |
| 2   | 1                         | 1                        | 2                                  |
| 3   | 1,2                       | 2                        | 1.5                                |
| 4   | 1,3                       | 2                        | 2                                  |
| 5   | 1,2,3,4                   | 4                        | 1.25                               |
| 6   | 1,5                       | 2                        | 3                                  |
| 7   | 1,2,3,4,5,6               | 6                        | 1.1666...                          |
| 8   | 1,3,5,7                   | 4                        | 2                                  |
| 9   | 1,2,4,5,7,8               | 6                        | 1.5                                |
| 10  | 1,3,7,9                   | 4                        | 2.5                                |

</div>

`n` ≤ 10 の場合、`n` = 6 のときに $\displaystyle\frac{n}{{\phi}(n)}$ が最大になることが分かります。

$\displaystyle\frac{n}{{\phi(n)}}$ が最大になるような、`limit` 以下の値 `n` を求めなさい。

# --hints--

`totientMaximum(10)` は数値を返す必要があります。

```js
assert(typeof totientMaximum(10) === 'number');
```

`totientMaximum(10)` は `6` を返す必要があります。

```js
assert.strictEqual(totientMaximum(10), 6);
```

`totientMaximum(10000)` は `2310` を返す必要があります。

```js
assert.strictEqual(totientMaximum(10000), 2310);
```

`totientMaximum(500000)` は `30030` を返す必要があります。

```js
assert.strictEqual(totientMaximum(500000), 30030);
```

`totientMaximum(1000000)` は `510510` を返す必要があります。

```js
assert.strictEqual(totientMaximum(1000000), 510510);
```

# --seed--

## --seed-contents--

```js
function totientMaximum(limit) {

  return true;
}

totientMaximum(10);
```

# --solutions--

```js
function totientMaximum(limit) {
  function getSievePrimes(max) {
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;
    const primes = [];
    for (let i = 2; i < max; i = i + 2) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j < max; j = j + i) {
          primesMap[j] = false;
        }
      }
      if (i === 2) {
        i = 1;
      }
    }
    return primes;
  }

  const MAX_PRIME = 50;
  const primes = getSievePrimes(MAX_PRIME);
  let result = 1;

  for (let i = 0; result * primes[i] < limit; i++) {
    result *= primes[i];
  }
  return result;
}
```
