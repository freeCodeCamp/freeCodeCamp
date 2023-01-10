---
id: 5900f40f1000cf542c50ff22
title: '問題 163: 斜交平行三角形'
challengeType: 1
forumTopicId: 301797
dashedName: problem-163-cross-hatched-triangles
---

# --description--

各頂点から対辺の中点に線を引いた正三角形を考えます。下図の左側は、大きさ 1 の三角形の例です。

<img class="img-responsive center-block" alt="大きさ 1 と大きさ 2 の三角形" src="https://cdn.freecodecamp.org/curriculum/project-euler/cross-hatched-triangles.gif" style="background-color: white; padding: 10px;" />

この三角形の中に、形状、大きさ、方向、位置のいずれかが異なる 16 個の三角形を見つけることができます。 大きさ 1 の三角形をブロックとして使用して、より大きな三角形を作ることができます。大きさ 2 の三角形の例を上図の右側に示しています。 大きさ 2 の三角形の中に、形状、大きさ、方向、位置のいずれかが異なる 104 個の三角形を見つけることができます。

大きさ 2 の三角形に、大きさ 1 の三角ブロックが 4 つ含まれていることが分かります。 大きさ 3 の三角形には、大きさ 1 の三角ブロックが 9 つ含まれるはずです。したがって、大きさ $n$ の三角形には、大きさ 1 の三角ブロックが $n^2$ 個含まれるでしょう。

大きさ $n$ の三角形に含まれる三角形の数を $T(n)$ とすると、次のようになります。

$$\begin{align}   & T(1) = 16 \\\\
  & T(2) = 104 \end{align}$$

$T(36)$ を求めなさい。

# --hints--

`crossHatchedTriangles()` は `343047` を返す必要があります。

```js
assert.strictEqual(crossHatchedTriangles(), 343047);
```

# --seed--

## --seed-contents--

```js
function crossHatchedTriangles() {

  return true;
}

crossHatchedTriangles();
```

# --solutions--

```js
// solution required
```
