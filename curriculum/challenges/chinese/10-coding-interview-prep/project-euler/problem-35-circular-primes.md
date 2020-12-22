---
id: 5900f38f1000cf542c50fea2
title: 问题35：循环素数
challengeType: 5
videoUrl: ''
---

# --description--

这个数字197被称为循环素数，因为数字的所有旋转：197,971和719本身都是素数。在100：2,3,5,7,11,13,17,31,37,71,73,79和97之下有十三个这样的素数。在n下面有多少个圆形素数，而100 &lt;= n &lt; = 1000000？

# --hints--

`circularPrimes(100)`应该返回13。

```js
assert(circularPrimes(100) == 13);
```

`circularPrimes(100000)`应该返回43。

```js
assert(circularPrimes(100000) == 43);
```

`circularPrimes(250000)`应该返回45。

```js
assert(circularPrimes(250000) == 45);
```

`circularPrimes(500000)`应该返回49。

```js
assert(circularPrimes(500000) == 49);
```

`circularPrimes(750000)`应该返回49。

```js
assert(circularPrimes(750000) == 49);
```

`circularPrimes(1000000)`应该返回55。

```js
assert(circularPrimes(1000000) == 55);
```

# --solutions--

