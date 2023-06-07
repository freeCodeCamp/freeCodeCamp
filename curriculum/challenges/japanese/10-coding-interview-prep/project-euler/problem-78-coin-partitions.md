---
id: 5900f3ba1000cf542c50fecd
title: '問題 78: 硬貨の分割'
challengeType: 1
forumTopicId: 302191
dashedName: problem-78-coin-partitions
---

# --description--

`n` 枚の硬貨を分ける方法が何通りあるかを、${p}(n)$ で表すことにします。 例えば、5 枚の硬貨はちょうど 7 通りの方法で分けることができるので、${p}(5) = 7$ となります。

<div style='text-align: center;'>

| 硬貨のまとまり    |
| ----------------- |
| OOOOO             |
| OOOO   O          |
| OOO   OO          |
| OOO   O   O       |
| OO   OO   O       |
| OO   O   O   O    |
| O   O   O   O   O |

</div><br>

${p}(n)$ が `divisor` で割り切れる場合の `n` の最小値を求めなさい。

# --hints--

`coinPartitions(7)` は数値を返す必要があります。

```js
assert(typeof coinPartitions(7) === 'number');
```

`coinPartitions(7)` は `5` を返す必要があります。

```js
assert.strictEqual(coinPartitions(7), 5);
```

`coinPartitions(10000)` は `599` を返す必要があります。

```js
assert.strictEqual(coinPartitions(10000), 599);
```

`coinPartitions(100000)` は `11224` を返す必要があります。

```js
assert.strictEqual(coinPartitions(100000), 11224);
```

`coinPartitions(1000000)` は `55374` を返す必要があります。

```js
assert.strictEqual(coinPartitions(1000000), 55374);
```

# --seed--

## --seed-contents--

```js
function coinPartitions(divisor) {

  return true;
}

coinPartitions(7);
```

# --solutions--

```js
function coinPartitions(divisor) {
  const partitions = [1];

  let n = 0;
  while (partitions[n] !== 0) {
    n++;
    partitions.push(0);

    let i = 0;
    let pentagonal = 1;
    while (pentagonal <= n) {
      const sign = i % 4 > 1 ? -1 : 1;
      partitions[n] += sign * partitions[n - pentagonal];
      partitions[n] = partitions[n] % divisor;

      i++;

      let k = Math.floor(i / 2) + 1;
      if (i % 2 !== 0) {
        k *= -1;
      }
      pentagonal = Math.floor((k * (3 * k - 1)) / 2);
    }
  }
  return n;
}
```
