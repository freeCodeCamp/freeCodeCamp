---
id: 5900f51d1000cf542c51002f
title: '問題 433: ユークリッドの互除法のステップ数'
challengeType: 1
forumTopicId: 302104
dashedName: problem-433-steps-in-euclids-algorithm
---

# --description--

$x_0$ と $y_0$ の最大公約数をユークリッドの互除法によって決定するために必要なステップ数を、$E(x_0, y_0)$ とします。 より形式的に表すと、次のようになります。

$$\begin{align}   & x_1 = y_0, y_1 = x_0\bmod y_0 \\\\
  & x_n = y_{n - 1}, y_n = x_{n - 1}\bmod y_{n - 1} \end{align}$$

$E(x_0, y_0)$ は $y_n = 0$ となるような最小の $n$ です。

$E(1, 1) = 1$, $E(10, 6) = 3$, $E(6, 10) = 4$ が与えられます。

$1 ≤ x$, $y ≤ N$ のとき、$E(x, y)$ の和を $S(N)$ と定義します。

$S(1) = 1$, $S(10) = 221$, $S(100) = 39\\,826$ が与えられます。

$S(5 \times {10}^6)$ を求めなさい。

# --hints--

`stepsInEuclidsAlgorithm()` は `326624372659664` を返す必要があります。

```js
assert.strictEqual(stepsInEuclidsAlgorithm(), 326624372659664);
```

# --seed--

## --seed-contents--

```js
function stepsInEuclidsAlgorithm() {

  return true;
}

stepsInEuclidsAlgorithm();
```

# --solutions--

```js
// solution required
```
