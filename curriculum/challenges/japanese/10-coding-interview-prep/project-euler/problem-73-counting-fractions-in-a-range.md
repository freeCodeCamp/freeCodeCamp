---
id: 5900f3b61000cf542c50fec8
title: '問題 73: 範囲内にある分数を数え上げる'
challengeType: 1
forumTopicId: 302186
dashedName: problem-73-counting-fractions-in-a-range
---

# --description--

`n` と `d` を正の整数として、分数 $\frac{n}{d}$ を考えます。 `n` &lt; `d` かつ最大公約数 ${HCF}(n, d) = 1$ である場合、この分数は既約真分数と呼ばれます。

`d` ≤ 8 のとき、既約真分数を大きさに基づいて昇順で並べると次のようになります。

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \mathbf{\frac{3}{8}, \frac{2}{5}, \frac{3}{7}}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

$\frac{1}{3}$ と $\frac{1}{2}$ の間に分数が `3` つあることが分かります。

`d` ≤ `limit` のとき、ソートされた既約真分数の集合において $\frac{1}{3}$ と $\frac{1}{2}$ の間に分数がいくつありますか。

# --hints--

`countingFractionsInARange(8)` は数値を返す必要があります。

```js
assert(typeof countingFractionsInARange(8) === 'number');
```

`countingFractionsInARange(8)` は `3` を返す必要があります。

```js
assert.strictEqual(countingFractionsInARange(8), 3);
```

`countingFractionsInARange(1000)` は `50695` を返す必要があります。

```js
assert.strictEqual(countingFractionsInARange(1000), 50695);
```

`countingFractionsInARange(6000)` は `1823861` を返す必要があります。

```js
assert.strictEqual(countingFractionsInARange(6000), 1823861);
```

`countingFractionsInARange(12000)` は `7295372` を返す必要があります。

```js
assert.strictEqual(countingFractionsInARange(12000), 7295372);
```

# --seed--

## --seed-contents--

```js
function countingFractionsInARange(limit) {

  return true;
}

countingFractionsInARange(8);
```

# --solutions--

```js
function countingFractionsInARange(limit) {
  let result = 0;
  const stack = [[3, 2]];
  while (stack.length > 0) {
    const [startDenominator, endDenominator] = stack.pop();
    const curDenominator = startDenominator + endDenominator;
    if (curDenominator <= limit) {
      result++;
      stack.push([startDenominator, curDenominator]);
      stack.push([curDenominator, endDenominator]);
    }
  }
  return result;
}
```
