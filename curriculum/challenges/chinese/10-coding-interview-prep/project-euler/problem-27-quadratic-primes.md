---
id: 5900f3871000cf542c50fe9a
title: 问题27：二次素数
challengeType: 5
videoUrl: ''
dashedName: problem-27-quadratic-primes
---

# --description--

欧拉发现了显着的二次公式：$ n ^ 2 + n + 41 $事实证明，公式将为连续的整数值$ 0 \\ le n \\ le 39 $产生40个素数。但是，当$ n = 40时，40 ^ 2 + 40 + 41 = 40（40 + 1）+ 41 $可被41整除，当然$ n = 41时，41 ^ 2 + 41 + 41 $显然可以被整除41.发现了令人难以置信的公式$ n ^ 2 - 79n + 1601 $，它为连续值$ 0 \\ le n \\ le 79 $产生80个素数。系数-79和1601的乘积是-126479。考虑形式的二次方：

$ n ^ 2 + an + b $，其中$ | a | &lt;range $和$ | b | \\ le $ $其中$ | n | $是$ n $的模数/绝对值，例如$ | 11 | = 11 $和$ | -4 | = 4 $

找到系数的乘积，$ a $和$ b $，用于生成连续值$ n $的最大素数数的二次表达式，从$ n = 0 $开始。

# --hints--

`quadraticPrimes(200)`应返回-4925。

```js
assert(quadraticPrimes(200) == -4925);
```

`quadraticPrimes(500)`应返回-18901。

```js
assert(quadraticPrimes(500) == -18901);
```

`quadraticPrimes(800)`应返回-43835。

```js
assert(quadraticPrimes(800) == -43835);
```

`quadraticPrimes(1000)`应返回-59231。

```js
assert(quadraticPrimes(1000) == -59231);
```

# --seed--

## --seed-contents--

```js
function quadraticPrimes(range) {

  return range;
}

quadraticPrimes(1000);
```

# --solutions--

```js
// solution required
```
