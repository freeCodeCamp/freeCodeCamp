---
id: 5900f3ea1000cf542c50fefd
title: 'Problem 126: Cuboid layers'
challengeType: 1
forumTopicId: 301753
dashedName: problem-126-cuboid-layers
---

# --description--

The minimum number of cubes to cover every visible face on a cuboid measuring 3 x 2 x 1 is twenty-two.

<img class="img-responsive center-block" alt="3x2x1 的長方體被 22 個 1x1x1 的立方體覆蓋" src="https://cdn.freecodecamp.org/curriculum/project-euler/cuboid-layers.png" style="background-color: white; padding: 10px;" />

如果我們再添加第二層來覆蓋現在這個體的每一個可見面，則需要 64 個立方體，第三層需要 78 個立方體，第四層需要 118 個。

而覆蓋尺寸爲 5 x 1 x 1 的長方體第一層同樣也需要 22 個小立方體；類似的覆蓋尺寸爲 5 x 3 x 1，7 x 2 x 1，和 11 x 1 x 1 的第一層都需要 46 個立方體。

我們定義 $C(n)$ 爲可以用 $n$ 個小立方體覆蓋其某一層表面的長方體的數目。 則 $C(22) = 2$，$C(46) = 4$，$C(78) = 5$，而 $C(118) = 8$。

可以發現 154 是滿足 $C(n) = 10$ 時 $n$ 的最小值。

求滿足 $C(n) = 1000$ 時，$n$ 的最小值。

# --hints--

`cuboidLayers()` 應該返回 `18522`。

```js
assert.strictEqual(cuboidLayers(), 18522);
```

# --seed--

## --seed-contents--

```js
function cuboidLayers() {

  return true;
}

cuboidLayers();
```

# --solutions--

```js
// solution required
```
