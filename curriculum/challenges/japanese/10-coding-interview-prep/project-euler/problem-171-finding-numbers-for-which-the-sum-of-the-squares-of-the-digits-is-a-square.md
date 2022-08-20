---
id: 5900f4181000cf542c50ff2a
title: >-
  問題 171: 各位の平方和が平方数となる数を求める
challengeType: 1
forumTopicId: 301806
dashedName: >-
  problem-171-finding-numbers-for-which-the-sum-of-the-squares-of-the-digits-is-a-square
---

# --description--

正の整数 $n$ について、$n$ の各位 (10 進数) の平方和を $f(n)$ とします。下に例を示します。

$$\begin{align}   & f(3) = 3^2 = 9 \\\\
  & f(25) = 2^2 + 5^2 = 4 + 25 = 29 \\\\   & f(442) = 4^2 + 4^2 + 2^2 = 16 + 16 + 4 = 36 \\\\
\end{align}$$

$0 &lt; n &lt; {10}^{20}$ のとき、$f(n)$ が完全平方数になるような $n$ の総和の下位 9 桁を求めなさい。

# --hints--

`lastDigitsSumOfPerfectSquare()` は `142989277` を返す必要があります。

```js
assert.strictEqual(lastDigitsSumOfPerfectSquare(), 142989277);
```

# --seed--

## --seed-contents--

```js
function lastDigitsSumOfPerfectSquare() {

  return true;
}

lastDigitsSumOfPerfectSquare();
```

# --solutions--

```js
// solution required
```
