---
id: 5900f4521000cf542c50ff64
title: '問題 229: 平方数を使った 4 通りの表現'
challengeType: 1
forumTopicId: 301872
dashedName: problem-229-four-representations-using-squares
---

# --description--

3600 という数について考えます。 これは、次の式が成り立つ極めて特殊な数です。

$$\begin{align}   & 3600 = {48}^2 + {36}^2   \\\\
  & 3600 = {20}^2 + {2×40}^2 \\\\   & 3600 = {30}^2 + {3×30}^2 \\\\
  & 3600 = {45}^2 + {7×15}^2 \\\\ \end{align}$$

同様に、$88201 = {99}^2 + {280}^2 = {287}^2 + 2 × {54}^2 = {283}^2 + 3 × {52}^2 = {197}^2 + 7 × {84}^2$ です。

1747年にオイラーは、2 つの平方数の和として表せるのはどのような数字かを証明しました。 ここでは、次の 4 通りのいずれでも表せる数 $n$ に注目します。

$$\begin{align}   & n = {a_1}^2 + {b_1}^2  \\\\
  & n = {a_2}^2 + 2{b_2}^2 \\\\   & n = {a_3}^2 + 3{b_3}^2 \\\\
  & n = {a_7}^2 + 7{b_7}^2 \\\\ \end{align}$$

ここで、$a_k$ と $b_k$ は正の整数です。

${10}^7$ 以下でそのような数は 75373 個あります。

$2 × {10}^9$ 以下でそのような数はいくつありますか。

# --hints--

`representationsUsingSquares()` は `11325263` を返す必要があります。

```js
assert.strictEqual(representationsUsingSquares(), 11325263);
```

# --seed--

## --seed-contents--

```js
function representationsUsingSquares() {

  return true;
}

representationsUsingSquares();
```

# --solutions--

```js
// solution required
```
