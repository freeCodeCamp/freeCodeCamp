---
id: 5900f5311000cf542c510042
title: '問題 451: モジュラ逆数'
challengeType: 1
forumTopicId: 302124
dashedName: problem-451-modular-inverses
---

# --description--

数 15 について考えます。

15 と互いに素である 15 未満の正の数は 1, 2, 4, 7, 8, 11, 13, 14 の 8 つです。

それらの数の 15 を法とするモジュラ逆数は、1, 8, 4, 13, 2, 11, 7, 14 です。理由は次のとおりです。

$$\begin{align}   & 1  \times 1\bmod 15 = 1 \\\\
  & 2  \times 8  = 16\bmod 15 = 1 \\\\   & 4  \times 4  = 16\bmod 15 = 1 \\\\
  & 7  \times 13 = 91\bmod 15 = 1 \\\\   & 11 \times 11 = 121\bmod 15 = 1 \\\\
  & 14 \times 14 = 196\bmod 15 = 1 \end{align}$$

$m$ の $n$ を法とするモジュラ逆数が $m$ 自体に等しくなるような、$n - 1$ 未満の最大の正の数 $m$ を $I(n)$ とします。

したがって、$I(15) = 11$ です。

また、$I(100) = 51$ および $I(7) = 1$ です。

$3 ≤ n ≤ 2 \times {10}^7$のとき、$\sum I(n)$ を求めなさい。

# --hints--

`modularInverses()` は `153651073760956` を返す必要があります。

```js
assert.strictEqual(modularInverses(), 153651073760956);
```

# --seed--

## --seed-contents--

```js
function modularInverses() {

  return true;
}

modularInverses();
```

# --solutions--

```js
// solution required
```
