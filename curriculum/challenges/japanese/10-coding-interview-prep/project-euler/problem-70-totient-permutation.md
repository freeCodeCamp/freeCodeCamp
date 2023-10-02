---
id: 5900f3b21000cf542c50fec5
title: '問題 70: トーティエント関数の置換'
challengeType: 1
forumTopicId: 302183
dashedName: problem-70-totient-permutation
---

# --description--

オイラーのトーティエント関数 ${\phi}(n)$ (別名: ファイ関数) は、`n` と互いに素な `n` 以下の正の数の個数を求めるために使用されます。 例えば 1, 2, 4, 5, 7, 8 はすべて 9 未満で、かつ 9 と互いに素なので、${\phi}(9) = 6$ と表されます。 数字 1 はすべての正の数に対して互いに素であると考えられるので、${\phi}(1) = 1$ です。

興味深いことに、${\phi}(87109) = 79180$ であり、87109 は 79180 の数字を入れ替えた数になっています。

1 &lt; `n` &lt; `limit` のとき、`n` の数字を入れ替えると${\phi}(n)$ になり、かつ、比率 $\displaystyle\frac{n}{{\phi}(n)}$ が最小となるような `n` の値を求めなさい。

# --hints--

`totientPermutation(10000)` は数値を返す必要があります。

```js
assert(typeof totientPermutation(10000) === 'number');
```

`totientPermutation(10000)` は `4435` を返す必要があります。

```js
assert.strictEqual(totientPermutation(10000), 4435);
```

`totientPermutation(100000)` は `75841` を返す必要があります。

```js
assert.strictEqual(totientPermutation(100000), 75841);
```

`totientPermutation(500000)` は `474883` を返す必要があります。

```js
assert.strictEqual(totientPermutation(500000), 474883);
```

`totientPermutation(10000000)` は `8319823` を返す必要があります。

```js
assert.strictEqual(totientPermutation(10000000), 8319823);
```

# --seed--

## --seed-contents--

```js
function totientPermutation(limit) {

  return true;
}

totientPermutation(10000);
```

# --solutions--

```js
function totientPermutation(limit) {
  function getSievePrimes(max) {
    const primes = [];
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;

    for (let i = 2; i < max; i += 2) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j < max; j += i) {
          primesMap[j] = false;
        }
      }
      if (i === 2) {
        i = 1;
      }
    }
    return primes;
  }

  function sortDigits(number) {
    return number.toString().split('').sort().join('');
  }

  function isPermutation(numberA, numberB) {
    return sortDigits(numberA) === sortDigits(numberB);
  }

  const MAX_PRIME = 4000;
  const primes = getSievePrimes(MAX_PRIME);

  let nValue = 1;
  let minRatio = Infinity;

  for (let i = 1; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      const num = primes[i] * primes[j];
      if (num > limit) {
        break;
      }

      const phi = (primes[i] - 1) * (primes[j] - 1);
      const ratio = num / phi;

      if (minRatio > ratio && isPermutation(num, phi)) {
        nValue = num;
        minRatio = ratio;
      }
    }
  }
  return nValue;
}
```
