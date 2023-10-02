---
id: 5900f4c11000cf542c50ffd3
title: '問題 341: ゴロムの自己記述的数列'
challengeType: 1
forumTopicId: 302000
dashedName: problem-341-golombs-self-describing-sequence
---

# --description--

ゴロムの自己記述的数列 ($G(n)$) は、数列内に $n$ がちょうど $G(n)$ 回現れるような、自然数の非減少数列です。 最初の数個の $n$ に対する $G(n)$ の値を次に示します。

$$\begin{array}{c}   n    & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 & 14 & 15 & \ldots \\\\
  G(n) & 1 & 2 & 2 & 3 & 3 & 4 & 4 & 4 & 5 & 5  &  5 &  6 &  6 &  6 &  6 & \ldots \end{array}$$

$G({10}^3) = 86$, $G({10}^6) = 6137$ が与えられます。

また、$1 ≤ n &lt; {10}^3$ のとき、$\sum G(n^3) = 153\\,506\\,976$ です。

$1 ≤ n &lt; {10}^6$ のとき、$\sum G(n^3)$ を求めなさい。

# --hints--

`golombsSequence()` は `56098610614277016` を返す必要があります。

```js
assert.strictEqual(golombsSequence(), 56098610614277016);
```

# --seed--

## --seed-contents--

```js
function golombsSequence() {

  return true;
}

golombsSequence();
```

# --solutions--

```js
// solution required
```
