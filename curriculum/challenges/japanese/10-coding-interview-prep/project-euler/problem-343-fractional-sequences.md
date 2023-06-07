---
id: 5900f4c41000cf542c50ffd6
title: '問題 343: 分数数列'
challengeType: 1
forumTopicId: 302002
dashedName: problem-343-fractional-sequences
---

# --description--

任意の正の整数 $k$ について、分数 $\frac{x_i}{y_i}$ の有限数列 $a_i$ は次のように定義されます。

- $a_1 = \displaystyle\frac{1}{k}$
- $a_i = \displaystyle\frac{(x_{i - 1} + 1)}{(y_{i - 1} - 1)}$ ($i > 1$ のときは約分)

$a_i$ が整数 $n$に達すると数列は止まります。 (すなわち、$y_i = 1$ になったとき)

$f(k) = n$ と定義します。

例えば、$k = 20$ のときは次のようになります。

$$\frac{1}{20} → \frac{2}{19} → \frac{3}{18} = \frac{1}{6} → \frac{2}{5} → \frac{3}{4} → \frac{4}{3} → \frac{5}{2} → \frac{6}{1} = 6$$

したがって、$f(20) = 6$ です。

また、$1 ≤ k ≤ 100$ のとき、$f(1) = 1$, $f(2) = 2$, $f(3) = 1$, $\sum f(k^3) = 118\\,937$ です。

$1 ≤ k ≤ 2 × {10}^6$ のとき、$\sum f(k^3)$ を求めなさい。

# --hints--

`fractionalSequences()` は `269533451410884200` を返す必要があります。

```js
assert.strictEqual(fractionalSequences(), 269533451410884200);
```

# --seed--

## --seed-contents--

```js
function fractionalSequences() {

  return true;
}

fractionalSequences();
```

# --solutions--

```js
// solution required
```
