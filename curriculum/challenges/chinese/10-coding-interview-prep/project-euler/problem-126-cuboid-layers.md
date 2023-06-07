---
id: 5900f3ea1000cf542c50fefd
title: 'Problem 126: Cuboid layers'
challengeType: 1
forumTopicId: 301753
dashedName: problem-126-cuboid-layers
---

# --description--

The minimum number of cubes to cover every visible face on a cuboid measuring 3 x 2 x 1 is twenty-two.

<img class="img-responsive center-block" alt="3x2x1 的长方体被 22 个 1x1x1 的立方体覆盖" src="https://cdn.freecodecamp.org/curriculum/project-euler/cuboid-layers.png" style="background-color: white; padding: 10px;" />

如果我们再添加第二层来覆盖现在这个体的每一个可见面，则需要 64 个立方体，第三层需要 78 个立方体，第四层需要 118 个。

而覆盖尺寸为 5 x 1 x 1 的长方体第一层同样也需要 22 个小立方体；类似的覆盖尺寸为 5 x 3 x 1，7 x 2 x 1，和 11 x 1 x 1 的第一层都需要 46 个立方体。

我们定义 $C(n)$ 为可以用 $n$ 个小立方体覆盖其某一层表面的长方体的数目。 则 $C(22) = 2$，$C(46) = 4$，$C(78) = 5$，而 $C(118) = 8$。

可以发现 154 是满足 $C(n) = 10$ 时 $n$ 的最小值。

求满足 $C(n) = 1000$ 时，$n$ 的最小值。

# --hints--

`cuboidLayers()` 应该返回 `18522`。

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
