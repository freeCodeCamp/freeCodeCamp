---
id: 5900f4431000cf542c50ff56
title: '問題 215: 伝播亀裂が生じない壁'
challengeType: 1
forumTopicId: 301857
dashedName: problem-215-crack-free-walls
---

# --description--

2 x1 と 3 x 1 (横 x 縦) のレンガで壁を作る問題です。強度を高めるため、横方向に隣接するレンガ間の隙間がすぐ上や下の段にある隙間とつながらないようにして「伝播亀裂」を防ぎます。

例えば、下図の 9 × 3 の壁は、赤で示されている伝播亀裂があるため許容されません。

<img class="img-responsive center-block" alt="9 x 3 の壁において、横方向に隣接するレンガ間の隙間が上段の隙間とつながっている" src="https://cdn.freecodecamp.org/curriculum/project-euler/crack-free-walls.gif" style="background-color: white; padding: 10px;" />

伝播亀裂が生じない 9 × 3 の壁を作る方法は 8 通りあります。これを $W(9,3) = 8$ と表すことにします。

$W(32,10)$ を求めなさい。

# --hints--

`crackFreeWalls()` は `806844323190414` を返す必要があります。

```js
assert.strictEqual(crackFreeWalls(), 806844323190414);
```

# --seed--

## --seed-contents--

```js
function crackFreeWalls() {

  return true;
}

crackFreeWalls();
```

# --solutions--

```js
// solution required
```
