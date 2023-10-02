---
id: 5900f4201000cf542c50ff33
title: '問題 180: 3 つの変数を持つ関数の有理数の零点'
challengeType: 1
forumTopicId: 301816
dashedName: problem-180-rational-zeros-of-a-function-of-three-variables
---

# --description--

任意の整数 $n$ について、次の 3 つの関数を考えます。

$$\begin{align}   & f_{1,n}(x,y,z) = x^{n + 1} + y^{n + 1} − z^{n + 1}\\\\
  & f_{2,n}(x,y,z) = (xy + yz + zx) \times (x^{n - 1} + y^{n - 1} − z^{n - 1})\\\\ & f_{3,n}(x,y,z) = xyz \times (x^{n - 2} + y^{n - 2} − z^{n - 2}) \end{align}$$

これらを合体させたものを次のように定義します。

$$\begin{align} & f_n(x,y,z) = f_{1,n}(x,y,z) + f_{2,n}(x,y,z) − f_{3,n}(x,y,z) \end{align}$$

$x$, $y$, $z$ がいずれも $\frac{a}{b}$ ($0 &lt; a &lt; b ≤ k$) で表される有理数であり、かつ、$f_n(x,y,z) = 0$ となる整数 $n$が (少なくとも 1 つ) 存在するとき、$(x,y,z)$ を「位数 $k$ の黄金の三つ組数」と呼ぶことにします。

$s(x,y,z) = x + y + z$ と定義します。

位数 35 の黄金の三つ組数のすべてについて、相異なる $s(x,y,z)$ の総和 を $t = \frac{u}{v}$ とします。 $s(x,y,z)$ と $t$ はすべて既約形式でなければなりません。

$u + v$ を求めなさい。

# --hints--

`rationalZeros()` は `285196020571078980` を返す必要があります。

```js
assert.strictEqual(rationalZeros(), 285196020571078980);
```

# --seed--

## --seed-contents--

```js
function rationalZeros() {

  return true;
}

rationalZeros();
```

# --solutions--

```js
// solution required
```
