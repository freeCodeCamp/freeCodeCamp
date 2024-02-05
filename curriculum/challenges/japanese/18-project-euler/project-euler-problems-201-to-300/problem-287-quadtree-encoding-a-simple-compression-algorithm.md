---
id: 5900f48b1000cf542c50ff9e
title: '問題 287: 四分木符号化 (単純な圧縮アルゴリズム)'
challengeType: 1
forumTopicId: 301938
dashedName: problem-287-quadtree-encoding-a-simple-compression-algorithm
---

# --description--

四分木符号化により、$2^N×2^N$ の白黒画像をビット (0, 1) 列で表すことができます。 このビット列は、左から右へ次のように解釈されます。

- 最初のビットは $2^N×2^N$ の領域全体を表します。
- "0" は分割を意味します。
  - 現在の $2^n×2^n$ の領域は、寸法 $2^{n - 1}×2^{n - 1}$ の 4 つの部分領域に分割されます。
  - 次のビットには、左上、右上、左下、右下の部分領域の説明がこの順序で含まれています。
- "10" は、現在の領域が黒いピクセルのみを含んでいることを示します。
- "11" は、現在の領域が白いピクセルのみを含んでいることを示します。

次の 4×4 の画像について考えます (色付きのマークは分割可能な場所を示します)。

<img class="img-responsive center-block" alt="分割可能な場所が色付きマークで示されている 4x4 の画像" src="https://cdn.freecodecamp.org/curriculum/project-euler/quadtree-encoding-a-simple-compression-algorithm.gif" style="background-color: white; padding: 10px;" />

この画像は、例えば次のようにいくつかの数列で表すことができます。"<strong><span style="color: red">0</span></strong><strong><span style="color: blue">0</span></strong>10101010<strong><span style="color: green">0</span></strong>1011111011<strong><span style="color: orange">0</span></strong>10101010" (長さ 30)、または "<strong><span style="color: red">0</span></strong>10<strong><span style="color: green">0</span></strong>101111101110" (長さ 16、この画像での最小数列)

正の整数 $N$ に対し、次のように色が付く $2^N×2^N$ の画像を$D_N$ とします。

- 座標 $x = 0$, $y = 0$ のピクセルは左下のピクセルに対応します。
- ${(x - 2^{N - 1})}^2 + {(y - 2 ^{N - 1})}^2 = 2^{2N - 2}$ の場合、ピクセルは黒です。
- それ以外の場合、ピクセルは白です。

$D_{24} $ を表す最小の数列の長さを求めなさい。

# --hints--

`quadtreeEncoding()` は `313135496` を返す必要があります。

```js
assert.strictEqual(quadtreeEncoding(), 313135496);
```

# --seed--

## --seed-contents--

```js
function quadtreeEncoding() {

  return true;
}

quadtreeEncoding();
```

# --solutions--

```js
// solution required
```
