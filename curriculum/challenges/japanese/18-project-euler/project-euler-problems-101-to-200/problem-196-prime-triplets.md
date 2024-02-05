---
id: 5900f4301000cf542c50ff42
title: '問題 196: 三つ子素数'
challengeType: 1
forumTopicId: 301834
dashedName: problem-196-prime-triplets
---

# --description--

正の整数をすべて使用して下図のように三角形を作ります。

$$\begin{array}{rrr}   &  1 \\\\
  &  \color{red}{2} &  \color{red}{3} \\\\   &  4 & \color{red}{5} &  6 \\\\
  &  \color{red}{7} &  8 &  9 & 10 \\\\   & \color{red}{11} & 12 & \color{red}{13} & 14 & 15  \\\\
  & 16 & \color{red}{17} & 18 & \color{red}{19} & 20 & 21 \\\\   & 22 & \color{red}{23} & 24 & 25 & 26 & 27 & 28 \\\\
  & \color{red}{29} & 30 & \color{red}{31} & 32 & 33 & 34 & 35 & 36 \\\\   & \color{red}{37} & 38 & 39 & 40 & \color{red}{41} & 42 & \color{red}{43} & 44 & 45 \\\\
  & 46 & \color{red}{47} & 48 & 49 & 50 & 51 & 52 & \color{red}{53} & 54 & 55 \\\\   & 56 & 57 & 58 & \color{red}{59} & 60 & \color{red}{61} & 62 & 63 & 64 & 65 & 66 \\\\
  & \cdots \end{array}$$

それぞれの正の整数は、三角形の中で最大 8 つの整数と隣接しています。

3 つの素数のいずれかが他の 2 つと三角形の中で隣接する場合、その 3 つの素数の組は三つ子素数と呼ばれます。

例えば、2 行目では 素数 2 と 3 が三つ子素数の要素です。

8 行目を見ると、三つ子素数の要素である 2 つの素数、すなわち 29 と 31 が含まれています。 9 行目を見ると、三つ子素数の要素である素数は 1 つだけあり、それは 37 です。

$n$ 行目にある、任意の三つ子素数の要素である素数の和を、$S(n)$ とします。 この場合、$S(8) = 60$, $S(9) = 37$ となります。

$S(10000) = 950007619$ が与えられます。

$S(5678027) + S(7208785)$ を求めなさい。

# --hints--

`primeTriplets()` は `322303240771079940` を返す必要があります。

```js
assert.strictEqual(primeTriplets(), 322303240771079940);
```

# --seed--

## --seed-contents--

```js
function primeTriplets() {

  return true;
}

primeTriplets();
```

# --solutions--

```js
// solution required
```
