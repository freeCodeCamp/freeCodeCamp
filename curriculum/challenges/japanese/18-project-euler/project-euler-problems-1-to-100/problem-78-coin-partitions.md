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
// compute pentagonal numbers per generating function
const pentagonalNumbers = Array(251)
  .fill(0)
  .flatMap((_, i) => i ? [i * (3 * i - 1) / 2, i * (3 * i - 1) / 2 + i] : []);

function coinPartitions(divisor) {
  // helper data
  const signs = [1, 1, -1, -1];

  // compute partition counts until we find a multiple of divisor
  const partitions = Array(divisor + 1).fill(0);
  partitions[0] = 1;
  for (let i = 1; partitions[i - 1] > 0; i++) {
    // compute next partition count
    for (let j = 0; pentagonalNumbers[j] <= i; j++) {
      partitions[i] += partitions[i - pentagonalNumbers[j]] * signs[j % 4];
    }

    partitions[i] = partitions[i] % divisor;
    if (partitions[i] < 0) partitions[i] += divisor; // positive mod
    // return when found
    if (partitions[i] === 0) return i;
  }
}
```
