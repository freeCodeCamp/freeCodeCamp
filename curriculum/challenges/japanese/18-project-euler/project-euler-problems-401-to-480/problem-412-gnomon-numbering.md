---
id: 5900f5081000cf542c51001a
title: '問題 412: グノモンの番号付け'
challengeType: 1
forumTopicId: 302081
dashedName: problem-412-gnomon-numbering
---

# --description--

整数 $m$, $n$ ($0 ≤ n &lt; m$) について、$m×m$ の格子の右上から $n×n$ の格子を取り除いたものを $L(m, n)$ とします。

例えば、$L(5, 3)$ は下図のようになります。

<img class="img-responsive center-block" alt="5x5 格子の右上から 3x3 格子を取り除いたもの" src="https://cdn.freecodecamp.org/curriculum/project-euler/gnomon-numbering-1.png" style="background-color: white; padding: 10px;" />

すべてのマスの数字が下のマスと左のマスにある数字よりも小さくなるように、$L(m, n)$ の各マスに連続整数 1, 2, 3, ... を付けるとします。

下図は、$L(5, 3)$ に対する有効な番号付けの 2 例です。

<img class="img-responsive center-block" alt="L(5, 3) の有効な番号付け 2 例" src="https://cdn.freecodecamp.org/curriculum/project-euler/gnomon-numbering-2.png" style="background-color: white; padding: 10px;" />

$L(m, n)$ の有効な番号付けの個数を $LC(m, n)$ とします。 $LC(3, 0) = 42$, $LC(5, 3) = 250\\,250$, $LC(6, 3) = 406\\,029\\,023\\,400$, $LC(10, 5)\bmod 76\\,543\\,217 = 61\\,251\\,715$ であることを確認できます。

$LC(10\\,000, 5\\,000)\bmod 76\\,543\\,217$ を求めなさい。

# --hints--

`gnomonNumbering()` は `38788800` を返す必要があります。

```js
assert.strictEqual(gnomonNumbering(), 38788800);
```

# --seed--

## --seed-contents--

```js
function gnomonNumbering() {

  return true;
}

gnomonNumbering();
```

# --solutions--

```js
// solution required
```
