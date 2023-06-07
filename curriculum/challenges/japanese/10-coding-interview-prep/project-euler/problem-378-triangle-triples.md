---
id: 5900f4e61000cf542c50fff9
title: '問題 378: 三角数の三つ組数'
challengeType: 1
forumTopicId: 302040
dashedName: problem-378-triangle-triples
---

# --description--

$T(n)$ を $n$ 番目の三角数とします。すなわち、$T(n) = \frac{n(n + 1)}{2}$ です。

$dT(n)$ を $T(n)$ の約数の個数とします。 例えば、$T(7) = 28$, $dT(7) = 6$ です。

$1 ≤ i &lt; j &lt; k ≤ n$, $dT(i) > dT(j) > dT(k)$ を満たす三つ組み数 ($i$, $j$, $k$) を $Tr(n)$ とします。 $Tr(20) = 14$, $Tr(100) = 5\\,772$, $Tr(1000) = 11\\,174\\,776$ となります。

$Tr(60\\,000\\,000)$ を求めなさい。 下位 18 桁を答えること。

# --hints--

`triangleTriples()` は `147534623725724700` を返す必要があります。

```js
assert.strictEqual(triangleTriples(), 147534623725724700);
```

# --seed--

## --seed-contents--

```js
function triangleTriples() {

  return true;
}

triangleTriples();
```

# --solutions--

```js
// solution required
```
