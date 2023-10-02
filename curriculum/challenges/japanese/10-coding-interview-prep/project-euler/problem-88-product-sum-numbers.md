---
id: 5900f3c51000cf542c50fed6
title: '問題 88: 積和数'
challengeType: 1
forumTopicId: 302203
dashedName: problem-88-product-sum-numbers
---

# --description--

2 つ以上の自然数 $\\{a_1, a_2, \ldots , a_k\\}$ からなる与えられた集合の和かつ積として表せる自然数 `N` は、積和数と呼ばれます。すなわち、$N = a_1 + a_2 + \cdots + a_k = a_1 × a_2 × \cdots × a_k$ です。

例えば、6 = 1 + 2 + 3 = 1 × 2 × 3 です。

大きさが `k` である与えられた集合に対して、この性質を持つ最小の N を「最小積和数」と呼ぶことにします。 大きさ `k` = 2, 3, 4, 5, 6 の集合に対する最小積和数は次のとおりです。

<div style='margin-left: 4em;'>
  <var>k</var>=2: 4 = 2 × 2 = 2 + 2<br>
  <var>k</var>=3: 6 = 1 × 2 × 3 = 1 + 2 + 3<br>
  <var>k</var>=4: 8 = 1 × 1 × 2 × 4 = 1 + 1 + 2 + 4<br>
  <var>k</var>=5: 8 = 1 × 1 × 2 × 2 × 2  = 1 + 1 + 2 + 2 + 2<br>
  <var>k</var>=6: 12 = 1 × 1 × 1 × 1 × 2 × 6 = 1 + 1 + 1 + 1 + 2 + 6
</div><br>

したがって、2 ≤ `k` ≤ 6 のとき、すべての最小積和数の和は 4 + 6 + 8 + 12 = 30 となりますが、`8` が和の中で一度だけカウントされることに注意してください。

実際、2 ≤ `k` ≤ 12 の場合の最少積和数の完全集合は $\\{4, 6, 8, 12, 15, 16\\}$ で、その和は `61` です。

2 ≤ `k` ≤ `limit` のとき、最小積和数の総和を求めなさい。

# --hints--

`productSumNumbers(6)` は数値を返す必要があります。

```js
assert(typeof productSumNumbers(6) === 'number');
```

`productSumNumbers(6)` は `30` を返す必要があります。

```js
assert.strictEqual(productSumNumbers(6), 30);
```

`productSumNumbers(12)` は `61` を返す必要があります。

```js
assert.strictEqual(productSumNumbers(12), 61);
```

`productSumNumbers(300)` は `12686` を返す必要があります。

```js
assert.strictEqual(productSumNumbers(300), 12686);
```

`productSumNumbers(6000)` は `2125990` を返す必要があります。

```js
assert.strictEqual(productSumNumbers(6000), 2125990);
```

`productSumNumbers(12000)` は `7587457` を返す必要があります。

```js
assert.strictEqual(productSumNumbers(12000), 7587457);
```

# --seed--

## --seed-contents--

```js
function productSumNumbers(limit) {

  return true;
}

productSumNumbers(6);
```

# --solutions--

```js
function productSumNumbers(limit) {
  function getProductSums(curProduct, curSum, factorsCount, start) {
    const k = curProduct - curSum + factorsCount;
    if (k <= limit) {
      if (curProduct < minimalProductSums[k]) {
        minimalProductSums[k] = curProduct;
      }
      for (let i = start; i < Math.floor((limit / curProduct) * 2) + 1; i++) {
        getProductSums(curProduct * i, curSum + i, factorsCount + 1, i);
      }
    }
  }

  const minimalProductSums = new Array(limit + 1).fill(2 * limit);
  getProductSums(1, 1, 1, 2);

  const uniqueProductSums = [...new Set(minimalProductSums.slice(2))];

  let sum = 0;
  for (let i = 0; i < uniqueProductSums.length; i++) {
    sum += uniqueProductSums[i];
  }

  return sum;
}
```
