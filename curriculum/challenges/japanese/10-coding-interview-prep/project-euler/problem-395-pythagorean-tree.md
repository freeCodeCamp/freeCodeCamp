---
id: 5900f4f71000cf542c51000a
title: '問題 395: ピタゴラスの木'
challengeType: 1
forumTopicId: 302060
dashedName: problem-395-pythagorean-tree
---

# --description--

ピタゴラスの木とは、以下の手順で作成されるフラクタル図形です。

最初に単位正方形を作ります。 次に、そのいずれかの辺を基点として選びます (アニメーションでは底辺が基点)。

1. 基点の反対側の辺に、直角三角形の斜辺を合わせるようにしてその三角形を付けます。三角形の辺長の比は 3-4-5 にします。 注意点として、三角形の短い方の辺が、基点に対して「右」側に来るようにする必要があります (アニメーション参照)。
2. 直角三角形の斜辺以外の各辺に、正方形の 1 辺を合わせるようにして正方形を付けます。
3. 三角形に接する辺を基点とみなして、上の手順を両方の正方形に対して繰り返します。

この作業を無限に繰り返して得られる図形がピタゴラスの木です。

<img class="img-responsive center-block" alt="手順が 8 回繰り返される様子を示すアニメーション" src="https://cdn.freecodecamp.org/curriculum/project-euler/pythagorean-tree.gif" style="background-color: white; padding: 10px;" />

ピタゴラスの木の最大の正方形に対して平行な辺を持ち、ピタゴラスの木を完全に囲むような長方形が、少なくとも 1 つの存在することを証明できます。

そのような外接矩形が持ち得る最小の面積を求め、四捨五入して小数第 10 位まで示しなさい。

# --hints--

`pythagoreanTree()` は `28.2453753155` を返す必要があります。

```js
assert.strictEqual(pythagoreanTree(), 28.2453753155);
```

# --seed--

## --seed-contents--

```js
function pythagoreanTree() {

  return true;
}

pythagoreanTree();
```

# --solutions--

```js
// solution required
```
