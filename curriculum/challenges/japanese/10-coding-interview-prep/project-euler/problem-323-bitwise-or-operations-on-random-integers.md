---
id: 5900f4b01000cf542c50ffc2
title: '問題 323: 乱数整数のビット論理和演算'
challengeType: 5
forumTopicId: 301980
dashedName: problem-323-bitwise-or-operations-on-random-integers
---

# --description--

$y_0, y_1, y_2, \ldots$ を、符号なしの 32 ビット整数の数列とします

(つまり、$0 ≤ y_i &lt; 2^{32}$ であり、すべての値が等しく現れ得ます)。

数列 $x_i$ について、次の反復が与えられます。

- $x_0 = 0$ かつ
- $x_i = x_{i - 1} \mathbf{|} y_{i - 1}$ ($i > 0$) ($\mathbf{|}$ はビット論理和演算子)

すべての $i ≥ N$ について、$x_i = 2^{32} - 1$ (すべてが 1 であるビットパターン) となるような添え字 $N$ が最終的に存在することが分かります。

$N$ の期待値を求めなさい。 回答は、四捨五入して小数第 10 位まで示すこと。

# --hints--

`bitwiseOrOnRandomIntegers()` は `6.3551758451` を返す必要があります。

```js
assert.strictEqual(bitwiseOrOnRandomIntegers(), 6.3551758451);
```

# --seed--

## --seed-contents--

```js
function bitwiseOrOnRandomIntegers() {

  return true;
}

bitwiseOrOnRandomIntegers();
```

# --solutions--

```js
// solution required
```
