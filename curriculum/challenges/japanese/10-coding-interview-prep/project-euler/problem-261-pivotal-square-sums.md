---
id: 5900f4711000cf542c50ff84
title: '問題 261: 平方ピボットの和'
challengeType: 1
forumTopicId: 301910
dashedName: problem-261-pivotal-square-sums
---

# --description--

正の整数 $k$ まで連続する ($m + 1$) 個の平方数の和が、($n + 1$) から連続する $m$ 個の平方数の和に等しくなるような、整数 $m > 0$ と 整数 $n ≥ k$ の対がある場合、すなわち次の式が成り立つ場合、$k$ を「平方ピボット」と呼ぶことにします。

$${(k - m)}^2 + \ldots + k^2 = {(n + 1)}^2 + \ldots + {(n + m)}^2$$

小さい平方ピボットをいくつか下に示します。

$$\begin{align}   & \mathbf{4}: 3^2 + \mathbf{4}^2 = 5^2 \\\\
  & \mathbf{21}: {20}^2 + \mathbf{21}^2 = {29}^2 \\\\   & \mathbf{24}: {21}^2 + {22}^2 + {23}^2 + \mathbf{24}^2 = {25}^2 + {26}^2 + {27}^2 \\\\
  & \mathbf{110}: {108}^2 + {109}^2 + \mathbf{110}^2 = {133}^2 + {134}^2 \\\\ \end{align}$$

${10}^{10}$ 以下の相異なる平方ピボットの総和を求めなさい。

# --hints--

`pivotalSquareSums()` は `238890850232021` を返す必要があります。

```js
assert.strictEqual(pivotalSquareSums(), 238890850232021);
```

# --seed--

## --seed-contents--

```js
function pivotalSquareSums() {

  return true;
}

pivotalSquareSums();
```

# --solutions--

```js
// solution required
```
