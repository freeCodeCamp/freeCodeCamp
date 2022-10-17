---
id: 5900f4911000cf542c50ffa3
title: '問題 292: ピタゴラス多角形'
challengeType: 1
forumTopicId: 301944
dashedName: problem-292-pythagorean-polygons
---

# --description--

次の性質をすべて備える凸多角形を「ピタゴラス多角形」と定義します。

- 少なくとも 3 つの頂点がある。
- どの 3 頂点も一直線上に並んでいない。
- 各頂点の座標が整数である。
- 各辺の長さが整数である。

与えられた整数 $n$ について、周長が $n$ 以下の相異なるピタゴラス多角形の個数を $P(n)$ とします。

ピタゴラス多角形は、平行移動で同一にならない限り相異なるものとみなされます。

$P(4) = 1$, $P(30) = 3655$, $P(60) = 891045$ が与えられます。

$P(120)$ を求めなさい。

# --hints--

`pythagoreanPolygons()` は `3600060866` を返す必要があります。

```js
assert.strictEqual(pythagoreanPolygons(), 3600060866);
```

# --seed--

## --seed-contents--

```js
function pythagoreanPolygons() {

  return true;
}

pythagoreanPolygons();
```

# --solutions--

```js
// solution required
```
