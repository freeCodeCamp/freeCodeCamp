---
id: 5900f3b31000cf542c50fec6
title: '問題 71: 順序分数'
challengeType: 1
forumTopicId: 302184
dashedName: problem-71-ordered-fractions
---

# --description--

`n` と `d` を正の整数として、分数 $\frac{n}{d}$ を考えます。 `n` &lt; `d` かつ最大公約数 ${{HCF}(n, d)} = 1$ である場合、この分数は既約真分数と呼ばれます。

`d` ≤ 8 のとき、既約真分数を大きさに基づいて昇順で並べると次のようになります。

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \frac{3}{8}, \frac{\textbf2}{\textbf5}, \frac{3}{7}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

$\frac{2}{5}$ が $\frac{3}{7} $のすぐ左の分数であることが分かります。

`d` ≤ `limit` のとき、既約真分数を大きさの昇順に並べると $\frac{3}{7}$ のすぐ左にある分数の分子を求めなさい。

# --hints--

`orderedFractions(8)` は数値を返す必要があります。

```js
assert(typeof orderedFractions(8) === 'number');
```

`orderedFractions(8)` は `2` を返す必要があります。

```js
assert.strictEqual(orderedFractions(8), 2);
```

`orderedFractions(10)` は `2` を返す必要があります。

```js
assert.strictEqual(orderedFractions(10), 2);
```

`orderedFractions(9994)` は `4283` を返す必要があります。

```js
assert.strictEqual(orderedFractions(9994), 4283);
```

`orderedFractions(500000)` は `214283` を返す必要があります。

```js
assert.strictEqual(orderedFractions(500000), 214283);
```

`orderedFractions(1000000)` は `428570` を返す必要があります。

```js
assert.strictEqual(orderedFractions(1000000), 428570);
```

# --seed--

## --seed-contents--

```js
function orderedFractions(limit) {

  return true;
}

orderedFractions(8);
```

# --solutions--

```js
function orderedFractions(limit) {
  const fractions = [];
  const fractionValues = {};
  const highBoundary = 3 / 7;
  let lowBoundary = 2 / 7;

  for (let denominator = limit; denominator > 2; denominator--) {
    let numerator = Math.floor((3 * denominator - 1) / 7);
    let value = numerator / denominator;
    if (value > highBoundary || value < lowBoundary) {
      continue;
    }
    fractionValues[value] = [numerator, denominator];
    fractions.push(value);
    lowBoundary = value;
  }

  fractions.sort();
  return fractionValues[fractions[fractions.length - 1]][0];
}
```
