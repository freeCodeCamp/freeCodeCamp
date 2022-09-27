---
id: 5900f4071000cf542c50ff19
title: '問題 154: パスカルの三角錐を探索する'
challengeType: 1
forumTopicId: 301785
dashedName: problem-154-exploring-pascals-pyramid
---

# --description--

それぞれの球がすぐ下の層の 3 つの球の上に乗っているような構造を繰り返し、三角錐を作ります。

<img class="img-responsive center-block" alt="球が 4 段に積まれた三角錐" src="https://cdn.freecodecamp.org/curriculum/project-euler/exploring-pascals-pyramid.png" style="background-color: white; padding: 10px;" />

次に、頂点から各位置への経路の数を計算します。経路は頂点から始まり、現在の位置のすぐ下にある 3 つの球のいずれかに下がっていきます。 したがって、ある位置に到達する経路の数は、その位置の上にある数字の和です (位置によって異なりますが、1 つの位置の上に最大 3 つの数字があります)。

その結果として作られるのがパスカルの三角錐であり、各段 n にある数字は三項展開 ${(x + y + z)}^n$ の係数です。

${(x + y + z)}^{200000}$ の展開における係数のうち、${10}^{12} $ の倍数はいくつありますか。

# --hints--

`pascalsPyramid()` は `479742450` を返す必要があります。

```js
assert.strictEqual(pascalsPyramid(), 479742450);
```

# --seed--

## --seed-contents--

```js
function pascalsPyramid() {

  return true;
}

pascalsPyramid();
```

# --solutions--

```js
// solution required
```
