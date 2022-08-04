---
id: 5900f3b41000cf542c50fec7
title: '問題 72: 分数を数え上げる'
challengeType: 1
forumTopicId: 302185
dashedName: problem-72-counting-fractions
---

# --description--

`n` と `d` を正の整数として、分数 $\frac{n}{d}$ を考えます。 `n` &lt; `d` かつ最大公約数 ${HCF}(n, d) = 1$ の場合、この分数は既約真分数と呼ばれます。

`d` ≤ 8 のとき、既約真分数を大きさに基づいて昇順で並べると次のようになります。

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \frac{3}{8}, \frac{2}{5}, \frac{3}{7}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

この集合に `21` 個の要素があることが分かります。

`d` ≤ `limit` のとき、既約真分数の集合に含まれる要素はいくつありますか。

# --hints--

`countingFractions(8)` は数値を返す必要があります。

```js
assert(typeof countingFractions(8) === 'number');
```

`countingFractions(8)` は `21` を返す必要があります。

```js
assert.strictEqual(countingFractions(8), 21);
```

`countingFractions(20000)` は `121590395` を返す必要があります。

```js
assert.strictEqual(countingFractions(20000), 121590395);
```

`countingFractions(500000)` は `75991039675` を返す必要があります。

```js
assert.strictEqual(countingFractions(500000), 75991039675);
```

`countingFractions(1000000)` は `303963552391` を返す必要があります。

```js
assert.strictEqual(countingFractions(1000000), 303963552391);
```

# --seed--

## --seed-contents--

```js
function countingFractions(limit) {

  return true;
}

countingFractions(8);
```

# --solutions--

```js
function countingFractions(limit) {
  const phi = {};
  let count = 0;

  for (let i = 2; i <= limit; i++) {
    if (!phi[i]) {
      phi[i] = i;
    }
    if (phi[i] === i) {
      for (let j = i; j <= limit; j += i) {
        if (!phi[j]) {
          phi[j] = j;
        }
        phi[j] = (phi[j] / i) * (i - 1);
      }
    }
    count += phi[i];
  }

  return count;
}
```
