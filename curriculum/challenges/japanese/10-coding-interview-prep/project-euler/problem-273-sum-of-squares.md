---
id: 5900f47e1000cf542c50ff90
title: '問題 273: 平方数の和'
challengeType: 1
forumTopicId: 301923
dashedName: problem-273-sum-of-squares
---

# --description--

式 $a^2 + b^2 = N$, $0 ≤ a ≤ b$ ($a$, $b$, $N$ は整数) について考えます。

$N = 65$ のとき、解は 2 つあります。

$a = 1, b = 8$ と、$a = 4, b = 7$ です。

$a^2 + b^2 = N$, $0 ≤ a ≤ b$ ($a$, $b$, $N$ は整数) のすべての解の $a$ 値の和を $S(N)$ とします。

したがって、$S(65) = 1 + 4 = 5$ です。

$4k + 1 &lt; 150$ のとき、$4k + 1$ で表される素数でのみ割り切れるすべての無平方数 $N$ について $\sum S(N)$ を求めなさい。

# --hints--

`sumOfSquares()` は `2032447591196869000` を返す必要があります。

```js
assert.strictEqual(sumOfSquares(), 2032447591196869000);
```

# --seed--

## --seed-contents--

```js
function sumOfSquares() {

  return true;
}

sumOfSquares();
```

# --solutions--

```js
// solution required
```
