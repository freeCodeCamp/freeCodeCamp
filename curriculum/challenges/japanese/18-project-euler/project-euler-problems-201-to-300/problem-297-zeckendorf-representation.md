---
id: 5900f4951000cf542c50ffa8
title: '問題 297: ゼッケンドルフ表現'
challengeType: 1
forumTopicId: 301949
dashedName: problem-297-zeckendorf-representation
---

# --description--

フィボナッチ数列の新しい項はそれぞれ、前の 2 項を足すことによって得られます。

1 と 2 から始まる最初の 10 項は 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 です。

すべての正の整数は、フィボナッチ数列の非連続項の和として一意に表すことができます。 例えば、100 = 3 + 8 + 89です。

このような和は、数のゼッケンドルフ表現と呼ばれます。

任意の整数 $n>0$ について、$n$ のゼッケンドルフ表現における項数を $z(n)$ とします。

すなわち、$z(5) = 1$, $z(14) = 2$, $z(100) = 3$ などです。

また、$0 &lt; &lt; {10}^6$ のとき、$\sum z(n) = 7\\,894\\,453$ です。

$0 &lt; n &lt; {10}^{17}$ のとき、$\sum z(n)$ を求めなさい。

# --hints--

`zeckendorfRepresentation()` は `2252639041804718000` を返す必要があります。

```js
assert.strictEqual(zeckendorfRepresentation(), 2252639041804718000);
```

# --seed--

## --seed-contents--

```js
function zeckendorfRepresentation() {

  return true;
}

zeckendorfRepresentation();
```

# --solutions--

```js
// solution required
```
