---
id: 5900f4cb1000cf542c50ffdd
title: '問題 350: 最小の最大公約数と最大の最小公倍数を制約する'
challengeType: 1
forumTopicId: 302010
dashedName: problem-350-constraining-the-least-greatest-and-the-greatest-least
---

# --description--

長さ $n$ のリストとは $n$ 個の自然数の数列です。 例えば、(2, 4, 6), (2, 6, 4), (10, 6, 15, 6), (11) です。

リストの最大公約数 ($gcd$) とは、リスト内のすべての項を割り切る最大の自然数です。 例: $gcd(2, 6, 4) = 2$, $gcd(10, 6, 15, 6) = 1$, $gcd(11) = 11$

リストの最小公倍数 ($lcm$) とは、リスト内の各項によって割り切れる最小の自然数です。 例: $lcm(2, 6, 4) = 12$, $lcm(10, 6, 15, 6) = 30$, $lcm(11) = 11$

$gcd ≥ G$ かつ $lcm ≤ L$ を満たすサイズ $N$ のリストの個数を $f(G, L, N)$ とします。 例えば、次のようになります。

$$\begin{align}   & f(10, 100, 1) = 91 \\\\
  & f(10, 100, 2) = 327 \\\\   & f(10, 100, 3) = 1135 \\\\
  & f(10, 100, 1000)\bmod {101}^4 = 3\\,286\\,053 \end{align}$$

$f({10}^6, {10}^{12}, {10}^{18})\bmod {101}^4$ を求めなさい。

# --hints--

`leastGreatestAndGreatestLeast()` は `84664213` を返す必要があります。

```js
assert.strictEqual(leastGreatestAndGreatestLeast(), 84664213);
```

# --seed--

## --seed-contents--

```js
function leastGreatestAndGreatestLeast() {

  return true;
}

leastGreatestAndGreatestLeast();
```

# --solutions--

```js
// solution required
```
