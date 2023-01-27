---
id: 5900f4291000cf542c50ff3c
title: '問題 189: 三角格子を 3 色で塗る'
challengeType: 1
forumTopicId: 301825
dashedName: problem-189-tri-colouring-a-triangular-grid
---

# --description--

下の 64 個の三角形の構成について考えます。

<img class="img-responsive center-block" alt="64 個の三角形を並べて作られた、辺長 8 の大きな三角形" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-1.gif" style="background-color: white; padding: 10px;" />

隣接する三角形が同じ色にならないように、それぞれの三角形の中を赤、緑、青のいずれかの色で塗ります。 このような色の塗り方を、「有効な塗り方」と呼ぶことにします。 ここでは、辺を共有している三角形を「隣接する三角形」と呼びます。 注: 頂点のみを共有している場合は「隣接する三角形」ではありません。

例えば、下図は上の三角形の有効な塗り方です。

<img class="img-responsive center-block" alt="64 個の三角形からなる色付き格子" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-2.gif" style="background-color: white; padding: 10px;" />

C の回転または反転によって得られる塗り方 C' は、C と同一でない限り C とは異なるものとみなされます。

上の構成の場合、相異なる有効な塗り方は何通りありますか。

# --hints--

`triangularGridColoring()` は `10834893628237824` を返す必要があります。

```js
assert.strictEqual(triangularGridColoring(), 10834893628237824);
```

# --seed--

## --seed-contents--

```js
function triangularGridColoring() {

  return true;
}

triangularGridColoring();
```

# --solutions--

```js
// solution required
```
