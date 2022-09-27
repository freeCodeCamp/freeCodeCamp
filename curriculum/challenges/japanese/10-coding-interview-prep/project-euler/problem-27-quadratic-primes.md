---
id: 5900f3871000cf542c50fe9a
title: '問題 27: 二次素数'
challengeType: 1
forumTopicId: 301919
dashedName: problem-27-quadratic-primes
---

# --description--

オイラーは驚くべき二次式を発見しました。

<div style='margin-left: 4em;'>$n^2 + n + 41$</div>

この式は、連続する整数値 $0 \\le n \\le 39$ に対して 40 個の素数を導きます。 しかし $n = 40 のとき、40^2 + 40 + 41 = 40(40 + 1) + 41$ となり 41 で割り切れます。また当然ながら、$n = 41 のとき、41^2 + 41 + 41$ は明らかに 41 で割り切れます。

驚くべき数式 $n^2 - 79n + 1601$ が発見されました。これは、連続する値 $0 \\le n \\le 79$ に対して 80 個の素数を導きます。 係数 -79 と1601 の積は -126479 です。

次の二次式を考えます。

<div style='margin-left: 4em;'>
  $n^2 + an + b$ ここで、$|a| < range$ かつ $|b| \le range$<br>
 ここで、$|n|$ は $n$ の絶対値<br>
 例: $|11| = 11$, $|-4| = 4$<br>
</div>

$n = 0$ から始めて、連続する値 $n$ に対して素数を導いたときに素数が最多となるような、上の二次式の係数 $a$ と $b$ の積を求めなさい。

# --hints--

`quadraticPrimes(200)` は数値を返す必要があります。

```js
assert(typeof quadraticPrimes(200) === 'number');
```

`quadraticPrimes(200)` は -4925 を返す必要があります。

```js
assert(quadraticPrimes(200) == -4925);
```

`quadraticPrimes(500)` は -18901 を返す必要があります。

```js
assert(quadraticPrimes(500) == -18901);
```

`quadraticPrimes(800)` は -43835 を返す必要があります。

```js
assert(quadraticPrimes(800) == -43835);
```

`quadraticPrimes(1000)` は -59231 を返す必要があります。

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
